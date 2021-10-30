import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="center">
        <img
          src="https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_18-1024.png"
          alt="Not Found"
          className="not-found-image"
        />
        <p>
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFoundPage;
