import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';

function App() {
	return (
		<BrowserRouter>
			<div class="grid-container">
				<header class="row">
					<div>
						<a class="brand" href="/">
							{' '}
							Kokoland
						</a>
					</div>
					<div>
						<a href="/cart"> Cart </a>
						<a href="/signin"> Signin </a>
					</div>
				</header>
				<main>
					<Route path="/" component={HomeScreen} exact></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
				</main>
				<footer class="row center">All rights reserved.</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
