import React from 'react';
import { Link } from 'react-router-dom';
import { Tooltip, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './nav.scss';

const Nav = () => {
	return (
		<header>
			<nav className="nav">
				<div className="nav__logo">
					<Link to="/">
						<img src="/assets/logo.png" alt="logo" />
					</Link>
				</div>

				<ul className="nav__links">
					<li className="nav__link nav__link--1">
						<Link to="/">Home</Link>
					</li>

					<li className="nav__link nav__link--2">
						<Link to="/shop">Shop</Link>
					</li>

					<li className="nav__link nav__link--3">
						<Link to="/deals">Today Deals</Link>
					</li>

					<li className="nav__link nav__link--4">
						<Link to="/shop/cloths">Cloths</Link>
					</li>

					<li className="nav__link nav__link--5">
						<Link to="/shop/jewelry">Jewelry</Link>
					</li>

					<li className="nav__link nav__search">
						<input type="text" placeholder="Search" />
						<Search />
					</li>
				</ul>

				<ul className="nav__buttons">
					<Tooltip title={<h1>Cart</h1>} arrow>
						<IconButton>
							<ShoppingCartIcon />
						</IconButton>
					</Tooltip>

					<Tooltip title={<h1>Account</h1>} arrow>
						<IconButton>
							<PersonIcon />
						</IconButton>
					</Tooltip>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;
