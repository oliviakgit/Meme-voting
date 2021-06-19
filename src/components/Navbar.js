import React, { useState } from 'react';
import { Box, Dialog, IconButton, makeStyles, useTheme } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { useHistory, useLocation } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles({
	navbar: {
		height: '65px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logoSection: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
	},
	logo: {
		marginRight: '5px',
	},
	itemsSection: {
		display: 'flex',
		alignItems: 'center',
	},
	items: {
		display: 'flex',
	},
	item: {
		cursor: 'pointer',
		margin: '0px 15px',
	},
	itemMobile: {
		textAlign: 'right',
		padding: '20px 15px',
		borderBottom: '1px solid #d8d8d8',
	},
	activeItem: {
		fontWeight: 600,
	},
	activeItemMobile: {
		backgroundColor: '#f0f0f0',
	},
	backButton: {
		margin: '15px 15px 15px auto',
	},
});

const navItems = [
	{
		path: '/regular',
		title: '📸 Regular',
	},
	{
		path: '/hot',
		title: '🔥 Hot',
	},
	{
		path: '/favourites',
		title: '⭐ Favourites',
	},
];

export default function Navbar() {
	const classes = useStyles();
	const history = useHistory();
	const location = useLocation();
	const theme = useTheme();

	const [open, setOpen] = useState(false);

	const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handlePushMobile = (path) => {
		history.push(path);
		handleClose();
	};

	return (
		<Box className={classes.navbar}>
			<Box className={classes.logoSection} onClick={() => history.push('/')}>
				<ImageIcon className={classes.logo} />
				<strong>MEME.Rating</strong>
			</Box>
			{!fullScreen ? (
				<Box className={classes.itemsSection}>
					<Box className={classes.items}>
						{navItems.map((item, index) => (
							<Box
								key={index}
								onClick={() => history.push(item.path)}
								className={`${classes.item} ${location.pathname === item.path && classes.activeItem}`}
							>
								{item.title}
							</Box>
						))}
					</Box>
				</Box>
			) : (
				<IconButton onClick={handleOpen}>
					<MenuIcon />
				</IconButton>
			)}
			<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="menu-dialog">
				<IconButton className={classes.backButton} onClick={handleClose}>
					<ChevronRightIcon />
				</IconButton>
				{navItems.map((item, index) => (
					<Box
						key={index}
						onClick={() => handlePushMobile(item.path)}
						className={`${classes.item} ${classes.itemMobile} ${
							location.pathname === item.path && classes.activeItemMobile
						}`}
					>
						{item.title}
					</Box>
				))}
			</Dialog>
		</Box>
	);
}
