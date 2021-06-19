import React from 'react';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Box, IconButton } from '@material-ui/core';
import { handleUpvote } from 'utils/photoInteractions';

export default function Upvote({ upvotes, id }) {
	return (
		<Box display="flex" alignItems="center">
			<IconButton onClick={() => handleUpvote(id)}>
				<ThumbUpIcon />
			</IconButton>
			{upvotes}
		</Box>
	);
}
