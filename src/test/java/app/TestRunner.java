package app;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.http.HttpServer;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class TestRunner {

    static HttpServer server;

    @BeforeAll
    static void beforeAll() {
        server = MockRunner.start(0);
    }

    @Test
    void testClient() {
        Results results = Runner.path("classpath:app/index.feature")
                .systemProperty("server.port", server.getPort() + "")
                .parallel(1);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
