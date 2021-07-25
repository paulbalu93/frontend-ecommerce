import React from 'react';
import data from '../data.js';
export default function ProductScreen(props) {
	const product = data.products.find((x) => x._id === props.match.params.id);

	if (!product) {
		return <div> Product not found</div>;
	}
	return (
		<div className="row">
			<div className="col-2">
				<img src={product.image} alt={product.name}></img>
			</div>
			<div className="col-1">
				{product.name}
				{product.rating}
				<p>{product.description}</p>
			</div>
			<div className="col-1"></div>
		</div>
	);
}
