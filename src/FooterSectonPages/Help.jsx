import React from 'react'
import Footer from '../components/footer'
import Header from '../components/Header'

const Help = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <div className="max-w-lg mx-auto text-center">
                    {/* Rasm bo'limi */}
                    <img
                        src="https://texnomart.uz/_nuxt/img/error.7b47c4e.svg"
                        alt="Страница не найдена"
                        className="w-full h-auto"
                    />
                    {/* Matn bo'limi */}
                    <h1 className="text-3xl font-bold text-gray-800 mt-6">Страница не найдена</h1>
                    <p className="text-gray-600 mt-2">
                        Возможно, вы ввели неверный адрес.
                        Попробуйте воспользоваться поиском или перейдите на
                        <a href="/" className="text-blue-500 underline list-none "> главную страницу</a>.
                    </p>
                </div>
            </div>
            <div>
                <Footer />
            </div>

        </>
    )
}

export default Help