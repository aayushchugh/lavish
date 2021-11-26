import React from 'react';
import { Button } from '@mui/material';
import './button.scss';

/**
 * button primary - contained
 * @param {string} title title to be displayed on the button
 * @param {string} className additional class  to be added to the button
 * @param {string} type type of button eg: submit
 * @return {JSX.Element} component
 */
export const BPrimary = ({ title, className, type }) => {
	return (
		<Button
			variant="contained"
			className={`${className} button-primary`}
			type={type}
		>
			{title}
		</Button>
	);
};

/**
 * button secondary - outlined
 * @param {string} title title to be displayed on the button
 * @param {string} className additional class  to be added to the button
 * @param {string} type type of button eg: submit
 * @return {JSX.Element} component
 */ export const BSecondary = ({ title, className, type }) => {
	return (
		<Button
			variant="outlined"
			className={`${className} button-secondary`}
			type={type}
		>
			{title}
		</Button>
	);
};
