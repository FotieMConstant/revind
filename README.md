<h1><p align="center">Revind</p></h1>
<p align="center">tailwindcss but the logic is covered</p>

A frontend UI Component framework supporting most of the major frontend UI frameworks including React, Vue

Revind is [tailwindcss](https://tailwindcss.com/) based. It gives the full power to styling. Also creating unique styles in revind is unbelievably easy using global **StyleObjects**. Giving full power to modifying the style of the components in any state. Also because its tailwindcss based thus gives out of the box modularity

## Project structure

| name                                                                                                                         | description                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [@revind/react](https://github.com/FotieMConstant/revind/tree/master/packages/react)                                         | react components                                                          |
| [@revind/vue](https://github.com/FotieMConstant/revind/tree/master/packages/vue)                                             | vue components                                                            |
| [@revind/styles](https://github.com/FotieMConstant/revind/tree/master/packages/styles)                                       | default style objects                                                     |
| [@revind/tailwindcss-preset-revind](https://github.com/FotieMConstant/revind/tree/master/packages/tailwindcss-preset-revind) | framework specific tailwindcss configuration                              |
| [@revind/types](https://github.com/FotieMConstant/revind/tree/master/packages/types)                                         | cross framework component specific props & style-object type declarations |

## Installation

Make sure [Nodejs](https://nodejs.org/) v12+, [tailwindcss](https://tailwindcss.com/docs/installation) is installed & configured
**React:**

```bash
$ npm i @revind/react @revind/styles && npm i -D @revind/tailwindcss-preset-revind
```

using yarn

```bash
$ yarn add @revind/react @revind/styles && yarn add -D @revind/tailwindcss-preset-revind
```

**Vue:**

```bash
$ npm i @revind/vue @revind/styles && npm i -D @revind/tailwindcss-preset-revind
```

using yarn

```bash
$ yarn add @revind/vue @revind/styles && yarn add -D @revind/tailwindcss-preset-revind
```

## Docs

Docs are located in [revind.vercel.app](http://revind.vercel.app/). Visit it to learn more about revind

## Contribution

**Contributors needed!**
Any kind contribution related to this project & following all the instructions/rules defined in [CONTRIBUTION.md](/CONTRIBUTION.md) are warmly accepted

Currently this projects needs your support. We need some **reactjs, vuejs, sveltejs** developers who can willingly contribute to this Open-Source project
