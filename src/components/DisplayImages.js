import { Box, IconButton, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import Image from './Image';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { scrollUp } from 'utils/scrollUp';

const useStyles = makeStyles({
	listView: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	galleryView: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		alignContent: 'center',
	},
	scrollUp: {
		position: 'sticky',
		float: 'right',
		bottom: 15,
		padding: 10,
		borderRadius: 9999,
		backgroundColor: 'orange',
		zIndex: 9999,
	},
	arrow: {
		color: 'white',
		fontSize: '1.4em',
	},
});

export default function DisplayImages({ images }) {
	const classes = useStyles();
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

	return (
		<Box>
			<Box className={classes.listView}>
				{images.map((image, index) => (
					<Image big={true} key={index} image={image} />
				))}
			</Box>

			{!fullScreen && (
				<IconButton className={classes.scrollUp} onClick={scrollUp}>
					<ArrowUpwardIcon className={classes.arrow} />
				</IconButton>
			)}
		</Box>
	);
}
