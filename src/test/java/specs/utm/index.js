const paths = {};
const checks = {};
const samples = {};
const errors = [];
const rules = {};
const handleInternal = function(path, methodInfo) {
    if (methodInfo.request) {
        let result = utils.matchEquals(request.body, checks[methodInfo.request]);
        if (!result.pass) errors.push(result.message);
    }
    if (methodInfo.response) {
        response.body = samples[methodInfo.response];
    }
    let rule = rules[path];
    if (rule) {
        rule();
    }
    if (errors.length) {
        response.body = errors.join('\n');
        response.status = 400;
    }
};
const handle = function() {
    for (const [path, methods] of Object.entries(paths)) {
        if (request.pathMatches(path)) {
            const methodInfo = methods[request.method.toLowerCase()];
            if (methodInfo) {
                handleInternal(path, methodInfo);
                return true;
            }
        }
    }
    return false;
};

paths['/dss/v1/operational_intent_references/query'] = {"post":{"request":"QueryOperationalIntentReferenceParameters","response":"QueryOperationalIntentReferenceResponse"}};
paths['/dss/v1/operational_intent_references/{entityid}'] = {"get":{"response":"GetOperationalIntentReferenceResponse"},"put":{"request":"PutOperationalIntentReferenceParameters","response":"ChangeOperationalIntentReferenceResponse"}};
paths['/dss/v1/operational_intent_references/{entityid}/{ovn}'] = {"put":{"request":"PutOperationalIntentReferenceParameters","response":"ChangeOperationalIntentReferenceResponse"},"delete":{"response":"ChangeOperationalIntentReferenceResponse"}};
paths['/dss/v1/constraint_references/query'] = {"post":{"request":"QueryConstraintReferenceParameters","response":"QueryConstraintReferencesResponse"}};
paths['/dss/v1/constraint_references/{entityid}'] = {"get":{"response":"GetConstraintReferenceResponse"},"put":{"request":"PutConstraintReferenceParameters","response":"ChangeConstraintReferenceResponse"}};
paths['/dss/v1/constraint_references/{entityid}/{ovn}'] = {"put":{"request":"PutConstraintReferenceParameters","response":"ChangeConstraintReferenceResponse"},"delete":{"response":"ChangeConstraintReferenceResponse"}};
paths['/dss/v1/subscriptions/query'] = {"post":{"request":"QuerySubscriptionParameters","response":"QuerySubscriptionsResponse"}};
paths['/dss/v1/subscriptions/{subscriptionid}'] = {"get":{"response":"GetSubscriptionResponse"},"put":{"request":"PutSubscriptionParameters","response":"PutSubscriptionResponse"}};
paths['/dss/v1/subscriptions/{subscriptionid}/{version}'] = {"put":{"request":"PutSubscriptionParameters","response":"PutSubscriptionResponse"},"delete":{"response":"DeleteSubscriptionResponse"}};
paths['/dss/v1/reports'] = {"post":{"request":"ErrorReport","response":"ErrorReport"}};
paths['/dss/v1/uss_availability/{uss_id}'] = {"put":{"request":"SetUssAvailabilityStatusParameters","response":"UssAvailabilityStatusResponse"},"get":{"response":"UssAvailabilityStatusResponse"}};
paths['/uss/v1/operational_intents/{entityid}'] = {"get":{"response":"GetOperationalIntentDetailsResponse"}};
paths['/uss/v1/operational_intents/{entityid}/telemetry'] = {"get":{"response":"GetOperationalIntentTelemetryResponse"}};
paths['/uss/v1/operational_intents'] = {"post":{"request":"PutOperationalIntentDetailsParameters"}};
paths['/uss/v1/constraints/{entityid}'] = {"get":{"response":"GetConstraintDetailsResponse"}};
paths['/uss/v1/constraints'] = {"post":{"request":"PutConstraintDetailsParameters"}};
paths['/uss/v1/reports'] = {"post":{"request":"ErrorReport","response":"ErrorReport"}};
paths['/uss/v1/log_sets/{log_set_id}'] = {"get":{"response":"USSLogSet"}};

