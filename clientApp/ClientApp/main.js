import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from './reducers'
import {AUTH_USER} from './actions/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('token')
if(token){
	store.dispatch({type:AUTH_USER})
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>


	,document.querySelector(".myapp")
	)