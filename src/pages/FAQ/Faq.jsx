import React, { useEffect, useState } from 'react';
import Bredcumb from '../../components/Shared/Bredcumb';
import Image from '../../components/Shared/Image';
import Container from '../../components/Shared/Container';
import { Link } from 'react-router-dom';
import Heading from '../../components/Shared/Heading'
import Company from '../../components/Home/Company'

const Faq = () => {
  return (
    <div>
      <Bredcumb />
      <Container>
        <div className='flex flex-col lg:flex-row justify-center   gap-8  my-[121px]'>
          <div className='left w-full md:1/2 '>
            <Heading text='Generel Information'></Heading>
            <div>
              <h2 className='text-[#1D3178] text-[17px] font-josefin font-bold capitalize mt-6 md:mt-16'>Eu dictumst cum at sed euismood condimentum?</h2>
              <p className='max-w-[499px] text-[#A1ABCC] text-[16px] font-josefin font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div>
              <h2 className='text-[#1D3178] text-[17px] font-josefin font-bold capitalize mt-6 md:mt-16'>Eu dictumst cum at sed euismood condimentum?</h2>
              <p className='max-w-[499px] text-[#A1ABCC] text-[16px] font-josefin font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div>
              <h2 className='text-[#1D3178] text-[17px] font-josefin font-bold capitalize mt-6 md:mt-16'>Eu dictumst cum at sed euismood condimentum?</h2>
              <p className='max-w-[499px] text-[#A1ABCC] text-[16px] font-josefin font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>
            <div>
              <h2 className='text-[#1D3178] text-[17px] font-josefin font-bold capitalize mt-6 md:mt-16'>Eu dictumst cum at sed euismood condimentum?</h2>
              <p className='max-w-[499px] text-[#A1ABCC] text-[16px] font-josefin font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.</p>
            </div>


          </div>
          <div className="right w-full md:1/2 bg-[#F8F8FD] py-[65px] px-12">

            <h2 className='text-[#1D3178] text-2xl font-josefin font-bold'>Ask a Question</h2>

            <form className='mt-6 md:mt-16 lg:mt-[114px]'>

              <input className=" w-full   py-[13px] px-[11px] border outline-0" type="text" placeholder="Your Name*" />
              <input className="mt-8 w-full  py-[13px] px-[11px] border outline-0" type="email" placeholder="Your E-mail" />
              <input className="mt-8 w-full py-[13px] px-[11px] border outline-0" type="text" placeholder="Subject*" />
              {/* <input className=" w-full mt-[47px] h-[197px]   py-[13px] px-[11px] border outline-0" type="text" placeholder="Type Your Message*" /> */}
              <textarea className="mt-[47px] h-[197px] w-full  py-[13px] px-[11px] border outline-0 resize-none" cols="10" rows="10" placeholder="Type Your Message*"></textarea>
              <button type='submit' className="text-white bg-[#FB2E86] font-josefin text-[14px] rounded-[3px] border border-[#FB2E86] px-[20px] py-[10px] mt-[41px]">Send Mail</button>
            </form>
          </div>
        </div>
      </Container>
      <Company></Company>

    </div>
  );
};

export default Faq;
