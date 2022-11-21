import { SET_ALERT_DATA, SET_BREEDS_LIST, SET_BREED_FORM_DATA, SET_GENERATED_IMAGES } from "../constants/breedsConstant";

export const setAllBreedsList = (params: any) => (dispatch: any) => {
    dispatch({
        type: SET_BREEDS_LIST,
        payload: params,
    });
};

export const setBreedsFormData = (params: any) => (dispatch: any) => {
    dispatch({
        type: SET_BREED_FORM_DATA,
        payload: params,
    });
};

export const setBreedsImageList = (params: any) => (dispatch: any) => {
    dispatch({
        type: SET_GENERATED_IMAGES,
        payload: params,
    });
};

export const setAlertData = (params: any) => (dispatch: any) => {
    dispatch({
        type: SET_ALERT_DATA,
        payload: params,
    });
};