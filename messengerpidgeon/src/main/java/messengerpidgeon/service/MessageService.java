// this package controls whether our message is valid or not(like ensuring every message has a username or message does not exceed certain length)

package messengerpidgeon.service; // package location

// import classes to use
import messengerpidgeon.model.Message;
import messengerpidgeon.repository.MessageRepository;

// springboot tools
import org.springframework.stereotype.Service;

import java.util.List;

@Service // this portion creates and manages Message service opbjects
public class MessageService {

    private final MessageRepository repository; // variable holds our mongoDB repository

    public MessageService(MessageRepository repository) { // constructor that stores repository object provided by springboot
        this.repository = repository;
    }

    public Message saveMessage( // save message method that ensures our message is valid and saves it
            String username, String text) {

        if (username == null || username.isBlank() // if statement that catches an invalid username and text
                || username.length() > 50
                || text == null || text.isBlank()
                || text.length() > 1000) {

            throw new IllegalArgumentException(
                    "Invalid username or message"
            );
        }

        Message message = new Message(username, text); // creats a new message object

        return repository.save(message);
    }

    public List<Message> getAllMessages() { // method to get all messages from mongoDB
        return repository.findAll();
    }
}
