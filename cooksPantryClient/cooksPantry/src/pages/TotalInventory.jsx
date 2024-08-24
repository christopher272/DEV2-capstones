// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { KitchenInventoryContext } from '../components/KitchenInventoryContext';
import InventoryCard from '../components/InventoryCard';


function TotalInventory() {
    const { ingredients, dishes, loading, error, updateItem, deleteItem } = useContext(KitchenInventoryContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const allItems = [...ingredients, ...dishes];

    const handleUpdate = (id, updatedItem, category) => {
        updateItem(id, updatedItem, category);
    };

    const handleDelete = (id, category) => {
        deleteItem(id, category);
    };

    return (
        <div>
            <h2>Total Inventory</h2>
            {allItems.length > 0 ? (
                allItems.map(item => (
                    <InventoryCard 
                        key={item._id} 
                        item={item} 
                        onUpdate={(updatedItem) => handleUpdate(item._id, updatedItem, item.category === 'dish' ? 'dishes' : 'ingredients')}
                        onDelete={() => handleDelete(item._id, item.category === 'dish' ? 'dishes' : 'ingredients')} 
                    />
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
    );
}

export default TotalInventory;

