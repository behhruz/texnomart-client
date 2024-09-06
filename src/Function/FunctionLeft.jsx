import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FunctionLeft = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    return (
        <>
            <div className='ml-[100px] mt-6'>


                <div className="flex">
                    <button onClick={() => navigate(-1)} className="back-button mr-4">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>

                    <div className="    ">
                        <Link to="/" className=""><button className='bg-[#F7F7F7] text-black py-2 px-4 rounded-full shadow-sm hover:bg-gray-200 mr-2'>Bosh ekran</button></Link>
                        <Link to="/all-categories" className=""><button className='bg-[#F7F7F7] text-black py-2 px-4 rounded-full shadow-sm hover:bg-gray-200'>Mahsulot katlogi</button></Link>
                    </div>
                </div>
                <h1 className="font-bold text-[24px] mt-3">Mahsulot katlogi</h1>
            </div>
            <hr className="w-full mt-6" />
        </>

    );
};

export default FunctionLeft;
