use LWP::UserAgent;
use LWP::ConnCache;
use HTTP::Request;
use File::Basename;
use JSON;
use Storable;

## Create a global UA agent.
my $ua = LWP::UserAgent->new;
$ua->timeout(10);

## Telstra DEV details from https://dev.telstra.com/
my $consumer_key = "";
my $consumer_secret = "";

sub get_token(\%) {
	my $hash = shift;

	## Check we already have a valid token
	if ( $hash->{token} and $hash->{token_expires} > time() ) {
		warn "Oauth token present and valid... Using existing token.\n";
		return;
	}

	my %form = (
		'grant_type'	=> 'client_credentials',
		'scope'		=> 'NSMS',
		'client_id'	=> $consumer_key,
		'client_secret'	=> $consumer_secret,
	);

	my $res = $ua->post( 'https://sapi.telstra.com/v1/oauth/token', \%form );
	if ( $res->status_line =~ m/200/ ) {
		warn "Successfully obtained new OAuth token...\n";
		my $response = JSON->new->decode($res->decoded_content);
		$hash->{token} = $response->{access_token};
		$hash->{token_expires} = $response->{expires_in} + time() - 60;

		## Write the file to disk.
		store $hash, dirname($0) . "/tokenstore.bin";
	}

	return;
}

return 1;
