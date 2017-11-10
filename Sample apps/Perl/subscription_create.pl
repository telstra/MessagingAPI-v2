#!/usr/bin/perl
use strict;
use warnings;
use File::Basename;
use Storable;
use lib dirname($0);
use functions;

my %config;

if ( -f dirname($0) . "/tokenstore.bin" ) {
	%config = %{ retrieve(dirname($0) . "/tokenstore.bin") };
}

## Get an OAuth token if required.
get_token(%config);

my %body = (
	"activeDays"	=> "65535",
);

my $req = HTTP::Request->new( 'POST', 'https://tapi.telstra.com/v2/messages/provisioning/subscriptions' );
$req->header( 'Content-Type' => 'application/json' );
$req->header( 'Authorization' => 'Bearer ' . $config{token} );
$req->content( to_json(\%body) );

my $ua = LWP::UserAgent->new;
my $res = $ua->request($req);
print "Result: " . $res->status_line . "\n";
print $res->content;
