ps -ef|grep www|awk '{print $2}'|xargs kill

#forever start -o out.log -e err.log ./bin/www
forever start -l forever.log -a ./bin/www
#nohup node ./bin/www &
