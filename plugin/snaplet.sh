#!/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash

export PATH=/opt/buildhome/.local/bin/:$PATH

echo $SNAPLET_PROJECT_ID
echo $SNAPLET_ACCESS_TOKEN

snaplet db create plugin 

