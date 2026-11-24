package messengerpidgeon.service;

import messengerpidgeon.model.Message;
import messengerpidgeon.repository.MessageRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService {

    private final MessageRepository repository;

    public MessageService(MessageRepository repository) {
        this.repository = repository;
    }

    public Message saveMessage(
            String username, String text) {

        if (username == null || username.isBlank()
                || username.length() > 50
                || text == null || text.isBlank()
                || text.length() > 1000) {

            throw new IllegalArgumentException(
                    "Invalid username or message"
            );
        }

        Message message = new Message(username, text);

        return repository.save(message);
    }

    public List<Message> getAllMessages() {
        return repository.findAll();
    }
}
