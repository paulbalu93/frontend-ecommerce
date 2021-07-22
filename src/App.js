import './App.css';
import data from './data.js';

function App() {
	return (
		<div class="grid-container">
			<header class="row">
				<div>
					<a class="brand" href="index.html">
						{' '}
						Kokoland
					</a>
				</div>
				<div>
					<a href="cart.html"> Cart </a>
					<a href="signin.html"> Signin </a>
				</div>
			</header>
			<main>
				<div class="row center">
					{data.products.map((product) => (
						<div class="card">
							<a href={`/products/product._id`}>
								<img class="medium" src={product.images.url} alt={product.name} />
							</a>
							<div class="card-body">
								<a href="product.html">
									{' '}
									<h2> {product.name}</h2>
								</a>
								<div class="rating">
									<span>
										{' '}
										<i class="fas fa-star"></i>
									</span>
									<span>
										{' '}
										<i class="fas fa-star"></i>
									</span>
									<span>
										{' '}
										<i class="fas fa-star"></i>
									</span>
									<span>
										{' '}
										<i class="fas fa-star"></i>
									</span>
									<span>
										{' '}
										<i class="fas fa-star"></i>
									</span>
								</div>
								<div class="price"> $ {product.price}</div>
							</div>
						</div>
					))}
				</div>
			</main>
			<footer class="row center">All rights reserved.</footer>
		</div>
	);
}

export default App;
