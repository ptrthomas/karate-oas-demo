Feature: using https://petstore3.swagger.io/

  Background:
    * url 'http://localhost:8080'

  Scenario:

    # this is how you create a new pet in the database
    * path 'pet'
    * request {"name":"doggie","photoUrls":["https://example.com/dogs/doggie/photo"]}
    * method post
    * status 200
    * match response == {"id":"##number","name":"#string","photoUrls":"#[]#string"}
    * def id = response.id

    # we can retrieve the data of any pet after it is created by getting by ID
    * path 'pet', id
    * method get
    * status 200
    * match response == {"id":"#(id)","name":"doggie","photoUrls":["https://example.com/dogs/doggie/photo"]}

    # to update a pet just make a POST with the updated data
    * path 'pet', id
    * request {"id":"#(id)","name":"edited","photoUrls":["https://example.com/dogs/edited/photo"]}
    * method post
    * status 200
    * match response == {"id":"#(id)","name":"edited","photoUrls":["https://example.com/dogs/edited/photo"]}

    # use a path-parameter to DELETE by id
    * path 'pet', id
    * method delete
    * status 201

    # if a pet is not found the response is a 404
    * path 'pet', id
    * method get
    * status 404
