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

## Prompt for destination number.
print "Enter destination number in format +61......: ";
my $number = <STDIN>;
chomp($number);
if ( $number eq "" ) { exit 1; }

## Prompt for message.
print "Enter message to send: ";
my $message = <STDIN>;
chomp($message);
if ( $message eq "" ) { exit 1; }

my %body = (
	'to'	=> $number,
	'body'	=> $message,
);

## Get an OAuth token if required.
get_token(%config);

my $req = HTTP::Request->new( 'POST', 'https://tapi.telstra.com/v2/messages/sms' );
$req->header( 'Content-Type' => 'application/json' );
$req->header( 'Authorization' => 'Bearer ' . $config{token} );
$req->content( to_json(\%body) );

my $ua = LWP::UserAgent->new;
my $res = $ua->request($req);
print "Result: " . $res->status_line . "\n";