checks['UUIDv4Format'] = "#string";
checks['EntityID'] = "checks['UUIDv4Format']";
checks['EntityOVN'] = "#string";
checks['SubscriptionID'] = "checks['UUIDv4Format']";
checks['Key'] = "#[] checks['EntityOVN']";
checks['Time'] = {"value":"#string","format":"#string"};
checks['Radius'] = {"value":"#number","units":"#string"};
checks['Altitude'] = {"value":"#number","reference":"#string","units":"#string"};
checks['Latitude'] = "#number";
checks['Longitude'] = "#number";
checks['Polygon'] = {"vertices":"#[] checks['LatLngPoint']"};
checks['LatLngPoint'] = {"lng":"#(checks['Longitude'])","lat":"#(checks['Latitude'])"};
checks['Circle'] = {"center":"#(checks['LatLngPoint'])","radius":"#(checks['Radius'])"};
checks['Volume3D'] = {"outline_circle":"#(checks['Circle'])","outline_polygon":"#(checks['Polygon'])","altitude_lower":"#(checks['Altitude'])","altitude_upper":"#(checks['Altitude'])"};
checks['Volume4D'] = {"volume":"#(checks['Volume3D'])","time_start":"##(checks['Time'])","time_end":"##(checks['Time'])"};
checks['ErrorResponse'] = {"message":"#string"};
checks['SubscriptionState'] = {"subscription_id":"#(checks['SubscriptionID'])","notification_index":"#(checks['SubscriptionNotificationIndex'])"};
checks['SubscriberToNotify'] = {"subscriptions":"#[] checks['SubscriptionState']","uss_base_url":"#(checks['SubscriptionUssBaseURL'])"};
checks['Subscription'] = {"id":"#(checks['SubscriptionID'])","version":"#string","notification_index":"#(checks['SubscriptionNotificationIndex'])","time_start":"##(checks['Time'])","time_end":"##(checks['Time'])","uss_base_url":"#(checks['SubscriptionUssBaseURL'])","notify_for_operational_intents":"##boolean","notify_for_constraints":"##boolean","implicit_subscription":"##boolean","dependent_operational_intents":"##[] checks['EntityID']"};
checks['SubscriptionNotificationIndex'] = "#number";
checks['QuerySubscriptionParameters'] = {"area_of_interest":"#(checks['Volume4D'])"};
checks['QuerySubscriptionsResponse'] = {"subscriptions":"#[] checks['Subscription']"};
checks['GetSubscriptionResponse'] = {"subscription":"#(checks['Subscription'])"};
checks['PutSubscriptionParameters'] = {"extents":"#(checks['Volume4D'])","uss_base_url":"#(checks['SubscriptionUssBaseURL'])","notify_for_operational_intents":"##boolean","notify_for_constraints":"##boolean"};
checks['SubscriptionUssBaseURL'] = "checks['UssBaseURL']";
checks['PutSubscriptionResponse'] = {"subscription":"#(checks['Subscription'])","operational_intent_references":"##[] checks['OperationalIntentReference']","constraint_references":"##[] checks['ConstraintReference']"};
checks['DeleteSubscriptionResponse'] = {"subscription":"#(checks['Subscription'])"};
checks['UssBaseURL'] = "#string";
checks['OperationalIntentState'] = "#string";
checks['OperationalIntentReference'] = {"id":"#(checks['EntityID'])","manager":"#string","uss_availability":"#(checks['UssAvailabilityState'])","version":"#number","state":"#(checks['OperationalIntentState'])","ovn":"##(checks['EntityOVN'])","time_start":"#(checks['Time'])","time_end":"#(checks['Time'])","uss_base_url":"#(checks['OperationalIntentUssBaseURL'])","subscription_id":"#(checks['SubscriptionID'])"};
checks['OperationalIntentUssBaseURL'] = "checks['UssBaseURL']";
checks['PutOperationalIntentReferenceParameters'] = {"extents":"#[] checks['Volume4D']","key":"##(checks['Key'])","state":"#(checks['OperationalIntentState'])","uss_base_url":"#(checks['OperationalIntentUssBaseURL'])","subscription_id":"##(checks['EntityID'])","new_subscription":"##(checks['ImplicitSubscriptionParameters'])"};
checks['ImplicitSubscriptionParameters'] = {"uss_base_url":"#(checks['SubscriptionUssBaseURL'])","notify_for_constraints":"##boolean"};
checks['GetOperationalIntentReferenceResponse'] = {"operational_intent_reference":"#(checks['OperationalIntentReference'])"};
checks['ChangeOperationalIntentReferenceResponse'] = {"subscribers":"#[] checks['SubscriberToNotify']","operational_intent_reference":"#(checks['OperationalIntentReference'])"};
checks['QueryOperationalIntentReferenceParameters'] = {"area_of_interest":"#(checks['Volume4D'])"};
checks['QueryOperationalIntentReferenceResponse'] = {"operational_intent_references":"#[] checks['OperationalIntentReference']"};
checks['ConstraintReference'] = {"id":"#(checks['EntityID'])","manager":"#string","uss_availability":"#(checks['UssAvailabilityState'])","version":"#number","ovn":"##(checks['EntityOVN'])","time_start":"#(checks['Time'])","time_end":"#(checks['Time'])","uss_base_url":"#(checks['ConstraintUssBaseURL'])"};
checks['ConstraintUssBaseURL'] = "checks['UssBaseURL']";
checks['PutConstraintReferenceParameters'] = {"extents":"#[] checks['Volume4D']","uss_base_url":"#(checks['ConstraintUssBaseURL'])"};
checks['GetConstraintReferenceResponse'] = {"constraint_reference":"#(checks['ConstraintReference'])"};
checks['ChangeConstraintReferenceResponse'] = {"subscribers":"#[] checks['SubscriberToNotify']","constraint_reference":"#(checks['ConstraintReference'])"};
checks['QueryConstraintReferenceParameters'] = {"area_of_interest":"#(checks['Volume4D'])"};
checks['QueryConstraintReferencesResponse'] = {"constraint_references":"#[] checks['ConstraintReference']"};
checks['AirspaceConflictResponse'] = {"message":"#string","missing_operational_intents":"#[] checks['OperationalIntentReference']","missing_constraints":"#[] checks['ConstraintReference']"};
checks['OperationalIntentDetails'] = {"volumes":"#[] checks['Volume4D']","off_nominal_volumes":"#[] checks['Volume4D']","priority":"#(checks['Priority'])"};
checks['Priority'] = "#number";
checks['OperationalIntent'] = {"reference":"#(checks['OperationalIntentReference'])","details":"#(checks['OperationalIntentDetails'])"};
checks['PutOperationalIntentDetailsParameters'] = {"operational_intent_id":"#(checks['EntityID'])","operational_intent":"##(checks['OperationalIntent'])","subscriptions":"#[] checks['SubscriptionState']"};
checks['GetOperationalIntentDetailsResponse'] = {"operational_intent":"#(checks['OperationalIntent'])"};
checks['ConstraintDetails'] = {"volumes":"#[] checks['Volume4D']","type":"##string","geozone":"##(checks['GeoZone'])"};
checks['Constraint'] = {"reference":"#(checks['ConstraintReference'])","details":"#(checks['ConstraintDetails'])"};
checks['PutConstraintDetailsParameters'] = {"constraint_id":"#(checks['EntityID'])","constraint":"##(checks['Constraint'])","subscriptions":"#[] checks['SubscriptionState']"};
checks['GetConstraintDetailsResponse'] = {"constraint":"#(checks['Constraint'])"};
checks['GetOperationalIntentTelemetryResponse'] = {"operational_intent_id":"#(checks['EntityID'])","telemetry":"##(checks['VehicleTelemetry'])","next_telemetry_opportunity":"##(checks['Time'])"};
checks['VehicleTelemetry'] = {"time_measured":"#(checks['Time'])","position":"##(checks['Position'])","velocity":"##(checks['Velocity'])"};
checks['PositionAccuracyVertical'] = "#string";
checks['PositionAccuracyHorizontal'] = "#string";
checks['Position'] = {"longitude":"#(checks['Longitude'])","latitude":"#(checks['Latitude'])","accuracy_h":"#(checks['PositionAccuracyHorizontal'])","accuracy_v":"#(checks['PositionAccuracyVertical'])","extrapolated":"#boolean","altitude":"#(checks['Altitude'])"};
checks['Velocity'] = {"speed":"#number","units_speed":"#string","track":"##number"};
checks['UssAvailabilityStatus'] = {"uss":"#string","availability":"#(checks['UssAvailabilityState'])"};
checks['UssAvailabilityState'] = "#string";
checks['SetUssAvailabilityStatusParameters'] = {"old_version":"#string","availability":"#(checks['UssAvailabilityState'])"};
checks['UssAvailabilityStatusResponse'] = {"version":"#string","status":"#(checks['UssAvailabilityStatus'])"};
checks['USSLogSet'] = {"messages":"#[] checks['ExchangeRecord']","operator_notifications":"#[] checks['UserNotificationRecord']","operator_inputs":"#[] checks['UserInputRecord']","operator_associations":"#[] checks['OperatorAssociation']","planning_attempts":"#[] checks['PlanningRecord']","operational_intent_positions":"#[] checks['OperationalIntentPositions']","constraint_provider_associations":"#[] checks['ConstraintProviderAssociation']"};
checks['ExchangeRecord'] = {"url":"#string","method":"#string","headers":["#string"],"recorder_role":"#string","request_time":"#(checks['Time'])","request_body":"##string","response_time":"##(checks['Time'])","response_body":"##string","response_code":"##number","problem":"##string"};
checks['ErrorReport'] = {"report_id":"##string","exchange":"#(checks['ExchangeRecord'])"};
checks['PositionRecord'] = {"time_received":"#(checks['Time'])","telemetry":"#(checks['VehicleTelemetry'])"};
checks['OperationalIntentPositions'] = {"positions":"##[] checks['PositionRecord']","operational_intent_id":"#(checks['EntityID'])"};
checks['PlanningRecord'] = {"time":"#(checks['Time'])","ovns":"#[] checks['EntityOVN']","missing_operational_intents":"##[] checks['EntityID']","missing_constraints":"##[] checks['EntityID']","operational_intent_id":"##(checks['EntityID'])","problem":"##string"};
checks['UserNotificationRecord'] = {"triggering_event_time":"#(checks['Time'])","notification_time":"#(checks['Time'])","notification_details":"##string","notification_triggering_event":"#string"};
checks['UserInputRecord'] = {"triggering_event_time":"#(checks['Time'])","operational_intent_id":"#(checks['EntityID'])","input_triggering_event":"#string","input_details":"##string"};
checks['OperatorAssociation'] = {"operational_intent_id":"#(checks['EntityID'])","operator_id":"#string"};
checks['ConstraintProviderAssociation'] = {"constraint_id":"#(checks['EntityID'])","constraint_provider_id":"#string"};
checks['GeoZone'] = {"identifier":"#(checks['CodeZoneIdentifierType'])","country":"#(checks['CodeCountryISOType'])","zone_authority":"#[] checks['Authority']","name":"##(checks['TextShortType'])","type":"#(checks['CodeZoneType'])","restriction":"#(checks['CodeRestrictionType'])","restriction_conditions":"##[] checks['ConditionExpressionType']","region":"##number","reason":"##[] checks['CodeZoneReasonType']","other_reason_info":"##string","regulation_exemption":"##(checks['CodeYesNoType'])","u_space_class":"##(checks['CodeUSpaceClassType'])","message":"##(checks['TextShortType'])","additional_properties":{}};
checks['CodeZoneIdentifierType'] = "#string";
checks['CodeCountryISOType'] = "#string";
checks['CodeZoneType'] = "#string";
checks['ConditionExpressionType'] = "#string";
checks['CodeRestrictionType'] = "#string";
checks['CodeZoneReasonType'] = "#string";
checks['CodeUSpaceClassType'] = "#string";
checks['CodeYesNoType'] = "#string";
checks['Authority'] = {"name":"#(checks['TextShortType'])","service":"#(checks['TextShortType'])","contact_name":"#(checks['TextShortType'])","site_url":"#(checks['TextShortType'])","email":"#(checks['TextShortType'])","phone":"#(checks['TextShortType'])","purpose":"#(checks['CodeAuthorityRole'])","interval_before":"#string"};
checks['CodeAuthorityRole'] = "#string";
checks['TextShortType'] = "#string";

