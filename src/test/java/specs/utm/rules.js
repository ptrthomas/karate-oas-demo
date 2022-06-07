rules['/dss/v1/operational_intent_references/query'] = function() {
    let altitude_upper = request.body.area_of_interest.volume.altitude_upper;
    let altitude_lower = request.body.area_of_interest.volume.altitude_lower;
    if (altitude_lower.value >= altitude_upper.value) errors.push('altitude_lower should be lower than altitude_upper');
};