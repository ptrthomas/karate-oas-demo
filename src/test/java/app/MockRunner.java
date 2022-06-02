package app;

import com.intuit.karate.http.HttpServer;
import com.intuit.karate.http.ServerConfig;
import com.intuit.karate.http.ServerContext;
import org.junit.jupiter.api.Test;

import java.util.Collections;

public class MockRunner {

    @Test
    void testServer() {
        start(8080).waitSync();
    }

    public static HttpServer start(int port) {
        ServerConfig config = new ServerConfig("src/test/java/app")
                .useGlobalSession(true)
                .autoCreateSession(true);
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
