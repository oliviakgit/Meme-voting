import React from 'react';
import { useSelector } from 'react-redux';
import DisplayImages from 'components/DisplayImages';
import { Box } from '@material-ui/core';
import PageTitle from 'components/PageTitle';

export default function Favourites() {
	const images = useSelector((state) => state.imagesReducer).filter((item) => item.favourite);

	return (
		<Box>
			<PageTitle title="⭐ Favourites" />
			<DisplayImages images={images} />
		</Box>
	);
}
