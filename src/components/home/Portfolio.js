import React from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioData } from './PortfolioData';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="home-container">
                {PortfolioData.map((item, index) => {
                    return (
                        <Link to={item.path}>
                            <PortfolioCard item={item} key={index} />
                        </Link>);
                })}
            </div>
        </div>
    );
}

export default Portfolio;
