import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import BottomSection from './BottomSection';
import MiddleSection from './MiddleSection';
import TopSection from './TopSection';

const useStyles = makeStyles({
	imageCard: {
		width: '350px',
		border: '1px solid #d8d8d8',
		borderRadius: 4,
		margin: 8,
		display: 'flex',
		flexDirection: 'column',
		transition: 'box-shadow 0.3s',
		'&:hover': {
			boxShadow: '5px 5px 10px #e2e2e2',
		},
	},
	bigImageCard: {
		width: '650px',
		margin: 0,
		marginBottom: 50,
		transition: 'none',
	},
});

export default function Image({ image, big }) {
	const classes = useStyles();

	return (
		<Box className={`${classes.imageCard} ${big && classes.bigImageCard}`}>
			<TopSection id={image.id} title={image.title} favourite={image.favourite} />
			<MiddleSection big={big} img={image.img} />
			<BottomSection id={image.id} upvotes={image.upvotes} downvotes={image.downvotes} />
		</Box>
	);
}
