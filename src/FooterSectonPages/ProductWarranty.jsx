import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ProductWarranty = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="min-h-screen flex items-center justify-center my-12">
                <div className="max-w-screen-md mx-auto bg-white shadow-lg rounded-lg mt-10 p-6 hover:shadow-2xl">
                    {/* Image Section */}
                    <div>
                        <img
                            src="https://mini-io-api.texnomart.uz/newcontent//static-page/image/4/Z5ZHfkO61WN3lXOP.png"
                            alt="Гарантия до 3 лет"
                            className="h-50 w-full rounded-lg"
                        />
                        <div className="ml-4">
                            <span className="text-white text-xl font-bold">*гарантия до 3 лет</span>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="mt-6">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Гарантия на товары</h1>

                        <h2 className="text-xl font-semibold text-gray-800 mb-2">Куда обратиться за гарантийным обслуживанием?</h2>
                        <p className="text-gray-600 mb-4">
                            На товары в нашем магазине предоставляется гарантия, подтверждающая обязательства по отсутствию в товаре
                            наличия заводских дефектов. Гарантия предоставляется на срок от 10 дней до 3 лет, в зависимости от
                            сервисной политики производителя. Срок гарантии указан в описании каждого товара на нашем сайте.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Пожалуйста, проверяйте комплектацию и отсутствие дефектов товара при получении.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Гарантийным обслуживанием занимаются сервисные центры, авторизованные производителями. Вы можете
                            отправить товар на гарантийный ремонт или вызвать мастера за счёт сервисного центра. Доступные варианты
                            указаны в Вашем гарантийном талоне.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Адреса и телефоны сервисных центров можно найти на гарантийном талоне или в списке сервисных центров.
                        </p>
                        <p className="text-gray-600">
                            Если в вашем городе нет сервисного центра, обслуживающего товар, Вы можете обратиться в отдел
                            клиентского обслуживания нашей компании.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default ProductWarranty