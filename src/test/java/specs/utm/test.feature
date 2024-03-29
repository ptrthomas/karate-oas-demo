Feature: using https://github.com/astm-utm/Protocol/blob/master/utm.yaml

  Background:
    * def urlBase = 'http://localhost:8080'

  Scenario: this will pass
    * url urlBase
    * path '/dss/v1/operational_intent_references/query'
    * request
    """
    {
        area_of_interest: {
            volume: {
                outline_circle: {
                    center: { lat: 100, lng: 200 },
                    radius: { value: 50, units: 'M' }
                },
                outline_polygon: { vertices: [{ lat: 100, lng: 200 }] },
                altitude_lower: {
                    value: 50,
                    reference: 'W84',
                    units: 'M'
                },
                altitude_upper: {
                    value: 100,
                    reference: 'W84',
                    units: 'M'
                }
            },
            time_start: { value: '1985-04-12T23:20:50.52Z', format: 'RFC3339' },
            time_end: { value: '1985-04-12T23:20:50.52Z', format: 'RFC3339' }
        }
    }
    """
    * method post
    * status 200

  Scenario: this will fail
    * url urlBase
    * path '/dss/v1/operational_intent_references/query'
    * request
    """
    {
        area_of_interest: {
            volume: {
                outline_circle: {
                    center: { lat: 100, lng: 200 },
                    radius: { value: 50, units: 'M' }
                },
                outline_polygon: { vertices: [{ lat: 100, lng: 200 }] },
                altitude_lower: {
                    value: 200,
                    reference: 'W84',
                    units: 'M'
                },
                altitude_upper: {
                    value: 100,
                    reference: 'W84',
                    units: 'M'
                }
            },
            time_start: { value: '1985-04-12T23:20:50.52Z', format: 'RFC3339' },
            time_end: { value: '1985-04-12T23:20:50.52Z', format: 'RFC3339' }
        }
    }
    """
    * method post
    * status 200
