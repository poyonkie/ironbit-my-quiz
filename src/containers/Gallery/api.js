// Constants
import { API } from '../../constants/api';

// Utils
import { apiFetch } from '../../lib/utils/api';

class GalleryApi {
  static getScienceFictionMovies(query) {
    const qry = {
      api_version: 'v5.7',
      authpn: 'webclient',
      authpt: 'tfg1h3j4k6fd7',
      format: 'json',
      region: 'mexico',
      device_id: 'web',
      device_category: 'web',
      device_model: 'web',
      device_type: 'web',
      device_manufacturer: 'generic',
      HKS: '6avee4ahgpourjs9empp460ap1',
      quantity: 40,
      order_way: 'DESC',
      order_id: 200,
      level_id: 'GPS',
      from: 0,
      node_id: 9869
    }, opt = {
      headers: null
    };

    if (query) {
      return apiFetch(API.CLAROVIDEO.SCIENCE_FICTION_MOVIES, opt, qry).then(value => {
        value.response.groups = value.response.groups.filter(item => item.title.match(new RegExp('^' + query, 'i')));
        return value;
      });
    }
    return apiFetch(API.CLAROVIDEO.SCIENCE_FICTION_MOVIES, opt, qry);
  }

  static getScienceFictionMovieDetail(query) {
    const qry = {
      api_version: 'v5.7',
      authpn: 'webclient',
      authpt: 'tfg1h3j4k6fd7',
      format: 'json',
      region: 'mexico',
      device_id: 'web',
      device_category: 'web',
      device_model: 'web',
      device_type: 'web',
      device_manufacturer: 'generic',
      HKS: '6avee4ahgpourjs9empp460ap1',
      group_id: query.id
    }, opt = {
      headers: null
    };

    return apiFetch(API.CLAROVIDEO.SCIENCE_FICTION_MOVIE_DETAIL, opt, qry);
  }
}

export default GalleryApi;
