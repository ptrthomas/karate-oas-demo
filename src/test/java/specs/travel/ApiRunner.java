package specs.travel;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import com.intuit.karate.http.HttpServer;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import specs.MockRunner;

import static org.junit.jupiter.api.Assertions.assertEquals;

class ApiRunner {

    static HttpServer server;

    @BeforeAll
    static void beforeAll() {
        server = MockRunner.start("src/test/java/specs/travel", 8080);
    }

    @Test
    void testClient() {
        Results results = Runner.path("classpath:specs/travel/test.feature")
                .systemProperty("server.port", server.getPort() + "")
                .parallel(1);
        assertEquals(0, results.getFailCount(), results.getErrorMessages());
    }

}
