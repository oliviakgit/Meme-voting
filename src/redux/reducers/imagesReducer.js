import { images } from 'database/images';

const imagesState = images;

const imagesReducer = (state = imagesState, action) => {
	switch (action.type) {
		case 'SET_IMAGES':
			return action.payload;
		default:
			return state;
	}
};

export default imagesReducer;
