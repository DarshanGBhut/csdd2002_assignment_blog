import React from 'react';
import './BlogPost.css';

function BlogPost({ title, date, author, image, body }) {
    return (
        <div className="blog-post">
            <h2 className="title">{title}</h2>
            <p className="meta">Published on: <span className="date">{date}</span> by <span className="author">{author}</span></p>
            <img src="https://wallpapercave.com/wp/wp7250277.jpg" alt=" " className="image" />
            <p className="body">{body}</p>
            <hr />
            <div className="blog-post">
            <img src="https://k2bindia.com/wp-content/uploads/2015/08/React.png" alt=" " className="image" />
            <p className="body2">{body}</p>
            <hr />
        </div>
        </div>
    );
}

export default BlogPost;
