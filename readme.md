# BauhausJS

![CI Status](https://travis-ci.org/bauhausjs/bauhausjs.png)

BauhausJS is a modular CMS for NodeJS. BauhausJS is supported by [DigitalWerft](http://digitalwerft.com). This is an open source project and pull requests are welcome.

**The development is in very early stage and there's not much to see yet.** We plan to provide an beta by spring 2014 and be production ready until summer 2014.


## Modules

BauhausJS is based on node packages. These packages are spiced with dependency injection, provided by [Architect](https://github.com/c9/architect) from Cloud9. This allows each module to expose objects as services to other modules. Each module can define dependencies to other modules, which are injected to this module on load time.

Each module represents an self-containing application, which is added to a root server as middleware. Usually an module creates an express app, which is added to a root express app.

### Server

Provides an express server, which listens to port `1919` on default. All other middleware of other modules is added to this server. This pattern of multiple express servers is used to allow to define custom middleware for each route. 

### Frontend

Provides an express server, were all frontend middleware (e.g. render page) is added to. The frontend is mounted at root `/` by default.

### Backend 

Provides an express server were all backend middleware (e.g. manage page) is added to. The backend is mouted at server route `/backend` by default.

### Node

Module which provides frontend (rendering) and backend (mangement) functionality for pages.


