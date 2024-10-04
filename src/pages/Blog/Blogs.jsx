import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Container from '../../components/Shared/Container';
import BlogCard from '../../components/Card/BlogCard';
import Company from '../../components/Home/Company';
import Sidebar from './Sidebar';
import LoadingSpinner from '../../components/Shared/LoadingSpinner'
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
const Blogs = () => {
    const [sortOrder, setSortOrder] = useState('new');
    const { data, error, isLoading, } = useGetproductsQuery({ sortOrder });
    const [offer, setOffer] = useState([]);
    const [categorey, setCategorey] = useState([])
    const [tags, setTags] = useState([])
// console.log(tags);
    let content;
    if (isLoading) {
        content = 
        <div className='flex justify-center items-center'>
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>

      
    }
    if (!isLoading && error) {
        content = <p>Error fetching products</p>
    }
    if (!isLoading && !error && data.length === 0) {
        content = <h1>NO POSTS FOUND</h1>
    }
    if (!isLoading && !error && data.length > 0) {
        content = <Sidebar data={data} categorey={categorey} offer={offer} tags={tags}></Sidebar>
    }
    useEffect(() => {
        if (data && data?.length > 0) {
            setCategorey([... new Set(data?.map(item => item.categorys.category))])
            setTags([... new Set(data?.map(item => item.tags.tag01))])
            const offerData = data?.filter(item => item.discount > 0)
            setOffer(offerData)
        }
    }, [data])


    return (
        <div>
            <Bredcumb></Bredcumb>
            <Container>


                <div className='flex gap-6 flex-col md:flex-row mt-16 md:mt-[125px]'>
                    <main className='flex flex-col gap-8'>

                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                        <BlogCard></BlogCard>
                    </main>
                    <div>
                        {content}
                    </div>

                </div>
                <Company></Company>
            </Container>


        </div>
    );
};

export default Blogs;