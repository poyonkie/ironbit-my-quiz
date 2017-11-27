// API
import galleryApi from './api';

// Actions
const GALLERY_LIST_SCIENCE_FICTION = 'GALLERY_LIST_SCIENCE_FICTION';
const SCIENCE_FICTION_MOVIE_DETAIL = 'SCIENCE_FICTION_MOVIE_DETAIL';

export function loadScienceFictionMovies(query) {
  return {
      type: GALLERY_LIST_SCIENCE_FICTION,
      payload: galleryApi.getScienceFictionMovies(query)
    }
}

export function loadScienceFictionMovieDetail(query) {
  return {
      type: SCIENCE_FICTION_MOVIE_DETAIL,
      payload: galleryApi.getScienceFictionMovieDetail(query)
    }
}
