# !/bin/bash
export PATH=/opt/buildhome/.local/bin/:$PATH

curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

ls

# snaplet db create $HEAD --latest &> "/dev/null"
# snaplet db url plugin