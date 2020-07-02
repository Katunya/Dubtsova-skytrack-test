import React from 'react';

export const requestImg = () => {
  return {
    type: "REQUESTED_IMG",
  }
};

export const requestImgSuccess = (data) => {
  return {
    type: "REQUESTED_IMG_SUCCEEDED",
    data: data
  }
};
export const deleteImg = (id) => {
  return {
    type: "DELETE_IMAGE",
    data: id
  }
};

export const requestImgError = (error) => {
  return {
    type: "REQUESTED_IMG_FAILED",
    error: error
  }
};

export const getAsyncImg = () => dispatch => {
  getResource()
    .then(data => dispatch(requestImgSuccess({
    id: data.data.id,
    image: data.data.images.original.url,
    title: data.data.title,
  })))
};


function getResource() {
  return fetch("https://api.giphy.com/v1/gifs/random?api_key=gR30u9O8KPOanwIQupHbD90d4k57EOeY")
    .then(res => res.json())
}



