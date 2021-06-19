import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
	title: {
		fontWeight: 600,
		fontSize: 48,
	},
	specialWord: {
		position: 'relative',
		display: 'inline-block',
		transform: 'rotate(-10deg)',
		'&::before': {
			content: '"enjoy"',
			backgroundColor: 'orange',
			color: 'white',
			padding: '0px 15px',
		},
	},
	buttonsText: {
		fontSize: 24,
	},
	buttonsWrapper: {
		width: 'fit-content',
		margin: '0px auto',
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	generalButton: {
		padding: '10px 20px',
		borderRadius: 9999,
		margin: '15px 10px',
		width: 'fit-content',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': {
			transform: 'translate(0px, -3px)',
		},
	},
	regularButton: {
		backgroundColor: 'lightgrey',
	},
	hotButton: {
		backgroundColor: 'grey',
	},
	favouritesButton: {
		backgroundColor: 'gold',
	},
});

export default function Index() {
	const classes = useStyles();
	const history = useHistory();

	// useEffect(() => {
	// 	history.push('/regular')
	// }, [])

	const buttons = [
		{
			path: '/regular',
			title: '📸 Regular',
			class: classes.regularButton,
		},
		{
			path: '/hot',
			title: '🔥 Hot',
			class: classes.hotButton,
		},
		{
			path: '/favourites',
			title: '⭐ Favourites',
			class: classes.favouritesButton,
		},
	];

	return (
		<Box textAlign="center" mb={10}>
			<Box className={classes.title}>
				Meme.Rating is the right place to <span className={classes.specialWord}></span> memes online
			</Box>
			<Box mt={5} mb={2} className={classes.buttonsText}>
				Choose a category to start browsing
			</Box>
			<Box className={classes.buttonsWrapper}>
				{buttons.map((item, index) => (
					<Box
						key={index}
						onClick={() => history.push(item.path)}
						className={`${item.class} ${classes.generalButton}`}
					>
						{item.title}
					</Box>
				))}
			</Box>
		</Box>
	);
}
