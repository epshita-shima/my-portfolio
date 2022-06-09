import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Banner from './Banner';
import Hello from './Hello';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Hello></Hello>
            <Resume></Resume>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;