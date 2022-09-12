#!/bin/bash
# curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

# export PATH=/opt/buildhome/.local/bin/:$PATH

# snaplet db create $HEAD --latest &> "/dev/null"
# snaplet db url plugin

curl -X PATCH "https://api.netlify.com/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78" 
    -d '{"context": "branch", "context_parameter": "test", "value": "test"}' 
    -H "Content-Type: application/json" 
    -H "Authorization: Bearer bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI-vWyJk"



