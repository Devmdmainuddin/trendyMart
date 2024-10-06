import { useState } from 'react';
// import ProductCard from './card/ProductCard'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
// import { useGetproductsQuery } from '../../Featured/ProductAPI';
import ProductCard06 from '../Card/ProductCard06';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import ProductCard07 from '../Card/ProductCard07';


function Items({ currentItems, activeMulti }) {


    return (
        <>
            {currentItems &&
                currentItems.map((item, key) => (
                    <div key={key} className={`${activeMulti ? '' : 'w-full'}`}>

                        {activeMulti ? (
                            <ProductCard06 item={item}></ProductCard06>
                        ) : (
                            <ProductCard07 item={item}></ProductCard07>
                        )}

                    </div>
                ))}
        </>
    );
}

function PaginatedItem({ itemsPerPage, item, activeMulti }) {

    const { data } = useGetproductsQuery()
    const items = item ? item : data;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;

    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };
   
    return (
        <>{currentItems.length > 0
            ?
            <>
                <Items currentItems={currentItems} activeMulti={activeMulti} />
                <div className='w-full flex justify-between items-center mt-[50px] flex-wrap gap-y-4'>
                    <ReactPaginate
                        breakLabel="..."
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}

                        nextClassName="hidden"
                        previousClassName="hidden"


                        renderOnZeroPageCount={null}

                        containerClassName="pagination flex gap-x-4"
                        // <button className="block mt-6  text-[16px] font-josefin font-semibold py-[10px] px-[30px] bg-[#FB2E86] text-white rounded-sm  capitalize">Contact us</button>
                        pageClassName="page-item text-[#767676] lg:w-9 w-5 lg:h-9 h-5 border border-[#F0F0F0] hover:bg-[#FB2E86] hover:text-white "

                        pageLinkClassName="page-link w-full h-full flex justify-center items-center   text-sm font-normal"

                        activeClassName=" text-white bg-[#FB2E86]"
                    />

                    <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>Products from {itemOffset + 1} to {endOffset > items?.length ? items?.length : endOffset} of {items?.length}</p>
                </div>
            </>
            : <>
                <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                    <p className="p-3 text-sm font-medium text-blue-500 rounded-full bg-blue-50 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                        </svg>
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl uppercase">no product</p>

                </div>

            </>
        }


        </>
    );
}
PaginatedItem.propTypes = {
    itemsPerPage: PropTypes.number,
    item: PropTypes.array,


}
export default PaginatedItem