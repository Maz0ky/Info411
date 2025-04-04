FROM php:8.3-apache

RUN apt update && apt upgrade -y &&  apt install -y git vim nano curl wget telnet links

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN cp "$PHP_INI_DIR/php.ini-production" "$PHP_INI_DIR/php.ini"

WORKDIR /var/www/

RUN git clone https://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@github.com/Maz0ky/Info411.git html

WORKDIR /var/www/html

EXPOSE 80