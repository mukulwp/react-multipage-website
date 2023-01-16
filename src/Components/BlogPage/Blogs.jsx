import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css'

const loadingMsg = <p className='post-loading'>Posts are loading...</p>;
const ErrorMsg = <p className='post-error-msg'>Posts are not loaded!</p>;
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null)
    const [limit, setLimit] = useState(9);

    const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }

    useEffect(() => {
        fetch(`https://dummyjson.com/posts?limit=${limit}`)
            .then((res) => {
            if (!res.ok) {
              throw Error("Loading is not successful!");
            } else {
                return res.json();
            }
            })
            .then((data) => {
                setBlogs(data)
                setIsLoading(false);
                setError(null)
            })
        .catch((error) => {
            setError(error.message);
            setIsLoading(false);
        })
    }, [limit]);
    const { posts } = blogs;
    
   const postElements =
       posts && posts.map((post) => {
        const{id, title, body, tags} = post
        return (
            <article key={id}>
                <img src={'https://picsum.photos/id/' + id + '/900'} alt="" />
                <div className="tags">
                    <h4>Tags: </h4>
                    {tags && tags.map((tag, index) => {
                        return (
                            <div className="tag" key={index}>{ tag.charAt(0).toUpperCase() + tag.slice(1) }</div>
                        )
                    })}
                </div>
                <h2>{title}</h2>
                <p>{truncateString(body, 110)}</p>
                <Link to={'single-post/'+title} state={{id, title, body, tags}} className='btn read-more-btn'>Read More</Link>
            </article>
        )
       })
    
    //Load More
    const handleLoadMore = () => {
        setLimit(prev=> prev +9)
        setIsLoading(true)
    }


  return (
      <section className='blogs container'>
          <div className="blogs-header">
              <h4>Our Blogs</h4>
              <h2><span className='stroke-text'>Our Most important </span> and popular blogs</h2>
          </div>
          {isLoading && loadingMsg}
          {error && ErrorMsg}
          <div className="posts">
              {postElements}
          </div>
          {limit <= 150 && <div className='load-more-btn'>
              <button onClick={handleLoadMore} className="btn">{isLoading ? "Loading..." : 'Load More'}</button>
          </div>}
          
    </section>
  )
}

export default Blogs