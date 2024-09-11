import React, { useContext } from 'react'
const FooterSection = () => {
    return (
        <div className=''>

            <div class="max-w-screen-xl mx-auto py-16">
                <h2 class="text-center text-2xl font-bold mb-8">
                    Telefonlar va maishiy texnika muddatli to'lovga
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div class="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div class="text-4xl mb-4"><img src="src/assets/cards/cardcar.png" alt="" /></div>
                        <h3 class="text-lg font-semibold mb-2">Bepul etkazib berish</h3>
                        <p class="text-sm text-gray-600">
                            Texnomartga tovarlarni etkazib berish shartlari
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div class="text-4xl mb-4"><img src="src/assets/cards/second.png" alt="" /></div>
                        <h3 class="text-lg font-semibold mb-2">Mahsulotlar uchun kafolat</h3>
                        <p class="text-sm text-gray-600">
                            Texnomartga mahsulotning kafolati va qaytarilishi haqida hamma narsani biling
                        </p>
                    </div>
                    <div class="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div class="text-4xl mb-4"><img src="src/assets/cards/third.png" alt="" /></div>
                        <h3 class="text-lg font-semibold mb-2">Bonus tizimi</h3>
                        <p class="text-sm text-gray-600">Bonus tizimi</p>
                    </div>
                    <div class="flex flex-col items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
                        <div class="text-4xl mb-4"><img src="src/assets/cards/forth.png" alt="" /></div>
                        <h3 class="text-lg font-semibold mb-2">Yordam</h3>
                        <p class="text-sm text-gray-600">Ko'p beriladigan savollar</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default FooterSection