curl --location --request POST 'https://us-west-2.aws.data.mongodb-api.com/app/data-jrhxc/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json' \
--header 'Access-Control-Request-Headers: *' \
--header 'api-key: 3KL2KTMqneoickwq7z9F1vvfFtFjZkVIE03hnb5Wmxss7FPPb7RhP5fCSdTS7ihI' \
--data-raw '{
    "collection":"Contacts",
    "database":"Contacts",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}'
