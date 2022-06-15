Feature: Travel Use Case - End to End Flow

  Background:
    * url 'http://localhost:' + karate.properties['server.port']

  Scenario: availability search, order creation, modification and delete
    # search for offers
    * path 'offers'
    * param maxRate = 20
    * param travelerCount = 2
    * method get
    * status 200
    * doc { read: 'doc/offers-get.html' }

    # order an offer
    * path 'orders'
    * request { offerId: 'offer-01', travelerCount: 2, dates: { start: '2022-07-01', end: '2022-07-10' } }
    * method post
    * status 201
    * doc { read: 'doc/orders-post.html' }




