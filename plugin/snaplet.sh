#!/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash

export PATH=/opt/buildhome/.local/bin/:$PATH

echo "test"
echo $CONTEXT

env

snaplet db create plugin 

