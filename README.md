# lorenzoajo.github.io
---


Since github allow you to have a personal website hosted for free I created one to try `Zola`.

### Zola
Them used https://www.getzola.org/themes/particle/

# HOW TO RUN
---

### For local development change in config.toml
Or it will not run
```
base_url = "https://localhost:8080"
# base_url = "https://lorenzoajo.github.io/"
```
### how to run for local dev with docker container (with hot reload in refresh)
```bash
docker run  -v $PWD:/app --workdir /app -p 8080:8080 -p 1024:1024 --name zola ghcr.io/getzola/zola:v0.17.1 serve --interface 0.0.0.0 --port 8080 --base-url localhost
```

### how build to dist with docker container and publish it on github
This will put the result in the `/public` folder overriding the entire content.
Then copy it to the `/docs` folder to have it published by github.
The repository is set up to publish stuff from `master branch` `/docs` folder
```bash
docker run -v $PWD:/app --workdir /app --name zola-build-container ghcr.io/getzola/zola:v0.17.1 build --base-url $DEPLOY_URL "https://lorenzoajo.github.io/" \
&& cp -r ./public/** ./docs/
```
