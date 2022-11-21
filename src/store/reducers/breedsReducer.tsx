/* eslint-disable import/no-anonymous-default-export */
import { SET_ALERT_DATA, SET_BREEDS_LIST, SET_BREED_FORM_DATA, SET_GENERATED_IMAGES } from "../constants/breedsConstant";

const initialState = {
    breedList: [],
    formData: [[{ breedList: {}, selectedBreed: "", subBreedList: [], selectedSubBreed: "", imageCount: 8, imageError: { flag: false, error: '' } }]],
    breedsImageList: [],
    alert: { flag: false, message: '', type: '' },
}

interface propsI {
    type?: string, payload: any
}

export default (state = initialState, { type, payload }: propsI) => {
    switch (type) {
        case SET_BREEDS_LIST:
            return {
                ...state,
                breedList: payload,
            };

        case SET_BREED_FORM_DATA:
            return {
                ...state,
                formData: payload,
            };

        case SET_GENERATED_IMAGES:
            return {
                ...state,
                breedsImageList: payload,
            };

        case SET_ALERT_DATA:
            return {
                ...state,
                alert: payload,
            };


        default:
            return state;
    }
};
