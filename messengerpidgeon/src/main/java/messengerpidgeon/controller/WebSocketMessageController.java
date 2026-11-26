// this portion takes data from UI and brings it to Java

package messengerpidgeon.controller; // package location

import messengerpidgeon.service.MessageService; // accessing MessageService class

// Allows us to use springboots tools
import org.springframework.messaging.handler.annotation.MessageMapping; // tells springboot where each message should go in our method
import org.springframework.stereotype.Controller; // lets springboot create and manage this controller to receive messages

@Controller
public class WebSocketMessageController {

    private final MessageService service; // empty variable

    public WebSocketMessageController(MessageService service) { // constructor for our controller
        this.service = service;
    }

    @MessageMapping("/chat.send") // starts method below when react sends mesaage
    public void receiveMessage(String text) {

        service.saveMessage("TestUser", text); // receives data and gives a temp username
    }
}
