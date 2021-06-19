import React from 'react';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Box, IconButton } from '@material-ui/core';
import { handleDownvote } from 'utils/photoInteractions';

export default function Downvote({ downvotes, id }) {
	return (
		<Box display="flex" alignItems="center">
			{downvotes}
			<IconButton onClick={() => handleDownvote(id)}>
				<ThumbDownIcon />
			</IconButton>
		</Box>
	);
}
