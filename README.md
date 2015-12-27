# Webpack code splitting experiment
Code splitting experiment using Webpack, React-router, and Flummox

The code splitting is being handle in the router definition which happen to be in this case ```core/Root.js```
Separate child routes bundle.js module dependencies will load on demand when the match route is open for the first time. See definition example here:
```eg. src/modules/message/index```

## Quick start
```npm install``` - install project dependencies

```npm start``` - run webpack-dev-server on localhost:3000

```npm run build``` - build bundles to ```/dist```

Open network tab in web inspector, Go to localhost:3000, navigate through available links.

## Resources
See React Router 1.0 [Dynamic Routing](https://github.com/rackt/react-router/blob/master/docs/guides/advanced/DynamicRouting.md) and [getComponents](https://github.com/rackt/react-router/blob/master/docs/API.md#getcomponentslocation-callback)

