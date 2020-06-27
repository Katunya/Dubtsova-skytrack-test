const initialState = {
  url: '',
  loading: false,
  error: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_IMG':
      return {
        image: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_IMG_SUCCEEDED':
      return {
        image: action.url,
        loading: false,
        error: false,
      };
    case 'REQUESTED_IMG_FAILED':
      return {
        image: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
