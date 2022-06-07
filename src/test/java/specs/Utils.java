package specs;

import com.intuit.karate.Match;
import com.intuit.karate.graal.JsEngine;
import com.intuit.karate.http.RequestCycle;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public class Utils {

    private static final Logger logger = LoggerFactory.getLogger(Utils.class);

    public static final Utils INSTANCE = new Utils();

    private Utils() {
        // singleton
    }

    public Map<String, Object> matchEquals(Object actual, Object expected) {
        JsEngine je = RequestCycle.get().getEngine();
        Match.Result result = Match.execute(je, Match.Type.EQUALS, actual, expected);
        return result.toMap();
    }

}
