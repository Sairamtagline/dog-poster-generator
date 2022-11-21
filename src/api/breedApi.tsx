import api from "./api";

export const getAllBreedsListAPI = () => {
    const response: any = api(`/breeds/list/all`, 'get', null);
    return response;
};

export const getBreedImageAPI = (breed: string, subBreed: string, imageCount: number) => {
    const response: any = api(`/breed/${breed}/${subBreed}/images/random/${imageCount}`, 'get', null);
    return response;
};
