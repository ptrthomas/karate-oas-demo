const paths = {};
const checks = {};
const samples = {};
const errors = [];
const rules = {};
const handleInternal = function(path, methodInfo) {
    if (methodInfo.request) {
        let result = utils.matchEquals(request.body, checks[methodInfo.request]);
        if (!result.pass) errors.push(result.message);
    }
    if (methodInfo.response) {
        response.body = samples[methodInfo.response];
    }
    let rule = rules[path];
    if (rule) {
        rule();
    }
    if (errors.length) {
        response.body = errors.join('\n');
        response.status = 400;
    }
};
const handle = function() {
    for (const [path, methods] of Object.entries(paths)) {
        if (request.pathMatches(path)) {
            const methodInfo = methods[request.method.toLowerCase()];
            if (methodInfo) {
                handleInternal(path, methodInfo);
                return true;
            }
        }
    }
    return false;
};

paths['/pet'] = {"post":{"request":"Pet","response":"Pet"},"put":{"request":"Pet","response":"Pet"}};
paths['/pet/findByStatus'] = {"get":{"response":"sample1"}};
paths['/pet/findByTags'] = {"get":{"response":"sample2"}};
paths['/pet/{petId}'] = {"get":{"response":"Pet"},"post":{},"delete":{}};
paths['/pet/{petId}/uploadImage'] = {"post":{"response":"ApiResponse"}};
paths['/store/inventory'] = {"get":{"response":"sample4"}};
paths['/store/order'] = {"post":{"request":"Order","response":"Order"}};
paths['/store/order/{orderId}'] = {"get":{"response":"Order"},"delete":{}};
paths['/user'] = {"post":{"request":"User"}};
paths['/user/createWithList'] = {"post":{"request":"check11","response":"User"}};
paths['/user/login'] = {"get":{"response":"sample8"}};
paths['/user/logout'] = {"get":{}};
paths['/user/{username}'] = {"get":{"response":"User"},"put":{"request":"User"},"delete":{}};

checks['Order'] = {"id":"#number","petId":"#number","quantity":"#number","shipDate":"#string","status":"#string","complete":"#boolean"};
checks['Customer'] = {"id":"#number","username":"#string","address":"#[] checks['Address']"};
checks['Address'] = {"street":"#string","city":"#string","state":"#string","zip":"#string"};
checks['Category'] = {"id":"#number","name":"#string"};
checks['User'] = {"id":"#number","username":"#string","firstName":"#string","lastName":"#string","email":"#string","password":"#string","phone":"#string","userStatus":"#number"};
checks['Tag'] = {"id":"#number","name":"#string"};
checks['Pet'] = {"id":"##number","name":"#string","category":"##(checks['Category'])","photoUrls":["#string"],"tags":"##[] checks['Tag']","status":"##string"};
checks['ApiResponse'] = {"code":"#number","type":"#string","message":"#string"};
checks['check8'] = "#[] checks['Pet']";
checks['check9'] = "#[] checks['Pet']";
checks['check10'] = {};
checks['check11'] = "#[] checks['User']";
checks['check12'] = "#string";

samples['Pet'] = {"name":"doggie","photoUrls":[""]};
samples['sample1'] = [{"name":"doggie","photoUrls":[""]}];
samples['sample2'] = [{"name":"doggie","photoUrls":[""]}];
samples['ApiResponse'] = {"code":0,"type":"","message":""};
samples['sample4'] = {};
samples['Order'] = {"id":10,"petId":198772,"quantity":7,"shipDate":"","status":"approved","complete":false};
samples['User'] = {"id":10,"username":"theUser","firstName":"John","lastName":"James","email":"john@email.com","password":12345,"phone":12345,"userStatus":1};
samples['sample7'] = [{"id":10,"username":"theUser","firstName":"John","lastName":"James","email":"john@email.com","password":12345,"phone":12345,"userStatus":1}];
samples['sample8'] = "";

context.read('rules.js');

if (!handle()) response.status = 404;
