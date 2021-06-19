import { Box } from '@material-ui/core';
import React from 'react';
import Downvote from './Downvote';
import Upvote from './Upvote';

export default function BottomSection({ id, upvotes, downvotes }) {
	return (
		<Box marginTop="auto" p={1} display="flex" justifyContent="space-between" alignItems="center">
			<Upvote upvotes={upvotes} id={id} />
			<Downvote downvotes={downvotes} id={id} />
		</Box>
	);
}
