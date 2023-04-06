@echo off
title Tivo Download Service Web Client
SET NPM_PATH=%CD%\runtime
set NODE_PATH=%CD%\runtime\node_modules;%NODE_PATH%
%NPM_PATH%\node.exe server.js