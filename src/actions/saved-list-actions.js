import { db } from "../app/firebase";
import * as collections from "../constants/collections";
import * as types from "../constants/action-types";

export const updateSavedMovieList = movies => ({
  type: types.UPDATE_SAVED_MOVIES_LIST_FROM_SERVER,
  payload: movies,
});

const updateSavedList = async (user, savedList) => {
  const docRef = db.collection(collections.COLLECTION_SAVEDLIST).doc(user.uid);

  return await docRef.set({ movies: savedList });
};

const fetchSavedList = async user => {
  const docRef = db.collection(collections.COLLECTION_SAVEDLIST).doc(user.uid);
  return await docRef.get();
};

export const boundFetchSavedList = user => (dispatch, getState) => {
  fetchSavedList(getState().currentUser.data).then(doc => {
    if (doc.exists) {
      const { movies } = doc.data();
      dispatch(updateSavedMovieList(movies));
    }
  });
};

export const boundUpdateSavedList = user => (dispatch, getState) => {
  const { currentUser, savedMovies } = getState();
  return updateSavedList(currentUser.data, savedMovies);
};
