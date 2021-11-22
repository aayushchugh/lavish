import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Nav from './components/layout/nav/Nav';
import Signup from './components/routes/Signup';

const App = () => {
	return (
		<>
			<CssBaseline />
			<Router>
				<Nav />
				<Routes>
					{/* <Route path="/" exact></Route> */}

					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
