// main java class that starts the entire application

package messengerpidgeon;

// springboot tools
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication // tells sprinboot this is the main appllication
public class MessengerpidgeonApplication {

	public static void main(String[] args) {
		SpringApplication.run(MessengerpidgeonApplication.class, args);
	}

}
