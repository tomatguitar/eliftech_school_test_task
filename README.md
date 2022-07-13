# WEB DELIVERY

Test task for ElifTech School - Web application where users can order food delivery

## DEMO

[WEB DELIVERY](https://develop--cute-profiterole-3e722e.netlify.app/)

## PREPARATION

Check that you have node and npm installed in terminal.
`$ node -v`
`$ npm -v`

If you doesn't have packages follow the instructions on this [link](https://nodejs.org/en/download/package-manager/).

Before running project on local machine replace urls in project's files:

- client/src/store/actions/cart-actions.js on line 7:
    from
    `https://webdelivery.herokuapp.com/api/orders`
    to
    `/api/orders`

- client/src/store/actions/shop-actions.js on line 7
    from 
    `https://webdelivery.herokuapp.com/api/shops/${shopId}`
    to 
    `/api/shops/${shopId}`
## INSTALLATION STRATEGIES

Install packages with the command:
`$ npm install`

If you are installing app under the Windows environment there probably will be error. In this case replace the line in the package.json file located in the root of the project from this

`"postinstall": "(cd client && npm install && npm run build); (cd server && npm install)"`

to the following one

`"postinstall": "(cd client && npm install && npm run build) && (cd ../server && npm install)"`

And re-run <code>npm install</code>.

In case install script continues to fail, sequentially run:

```sh
$ npm install
$ cd client
$ npm install
$ cd ../server
$ npm install
```

## RUN

Run project with the command
`$ npm run start:dev`