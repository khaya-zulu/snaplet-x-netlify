# !/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/:$PATH

snaplet db create $HEAD --latest &> "/dev/null"
snaplet db url plugin


# TEST_ID="5f32ed791d8cb529d4cc2405"
# TEST_ACCESS_TOKEN="bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI"
 
# curl -X PATCH "https://api.netlify.com/api/v1/accounts/${TEST_ID}/env/DATABASE_URL?site_id=${SITE_ID}" -d '{"context": "branch", "context_parameter": "test", "value": "test"}' -H "Content-Type: application/json" -H "Authorization: Bearer ${TEST_ACCESS_TOKEN}"



