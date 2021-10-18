import { h } from 'preact';


// Code-splitting is automated for `routes` directory
import Home from '../routes/home/index';

const App = () => (
	<div id="app">
			<Home path="/" />
	</div>
)

export default App;
