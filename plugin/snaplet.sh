# !/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/:$PATH

# which snaplet

# opt/buildhome/.local/bin/:$PATH db create $HEAD --latest &> "/dev/null"
# opt/buildhome/.local/bin/:$PATH db url plugin