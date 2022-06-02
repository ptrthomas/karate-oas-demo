package app;

import com.intuit.karate.Match;
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
        Match.Result result = Match.execute(null, Match.Type.EQUALS, actual, expected);
        return result.toMap();
    }

}
