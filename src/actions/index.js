import React from 'react';

export const requestImg = () => {
  return { type: "REQUESTED_IMG" }
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


