package messengerpidgeon.controller;

import messengerpidgeon.model.Message;
import messengerpidgeon.service.MessageService;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageService service;

    public MessageController(MessageService service) {
        this.service = service;
    }

    @GetMapping
    public List<Message> getMessages() {
        return service.getAllMessages();
    }

    @PostMapping
    public Message sendMessage(
            @RequestBody MessageRequest request) {

        try {
            return service.saveMessage(
                    request.username(),
                    request.message()
            );
        } catch (IllegalArgumentException e) {
            throw new ResponseStatusException(
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
