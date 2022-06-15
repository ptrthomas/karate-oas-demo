# Karate OAS Demo

## Summary
* a “smart” mock that can validate request payloads against the [OAS](https://www.openapis.org/)
* old versions of the OAS or Swagger files are also supported
* custom rules can be added - e.g. `upperLimit <= lowerLimit`
* you can tweak behavior or vary the response based on state (or stage within an end-user flow)
* mock should run "locally" (`localhost`)
* mock can be easily included within a CI / CD pipeline

## Prerequisites
This is a normal Java / Maven project. Java 11 is required.

## Demo 1 - Petstore

OAS file: https://petstore3.swagger.io

* [`test.feature`](src/test/java/specs/petstore/test.feature) - This is the user flow as a Karate test
    * Note that it has a "full cycle": create (POST), read (GET), update (PUT), remove (DELETE)
  * The same test can be used as-is on a "real" implementation of the server, by switching the URL
* [`spec.js`](src/test/java/specs/petstore/spec.js) - This is the machine-generated mock file
  * All request payloads have been converted into Karate schema validators
  * Examples for all response payloads have also been created from the OAS spec
* [`rules.js`](src/test/java/specs/petstore/rules.js) - This is the part written by hand, but simple and just a few lines
  * note how it over-rides behavior for 2 paths, `/pet` and `/pet/{petId}`
  * this adds state-awareness to the mock, for example the GET will return what was POST-ed in a previous call
  * Note how the status code is handled for a DELETE (201) and a not-found scenario (404).
  * There is no-limit to the logic you can add, as long as you are willing to write some simple JS
  * Since `rules.js` is de-coupled, you can re-generate the main `index.js` from the OAS file whenever it changes

### Running
Just execute [`TestRunner`](src/test/java/specs/petstore/TestRunner.java) as a JUnit test.

Here is the result. Note how you can view the flow of multiple API calls, human-friendly comments and the details of the HTTP request and response. 

<img src="src/test/resources/petstore-report.jpg" height="600"/>

## Demo 2 - ASTM [UTM](https://www.unmannedairspace.info/emerging-regulations/astm-publishes-new-international-standard-addressing-uas-utm-performance-and-interoperability)
* OAS spec: https://github.com/astm-utm/Protocol/blob/master/utm.yaml

* [`test.feature`](src/test/java/specs/utm/test.feature) 
  * Here the test makes 2 calls, but one with a request payload that fails a business rule
* [`spec.js`](src/test/java/specs/utm/spec.js) - This is the machine-generated mock file
* [`rules.js`](src/test/java/specs/utm/rules.js)
  * we implemented a cross-field validation which is concisely represented in JS as follows:
    * `if (altitude_lower.value >= altitude_upper.value) errors.push('altitude_lower should be lower than altitude_upper')`

### Running
Just execute [`TestRunner`](src/test/java/specs/utm/TestRunner.java) as a JUnit test. Note how the second call failed with a readable error message.

<img src="src/test/resources/utm-report.jpg" height="500"/>

## Demo 3 - Travel "Flow"

Similar to the Petstore demo, this shows how a sequence of API calls can be documented.

* [`test.feature`](src/test/java/specs/travel/test.feature)
* [`rules.js`](src/test/java/specs/travel/rules.js)

What is interesting here is the human-friendly HTML that can be added to the report to describe the API further.
The HTML templates ([`offers-get.html`](src/test/java/specs/travel/doc/offers-get.html) and [`orders-post.html`](src/test/java/specs/travel/doc/orders-post.html)) can dynamically refer to the HTTP response or any variable in the test.

<img src="src/test/resources/travel-report.jpg" height="500"/>

## Demo 3 - Oracle Hospitality

Swagger file: https://github.com/oracle/hospitality-api-docs/blob/main/rest-api-specs/property/rsv.json
* [`test.feature`](src/test/java/specs/orahosp/rsv/test.feature)
* [`spec.js`](src/test/java/specs/orahosp/rsv/spec.js) - machine-generated mock file
* [`rules.js`](src/test/java/specs/orahosp/rsv/rules.js)

# Further Reading
* [API Contract Testing - Visual Guide](https://www.linkedin.com/pulse/api-contract-testing-visual-guide-peter-thomas/)