import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { BPrimary } from '../../utils/button/Button';
import { HPrimary, Para } from '../../utils/typography/Typography';
import { ASuccess, AError } from '../../utils/alert/Alert';
import { useNavigate } from 'react-router';

import post from '../../../api/post';
import './login.scss';

const Signup = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorOpen, setErrorOpen] = useState(false);
	const [successOpen, setSuccessOpen] = useState(false);

	const [response, setResponse] = useState({});

	const submitHandler = e => {
		e.preventDefault();

		post('/api/auth/login', {
			email,
			password,
		}).then(res => {
			setResponse(res);

			if (res.status === 'success') {
				localStorage.setItem('token', res.token);
				setSuccessOpen(true);

				navigate('/');
			} else {
				setErrorOpen(true);
			}
		});
	};

	return (
		<section className="login-section">
			<AError
				title={response.message}
				open={errorOpen}
				setOpen={setErrorOpen}
			/>

			<ASuccess
				title={response.message}
				open={successOpen}
				setOpen={setSuccessOpen}
			/>

			<div className="login-section__container">
				<div className="login-section__header">
					<div className="login-section__img">
						<img
							src="/assets/illustrations/login.svg"
							alt="login"
						/>
					</div>
					<form
						className="login-section__form"
						onSubmit={submitHandler}
					>
						<HPrimary className="login-section__heading">
							Login
						</HPrimary>

						<TextField
							variant="outlined"
							label="Email"
							className="login-section__input"
							type="email"
							onChange={e => setEmail(e.target.value)}
							fullWidth
						/>
						<TextField
							variant="outlined"
							label="Password"
							className="login-section__input"
							type="password"
							onChange={e => setPassword(e.target.value)}
							fullWidth
						/>

						<BPrimary
							className="login-section__btn"
							title="Login"
							type="submit"
						/>
					</form>
				</div>

				<div className="login-section__footer">
					<Para>
						Dont have account <Link to="/signup">Signup</Link>
					</Para>
				</div>
			</div>
		</section>
	);
};

export default Signup;
