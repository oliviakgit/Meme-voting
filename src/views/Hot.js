import React from 'react';
import { useSelector } from 'react-redux';
import DisplayImages from 'components/DisplayImages';
import { Box } from '@material-ui/core';
import PageTitle from 'components/PageTitle';

export default function Hot() {
	const images = useSelector((state) => state.imagesReducer).filter((item) => item.upvotes - item.downvotes >= 5);

	return (
		<Box>
			<PageTitle title="🔥 Hot" />
			<DisplayImages images={images} />
		</Box>
	);
}
