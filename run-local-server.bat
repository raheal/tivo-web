@echo off
rem this assumes that you have node 15.0.1 installed, alongside already running the command: "npm install --save express"
rem "ng build" needs to be run, to put the transpiled javascript into the dist/tivo-download-service-web folder.

call ng build --prod

call node server.js