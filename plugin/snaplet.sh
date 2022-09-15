#!/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/:$PATH

if [ "$DATABASE_RESET" == "false" ]
then
    $DATABASE_URL_COMMAND &> "/dev/null" || $DATABASE_CREATE_COMMAND &> "/dev/create"
else
    $DATABASE_CREATE_COMMAND &> "/dev/create"
fi

$DATABASE_URL_COMMAND &> "/dev/create"