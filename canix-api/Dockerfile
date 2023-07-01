FROM ruby:3.0.0-alpine

RUN apk update \
    && apk upgrade \
    && apk add --no-cache \
            nodejs \
            build-base \
            libxml2-dev \
            libxslt-dev \
            postgresql \
            postgresql-dev \
            git curl \
            openssh-client \
            tzdata \
            bash \
            git \
            shared-mime-info \
            curl

RUN mkdir /app
WORKDIR /app

COPY . ./


RUN gem install bundler
RUN bundle install
