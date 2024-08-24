// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const KitchenInventoryContext = createContext();

export const KitchenInventoryProvider = ({ children }) => {
    const [ingredients, setIngredients] = useState([]);
    const [dishes, setDishes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const ingredientsResponse = await axios.get('http://localhost:9000/ingredients');
                const dishesResponse = await axios.get('http://localhost:9000/dishes');
                
                setIngredients(ingredientsResponse.data);
                setDishes(dishesResponse.data);

            } catch (err) {
                setError('Failed to fetch data. Please try again later.');
                console.error('Failed to fetch data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const updateItem = async (id, updatedItem, category) => {
        try {
            const response = await axios.put(`http://localhost:9000/${category}/${id}`, updatedItem);
            const updatedData = response.data;

            if (category === 'ingredients') {
                setIngredients(prevIngredients =>
                    prevIngredients.map(item => (item._id === id ? updatedData : item))
                );
            } else if (category === 'dishes') {
                setDishes(prevDishes =>
                    prevDishes.map(item => (item._id === id ? updatedData : item))
                );
            }
        } catch (err) {
            setError('Failed to update item. Please try again later.');
            console.error('Failed to update item:', err);
        }
    };

    const deleteItem = async (id, category) => {
        try {
            await axios.delete(`http://localhost:9000/${category}/${id}`);
            if (category === 'ingredients') {
                setIngredients(prevIngredients => prevIngredients.filter(item => item._id !== id));
            } else if (category === 'dishes') {
                setDishes(prevDishes => prevDishes.filter(item => item._id !== id));
            }
        } catch (err) {
            setError('Failed to delete item. Please try again later.');
            console.error('Failed to delete item:', err);
        }
    };

    return (
        <KitchenInventoryContext.Provider value={{ ingredients, dishes, loading, error, updateItem, deleteItem }}>
            {children}
        </KitchenInventoryContext.Provider>
    );
};

KitchenInventoryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
