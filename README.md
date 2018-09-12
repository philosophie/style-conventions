# Overview

Spice up your editor with tools that make conforming to styleguides fun and easy!

* [Convention Configuration](#convention-configuration)
* [Commandline](#commandline)
* [Atom](#atom)
* [VS Code](#vs-code)
* [Other](#other)

# Convention Configuration

Check the following files in the project, along with package defaults (ie prettier has 80 char default max-len) to determine the conventions

- tslint.json
- tsconfig.json
- .eslintrc.json
- .prettierrc
- .jsbeautifyrc
- .scss-lint.yml

#### NOTE: several of these files are overridden by atom config, but useful for commandline calls, and should reflect atom config

# Useful commandline stuff

#### Run prettier against an entire project

```
prettier --write "**/*"
```

#### Beautify html in entire project
```
js-beautify -r --config .jsbeautifyrc **/*.html
```

#### Lint scss in entire project
```
scss-lint -c .scss-lint.yml **/*.scss
```
Note this will only output issues and not modify files.

# Atom

## Setup Atom to use eslint, tslint, prettier, js-beautify, scss-lint, json-lint, etc

#### install some modules into project dev for when you call atom from commandline

```
npm install eslint-plugin-html eslint-config-prettier eslint-plugin-prettier tslint-config-prettier --dev
```

or

```
yarn add eslint-plugin-html eslint-config-prettier eslint-plugin-prettier tslint-config-prettier --dev
```

#### turn off nvm to install against system node version (so atom picks it up on startup)

`which node` should = /usr/local/bin/node

```
nvm deactivate
npm install -g typescript eslint tslint prettier eslint-plugin-html eslint-config-prettier eslint-plugin-prettier tslint-config-prettier js-beautify
```

check globally installed modules to verify the above

```
npm list --depth=0 -g
```

#### install other stuff

```
gem install scss_lint
```

#### install atom packages

```
apm install linter linter-eslint linter-tslint prettier-atom linter-scss-lint linter-json-lint atom-beautify
```

## Atom package settings

#### atom-beautify
- HTML
  - default beautifier: JS Beautify
  - beautify_on_save: true
  - end_with_newline: true
  - wrap_attributes: "force-aligned"
- scss
  - convert_quotes: "single"
  - default_beautifier: "Prettier"

#### linter-eslint

- disable when no eslint found
- lint html files
- show rule id in message
- use global eslint installation
- globalNodePath: "/usr/local"

#### linter-tslint

- try to use project tslint
- use global tslint install

#### prettier-atom

- eslint integration
- editor config integration
- format on save (all 3)
- only format if a prettier config file is found

#### linter-scss-lint

- disable when no eslint found

#### linter-json-lint
- allow comments

# VS Code:

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

```
  "[javascriptreact]": {
    "editor.rulers": [100],
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.rulers": [100],
    "editor.formatOnSave": true
  },
  "prettier.requireConfig": true
```

## Other

Tidbits for other environments (WIP)...

#### For sublime or IDE agnostic auto linting, install and setup the onchange package to watch for file changes like so:

```
https://prettier.io/docs/en/watching-files.html
```