samples['QueryOperationalIntentReferenceParameters'] = {"area_of_interest":{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}};
samples['QueryOperationalIntentReferenceResponse'] = {"operational_intent_references":[{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"state":"Accepted","time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm","subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39"}]};
samples['GetOperationalIntentReferenceResponse'] = {"operational_intent_reference":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"state":"Accepted","time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm","subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39"}};
samples['PutOperationalIntentReferenceParameters'] = {"extents":[{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}],"state":"Accepted","uss_base_url":"https://uss.example.com/utm"};
samples['ChangeOperationalIntentReferenceResponse'] = {"subscribers":[{"subscriptions":[{"subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","notification_index":0}],"uss_base_url":"https://uss.example.com/utm"}],"operational_intent_reference":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"state":"Accepted","time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm","subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39"}};
samples['QueryConstraintReferenceParameters'] = {"area_of_interest":{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}};
samples['QueryConstraintReferencesResponse'] = {"constraint_references":[{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm"}]};
samples['GetConstraintReferenceResponse'] = {"constraint_reference":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm"}};
samples['PutConstraintReferenceParameters'] = {"extents":[{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}],"uss_base_url":"https://uss.example.com/utm"};
samples['ChangeConstraintReferenceResponse'] = {"subscribers":[{"subscriptions":[{"subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","notification_index":0}],"uss_base_url":"https://uss.example.com/utm"}],"constraint_reference":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm"}};
samples['QuerySubscriptionParameters'] = {"area_of_interest":{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}};
samples['QuerySubscriptionsResponse'] = {"subscriptions":[{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","version":"","notification_index":0,"uss_base_url":"https://uss.example.com/utm"}]};
samples['GetSubscriptionResponse'] = {"subscription":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","version":"","notification_index":0,"uss_base_url":"https://uss.example.com/utm"}};
samples['PutSubscriptionParameters'] = {"extents":{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}},"uss_base_url":"https://uss.example.com/utm"};
samples['PutSubscriptionResponse'] = {"subscription":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","version":"","notification_index":0,"uss_base_url":"https://uss.example.com/utm"}};
samples['DeleteSubscriptionResponse'] = {"subscription":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","version":"","notification_index":0,"uss_base_url":"https://uss.example.com/utm"}};
samples['ErrorReport'] = {"exchange":{"url":"","method":"","recorder_role":"Client","request_time":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"}}};
samples['SetUssAvailabilityStatusParameters'] = {"old_version":"","availability":"Unknown"};
samples['UssAvailabilityStatusResponse'] = {"version":"","status":{"uss":"","availability":"Unknown"}};
samples['GetOperationalIntentDetailsResponse'] = {"operational_intent":{"reference":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"state":"Accepted","time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm","subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39"},"details":{"volumes":[{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}],"off_nominal_volumes":[{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}],"priority":0}}};
samples['GetOperationalIntentTelemetryResponse'] = {"operational_intent_id":"03e5572a-f733-49af-bc14-8a18bd53ee39"};
samples['PutOperationalIntentDetailsParameters'] = {"operational_intent_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","subscriptions":[{"subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","notification_index":0}]};
samples['GetConstraintDetailsResponse'] = {"constraint":{"reference":{"id":"03e5572a-f733-49af-bc14-8a18bd53ee39","manager":"uss1","uss_availability":"Unknown","version":1,"time_start":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"time_end":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"uss_base_url":"https://uss.example.com/utm"},"details":{"volumes":[{"volume":{"outline_circle":{"center":{"lng":-118.456,"lat":34.123},"radius":{"value":300.183,"units":"M"}},"outline_polygon":{"vertices":[{"lng":-118.456,"lat":34.123}]},"altitude_lower":{"value":0.0,"reference":"W84","units":"M"},"altitude_upper":{"value":0.0,"reference":"W84","units":"M"}}}]}}};
samples['PutConstraintDetailsParameters'] = {"constraint_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","subscriptions":[{"subscription_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","notification_index":0}]};
samples['USSLogSet'] = {"messages":[{"url":"","method":"","recorder_role":"Client","request_time":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"}}],"operator_notifications":[{"triggering_event_time":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"notification_time":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"notification_triggering_event":"GEN0400"}],"operator_inputs":[{"triggering_event_time":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"operational_intent_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","input_triggering_event":"OPIN0040"}],"operator_associations":[{"operational_intent_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","operator_id":""}],"planning_attempts":[{"time":{"value":"1985-04-12T23:20:50.52Z","format":"RFC3339"},"ovns":["9d158f59-80b7-4c11-9c0c-8a2b4d936b2d"]}],"operational_intent_positions":[{"operational_intent_id":"03e5572a-f733-49af-bc14-8a18bd53ee39"}],"constraint_provider_associations":[{"constraint_id":"03e5572a-f733-49af-bc14-8a18bd53ee39","constraint_provider_id":""}]};

context.read('rules.js');

if (!handle()) response.status = 404;