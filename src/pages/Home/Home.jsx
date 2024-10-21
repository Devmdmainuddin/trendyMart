import React from 'react';
import HeroSlider from '../../components/slider/HeroSlider';
import Container from '../../components/Shared/Container';
import Heading from '../../components/Shared/Heading';
import Featured from '../../components/Home/Featured';
import Leatest from '../../components/Home/Leatest';
import Support from '../../components/Home/Support';
import Trending from '../../components/Home/Trending';
import Categories from '../../components/Home/Categories';
import SingleBanner from '../../components/Home/SingleBanner';
import Company from '../../components/Home/Company';
import Blogs from '../../components/Home/Blogs';
import Banner03 from '../../components/Home/Banner03';
import FeaturesBanner from '../../components/Home/FeaturesBanner';
import DiscountItem from '../../components/Home/DiscountItem';
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
    return (
        <div>
           <HeroSlider></HeroSlider>
           <Featured></Featured>
           <Leatest></Leatest>
           <Support></Support>
           <FeaturesBanner></FeaturesBanner>
           <Trending></Trending>
           <Banner03></Banner03>
           <DiscountItem></DiscountItem>
           <Categories></Categories>
           <SingleBanner></SingleBanner>
           <Company></Company>
           <Blogs></Blogs>
           <ScrollToTop smooth className='flex justify-center items-center'/>
        </div>
    );
};

export default Home;