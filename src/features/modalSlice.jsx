const initialState = {
  isOpen: true,
}

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'modal/openModal':
      return { ...state, isOpen: true};
    case 'modal/cancelModal':
      return { ...state, isOpen: false};

    default:
      return state;
  }
};

export const open = () => {
  return { type: 'modal/openModal'};
    };

export const close = () => {
  return { 
      type: 'modal/cancelModal',};
    }

export default modalReducer