FROM denoland/deno:1.12.2
WORKDIR /app
COPY . .

RUN deno cache app.ts

CMD ["run", "--allow-net", "app.ts"]