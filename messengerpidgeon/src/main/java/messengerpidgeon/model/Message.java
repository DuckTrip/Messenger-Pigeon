package messengerpidgeon.model;

import java.time.Instant;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

    @Document(collection = "messages")
    public class Message {

        @Id
        private String id;

        private String username;
        private String message;
        private Instant timestamp;

        public Message() {}

        public Message(String username, String message) {
            this.username = username;
            this.message = message;
            this.timestamp = Instant.now();
        }

        public String getId() {
            return id;
        }

        public String getUsername() {
            return username;
        }

        public String getMessage() {
            return message;
        }

        public Instant getTimestamp() {
            return timestamp;
        }
    }

