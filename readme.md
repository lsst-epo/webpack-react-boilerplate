## Webpack 4, Babel 7, React boilerplate

<!-- <p align="center">
    <img alt="dependencies" title="dependencies" src="https://img.shields.io/blnkt/webpack-react-boilerplate.svg" >
   <img alt="activity" title="activity" src="https://img.shields.io/github/last-update/blnkt/webpack-react-boilerplate.svg" >
</p> -->

> Minimal webpack and react boilerplate using latest version of react and babel as well as jest and enzyme for testing.
> [For more details about technologies used.](#technologies-used)

> Based on Hashem Khalifa's [starter project](https://github.com/HashemKhalifa/webpack-react-boilerplate). Read their [Medium article](https://medium.com/@hashem.khalifa/minimal-webpack-and-react-starter-boilerplate-seriously-d90a673e134f) for more details on the inspiration for this boilerplate.

### Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Technologies used](#technologies-used)

### Project structure

```
build/
src/
|- index.jsx _______________________________ # application entry
|- App.jsx _________________________________ # application init
|  |- components/
|    |- hello-world/
|       |- index.jsx _______________________ # sample component
|  |- assets/
|    |- images/
|       |- lsst_logo_small.png _____________ # sample Logo
|    |- stylesheets/
|       |- STACSS/ _____________ # global Structure, Typography, and Appearance styles
|       |- components/
|          |- hello-world/
|             |- index.scss _____________ # sample component styles
```

### Installation

1- Clone the repo: `git clone https://github.com/lsst-epo/webpack-react-boilerplate.git`

2- Install npm packages: `yarn` (or `npm install`)

3- Start dev server: `yarn start` (or `npm start`)

4- Unit testing will watch all your changes in the test files as well as create coverage folder: `yarn test` (or `npm test`)

5- Lint Javascript and Styles: `yarn precommit` (or `npm precommit`)

6- Build and bundle assets for production: `yarn build` (or `npm build`)

### Configuration

```
Webpack
|- webpack.config.js _______________________ # merging common and environment specific configs
|- paths.js ________________________________ # Webpack paths needed
|- webpack.common.js _______________________ # common Webpack config
|- webpack.dev.js __________________________ # development config
|- webpack.prod.js _________________________ # production config

BrowserList
|- .browserlistrc __________________________ # BrowserList config

Babel
|- babel.config.js _________________________ # Babel config

PostCSS
|- postcss.config.js _______________________ # PostCSS config

linting
|- .eslintrc _______________________________ # ESlint rules to apply
|- .eslintignore ___________________________ # what not to ESlint
|- .prettierrc _____________________________ # Prettier config
|- .stylelintrc ____________________________ # Stylelint config

testing
|- setupTests.js _______________________________ # Enzyme config

IDE
|- .editorconfig ___________________________ # coding styles definitions

git
|- .gitignore ______________________________ # what not to track
|- .PULL_REQUEST_TEMPLATE.md _______________ # if you want to provide a PR template
```

#### Technologies used

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel) [ transforming JSX and ES6,ES7,ES8 ]
- [React](https://github.com/facebook/react) `16.8`
- [Lodash](https://github.com/lodash/lodash)
- [Jest](https://github.com/facebook/jest) [ Unit test]
- [Enzyme](http://airbnb.io/enzyme/) for UI testing.
- [Eslint](https://github.com/eslint/eslint/) with airbnb config
- [Stylelint](https://stylelint.io/) for linting SCSS/CSS
- [Prettier](https://github.com/prettier/prettier) [ Code formatter ]
- [EditorConfig](https://editorconfig.org/) [ Code Style definitions ]
- [STACSS](https://github.com/castiron/STACSS) [ SCSS architecture ]
- [Style](https://github.com/webpack-contrib/style-loader) & [CSS Loader](https://github.com/webpack-contrib/css-loader) & [SASS-loader](https://github.com/webpack-contrib/sass-loader) & [PostCSS](https://github.com/postcss/postcss) with [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Browsers list](https://github.com/browserslist/browserslist) [ Share target browsers between different front-end tools, like Autoprefixer, Stylelint and babel-preset-env ]
- [React hot loader](https://github.com/gaearon/react-hot-loader)
- [Webpack dev server](https://github.com/webpack/webpack-dev-server)
