// this package controls our message attributes and methods to retrive data

package messengerpidgeon.model;

import java.time.Instant; // import tool to read exact time message is sent

// import springboot built in tools
import org.springframework.data.annotation.Id; // let us create an ID for each message
import org.springframework.data.mongodb.core.mapping.Document; // tells java we want to store this data into mongDB

    @Document(collection = "messages") // saying we want to store mesage into mongoDB
    public class Message {

        @Id // tells java we are making an ID for easch message using these attributes
        private String id; // attributes for Json file

        private String username;
        private String message;
        private Instant timestamp;

        public Message() {} // message constructor

        public Message(String username, String message) { // creating constructor and storing information into it
            this.username = username;
            this.message = message;
            this.timestamp = Instant.now();
        }

        // these methods allows us to have a "get" function and retrieve information from mongoDB
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

