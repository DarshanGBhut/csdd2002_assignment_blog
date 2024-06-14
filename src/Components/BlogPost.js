import React, { useState } from 'react';
import './BlogPost.css';

function BlogPost({ title, date, author, images, paragraphs }) {
    
    const [likeCounts, setLikeCounts] = useState(Array(images.length).fill(0));

   
    const handleLike = (index) => {
       
        const newLikeCounts = [...likeCounts];
        newLikeCounts[index] += 1;
        setLikeCounts(newLikeCounts);
    };

    return (
        <div className="blog-post">
            <h2 className="title">{title}</h2>
            <p className="meta">Published on: <span className="date">{date}</span> by <span className="author">{author}</span></p>
            
            <div className="content-container">
                {images.map((image, index) => (
                    <div className="content-item" key={index}>
                        <img src={image} alt={`Blog visual ${index + 1}`} className="image" />
                        <p className="body">{paragraphs[index]}</p>
                        <div className="like-section">
                            <button onClick={() => handleLike(index)} className="like-button">Like</button>
                            <span className="like-count">{likeCounts[index]} Likes</span>
                        </div>
                    </div>
                ))}
            </div>          
            <hr />
        </div>
    );
}

export default BlogPost;
