#!/bin/bash
curl -sL https://app.snaplet.dev/get-cli/ | bash
export PATH=/opt/buildhome/.local/bin/:$PATH

snaplet db create plugin --latest

clear
echo -en "Hello world"

