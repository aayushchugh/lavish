import React from 'react';
import { Button } from '@mui/material';
import './button.scss';

/**
 * button primary
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
