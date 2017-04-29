import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';


import './App.css';

import authClient from './authClient';
import sagas from './sagas';
import themeReducer from './themeReducer';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import { Dashboard } from './dashboard';
import CustomRoutes from './routes';
import translations from './i18n';

import { VisitorList, VisitorEdit, VisitorDelete, VisitorIcon } from './modules/visitors';
import { CommandList, CommandEdit, CommandIcon } from './modules/commands';
import { ProductList, ProductCreate, ProductEdit, ProductIcon } from './modules/products';
import { CategoryList, CategoryEdit, CategoryIcon } from './modules/categories';
import { ReviewList, ReviewEdit, ReviewIcon } from './modules/reviews';

import restClient from './restClient';
// import restServer from './restServer';


class App extends Component {
    componentWillMount() {
        // this.restoreFetch = restServer();
    }

    componentWillUnmount() {
        // this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="Affiches en gros : Admin"
                restClient={restClient}
                customReducers={{ theme: themeReducer }}
                customSagas={sagas}
                customRoutes={CustomRoutes}
                authClient={authClient}
                dashboard={Dashboard}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
                <Resource name="customers" list={VisitorList} edit={VisitorEdit} remove={VisitorDelete} icon={VisitorIcon} />
                <Resource name="commands" list={CommandList} edit={CommandEdit} remove={Delete} icon={CommandIcon} options={{ label: 'Orders' }}/>
                <Resource name="products" list={ProductList} create={ProductCreate} edit={ProductEdit} remove={Delete} icon={ProductIcon} />
                <Resource name="categories" list={CategoryList} edit={CategoryEdit} remove={Delete} icon={CategoryIcon} />
                <Resource name="reviews" list={ReviewList} edit={ReviewEdit} icon={ReviewIcon} />
            </Admin>
        );
    }
}

export default App;
