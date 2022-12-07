import React from 'react'
import { Header } from './component/Headers'
import { Box } from '@mui/material'
import { Home } from './component/Home'
import DataProvider from './context/DataProviders'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailsViewPage from './component/Details/DetailsViewPage'
import Cart from './component/Cart/Cart'
import { Address, AddressPage } from './component/Address'
import "./App.css"



const App = () => {
    return (
        <DataProvider>
            <Header />
            <BrowserRouter>
                <Box style={{ marginTop: '58px' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/product/:id' element={<DetailsViewPage />} />
                        <Route path='/cart' element={<Cart />} />
                        <Route path="/addresspage" element={<AddressPage />} />
                        <Route path="/address" element={<Address />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </DataProvider>
    )
}

export default App