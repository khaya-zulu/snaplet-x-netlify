#!/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash &> "/dev/null"

export PATH=/opt/buildhome/.local/bin/:$PATH

if [ "$DATABASE_RESET" == "false" ]
then
    $DATABASE_URL_COMMAND &> "/dev/null" || $DATABASE_CREATE_COMMAND >/dev/null 2>&1
else
    $DATABASE_CREATE_COMMAND >/dev/null 2>&1
fi

$DATABASE_URL_COMMAND >/dev/null 0>&1