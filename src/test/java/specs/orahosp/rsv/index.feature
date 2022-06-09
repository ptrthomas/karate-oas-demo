Feature:

  Background:
    * def urlBase = 'http://localhost:' + karate.properties['server.port']

  Scenario:
    * url urlBase
    * path '/hotels/100/blocks/200/reservations'
    * request
    """
    {
      "reservations": {
        "reservation": []
      }
    }
    """
    * method post
    * status 200
