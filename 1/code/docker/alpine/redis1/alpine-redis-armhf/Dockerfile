FROM yobasystems/alpine:3.8.1-armhf
LABEL maintainer "Dominic Taylor <dominic@yobasystems.co.uk>" architecture="arm32v7/armhf" version="5.0.2" alpineversion="3.8.1" build="29-nov-2018"

RUN addgroup -S redis && adduser -S -G redis redis

RUN apk add --no-cache su-exec tzdata

ENV REDIS_VERSION 5.0.2
ENV REDIS_DOWNLOAD_URL http://download.redis.io/releases/redis-5.0.2.tar.gz
ENV REDIS_DOWNLOAD_SHA 937dde6164001c083e87316aa20dad2f8542af089dfcb1cbb64f9c8300cd00ed

RUN set -ex; \
	\
	apk add --no-cache --virtual .build-deps \
	coreutils gcc jemalloc-dev linux-headers make musl-dev ; \
	\
	wget -O redis.tar.gz "$REDIS_DOWNLOAD_URL"; \
	echo "$REDIS_DOWNLOAD_SHA *redis.tar.gz" | sha256sum -c -; \
	mkdir -p /usr/src/redis; \
	tar -xzf redis.tar.gz -C /usr/src/redis --strip-components=1; \
	rm redis.tar.gz; \
	\
	grep -q '^#define CONFIG_DEFAULT_PROTECTED_MODE 1$' /usr/src/redis/src/server.h; \
	sed -ri 's!^(#define CONFIG_DEFAULT_PROTECTED_MODE) 1$!\1 0!' /usr/src/redis/src/server.h; \
	grep -q '^#define CONFIG_DEFAULT_PROTECTED_MODE 0$' /usr/src/redis/src/server.h; \
	\
	make -C /usr/src/redis -j "$(nproc)"; \
	make -C /usr/src/redis install; \
	\
	rm -r /usr/src/redis; \
	\
	runDeps="$( \
		scanelf --needed --nobanner --format '%n#p' --recursive /usr/local \
			| tr ',' '\n' \
			| sort -u \
			| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)"; \
	apk add --virtual .redis-rundeps $runDeps; \
	apk del .build-deps; \
	\
	redis-server --version

RUN mkdir /data && chown redis:redis /data
VOLUME /data
WORKDIR /data

COPY files/docker-entrypoint.sh /usr/local/bin/
ENTRYPOINT ["docker-entrypoint.sh"]

EXPOSE 6379
CMD ["redis-server"]
