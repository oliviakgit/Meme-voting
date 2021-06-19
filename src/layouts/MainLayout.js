import React from 'react';
import { Box } from '@material-ui/core';
import Navbar from 'components/Navbar';

export default function MainLayout({ children }) {
	return (
		<Box px={3} maxWidth="1160px" mx="auto">
			<Navbar />
			<Box pt={5}>{children}</Box>
		</Box>
	);
}
