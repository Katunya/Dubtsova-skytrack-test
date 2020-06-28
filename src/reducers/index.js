const initialState = {
  current: {
    image: '',
    title: '',
  },
  history: [],
  loading: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_IMG':
      return {
        current: {
          image: '',
          title: ''
        },
        history: state.history,
        loading: true,
        error: false
      };
    case 'REQUESTED_IMG_SUCCEEDED':
      let current = {
        image: action.data.image,
        title: action.data.title,
      };
      return {
        current: current,
        history: state.history.concat([current]),
        loading: false,
        error: false
      };
    case 'REQUESTED_IMG_FAILED':
      return {
        current: {
          image: '',
          title: ''
        },
        history: state.history,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
