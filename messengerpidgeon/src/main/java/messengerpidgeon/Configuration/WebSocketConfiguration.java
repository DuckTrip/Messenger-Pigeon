// this package sets up communicsation between JSX and Java

package messengerpidgeon.Configuration; // package location

// springboot tools
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration // sets settings for the application by the class below
@EnableWebSocketMessageBroker // turns on websocket so react can send message to java
public class WebSocketConfiguration
        implements WebSocketMessageBrokerConfigurer { // using methods from websokcets tools

    @Override // providing our own adjustment to the tools in websocket
    public void configureMessageBroker( // this method sets up routes used for our messages(UI -> Java -> mongoDB)
            MessageBrokerRegistry registry) {

        registry.enableSimpleBroker("/topic"); // this would allow messages be sent to other users, but for now not important
        registry.setApplicationDestinationPrefixes("/app"); // this route connects react to Java
    }

    @Override
    public void registerStompEndpoints(
            StompEndpointRegistry registry) { // creates connection address

        registry.addEndpoint("/ws").setAllowedOrigins("http://localhost:5173"); // the address used to connect the route
    }
}
