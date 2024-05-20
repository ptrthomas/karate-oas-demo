package specs.petstore;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.http.HttpServer;
import com.intuit.karate.http.ServerConfig;
import com.intuit.karate.http.ServerContext;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiRunner {

    static HttpServer server;

    @BeforeAll
    static void beforeAll() {
        ServerConfig config = new ServerConfig("src/test/java/specs/petstore")
                .useGlobalSession(true);
        config.contextFactory(request -> {
            ServerContext context = new ServerContext(config, request);
            context.setApi(true);
            request.setResourcePath("mock.js");
            return context;
        });
        server = HttpServer.config(config)
                .http(8080)
                .corsEnabled(true)
                .build();
    }

    @Test
    void testClient() {
        Results results = Runner.path("classpath:specs/petstore/test.feature")
                .systemProperty("server.port", server.getPort() + "")
                .parallel(1);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
