#!/bin/bash

sed -i /auth/src/ep.config.json -e "s/\"scope\": \"vestri\"/\"scope\": \"$SCOPE\"/g"
sed -i /auth/src/ep.config.json -e "s/\"path\": \"\/cortex\"/\"path\": \"$CORTEX_URL\"/g"

