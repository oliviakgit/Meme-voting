import { setImages } from 'redux/actions/imagesActions';
import { store } from 'redux/store';

const tempImages = store.getState().imagesReducer;

export const handleUpvote = (imageId) => {
	for (let i in tempImages) {
		if (tempImages[i].id === imageId) {
			tempImages[i].upvotes = tempImages[i].upvotes + 1;
			break;
		}
	}
	store.dispatch(setImages([...tempImages]));
};

export const handleDownvote = (imageId) => {
	for (let i in tempImages) {
		if (tempImages[i].id === imageId) {
			tempImages[i].downvotes = tempImages[i].downvotes + 1;
			break;
		}
	}
	store.dispatch(setImages([...tempImages]));
};
export const handleFavourite = (imageId) => {
	for (let i in tempImages) {
		if (tempImages[i].id === imageId) {
			tempImages[i].favourite = !tempImages[i].favourite;
			break;
		}
	}
	store.dispatch(setImages([...tempImages]));
};
