import { Box } from '@material-ui/core';
import React from 'react';

export default function PageTitle({ title }) {
	return (
		<Box mb={3} fontWeight={600} fontSize="32px">
			{title} memes
		</Box>
	);
}
