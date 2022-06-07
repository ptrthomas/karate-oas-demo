package specs;

import com.intuit.karate.http.HttpServer;
import com.intuit.karate.http.ServerConfig;
import com.intuit.karate.http.ServerContext;
import org.junit.jupiter.api.Test;

import java.util.Collections;

public class MockRunner {

    @Test
    void startPetstore() {
        start("src/test/java/specs/petstore", 8080).waitSync();
    }

    @Test
    void startUtm() {
        start("src/test/java/specs/utm", 8080).waitSync();
    }

    public static HttpServer start(String root, int port) {
        ServerConfig config = new ServerConfig(root)
                .useGlobalSession(true);
        config.contextFactory(request -> {
            ServerContext context = new ServerContext(config, request, Collections.singletonMap("utils", Utils.INSTANCE));
            context.setApi(true);
            request.setResourcePath("index.js");
            return context;
        });
        return HttpServer.config(config)
                .http(port)
                .corsEnabled(true)
                .build();
    }

}
