import React from 'react';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import { IconButton } from '@material-ui/core';
import { handleFavourite } from 'utils/photoInteractions';

export default function Favourite({ id, favourite }) {
	return <IconButton onClick={() => handleFavourite(id)}>{favourite ? <StarIcon /> : <StarBorderIcon />}</IconButton>;
}
