import React from 'react';
import HeroSlider from '../../components/slider/HeroSlider';
import Container from '../../components/Shared/Container';
import Heading from '../../components/Shared/Heading';
import Featured from '../../components/Home/Featured';
import Leatest from '../../components/Home/Leatest';

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <Featured></Featured>
           <Leatest></Leatest>
           
        </div>
    );
};

export default Home;