// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { KitchenInventoryContext } from '../components/KitchenInventoryContext';
import InventoryCard from '../components/InventoryCard';

function Cupboard() {
    const { ingredients, loading, error, updateItem, deleteItem } = useContext(KitchenInventoryContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const cupboardItems = ingredients.filter(item => item.location === 'cupboard');

    const handleUpdate = (id, updatedItem) => {
        updateItem(id, updatedItem, 'ingredients');
    };

    const handleDelete = (id) => {
        deleteItem(id, 'ingredients');
    };

    return (
        <div>
            <h2>Cupboard Items</h2>
            {cupboardItems.length > 0 ? (
                cupboardItems.map(item => (
                    <InventoryCard 
                        key={item._id} 
                        item={item} 
                        onUpdate={(updatedItem) => handleUpdate(item._id, updatedItem)}
                        onDelete={() => handleDelete(item._id)} 
                    />
                ))
            ) : (
                <p>No cupboard items available</p>
            )}
        </div>
    );
}

export default Cupboard;
