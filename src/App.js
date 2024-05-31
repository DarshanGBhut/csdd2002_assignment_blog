import React from 'react';
import TopBar from './Components/TopBar';
import BlogPost from './Components/BlogPost';
import './App.css';

function App() {
    return (
        <div className="App">
            <TopBar />
            <div className="blog-posts">
                <BlogPost
                    title="A Beginner's Guide to Responsive Java Developement"
                    date="May 31, 2024"
                    author="Darshan bhut "
                    image="image.jpg"
                    body="The creation of Java programs that can readily adapt to different user needs and situations is the aim of responsive Java development. It's crucial for beginners to understand that responsiveness in Java describes how your application reacts to changes in user interfaces, loads, network conditions, and device capabilities. You can utilize Java's advanced libraries and framework to develop programs that can dynamically alter their behavior and functionality. Using frameworks like Spring Boot, for instance, can help ensure that your application remains responsive and effective, even during periods of high demand, particularly for backend services. Additionally, you can enhance your program's responsiveness by employing design patterns like the Observer pattern to make it more modular and maintainable."


                    body2="Many benefits are provided to developers by responsive React frameworks, which enable them to create contemporary web apps quickly and effectively. These frameworks save a great deal of time and effort throughout the development process by offering an abundance of pre-built components and utilities designed just for React. These frameworks' inherent responsiveness makes sure that programs adjust to different screen sizes and devices without any trouble at all, resulting in a unified and aesthetically pleasing user experience across platforms. Furthermore, developers can adapt components to meet the specific needs of their project while still following flexible design principles thanks to the flexibility and customization options provided by responsive React frameworks. 
                    "
                />
            </div>
        </div>
    );
}

export default App;
