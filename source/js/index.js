import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import LoginContainer from './containers/LoginContainer/LoginContainer';
import store from './store';

let componentRoutes = {
    path:'/',
    indexRoute: { component:LoginContainer},
    childRoutes:[{
        path:'home',
        getComponent(location, cb) {
            System.import('./containers/HomeContainer/HomeContainer')
                .then(module => cb(null, module.default));
        },
        childRoutes:[
            {
                path:'dashboard',
                getComponent(location, cb) {
                    System.import('./containers/DashboardContainer/DashboardContainer')
                        .then(module => cb(null, module.default));
                }
            },
            {
                path:'winningbids',
                getComponent(location, cb) {
                    System.import('./containers/WinningBidContainer/WinningBidContainer')
                        .then(module => cb(null, module.default));
                }
            },
            {
                path:'losingbids',
                getComponent(location, cb) {
                    System.import('./containers/LosingBidContainer/LosingBidContainer')
                        .then(module => cb(null, module.default));
                }
            },
            {
                path:'profile',
                getComponent(location, cb) {
                    System.import('./containers/ProfileContainer/ProfileContainer')
                        .then(module => cb(null, module.default));
                }
            },
        ]
    }
    ]
};

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={componentRoutes}/>
    </Provider>
    , document.getElementById('root'));


//Will be implemented later
//if('serviceWorker' in navigator) {
//    console.log('Service Worker Found');
//
//    navigator.serviceWorker
//        .register('./serviceWorker.js', { scope: './'})
//        .then(function(registration){
//            console.log('Service Worker Registered ');
//        })
//        .catch(function(err){
//            console.log('Service Worker Fail to Register ',err);
//        });
//}





















