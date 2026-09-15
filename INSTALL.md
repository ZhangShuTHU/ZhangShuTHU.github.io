# Install

This site uses al-folio v1. See the [site README](README.md) for local preview commands and [AGENTS.md](AGENTS.md) for the customizations retained here.

The maintained general guide is [upstream INSTALL.md](https://github.com/alshedivat/al-folio/blob/main/docs/INSTALL.md). Keep this site's custom domain and empty `baseurl` when following upstream examples.

The [migration report](docs/migration-v1.html) records the runtime ownership changes and override audit.

If your network requires a trusted proxy CA, build with the optional secret below, substituting your certificate path. TLS verification stays enabled and the certificate is not stored in the image.

```sh
docker build --secret id=custom_ca,src=/path/to/trusted-ca.crt -t zhangshu-al-folio:v1 .
docker compose up --no-build
```
