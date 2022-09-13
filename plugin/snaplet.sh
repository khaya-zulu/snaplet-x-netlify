# !/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/:$PATH

ls

# snaplet db create $HEAD --latest &> "/dev/null"
# snaplet db url plugin