#!/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/:$PATH

$DATABASE_CREATE_COMMAND &> "/dev/null"
$DATABASE_URL_COMMAND