# !/bin/bash
# curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

# export PATH=/opt/buildhome/.local/bin/:$PATH

# snaplet db create $HEAD --latest &> "/dev/null"
# snaplet db url plugin


TEST_ID="5f32ed791d8cb529d4cc2405"
TEST_ACCESS_TOKEN="bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI"
 
curl -X PATCH "https://api.netlify.com/api/v1/accounts/${TEST_ID}/env/DATABASE_URL?site_id=${SITE_ID}" -d '{"context": "branch", "context_parameter": "test", "value": "test"}' -H "Content-Type: application/json" -H "Authorization: Bearer ${TEST_ACCESS_TOKEN}"

# curl -X PATCH "https://api.netlify.com/api/v1/accounts/5f32ed791d8cb529d4cc2405/env/DATABASE_URL?site_id=00bb141f-89f8-46cf-8110-0543e6c20e78" -d '{"context": "branch", "context_parameter": "kz-testing", "value": "postgres://snaplet_x_netlify_user:V3OK6GWhQgpzhSOF7tlSboG57H4ko6CF@dpg-ccb002pa6gdmn7sdarl0-a.oregon-postgres.render.com/snaplet_x_netlify"}' -H "Content-Type: application/json" -H "Authorization: Bearer bnX08e9JhK_4DsgpjLbXS1PZPDrM3VZGhJ9SI-vWyJk"



