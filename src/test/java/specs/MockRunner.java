package specs;

import com.intuit.karate.http.HttpServer;
import com.intuit.karate.http.ServerConfig;
import com.intuit.karate.http.ServerContext;
import org.junit.jupiter.api.Test;

public class MockRunner {

    public static HttpServer start(String root, int port) {
        ServerConfig config = new ServerConfig(root)
                .useGlobalSession(true);
        config.contextFactory(request -> {
            ServerContext context = new ServerContext(config, request);
            context.setApi(true);
            request.setResourcePath("mock.js");
            return context;
        });
        return HttpServer.config(config)
                .http(port)
                .corsEnabled(true)
                .build();
    }

}
