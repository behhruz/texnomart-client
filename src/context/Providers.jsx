import React, { createContext, useState } from 'react'

export const DataContext = createContext()
const Providers = ({ children }) => {

    const [data, setData] = useState(1)
    return (
        <>
            <DataContext.Provider value={{ data, setData }}>
                {children}
            </DataContext.Provider>

        </>
    )
}

export default Providers