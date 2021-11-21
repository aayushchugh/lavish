import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Signup from './components/routes/Signup';

const App = () => {
	return (
		<>
			<CssBaseline />
			<Router>
				<Routes>
					{/* <Route path="/" exact></Route> */}

					<Route path="/signup" element={<Signup />} />
				</Routes>
			</Router>
		</>
	);
};

export default App;
