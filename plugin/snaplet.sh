# !/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/snaplet:$PATH

/opt/buildhome/.local/bin/snaplet db create $HEAD --latest &> "/dev/null"
/opt/buildhome/.local/bin/snaplet db url plugin