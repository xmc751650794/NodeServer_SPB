#!/bin/bash

#lsof -i:7022|awk '{print $2}'|xargs kill 
#forever stop ./bin/www
forever restart -a ./bin/www
