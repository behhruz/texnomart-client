import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import Cattegory from './components/Swipper';
import Footer from './components/footer';
import Header from './components/Header';
import FooterSection from './components/FooterSection';
import Providers from './context/Providers';

const App = () => {
    return (
        <div>

            <Providers>
                <Header />
                <Banner />
                <Cattegory />
                <About />
                <FooterSection />
                <Footer />
            </Providers>

        </div>
    );
};

export default App;
