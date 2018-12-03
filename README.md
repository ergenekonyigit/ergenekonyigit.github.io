# ergenekonyigit.github.io

This repository hosts the source code of [Ergenekon Yigit](https://ergenekonyigit.github.io/) Blog.

## Local setup

1. Clone the repository and `cd` into it.
1. Install and use the [expected](https://github.com/ergenekonyigit/ergenekonyigit.github.io/blob/master/.nvmrc) Node.js version: `nvm use`
1. Install dependencies: `npm install`

`npm run` shows the full list of supported commands. Highlights:

- `npm run build` builds the site into `docs`.
- `npm run watch` builds the site into `docs` and watches for changes.
- `npm start` kicks off a local HTTP server.

### Additional Windows-specific instructions

`npm run` might trigger Unix-specific commands. If you are using a Linux-like environment on Windows like git bash, msys2, or Cygwin, then you must configure npm to use it. This replaces the default behavior of using `cmd.exe`. For example:

```sh
npm config set script-shell "C:\\Program Files\\git\\bin\\bash.exe"
```

…or:

```sh
npm config set script-shell "C:\\msys64\\usr\\bin\\sh.exe"
```

You still need to run `npm` with a `PATH` that includes Linux utilities like `mkdir` and `rm`. Practically, it should work if you run `npm` from your Linux-compatible shell.
