import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	image: {
		width: 'inherit',
		display: 'block',
		height: '200px',
		objectFit: 'cover',
	},
	bigImage: {
		height: '400px',
	},
});

export default function MiddleSection({ img, big }) {
	const classes = useStyles();

	return <img className={`${classes.image} ${big && classes.bigImage}`} src={img} alt="illustration" />;
}
