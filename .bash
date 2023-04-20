#!/bin/bash

clear ; cd "$(dirname "$0")"

install() {
	sudo apt install nodejs
	sudo apt install npm
}

version() {
	echo "node: $(node --version)"
	echo "npm: $(npm --version)"
}

init() {
	npm init -y
}

deps() {
	npm install --save-dev ts-node
	npm install --save-dev nodemon
}

start() {
	npm start
}

if [ ${#} -eq 0 ] ; then
	echo -e "Usage: ${0} [COMMANDS]\nAvailable commands:"
	cat `basename ${0}` | grep '^[^#]*()\s{' | while read COMMAND ; do echo " - ${COMMAND::-4}" ; done
else
	for COMMAND in "${@}" ; do "${COMMAND}" ; done
fi
