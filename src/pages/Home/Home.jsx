import React from 'react';
import HeroSlider from '../../components/slider/HeroSlider';
import Container from '../../components/Shared/Container';
import Heading from '../../components/Shared/Heading';
import Featured from '../../components/Home/Featured';
import Leatest from '../../components/Home/Leatest';
import Support from '../../components/Home/Support';
import Trending from '../../components/Home/Trending';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <Featured></Featured>
           <Leatest></Leatest>
           <Support></Support>
           <Trending></Trending>
           
        </div>
    );
};

export default Home;