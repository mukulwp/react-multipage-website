import React from 'react';
import './SinglePost.css';
import { useLocation } from 'react-router-dom'

const SinglePost = () => {
    const location = useLocation();
  return (
      <section className='single-post container'>
          <h2>{location.state.title}</h2>
          <img src={'https://picsum.photos/id/' + location.state.id + '/1900'} alt="" />
          <p>{location.state.body}</p>
          <div className="s-tags">
              <h4>Tags:</h4>
              {location.state.tags.map((tag, index) => {
                  return (
                      <div key={index} className="s-tag">{tag}</div>
                  )
              })}
          </div>
    </section>
  )
}

export default SinglePost