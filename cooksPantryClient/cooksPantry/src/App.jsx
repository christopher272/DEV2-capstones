// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Fridge from './pages/Fridge';
import Freezer from './pages/Freezer';
import Pantry from './pages/Pantry';
import Cupboard from './pages/Cupboard';
import TotalInventory from './pages/TotalInventory';
import Dishes from './pages/Dish';
import InventoryForm from './components/InventoryForm';
import KitchenInventory from './components/KitchenInventory';

const App = () => {
    return (
        <KitchenInventory>
            <Navbar />
            <h1>Cooks Pantry</h1>
            <Routes>
                <Route path="/" element={<InventoryForm />} />
                <Route path="/fridge" element={<Fridge />} />
                <Route path="/freezer" element={<Freezer />} />
                <Route path="/pantry" element={<Pantry />} />
                <Route path="/cupboard" element={<Cupboard />} />
                <Route path="/total" element={<TotalInventory />} />
                <Route path="/dish" element={<Dishes />} />
            </Routes>
        </KitchenInventory>
    );
};

export default App;
