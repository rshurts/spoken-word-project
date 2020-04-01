# Gatsby + Netlify CMS

[![Netlify Status](https://api.netlify.com/api/v1/badges/bb890475-9bca-479a-977f-561a9b8b7880/deploy-status)](https://app.netlify.com/sites/owt-spoken-word/deploys)

Built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org), following the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth and [Netlify](https://www.netlify.com) for continuous deployment and CDN distribution.

## Prerequisites

- Node v10
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

## Local development

```
$ yarn develop
```

### If using lambda functions

Clone a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ yarn
$ netlify dev # or ntl dev
```

This uses the new [Netlify Dev](https://www.netlify.com/products/dev/?utm_source=blog&utm_medium=netlifycms&utm_campaign=devex) CLI feature to serve any functions you have in the `lambda` folder.

To test the CMS locally, you'll need to run a production build of the site:

```
$ yarn build
$ netlify dev # or ntl dev
```

## Setting up the CMS

Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication and hosting.

## Debugging

Windows users might encounter `node-gyp` errors when trying to npm install.
To resolve, make sure that you have both Python 2.7 and the Visual C++ build environment installed.

```
npm config set python python2.7
npm install --global --production windows-build-tools
```

[Full details here](https://www.npmjs.com/package/node-gyp 'NPM node-gyp page')

MacOS users might also encounter some errors, for more info check [node-gyp](https://github.com/nodejs/node-gyp). We recommend using the latest stable node version.

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.
