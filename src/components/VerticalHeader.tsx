import React from 'react';

const VerticalHeader: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-start items-center gap-8 mt-8">
        <h1 className="text-5xl font-extrabold text-center">T<span className='text-secondary'>.</span></h1>
        <div className="flex flex-col justify-around items-center gap-8">
            <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
            <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
            <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
            <a href="#" className="w-[55px] h-[55px] bg-base rounded-lg"></a>
        </div>    
    </div>
    );
};

export default VerticalHeader;