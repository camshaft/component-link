component-link
==============

Local package linking for [component](https://github.com/component/component)

Installation
------------

```sh
$ npm install -g component-link
```

`NOTE` You'll need component installed before executing any commands

```sh
$ npm install -g component
```

Usage
-----

`component-link` functions similarly to [npm link](https://npmjs.org/doc/cli/npm-link.html).

### Register a package globally

First we need to tell `component-link` where to resolve a component.

```sh
$ pwd
~/components/my-awesome-component

$ component link

        link : CamShaft/my-awesome-component
    complete : /usr/local/lib/node_modules/component-link/.registry/CamShaft-my-awesome-component

```

### Linking a registered component

Now we can link the registered package into another

```sh
$ pwd
~/projects/my-app

$ component link CamShaft/my-awesome-component

        link : CamShaft/my-awesome-component
    complete : /usr/local/lib/node_modules/component-link/.registry/CamShaft-my-awesome-component -> CamShaft-my-awesome-component

```
