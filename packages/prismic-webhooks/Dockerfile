# context: <root>

###
# BUILD
#
# Installs not dependenceis
###
FROM node:18-buster AS base

WORKDIR /app

COPY package.json .
COPY yarn.lock .

COPY packages/eslint-config/package.json /app/packages/eslint-config/package.json
COPY packages/tsconfig/package.json /app/packages/tsconfig/package.json
COPY packages/xray-lambda/package.json /app/packages/xray-lambda/package.json
COPY packages/prismic-webhooks/package.json /app/packages/prismic-webhooks/package.json



###
# BUILD
#
# Compiles the application from TypeScript to executable in JavaScript
###
FROM base AS build

RUN yarn install --pure-lockfile --non-interactive

COPY packages/tsconfig/ /app/packages/tsconfig
COPY packages/xray-lambda/ /app/packages/xray-lambda
COPY packages/prismic-webhooks/ /app/packages/prismic-webhooks

WORKDIR /app/packages/xray-lambda
RUN yarn build

WORKDIR /app/packages/prismic-webhooks
RUN yarn build



###
# DEPS
# Installs production-only dependencies and adds aws-lambda-ric
###

FROM base AS deps

RUN yarn install --pure-lockfile --non-interactive --production



###
# DIST
# The distributable docker image
###

FROM public.ecr.aws/lambda/nodejs:18 AS dist
EXPOSE 8080

COPY --from=deps \
  /app/node_modules \
  ${LAMBDA_TASK_ROOT}/node_modules

COPY --from=build \
  /app/packages/xray-lambda/package.json \
  ${LAMBDA_TASK_ROOT}/packages/xray-lambda/package.json

COPY --from=build \
  /app/packages/xray-lambda/dist \
  ${LAMBDA_TASK_ROOT}/packages/xray-lambda/dist

COPY --from=build \
  /app/packages/prismic-webhooks/dist \
  ${LAMBDA_TASK_ROOT}/packages/prismic-webhooks/dist

CMD ["packages/prismic-webhooks/dist/lambda.handler"]
