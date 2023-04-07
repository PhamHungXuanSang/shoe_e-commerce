import React from 'react';
import { Link } from 'react-router-dom';

const Discount = () => {
    const fakeData = [
        {
            brand: 'Nike',
            img: 'https://giayxshop.vn/wp-content/uploads/2019/02/z3647648377271_1766387b92c7ca8dbc78c79a074d5e1c.jpg',
            price: 2000000,
            discount: true,
            discountPercent: 0,
            size: [38, 39, 40, 41, 42, 43, 44],
            color: ['yellow', 'black', 'red', 'blue'],
        },
        {
            brand: 'Adidas',
            img: 'https://giayxshop.vn/wp-content/uploads/2019/02/z3647648377271_1766387b92c7ca8dbc78c79a074d5e1c.jpg',
            price: 1800000,
            discount: false,
            discountPercent: 10,
            size: [38, 39, 40, 41, 42, 43, 44],
            color: ['yellow', 'black', 'red', 'blue'],
        },
        {
            brand: 'Puma',
            img: 'https://giayxshop.vn/wp-content/uploads/2019/02/z3647648377271_1766387b92c7ca8dbc78c79a074d5e1c.jpg',
            price: 1500000,
            discount: true,
            discountPercent: 0,
            size: [38, 39, 40, 41, 42, 43, 44],
            color: ['yellow', 'black'],
        },
        {
            brand: 'Thượng Đình',
            img: 'https://giayxshop.vn/wp-content/uploads/2019/02/z3647648377271_1766387b92c7ca8dbc78c79a074d5e1c.jpg',
            price: 150000,
            discount: false,
            discountPercent: 0,
            size: [38, 39, 40, 41, 42, 43, 44],
            color: ['white', 'black'],
        },
    ];

    const sortDiscountPercent = (fakeData) => {
        var flat = false;
        for (let k = 0; k < fakeData.length - 1; k++) {
            if (fakeData[k].discountPercent !== 0) {
                flat = true;
            }
        }
        if (flat === true) {
            for (let i = 0; i < fakeData.length - 1; i++) {
                for (let j = i + 1; j < fakeData.length - 1; j++) {
                    var tempObj = {};
                    if (fakeData[i].discountPercent < fakeData[j].discountPercent) {
                        tempObj = fakeData[i];
                        fakeData[i] = fakeData[j];
                        fakeData[j] = tempObj;
                    }
                }
            }

            return fakeData;
        } else {
            return null;
        }
    };

    return (
        <>
            {sortDiscountPercent(fakeData) ? (
                <>
                    <h1 className="font-semibold my-4 text-center">Siêu khuyến mãi</h1>
                    <div className="w-full flex px-4">
                        <div className="p-2">
                            <img
                                className=""
                                src={sortDiscountPercent(fakeData)[0].img}
                                alt={sortDiscountPercent(fakeData).brand}
                            />
                        </div>
                        <div className="p-2">
                            <img
                                className=""
                                src={sortDiscountPercent(fakeData)[1].img}
                                alt={sortDiscountPercent(fakeData).brand}
                            />
                        </div>
                        <div className="p-2">
                            <img
                                className=""
                                src={sortDiscountPercent(fakeData)[2].img}
                                alt={sortDiscountPercent(fakeData).brand}
                            />
                        </div>
                        <div className="p-2">
                            <img
                                className=""
                                src={sortDiscountPercent(fakeData)[3].img}
                                alt={sortDiscountPercent(fakeData).brand}
                            />
                        </div>
                    </div>
                    <Link to={'/DetailDiscount'} className="block text-center">
                        <button className="transition duration-500 ease-in-out text-xl py-2 px-6 border-2 border-solid border-red-600 bg-white hover:bg-red-600 rounded mx-auto font-bold text-red-600 hover:text-white hover:scale-105">
                            Xem chi tiết
                        </button>
                    </Link>
                </>
            ) : (
                ''
            )}
        </>
    );
};

export default Discount;
