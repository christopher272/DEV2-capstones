// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { KitchenInventoryContext } from '../components/KitchenInventoryContext';
import InventoryCard from '../components/InventoryCard';


function Pantry() {
    const { ingredients, loading, error, updateItem, deleteItem } = useContext(KitchenInventoryContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const pantryItems = ingredients.filter(item => item.location === 'pantry');

    const handleUpdate = (id, updatedItem) => {
        updateItem(id, updatedItem, 'ingredients');
    };

    const handleDelete = (id) => {
        deleteItem(id, 'ingredients');
    };

    return (
        <div>
            <h2>Pantry Items</h2>
            {pantryItems.length > 0 ? (
                pantryItems.map(item => (
                    <InventoryCard 
                        key={item._id} 
                        item={item} 
                        onUpdate={(updatedItem) => handleUpdate(item._id, updatedItem)}
                        onDelete={() => handleDelete(item._id)} 
                    />
                ))
            ) : (
                <p>No pantry items available</p>
            )}
        </div>
    );
}

export default Pantry;
