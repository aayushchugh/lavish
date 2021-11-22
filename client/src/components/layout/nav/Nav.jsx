import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Tooltip, IconButton } from '@mui/material';
import Search from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
					<li className="nav__link">
						<Link to="/">Home</Link>
					</li>

					<li className="nav__link">
						<Link to="/shop">Shop</Link>
					</li>

					<li className="nav__link">
						<Link to="/deals">Today Deals</Link>
					</li>

					<li className="nav__link">
						<Link to="/shop/cloths">Cloths</Link>
					</li>

					<li className="nav__link">
						<Link to="/shop/jewelry">Jewelry</Link>
					</li>

					<li className="nav__link">
						<TextField variant="filled" label="Search" />
						<Search />
					</li>
				</ul>

				<ul className="nav__buttons">
					<Tooltip title="cart">
						<IconButton>
							<ShoppingCartIcon />
						</IconButton>
					</Tooltip>

					<Tooltip title="My Account">
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
