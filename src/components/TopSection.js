import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import Favourite from './Favourite';

const useStyles = makeStyles({
	title: {
		fontWeight: 600,
		fontSize: '18px',
	},
});

export default function TopSection({ id, title, favourite }) {
	const classes = useStyles();

	return (
		<Box px={2} py={1} display="flex" justifyContent="space-between" alignItems="center">
			<Box className={classes.title}>{title}</Box>
			<Favourite id={id} favourite={favourite} />
		</Box>
	);
}
