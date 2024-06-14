
import React from 'react';
import TopBar from './Components/TopBar';
import BlogPost from './Components/BlogPost';
import './App.css';

function App() {
    const blogPosts = [
        {
            title: "A Beginner's Guide to Responsive Java Development",
            date: "May 31, 2024",
            author: "Darshan Bhut",
            images: [
                "https://wallpapercave.com/wp/wp7250277.jpg",
                "https://k2bindia.com/wp-content/uploads/2015/08/React.png"
            ],
            paragraphs: [
                " The goal of responsive Java development is to create programs that easily adjust to various user needs and circumstances. It's important for newcomers to realize that responsiveness in Java refers to how your program responds to changes in loads, network circumstances, and device capabilities, in addition to user interfaces. ",
                "Java has a sophisticated library and framework that you may use to create apps that dynamically change how they behave and function. For backend services, for example, employing frameworks like Spring Boot can assist guarantee that your application stays responsive and efficient even in situations of high demand. Furthermore, by using design patterns like the Observer pattern, you may improve the modularity and maintainability of your program, which will improve its responsiveness.",
                "Additionally, embracing a cloud-native approach ensures that applications are built to take full advantage of the cloud's flexibility and scalability, allowing them to adjust seamlessly to different loads and demands."
            ]
        }
    ];

    return (
        <div className="App">
            <TopBar />
            <div className="blog-posts">
                {blogPosts.map((post, index) => (
                    <BlogPost 
                        key={index}
                        title={post.title}
                        date={post.date}
                        author={post.author}
                        images={post.images}
                        paragraphs={post.paragraphs}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;