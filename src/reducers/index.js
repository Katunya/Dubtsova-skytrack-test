
const initialState = {
  current: {
    id: '',
    image: '',
    title: '',
    timeLoad: new Date()
  },
  history: [],
  loading: false,
  error: false,
  currentPage: 1,
  displayImage: 4
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_IMG':
      return {
        current: {
          id: '',
          image: '',
          title: '',
          timeLoad: new Date()
        },
        history: state.history,
        loading: true,
        error: false,
        currentPage: 1,
        displayImage: 4
      };
    case 'REQUESTED_IMG_SUCCEEDED':
      let current = {
        id: action.data.id,
        image: action.data.image,
        title: action.data.title,
        timeLoad: new Date(),
      };
      return {
        current: current,
        history: state.history.concat([current]),
        loading: false,
        error: false,
        currentPage: 1,
        displayImage: 4
      };
    case 'DELETE_IMAGE': {
      let id = action.data;
      let history = state.history;
      let filteredImages = history.filter((item) => item.id !== id);
      return {
        history: [...filteredImages],
        current: '',
        loading: false,
        error: false,
        currentPage: 1,
        displayImage: 4
      }
    }
    case 'REQUESTED_IMG_FAILED':
      return {
        current: {
          id: '',
          image: '',
          title: '',
          timeLoad: new Date()
        },
        history: state.history,
        loading: false,
        error: true,
        currentPage: 1,
        displayImage: 4
      };
    default:
      return state;
  }
};
