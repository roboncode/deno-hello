default:
	docker build -t deno-app .

run:
	deno run --allow-net app.ts 

serve:
	docker run -d -p 3000:3000 deno-app

compile:
	deno compile --allow-net app.ts

push:
	docker tag deno-app gcr.io/novo00/deno-app
	docker push grc.io/novo00/deno-app
