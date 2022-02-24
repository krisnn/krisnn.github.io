# Nginx Docker image running on Alpine Linux

[![Docker Layers](https://img.shields.io/badge/docker%20layers-17-blue.svg?maxAge=2592000?style=flat-square)](https://hub.docker.com/r/yobasystems/alpine-redis/) [![Docker Size](https://img.shields.io/badge/docker%20size-15%20MB-blue.svg?maxAge=2592000?style=flat-square)](https://hub.docker.com/r/yobasystems/alpine-redis/) [![Docker Stars](https://img.shields.io/docker/stars/yobasystems/alpine-redis.svg?maxAge=2592000?style=flat-square)](https://hub.docker.com/r/yobasystems/alpine-redis/) [![Docker Pulls](https://img.shields.io/docker/pulls/yobasystems/alpine-redis.svg?maxAge=2592000?style=flat-square)](https://hub.docker.com/r/yobasystems/alpine-redis/)

[![Alpine Version](https://img.shields.io/badge/alpine%20version-v3.8.1-green.svg?maxAge=2592000?style=flat-square)](http://alpinelinux.org/) [![Redis Version](https://img.shields.io/badge/redis%20version-v5.0.2-green.svg?maxAge=2592000?style=flat-square)](https://redis.io/)



This Docker image [(yobasystems/alpine-redis)](https://hub.docker.com/r/yobasystems/alpine-redis/) is based on the minimal [Alpine Linux](http://alpinelinux.org/) with version 5.0.2 of [Redis](https://redis.io/)

##### Alpine Version 3.8.1 (Released September 11, 2018)
##### Redis Version 5.0.2

----

## What is Alpine Linux?
Alpine Linux is a Linux distribution built around musl libc and BusyBox. The image is only 5 MB in size and has access to a package repository that is much more complete than other BusyBox based images. This makes Alpine Linux a great image base for utilities and even production applications. Read more about Alpine Linux here and you can see how their mantra fits in right at home with Docker images.

## What is Redis?
Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.

## Features

  * Minimal size only
  * 15 MB and only 17 layers
  * Memory usage is minimal on a simple install


## Architectures

* ```:amd64```, ```:latest``` - 64 bit Intel/AMD (x86_64/amd64)
* ```:i386```, ```:x86``` - 32 bit Intel/AMD (x86/i686)
* ```:arm64v8```, ```:aarch64``` - 64 bit ARM (ARMv8/aarch64)
* ```:arm32v7```, ```:armhf``` - 32 bit ARM (ARMv7/armhf)

#### PLEASE CHECK TAGS BELOW FOR SUPPORTED ARCHITECTURES, THE ABOVE IS A LIST OF EXPLANATION

## Tags

* ```:latest```, ```:amd64``` latest branch based on amd64
* ```:master``` master branch usually inline with latest
* ```:v0.0.0``` version number related to docker version
* ```:armhf```, ```:arm32v7``` Armv7 based on latest tag but arm architecture
* ```:aarch64```, ```:arm64v8``` Armv8 based on latest tag but arm64 architecture


## Environment Variables:

## Creating an instance

To use this image include `FROM yobasystems/alpine-redis` at the top of your Dockerfile.

```bash
docker run --name redis -p 6379:6379 yobasystems/alpine-redis
```

To use persistent data , then use the volume var:

```bash
docker run --name redis -p 6379:6379 -v /data/redis:/data yobasystems/alpine-redis
```

## Docker Compose example:

```yalm
version: '2'
services:
redis:
  image: yobasystems/alpine-redis
  expose:
    - "6379"
  volumes:
    - /data/redis:/data
  restart: always
```

## Source Repository

* [Bitbucket - yobasystems/alpine-redis](https://bitbucket.org/yobasystems/alpine-redis/)

* [Github - yobasystems/alpine-redis](https://github.com/yobasystems/alpine-redis)

## Links

* [Yoba Systems](https://www.yobasystems.co.uk/)

* [Dockerhub - yobasystems](https://hub.docker.com/u/yobasystems/)

* [Quay.io - yobasystems](https://quay.io/organization/yobasystems)
