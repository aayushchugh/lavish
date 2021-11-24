import React from 'react';
import { Typography } from '@mui/material';
import './typography.scss';

/**
 * Heading Primary
 * @param {string} children Title
 * @param {string} className Additional class to add to heading
 * @returns {JSX.Element} component
 */
export const HPrimary = ({ children, className }) => {
	return (
		<Typography variant="h1" className={`${className} heading-primary`}>
			{children}
		</Typography>
	);
};

/**
 * Para
 * @param {string} children Paragraph
 * @param {string} className Additional class to add to paragraph
 * @returns {JSX.Element} component
 */
export const Para = ({ children, className }) => {
	return (
		<Typography variant="caption" className={`${className} para`}>
			{children}
		</Typography>
	);
};
