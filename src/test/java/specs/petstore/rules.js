session.counter = session.counter || 1;
session.pets = session.pets || [];

rules['/pet'] = function () {
    if (request.post) {
        let pet = request.body;
        pet.id = session.counter++;
        session.pets.push(pet);
        response.body = pet;
    }
};

rules['/pet/{petId}'] = function() {
    let id = ~~request.pathParams.petId;
    let index = session.pets.findIndex(p => p.id === id);
    if (request.post) {
        let pet = request.body;
        pet.id = id;
        session.pets[index] = pet;
        response.body = pet;
    } else if (request.delete) {
        session.pets.splice(index, 1);
        response.status = 201;
    } else {
        if (index === -1) {
            response.status = 404;
            response.body = null;
        } else {
            response.body = session.pets[index];
        }
    }
};