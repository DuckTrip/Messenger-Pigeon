package messengerpidgeon.repository;

import messengerpidgeon.model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository
        extends MongoRepository<Message, String> {
}

