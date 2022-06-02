let validators = {};
validators['ErrorReport'] = {"report_id":"#string","exchange":{"url":"#string","method":"#string","headers":["#string"],"recorder_role":"#string","request_time":{"value":"#string","format":"#string"},"request_body":"#string","response_time":{"value":"#string","format":"#string"},"response_body":"#string","response_code":"#number","problem":"#string"}};
validators['QueryOperationalIntentReferenceParameters'] = {"area_of_interest":{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}};
validators['QueryConstraintReferenceParameters'] = {"area_of_interest":{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}};
validators['PutOperationalIntentReferenceParameters'] = {"extents":[{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}],"key":["#string"],"state":"#string","uss_base_url":"#string","subscription_id":"#string","new_subscription":{"uss_base_url":"#string","notify_for_constraints":"#boolean"}};
validators['SetUssAvailabilityStatusParameters'] = {"old_version":"#string","availability":"#string"};
validators['PutOperationalIntentDetailsParameters'] = {"operational_intent_id":"#string","operational_intent":{"reference":{"id":"#string","manager":"#string","uss_availability":"#string","version":"#number","state":"#string","ovn":"#string","time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"},"uss_base_url":"#string","subscription_id":"#string"},"details":{"volumes":[{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}],"off_nominal_volumes":[{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}],"priority":"#number"}},"subscriptions":[{"subscription_id":"#string","notification_index":"#number"}]};
validators['PutConstraintReferenceParameters'] = {"extents":[{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}],"uss_base_url":"#string"};
validators['PutConstraintDetailsParameters'] = {"constraint_id":"#string","constraint":{"reference":{"id":"#string","manager":"#string","uss_availability":"#string","version":"#number","ovn":"#string","time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"},"uss_base_url":"#string"},"details":{"volumes":[{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}],"type":"#string","geozone":{"identifier":"#string","country":"#string","zone_authority":[{"name":"#string","service":"#string","contact_name":"#string","site_url":"#string","email":"#string","phone":"#string","purpose":"#string","interval_before":"#string"}],"name":"#string","type":"#string","restriction":"#string","restriction_conditions":["#string"],"region":"#number","reason":["#string"],"other_reason_info":"#string","regulation_exemption":"#string","u_space_class":"#string","message":"#string","additional_properties":{}}}},"subscriptions":[{"subscription_id":"#string","notification_index":"#number"}]};
validators['PutSubscriptionParameters'] = {"extents":{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}},"uss_base_url":"#string","notify_for_operational_intents":"#boolean","notify_for_constraints":"#boolean"};
validators['QuerySubscriptionParameters'] = {"area_of_interest":{"volume":{"outline_circle":{"center":{"lng":"#number","lat":"#number"},"radius":{"value":"#number","units":"#string"}},"outline_polygon":{"vertices":[{"lng":"#number","lat":"#number"}]},"altitude_lower":{"value":"#number","reference":"#string","units":"#string"},"altitude_upper":{"value":"#number","reference":"#string","units":"#string"}},"time_start":{"value":"#string","format":"#string"},"time_end":{"value":"#string","format":"#string"}}};
let examples = {};
examples['GetOperationalIntentDetailsResponse'] = {"operational_intent":{"reference":{"id":"string","manager":"string","uss_availability":"string","version":0,"state":"string","ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","subscription_id":"string"},"details":{"volumes":[{"volume":{"outline_circle":{"center":{"lng":"number","lat":"number"},"radius":{"value":"number","units":"string"}},"outline_polygon":{"vertices":[{"lng":"number","lat":"number"}]},"altitude_lower":{"value":"number","reference":"string","units":"string"},"altitude_upper":{"value":"number","reference":"string","units":"string"}},"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"}}],"off_nominal_volumes":[{"volume":{"outline_circle":{"center":{"lng":"number","lat":"number"},"radius":{"value":"number","units":"string"}},"outline_polygon":{"vertices":[{"lng":"number","lat":"number"}]},"altitude_lower":{"value":"number","reference":"string","units":"string"},"altitude_upper":{"value":"number","reference":"string","units":"string"}},"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"}}],"priority":0}}};
examples['GetSubscriptionResponse'] = {"subscription":{"id":"string","version":"string","notification_index":0,"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","notify_for_operational_intents":false,"notify_for_constraints":false,"implicit_subscription":false,"dependent_operational_intents":["string"]}};
examples['GetOperationalIntentReferenceResponse'] = {"operational_intent_reference":{"id":"string","manager":"string","uss_availability":"string","version":0,"state":"string","ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","subscription_id":"string"}};
examples['UssAvailabilityStatusResponse'] = {"version":"string","status":{"uss":"string","availability":"string"}};
examples['ChangeConstraintReferenceResponse'] = {"subscribers":[{"subscriptions":[{"subscription_id":"string","notification_index":0}],"uss_base_url":"string"}],"constraint_reference":{"id":"string","manager":"string","uss_availability":"string","version":0,"ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string"}};
examples['QueryConstraintReferencesResponse'] = {"constraint_references":[{"id":"string","manager":"string","uss_availability":"string","version":0,"ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string"}]};
examples['USSLogSet'] = {"messages":[{"url":"string","method":"string","headers":["string"],"recorder_role":"string","request_time":{"value":"string","format":"string"},"request_body":"string","response_time":{"value":"string","format":"string"},"response_body":"string","response_code":0,"problem":"string"}],"operator_notifications":[{"triggering_event_time":{"value":"string","format":"string"},"notification_time":{"value":"string","format":"string"},"notification_details":"string","notification_triggering_event":"string"}],"operator_inputs":[{"triggering_event_time":{"value":"string","format":"string"},"operational_intent_id":"string","input_triggering_event":"string","input_details":"string"}],"operator_associations":[{"operational_intent_id":"string","operator_id":"string"}],"planning_attempts":[{"time":{"value":"string","format":"string"},"ovns":["string"],"missing_operational_intents":["string"],"missing_constraints":["string"],"operational_intent_id":"string","problem":"string"}],"operational_intent_positions":[{"positions":[{"time_received":{"value":"string","format":"string"},"telemetry":{"time_measured":{"value":"string","format":"string"},"position":{"longitude":"number","latitude":"number","accuracy_h":"string","accuracy_v":"string","extrapolated":false,"altitude":{"value":"number","reference":"string","units":"string"}},"velocity":{"speed":"number","units_speed":"string","track":"number"}}}],"operational_intent_id":"string"}],"constraint_provider_associations":[{"constraint_id":"string","constraint_provider_id":"string"}]};
examples['QuerySubscriptionsResponse'] = {"subscriptions":[{"id":"string","version":"string","notification_index":0,"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","notify_for_operational_intents":false,"notify_for_constraints":false,"implicit_subscription":false,"dependent_operational_intents":["string"]}]};
examples['ErrorReport'] = {"report_id":"string","exchange":{"url":"string","method":"string","headers":["string"],"recorder_role":"string","request_time":{"value":"string","format":"string"},"request_body":"string","response_time":{"value":"string","format":"string"},"response_body":"string","response_code":0,"problem":"string"}};
examples['DeleteSubscriptionResponse'] = {"subscription":{"id":"string","version":"string","notification_index":0,"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","notify_for_operational_intents":false,"notify_for_constraints":false,"implicit_subscription":false,"dependent_operational_intents":["string"]}};
examples['QueryOperationalIntentReferenceResponse'] = {"operational_intent_references":[{"id":"string","manager":"string","uss_availability":"string","version":0,"state":"string","ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","subscription_id":"string"}]};
examples['ChangeOperationalIntentReferenceResponse'] = {"subscribers":[{"subscriptions":[{"subscription_id":"string","notification_index":0}],"uss_base_url":"string"}],"operational_intent_reference":{"id":"string","manager":"string","uss_availability":"string","version":0,"state":"string","ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","subscription_id":"string"}};
examples['GetConstraintReferenceResponse'] = {"constraint_reference":{"id":"string","manager":"string","uss_availability":"string","version":0,"ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string"}};
examples['GetOperationalIntentTelemetryResponse'] = {"operational_intent_id":"string","telemetry":{"time_measured":{"value":"string","format":"string"},"position":{"longitude":"number","latitude":"number","accuracy_h":"string","accuracy_v":"string","extrapolated":false,"altitude":{"value":"number","reference":"string","units":"string"}},"velocity":{"speed":"number","units_speed":"string","track":"number"}},"next_telemetry_opportunity":{"value":"string","format":"string"}};
examples['GetConstraintDetailsResponse'] = {"constraint":{"reference":{"id":"string","manager":"string","uss_availability":"string","version":0,"ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string"},"details":{"volumes":[{"volume":{"outline_circle":{"center":{"lng":"number","lat":"number"},"radius":{"value":"number","units":"string"}},"outline_polygon":{"vertices":[{"lng":"number","lat":"number"}]},"altitude_lower":{"value":"number","reference":"string","units":"string"},"altitude_upper":{"value":"number","reference":"string","units":"string"}},"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"}}],"type":"string","geozone":{"identifier":"string","country":"string","zone_authority":[{"name":"string","service":"string","contact_name":"string","site_url":"string","email":"string","phone":"string","purpose":"string","interval_before":"string"}],"name":"string","type":"string","restriction":"string","restriction_conditions":["string"],"region":0,"reason":["string"],"other_reason_info":"string","regulation_exemption":"string","u_space_class":"string","message":"string","additional_properties":{}}}}};
examples['PutSubscriptionResponse'] = {"subscription":{"id":"string","version":"string","notification_index":0,"time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","notify_for_operational_intents":false,"notify_for_constraints":false,"implicit_subscription":false,"dependent_operational_intents":["string"]},"operational_intent_references":[{"id":"string","manager":"string","uss_availability":"string","version":0,"state":"string","ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string","subscription_id":"string"}],"constraint_references":[{"id":"string","manager":"string","uss_availability":"string","version":0,"ovn":"string","time_start":{"value":"string","format":"string"},"time_end":{"value":"string","format":"string"},"uss_base_url":"string"}]};
let errors = [];
let validateRequest = function(name) {
    let result = utils.matchEquals(request.body, validators[name]);
    if (!result.pass) {
        errors.push(result.message);
    }
};
let prepareResponse = function(name) {
    if (errors.length) {
        response.body = errors.join('---\n');
        response.status = 400;
    } else {
        response.body = examples[name];
    }
};
if (request.pathMatches('/dss/v1/operational_intent_references/query')) {
    if (request.post) {
        validateRequest('QueryOperationalIntentReferenceParameters');
        let altitude_upper = request.body.area_of_interest.volume.altitude_upper;
        let altitude_lower = request.body.area_of_interest.volume.altitude_lower;
        if (altitude_lower.value >= altitude_upper.value) errors.push('altitude_lower should be lower than altitude_upper');
        prepareResponse('QueryOperationalIntentReferenceResponse');
    }
}
if (request.pathMatches('/dss/v1/operational_intent_references/{entityid}')) {
    if (request.get) {
        prepareResponse('GetOperationalIntentReferenceResponse');
    }
    if (request.put) {
        validateRequest('PutOperationalIntentReferenceParameters');
        prepareResponse('ChangeOperationalIntentReferenceResponse');
    }
}
if (request.pathMatches('/dss/v1/operational_intent_references/{entityid}/{ovn}')) {
    if (request.put) {
        validateRequest('PutOperationalIntentReferenceParameters');
        prepareResponse('ChangeOperationalIntentReferenceResponse');
    }
    if (request.delete) {
        prepareResponse('ChangeOperationalIntentReferenceResponse');
    }
}
if (request.pathMatches('/dss/v1/constraint_references/query')) {
    if (request.post) {
        validateRequest('QueryConstraintReferenceParameters');
        prepareResponse('QueryConstraintReferencesResponse');
    }
}
if (request.pathMatches('/dss/v1/constraint_references/{entityid}')) {
    if (request.get) {
        prepareResponse('GetConstraintReferenceResponse');
    }
    if (request.put) {
        validateRequest('PutConstraintReferenceParameters');
        prepareResponse('ChangeConstraintReferenceResponse');
    }
}
if (request.pathMatches('/dss/v1/constraint_references/{entityid}/{ovn}')) {
    if (request.put) {
        validateRequest('PutConstraintReferenceParameters');
        prepareResponse('ChangeConstraintReferenceResponse');
    }
    if (request.delete) {
        prepareResponse('ChangeConstraintReferenceResponse');
    }
}
if (request.pathMatches('/dss/v1/subscriptions/query')) {
    if (request.post) {
        validateRequest('QuerySubscriptionParameters');
        prepareResponse('QuerySubscriptionsResponse');
    }
}
if (request.pathMatches('/dss/v1/subscriptions/{subscriptionid}')) {
    if (request.get) {
        prepareResponse('GetSubscriptionResponse');
    }
    if (request.put) {
        validateRequest('PutSubscriptionParameters');
        prepareResponse('PutSubscriptionResponse');
    }
}
if (request.pathMatches('/dss/v1/subscriptions/{subscriptionid}/{version}')) {
    if (request.put) {
        validateRequest('PutSubscriptionParameters');
        prepareResponse('PutSubscriptionResponse');
    }
    if (request.delete) {
        prepareResponse('DeleteSubscriptionResponse');
    }
}
if (request.pathMatches('/dss/v1/reports')) {
    if (request.post) {
        validateRequest('ErrorReport');
        prepareResponse('ErrorReport');
    }
}
if (request.pathMatches('/dss/v1/uss_availability/{uss_id}')) {
    if (request.put) {
        validateRequest('SetUssAvailabilityStatusParameters');
        prepareResponse('UssAvailabilityStatusResponse');
    }
    if (request.get) {
        prepareResponse('UssAvailabilityStatusResponse');
    }
}
if (request.pathMatches('/uss/v1/operational_intents/{entityid}')) {
    if (request.get) {
        prepareResponse('GetOperationalIntentDetailsResponse');
    }
}
if (request.pathMatches('/uss/v1/operational_intents/{entityid}/telemetry')) {
    if (request.get) {
        prepareResponse('GetOperationalIntentTelemetryResponse');
    }
}
if (request.pathMatches('/uss/v1/operational_intents')) {
    if (request.post) {
        validateRequest('PutOperationalIntentDetailsParameters');
    }
}
if (request.pathMatches('/uss/v1/constraints/{entityid}')) {
    if (request.get) {
        prepareResponse('GetConstraintDetailsResponse');
    }
}
if (request.pathMatches('/uss/v1/constraints')) {
    if (request.post) {
        validateRequest('PutConstraintDetailsParameters');
    }
}
if (request.pathMatches('/uss/v1/reports')) {
    if (request.post) {
        validateRequest('ErrorReport');
        prepareResponse('ErrorReport');
    }
}
if (request.pathMatches('/uss/v1/log_sets/{log_set_id}')) {
    if (request.get) {
        prepareResponse('USSLogSet');
    }
}
