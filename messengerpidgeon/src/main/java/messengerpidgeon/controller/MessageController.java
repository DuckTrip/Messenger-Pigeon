// once message is determined valid, this package sends the data to mongoDB

package messengerpidgeon.controller; // package location

import messengerpidgeon.model.Message; // allows us to use model class
import messengerpidgeon.service.MessageService; // allows us to ise service class

// imports springboots tools from its library
import org.springframework.web.bind.annotation.*; // handles web requests
import org.springframework.http.HttpStatus; // allows us to use HTTP status codes
import org.springframework.web.server.ResponseStatusException; // allows us to send an HTTP error response if something goes wrong

import java.util.List; // a list that can store multiple message objects

@RestController // tells springboot this class receives requests from websites and returns a response
@RequestMapping("/api/messages") // sets our main URL for this controller, which is https://localhost:8080/api/messages
public class MessageController { // create message controller class

    private final MessageService service; // stores message service this controller will use

    public MessageController(MessageService service) {
        this.service = service;
    } // constructor that receives a MessageService, provided by springboot

    @GetMapping // tells springbooot run method when a get request happens
    public List<Message> getMessages() {
        return service.getAllMessages();
    } // creates method that returns a list containing message objects

    @PostMapping // tells springboot submit a new message when a post request happens
    public Message sendMessage(
            @RequestBody MessageRequest request) { // reads Json sent with with HTTP request, springboot converts Json into a messagerequest object

        try { // try to process and save message
            return service.saveMessage(
                    request.username(), // takes username and message from request, sends to messageservice class, and springboot converts i nto json file
                    request.message()
            );
        } catch (IllegalArgumentException e) { // catches an error using springboots IllegalArgumentException tool
            throw new ResponseStatusException( // using more of springboots tool, thid portion sends HTTP error to the requestor saying the information was invalid, this is seen in the MessageService class
                    HttpStatus.BAD_REQUEST,
                    e.getMessage()
            );
        }
    }

    public record MessageRequest(
            String username,
            String message
    ) {}
}
