// ACTION TYPES //
export const types = {
  MAP_LOADED: "MAP_LOADED",
  HOTSPOT_CLICKED: "HOTSPOT_CLICKED"
};

// REDUCERS //
export const initialState = {
  loaded: false,
  location: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.MAP_LOADED:
      return {
        ...state,
        loaded: true
      };
    case types.HOTSPOT_CLICKED:
      return{
        ...state,
        location: action.payload
      }
    default:
      return state;
  }
};

// ACTIONS //
export const mapLoaded = () => ({ type: types.MAP_LOADED, payload: {} });
