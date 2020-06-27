import React from "react";

const requestImg = () => {
  return { type: 'REQUESTED_IMG' }
};

const requestImgSuccess = (data) => {
  return { type: 'REQUESTED_IMG_SUCCEEDED', url: data.message }
};


