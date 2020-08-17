FROM node:alpine as builder

# ARG BACKEND_ADDR

WORKDIR /sources
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --production=true

COPY ./ ./
# ENV BACKEND_ADDR=$BACKEND_ADDR
ENV NODE_OPTIONS="--max-old-space-size=2048"
RUN yarn build

FROM nginx:1.15.8-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=builder /sources/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /sources/build .

EXPOSE 80
STOPSIGNAL SIGTERM
CMD ["nginx", "-g", "daemon off;"]