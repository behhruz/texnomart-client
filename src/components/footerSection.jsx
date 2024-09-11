import React from 'react';

const FooterSection = () => {
    return (
        <div className=''>
            <div className="max-w-screen-xl mx-auto py-16">
                <h2 className="text-center text-2xl font-bold mb-8">
                    Telefonlar va maishiy texnika muddatli to'lovga
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div className="text-4xl mb-4"><img src="src/assets/cards/cardcar.png" alt="" /></div>
                        <h3 className="text-lg font-semibold mb-2">Bepul etkazib berish</h3>
                        <p className="text-sm text-gray-600">
                            Texnomartga tovarlarni etkazib berish shartlari
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div className="text-4xl mb-4"><img src="src/assets/cards/second.png" alt="" /></div>
                        <h3 className="text-lg font-semibold mb-2">Mahsulotlar uchun kafolat</h3>
                        <p className="text-sm text-gray-600">
                            Texnomartga mahsulotning kafolati va qaytarilishi haqida hamma narsani biling
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div className="text-4xl mb-4"><img src="src/assets/cards/third.png" alt="" /></div>
                        <h3 className="text-lg font-semibold mb-2">Bonus tizimi</h3>
                        <p className="text-sm text-gray-600">Bonus tizimi</p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div className="text-4xl mb-4"><img src="src/assets/cards/forth.png" alt="" /></div>
                        <h3 className="text-lg font-semibold mb-2">Yordam</h3>
                        <p className="text-sm text-gray-600">Ko'p beriladigan savollar</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterSection;
