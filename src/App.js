import { Switch, BrowserRouter as Router } from 'react-router-dom';
import MainLayout from 'layouts/MainLayout';
import { PublicRoute } from 'Routing';

import Index from 'views/Index';
import Hot from 'views/Hot';
import Regular from 'views/Regular';
import Favourites from 'views/Favourites';

function App() {
	return (
		<Router>
			<Switch>
				<PublicRoute exact path="/" component={Index} layout={MainLayout} />
				<PublicRoute exact path="/regular" component={Regular} layout={MainLayout} />
				<PublicRoute exact path="/hot" component={Hot} layout={MainLayout} />
				<PublicRoute exact path="/favourites" component={Favourites} layout={MainLayout} />
			</Switch>
		</Router>
	);
}

export default App;