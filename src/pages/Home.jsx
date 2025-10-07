import React from 'react';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import FeaturedCollections from '../components/FeaturedCollections.jsx';
import ProductGrid from '../components/ProductGrid.jsx';
import SustainabilitySection from '../components/SustainabilitySection.jsx';
import Newsletter from '../components/Newsletter.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <FeaturedCollections />
                <ProductGrid />
                <SustainabilitySection />
                <Newsletter />
            </main>
            <Footer />
        </div>
    );
};

export default Home;