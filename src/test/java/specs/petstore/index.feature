Feature: using https://petstore3.swagger.io/

  Background:
    * def urlBase = 'http://localhost:' + karate.properties['server.port']

  Scenario:
    * url urlBase
    * path 'pet'
    * request {"name":"doggie","photoUrls":["https://example.com/dogs/doggie/photo"]}
    * method post
    * status 200
    * match response == {"id":"##number","name":"#string","photoUrls":"#[]#string"}
    * def id = response.id

    * path 'pet', id
    * method get
    * status 200
    * match response == {"id":"#(id)","name":"doggie","photoUrls":["https://example.com/dogs/doggie/photo"]}

    * path 'pet', id
    * request {"id":"#(id)","name":"edited","photoUrls":["https://example.com/dogs/edited/photo"]}
    * method post
    * status 200
    * match response == {"id":"#(id)","name":"edited","photoUrls":["https://example.com/dogs/edited/photo"]}

    * path 'pet', id
    * method delete
    * status 201

    * path 'pet', id
    * method get
    * status 404
