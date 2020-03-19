// ACTION TYPES //
export const types = {
  MAP_LOADED: "MAP_LOADED"
};

// REDUCERS //
export const initialState = {
  loaded: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MAP_LOADED:
      return {
        ...state,
        loaded: true
      };
    default:
      return state;
  }
};

// ACTIONS //
export const mapLoaded = () => ({ type: types.MAP_LOADED, payload: {} });
