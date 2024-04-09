import React from 'react';
import './Blog.css';
import blogimage1 from '../../assets/blogimage1.jpg'
import blogimage2 from '../../assets/blogimage2.jpg'
import blogimage3 from '../../assets/image4.png'
const Blog = () => {
  return (
    <div className="blog-section">
      <div className="blog-posts-row">
        <div className="blog-post-card">
          <img src={blogimage1} alt="Blog Post Title" className="blog-post-image"/>
          <div className="blog-post-details">
            <p className="blog-post-date">November 16, 2021</p>
            <h3 className="blog-post-title">Three Pillars of User Delight</h3>
            <p className="blog-post-excerpt">Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
          </div>
          <div className='btns'>
          <button className='btn1'>Research</button>
          <button className='btn2'>Programming</button></div>
        </div>
        <div className="blog-post-card">
        <img src={blogimage2} alt="Second Blog Post Title" className="blog-post-image"/>
          <div className="blog-post-details">
            <p className="blog-post-date">September 24, 2021</p>
            <h3 className="blog-post-title">App Mapping Methods</h3>
            <p className="blog-post-excerpt">Visual-design principles can be applied consistently throughout the process of creating a polished UX map...
            </p>
          </div>
          <div className='btns'>
          <button className='btn1'>Research</button>
          <button className='btn3'>Development</button></div>
        </div>
        <div className="blog-post-card">
          <img src={blogimage3} alt="Second Blog Post Title" className="blog-post-image"/>
          <div className="blog-post-details">
            <p className="blog-post-date">March 13, 2014</p>
            <h3 className="blog-post-title">Agile Development Projects and Usability</h3>
            <p className="blog-post-excerpt">Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. 
</p>
          </div>
          <div className='btns'>
          <button className='btn2'>Programming</button>
          <button className='btn1'>Research</button>
          <button className='btn3'>Development</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
