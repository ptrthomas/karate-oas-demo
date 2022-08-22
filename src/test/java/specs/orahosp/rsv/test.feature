Feature:

  Background:
    * def urlBase = 'http://localhost:8080'

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
