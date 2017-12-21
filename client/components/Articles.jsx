import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { history } from '../history';
import axios from 'axios';

// export default class Articles extends Component {
//   constructor() {
//     super();
//     this.state = {
//       articles: [],
//     };
//   }

//   componentDidMount() {
//     axios.get('api/articles/techCrunchNews')
//       .then(res => res.data)
//       .then(articles => this.setState({ articles }))
//       .catch(error => console.error('Error', error));
//   }

//   render() {
//     const { articles } = this.state.articles;
//     console.log(articles);
//     return (
//       <div>
//         {/* {
//           articles.length && articles.map(article => (
//             <div key={article.author}>
//               <ul>
//                 <li> { article.author } </li>
//               </ul>
//             </div>
//             ))
//         } */}
//       </div>
//     );
//   }
// }

const Articles = (props) => {
  console.log(props, 'props');
  const { articles } = props;
  return (
    <div>
      {
          articles.length && articles.map(article => (
            <div key={article.author}>
              <ul>
                <li> { article.author } </li>
              </ul>
            </div>
            ))
        }
    </div>
  );
};

const mapState = ({ articles }) => ({ articles });
export default connect(mapState)(Articles);
