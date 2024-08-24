// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { KitchenInventoryContext } from '../components/KitchenInventoryContext';
import InventoryCard from '../components/InventoryCard';


function Freezer() {
    const { ingredients, loading, error, updateItem, deleteItem } = useContext(KitchenInventoryContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const freezerItems = ingredients.filter(item => item.location === 'freezer');

    const handleUpdate = (id, updatedItem) => {
        updateItem(id, updatedItem, 'ingredients');
    };

    const handleDelete = (id) => {
        deleteItem(id, 'ingredients');
    };

    return (
        <div>
            <h2>Freezer Items</h2>
            {freezerItems.length > 0 ? (
                freezerItems.map(item => (
                    <InventoryCard 
                        key={item._id} 
                        item={item} 
                        onUpdate={(updatedItem) => handleUpdate(item._id, updatedItem)}
                        onDelete={() => handleDelete(item._id)} 
                    />
                ))
            ) : (
                <p>No freezer items available</p>
            )}
        </div>
    );
}

export default Freezer;
