session.offers = session.offers || [
    {id: 'offer-01', name: 'Offer One', rate: 10},
    {id: 'offer-02', name: 'Offer Two', rate: 5}
];

session.orders = session.orders || [];

rules['/offers'] = function () {
    response.body = session.offers;
};

rules['/orders'] = function () {
    if (request.post) {
        let order = request.body;
        order.id = context.uuid();
        session.orders.push(order);
        response.body = order;
        response.status = 201;
    } else {
        response.body = session.orders;
    }
};
