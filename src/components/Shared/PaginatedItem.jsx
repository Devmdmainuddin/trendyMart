import { useState } from 'react';
// import ProductCard from './card/ProductCard'
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
// import { useGetproductsQuery } from '../../Featured/ProductAPI';
import ProductCard06 from '../Card/ProductCard06';
import { useGetproductsQuery } from '../../Featured/ProductAPI/productApi';
import ProductCard07 from '../Card/ProductCard07';


function Items({ currentItems }) {


    return (
        <>
            {currentItems &&
                currentItems.map((item,key) => (
                    <div key={key}>
                        <ProductCard07 item={item}></ProductCard07>
                    </div>
                ))}
        </>
    );
}

function PaginatedItem({ itemsPerPage, item }) {
 
    const { data } = useGetproductsQuery()
    const items = item? item : data;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);


    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems} />
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

                    pageClassName="page-item text-[#767676] lg:w-9 w-5 lg:h-9 h-5 border border-[#F0F0F0] hover:bg-[#262626] hover:text-white"

                    pageLinkClassName="page-link w-full h-full flex justify-center items-center  text-sm font-normal"

                    activeClassName="active text-white bg-[#262626]"
                />

                <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>Products from {itemOffset + 1} to {endOffset > items?.length ? items?.length : endOffset} of {items?.length}</p>
            </div>
        </>
    );
}
PaginatedItem.propTypes = {
    itemsPerPage: PropTypes.number,
    item: PropTypes.array,


}
export default PaginatedItem