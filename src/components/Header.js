import React from 'react';
import { useDispatch } from 'react-redux';
import { togglePopup } from '../utils/showPopupSlice';

const Header = () => {

    const dispatch = useDispatch();

    const showPopup = () => {
        dispatch(togglePopup());
    };

    return (
        <div className='p-6 bg-[#00074E] bg-opacity-70 flex justify-between'>
            <img src="https://www.blazesoft.ca/wp-content/themes/blazesoft/images/logo.svg" alt="Blazesoft" width="168" height="68" />
            <button className='btn rounded-lg px-2 py-1 shadow-lg bg-gray-200 text-black hover:bg-gray-400 font-semibold' onClick={showPopup}>Add Book</button>
        </div>
    )
}

export default Header