import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import './App.css'
import store from './services/app/store';
import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import CartPage from './components/pages/CartPage/CartPage';


const app = createBrowserRouter(
	[
		{ path: '/', element: <ProductsPage/> },
		{ path: '/cart', element: <CartPage/> },
	]
);
createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<RouterProvider router={app}/>
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
