import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

import './alert.scss';

/**
 * Alert Error
 * @param {string} title title of the alert
 * @param {string} className add additional class to the alert
 * @param {boolean} open if true then show alert else hide
 * @param {function} setOpen to set open state
 * @returns {JSX.Element} Alert Error
 */
export const AError = ({ title, className, open, setOpen }) => {
	return (
		<Collapse in={open}>
			<Alert
				className={`${className} alert`}
				severity="error"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				{title}
			</Alert>
		</Collapse>
	);
};

/**
 * Alert Success
 * @param {string} title title of the alert
 * @param {string} className add additional class to the alert
 * @param {boolean} open if true then show alert else hide
 * @param {function} setOpen to set open state
 * @returns {JSX.Element} Alert Error
 */
export const ASuccess = ({ title, className, open, setOpen }) => {
	return (
		<Collapse in={open}>
			<Alert
				className={`${className} alert`}
				severity="success"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setOpen(false);
						}}
					>
						<CloseIcon fontSize="inherit" />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				{title}
			</Alert>
		</Collapse>
	);
};
