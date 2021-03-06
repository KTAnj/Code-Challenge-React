#!/bin/bash
set -e
if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

if [ ! -f "back-end/.env" ]; then
  printf "\033[0;31m.env file is missing. Please create a .env file according to format of .env.example file\033[0m\n"
  exit;
fi

name=$1
if [[ -n "$name" ]]; then
  name="--$name"
fi
docker-compose up -d ${name} nginx
wait
docker-compose up -d ${name} php
wait
docker-compose up -d --build front-end
wait
docker exec -i close_cross_project_php_1 /var/www/html/composer.phar install
docker exec -i close_cross_project_php_1 php /var/www/html/artisan cache:clear
docker exec -i close_cross_project_php_1 php /var/www/html/artisan config:clear
docker exec -i close_cross_project_php_1 php /var/www/html/artisan route:clear
wait

echo "All services are up.... Development server started: http://localhost:4000"
