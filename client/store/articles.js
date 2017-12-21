import axios from 'axios';

const GET_ARTICLES = 'GET_ARTICLES';

export const getArticles = articles => ({ type: GET_ARTICLES, articles });

export const fetchArticles = () => (dispatch) => {
  axios.get('api/articles/techCrunchNews')
    .then(res => dispatch(getArticles(res.data)))
    .catch(err => console.error('Getting products unsuccessful.', err));
};

export default (state = [], action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};
