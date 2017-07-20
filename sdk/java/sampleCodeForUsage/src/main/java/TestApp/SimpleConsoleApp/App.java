package TestApp.SimpleConsoleApp;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;

import net.telstra.tdev.apipractice.slot2.TelstraSMSMessagingAPIClient;
import net.telstra.tdev.apipractice.slot2.controllers.SMSController;
import net.telstra.tdev.apipractice.slot2.http.client.APICallBack;
import net.telstra.tdev.apipractice.slot2.http.client.HttpContext;
import net.telstra.tdev.apipractice.slot2.models.Message;
import net.telstra.tdev.apipractice.slot2.models.MessageSentResponse;
import net.telstra.tdev.apipractice.slot2.models.OAuthScopeEnum;
import net.telstra.tdev.apipractice.slot2.models.SendSMSRequest;
/**
 * Hello world!
 *
 */
public class App 
{
	final static SendSMSRequest payload = new SendSMSRequest();;
    public static void main( String[] args )
    {
        String oAuthClientId = "clientID";
        String oAuthClientSecret = "clientSecret";
        List<OAuthScopeEnum> scopes = new LinkedList<OAuthScopeEnum>();
        scopes.add(OAuthScopeEnum.SMS);
        TelstraSMSMessagingAPIClient  client = new TelstraSMSMessagingAPIClient(oAuthClientId, oAuthClientSecret);
        
        try
        {
        	//Token stored in the client
        	client.auth().authorize(scopes,null);
        	fillPayload();
        	SMSController sms = client.getSMS();
        	sendMessasge(sms);
        }
        catch(Throwable e)
        {
        	System.out.println(e.getMessage());
        }
    }
    
    //Method to fill payload (Message details)
    public static void fillPayload()
    {
    	payload.setFrom("API");
    	payload.setTo("041XXXXXXX");
    	payload.setBody("Sample Body text");
    	payload.setNotifyURL("http://slot2/apipractice.t-dev.telstra.net/recievecallback");
    }
    
    // Method to send message when already authorized and payload is ready
    public static void sendMessasge(SMSController sms)
    {
    	try {
			sms.createSendMessageAsync(payload, new APICallBack<MessageSentResponse>() {
				public void onSuccess(HttpContext context, MessageSentResponse response) {
					// TODO Auto-generated method stub
					List<Message> message = response.getMessages();
					Iterator<Message> iterator = message.iterator();
					while(iterator.hasNext())
					{
						System.out.println(iterator.next().getMessageId());
					}
				}
				public void onFailure(HttpContext context, Throwable error) {
					// TODO Auto-generated method stub
					System.out.println(error.getMessage());
				}
			});
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
    }
}
