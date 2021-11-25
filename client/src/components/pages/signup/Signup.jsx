import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';
import { BPrimary } from '../../utils/button/Button';
import { HPrimary, Para } from '../../utils/typography/Typography';
import post from '../../../api/post';

import './signup.scss';
import { ASuccess, AError } from '../../utils/alert/Alert';

const Signup = () => {
	const navigate = useNavigate();

	const [fname, setFname] = useState('');
	const [lname, setlname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cpassword, setCpassword] = useState('');
	const [errorOpen, setErrorOpen] = useState(false);
	const [successOpen, setSuccessOpen] = useState(false);

	const [response, setResponse] = useState({});

	const submitHandler = e => {
		e.preventDefault();

		post('/api/auth/signup', {
			fname,
			lname,
			email,
			password,
			cpassword,
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
		<section className="signup-section">
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

			<div className="signup-section__container">
				<div className="signup-section__header">
					<div className="signup-section__img">
						<img
							src="/assets/illustrations/signup.svg"
							alt="signup"
						/>
					</div>
					<form
						className="signup-section__form"
						onSubmit={submitHandler}
					>
						<HPrimary className="signup-section__heading">
							Signup
						</HPrimary>
						<div>
							<TextField
								variant="outlined"
								label="First name"
								type="text"
								className="signup-section__input"
								onChange={e => setFname(e.target.value)}
							/>
							<TextField
								variant="outlined"
								label="Last name"
								type="text"
								className="signup-section__input"
								onChange={e => setlname(e.target.value)}
							/>
						</div>
						<TextField
							variant="outlined"
							label="Email"
							className="signup-section__input"
							type="email"
							onChange={e => setEmail(e.target.value)}
							fullWidth
						/>
						<TextField
							variant="outlined"
							label="Password"
							className="signup-section__input"
							type="password"
							onChange={e => setPassword(e.target.value)}
							fullWidth
						/>
						<TextField
							variant="outlined"
							label="Confirm Password"
							className="signup-section__input"
							type="password"
							onChange={e => setCpassword(e.target.value)}
							fullWidth
						/>
						<BPrimary
							className="signup-section__btn"
							title="Signup"
							type="submit"
						/>
					</form>
				</div>

				<div className="signup-section__footer">
					<Para>
						Already have account <Link to="/login">Login</Link>
					</Para>
				</div>
			</div>
		</section>
	);
};

export default Signup;
