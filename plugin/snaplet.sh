#!/bin/bash
# curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

# export PATH=/opt/buildhome/.local/bin/:$PATH

# snaplet db create $HEAD --latest &> "/dev/null"
# snaplet db url plugin

curl -X PATCH "https://api.netlify.com/api/v1/accounts/$ACCOUNT_ID/env/DATABASE_URL?site_id=$SITE_ID" -d '{"context": "branch", "context_parameter": "test", "value": "This works"}' -H "Content-Type: application/json" -H "Authorization: Bearer $API_ACCESS_TOKEN"



