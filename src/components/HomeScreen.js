import React from 'react';
import data from '../data';
import Product from '../components/Product.js';

export default function HomeScreen() {
	return (
		<div class="row center">
			{data.products.map((product) => (
				<Product key={product._id} product={product} />
			))}
		</div>
	);
}
