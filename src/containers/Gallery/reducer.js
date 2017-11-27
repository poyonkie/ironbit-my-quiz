const initialState = {
  groups: [],
  total: 0,
  itemDdetail: {},
  pictures: [],
  picture: []
};

export default function galleryReducer(state = initialState, action) {
  switch(action.type) {
    case 'GALLERY_LIST_SCIENCE_FICTION_SUCCES': {
      const { payload: {response: {groups= [], total= 0}} } = action;

      return {...state, groups, total};
    }

    case 'SCIENCE_FICTION_MOVIE_DETAIL_SUCCES': {
      const { payload: {response: {group: {common: itemDdetail= {}}}} } = action;

      return {...state, itemDdetail};
    }

    default:
      return state;
  }
}
