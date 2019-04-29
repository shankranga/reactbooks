import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './reactbooks/pages/Search';
import Saved from './reactbooks/pages/Saved';
import NoMatch from './reactbooks/pages/NoMatch';
import Nav from './reactbooks/components/Nav';

function App() {
	return (
		<Router>
			<Fragment>
				<Nav />
				<Switch>
					<Route exact path="/" component={Search} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/saved" component={Saved} />
					<Route component={NoMatch} />
				</Switch>
			</Fragment>
		</Router>
	);
}

export default App;
