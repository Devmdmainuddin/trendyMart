import { IoIosArrowForward } from "react-icons/io";
import Container from "./Container";
import { Link } from "react-router-dom";


const Bredcumb = () => {
    const pathSegments = window.location.pathname.split("/").filter(Boolean);
    return (
        <div className="bg-[#F6F5FF]">
            <Container>
                <div className='py-8 md:pt-[93px] md:pb-[128px]'>
                {/* <h2 className='text-[#101750] text-2xl md:text-5xl font-bold capitalize'>{`${window.location.pathname.split("/")[1]} `} </h2> */}
                    <h2 className='text-[#101750] text-2xl md:text-5xl font-bold capitalize'> {pathSegments[0] ? pathSegments[0] : "Home"}
                    </h2>
                    <p></p>
                    {/* <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-xl font-normal text-[#101750] flex items-center'><Link to='/'>Home  </Link><span >{` - ${window.location.pathname.split("/")[1]}-${window.location.pathname.split("/")[2]}?${window.location.pathname.split("/")[2]}`}</span></li>

                    </ul> */}
                     <ul className='flex items-center gap-2 mt-3'>
                        <li className='text-xl font-normal text-[#101750] flex items-center'>
                            <Link to='/'>Home</Link>
                            {pathSegments[0] && (
                                <>
                                    <span className="mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}`}>
                                        {pathSegments[0]}
                                    </Link>
                                </>
                            )}
                            {pathSegments[1] && (
                                <>
                                    <span className="mx-2"> - </span>
                                    <Link to={`/${pathSegments[0]}/${pathSegments[1]}`}>
                                        {pathSegments[1]}
                                    </Link>
                                </>
                            )}
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    );
};

export default Bredcumb;