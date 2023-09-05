export const initialState = {
  isOpen: false,
  url: '',
};

export function reducer(state, { type, url }) {
  switch (type) {
    case 'SET_OPEN':
      return {
        ...state,
        isOpen: true,
        url,
      };
    case 'SET_CLOSE':
      return {
        ...state,
        isOpen: false,
        url: '',
      };
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
