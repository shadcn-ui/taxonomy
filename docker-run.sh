#!/bin/sh -e

OPTS="-f ./docker/docker-compose.yml"

docker-compose $OPTS down --volumes
docker-compose $OPTS up -d db
docker-compose $OPTS up -d web
