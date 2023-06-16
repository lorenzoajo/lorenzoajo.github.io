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

### how build to dist with docker container
```bash
docker run -v $PWD:/app --workdir --name zola-build-container /app ghcr.io/getzola/zola:v0.17.1 build
```
