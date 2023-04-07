import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const SlideBar = () => {
    const fakeImg = [
        { src: 'https://giaygiare.vn/upload/images/top-5-mau-giay-adidas-nam-tot-nhat-nam-2019.jpg', alt: 'slide-img' },
        { src: 'https://intphcm.com/data/upload/poster-giay-den.jpg', alt: 'slide-img' },
        { src: 'https://intphcm.com/data/upload/poster-giay-puma.jpg', alt: 'slide-img' },
    ];
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 900;
    };
    const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 900;
    };

    return (
        <div className="mt-2 mx-auto w-[900px] h-[60%] flex items-center group rounded-3xl overflow-hidden">
            <MdChevronLeft
                onClick={slideLeft}
                className="hidden absolute ml-[4px] z-10 rounded-full bg-white cursor-pointer hover:opacity-80 hover:scale-90 group-hover:block"
                size={38}
                fill={'#000000'}
            />
            <div
                id={'slider'}
                className={
                    'select-none min-w-[900px] max-h-full whitespace-nowrap overflow-x-scroll scroll-smooth scrollbar-hide relative flex'
                }
            >
                {fakeImg.map((item, index) => (
                    <img key={index} className="min-w-full h-full object-center" src={item.src} alt={item.alt} />
                ))}
            </div>
            <MdChevronRight
                onClick={slideRight}
                className="hidden absolute right-[185px] z-10 rounded-full bg-white cursor-pointer hover:opacity-80 hover:scale-90 group-hover:block"
                size={38}
                fill={'#000000'}
            />
        </div>
    );
};

export default SlideBar;
