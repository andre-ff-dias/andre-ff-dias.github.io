import React from 'react';
import About from '../components/home/About';
import Portfolio from '../components/home/Portfolio';
import '../styles/Home.css';

function Home() {
    return (
        <div className="Home">
            <About />
            <Portfolio />
        </div>
    );
}

export default Home;
