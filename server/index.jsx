import fs from 'fs';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from 'routes';
import serverRoutes from 'server/routes';
import { makeStore } from 'helpers';
import { Provider } from 'react-redux';
import { setItems, setCart } from 'actions/ProductsActions';

// 连接数据库Postgre
// import 'server/model/Postgre'

import items from 'server/mock/fake-database-items.js';
import cart from 'server/mock/fake-database-cart.js';

global.isBrowser = false;

var app = express();

app.use(bodyParser.json());
app.use(express.static('_public'));

// 初始化服务端路由信息，这部分路由仅用于异步请求
serverRoutes(app);

app.use((req, res) => {
    const location = createLocation(req.url);
    const store = makeStore();

    match({ routes, location }, (err, redirectLocation, renderProps) => {
        if (err) {
            console.log(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found.');
        }

        const InitialComponent = (
            <Provider store={store}>
                <RoutingContext {...renderProps} />
            </Provider>
        );

        // 注入假数据
        store.dispatch(setItems(items));
        store.dispatch(setCart(cart));

        // 获取初始的state信息，应用于frame.html模板中
        const initialState = store.getState();
        // SPA的外部框架，应用于frame.html模板中
        const componentHTML = renderToString(InitialComponent);

        res.end(eval("`" + fs.readFileSync("_public/frame.html") + "`"));
    });
});

export default app;
