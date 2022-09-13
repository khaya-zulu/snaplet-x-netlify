# !/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

echo $PATH

export PATH=/opt/buildhome/.local/bin/snaplet/:$PATH

snaplet db create $HEAD --latest &> "/dev/null"
snaplet db url plugin