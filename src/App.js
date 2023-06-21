import { createBrowserRouter } from 'react-router-dom';

import ProductsPage from './components/pages/ProductsPage/ProductsPage';
import CartPage from './components/pages/CartPage/CartPage';



export default createBrowserRouter(
	[
		{ path: '/', element: <ProductsPage/> },
		{ path: '/cart', element: <CartPage/> },
	]
);
