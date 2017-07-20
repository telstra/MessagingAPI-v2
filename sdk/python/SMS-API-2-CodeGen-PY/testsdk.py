from telstrasmsmessagingapi.telstrasmsmessagingapi_client import TelstrasmsmessagingapiClient
from telstrasmsmessagingapi.controllers.sms_controller import SMSController
from urllib.request import urlopen
import json
client = TelstrasmsmessagingapiClient()
controller = SMSController()

CONSUMER_KEY = "lN9Y00vl0fiFzIQnGMzP0BDcBGuChjMn"
CONSUMER_SECRET = "RoFOGd7LA4Tw1ACG"
URL = 'https://slot2.apipractice.t-dev.telstra.net/v1/oauth'
data = 'token?client_id='+CONSUMER_KEY+'&client_secret='+CONSUMER_SECRET+'&grant_type=client_credentials&scope=NSMS'
response = urlopen(URL+"/"+data)
#print(json.loads(response.read().decode('utf-8')))
authResp = json.loads(response.read().decode("utf-8"))
authorization = 'Bearer '+authResp['access_token']
task = input("What would you like to do: send, status or response \n")
if task == "send":
	number = input("What is their number?\n")
	message = input("What would you like to say? \n")
	payload = {"to":number,"from":"0400000000","body":message}
	send = controller.create_send_message(authorization,payload)
elif task == "status":
	message_id = input("What was the message ID? \n")
	controller.get_message_status(authorization,message_id)
elif task == "response":
	message_id = input("What was the message ID? \n")
	controller.retrieve_messages(authorization,message_id)
else:
	print("ERROR! incorrect command.")

