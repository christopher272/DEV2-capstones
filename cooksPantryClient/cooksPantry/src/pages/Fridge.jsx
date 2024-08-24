// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { KitchenInventoryContext } from '../components/KitchenInventoryContext';
import InventoryCard from '../components/InventoryCard';

function Fridge() {
    const { ingredients, loading, error, updateItem, deleteItem } = useContext(KitchenInventoryContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const fridgeItems = ingredients.filter(item => item.location === 'refrigerator');

    const handleUpdate = (id, updatedItem) => {
        updateItem(id, updatedItem, 'ingredients');
    };

    const handleDelete = (id) => {
        deleteItem(id, 'ingredients');
    };

    return (
        <div>
            <h2>Fridge Items</h2>
            {fridgeItems.length > 0 ? (
                fridgeItems.map(item => (
                    <InventoryCard 
                        key={item._id} 
                        item={item} 
                        onUpdate={(updatedItem) => handleUpdate(item._id, updatedItem)}
                        onDelete={() => handleDelete(item._id)} 
                    />
                ))
            ) : (
                <p>No fridge items available</p>
            )}
        </div>
    );
}

export default Fridge;

