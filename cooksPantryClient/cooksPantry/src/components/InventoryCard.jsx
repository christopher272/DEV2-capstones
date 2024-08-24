import { useState } from 'react';
import PropTypes from 'prop-types';

function InventoryCard({ item, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedItem, setUpdatedItem] = useState(item);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedItem({
            ...updatedItem,
            [name]: value,
        });
    };

    const handleSave = () => {
        onUpdate(updatedItem);
        setIsEditing(false);
    };

    return (
        <div className="inventory-card">
            {isEditing ? (
                <>
                    <input type="text" name="name" value={updatedItem.name} onChange={handleChange} />
                    {item.amount && (
                        <>
                            <input type="number" name="amount" value={updatedItem.amount} onChange={handleChange} />
                            <input type="text" name="unit" value={updatedItem.unit} onChange={handleChange} />
                        </>
                    )}
                    {item.category && <input type="text" name="category" value={updatedItem.category} onChange={handleChange} />}
                    {item.location && <input type="text" name="location" value={updatedItem.location} onChange={handleChange} />}
                    {item.servings && <input type="number" name="servings" value={updatedItem.servings} onChange={handleChange} />}
                    {item.purchaseDate && <input type="date" name="purchaseDate" value={updatedItem.purchaseDate} onChange={handleChange} />}
                    {item.expirationDate && <input type="date" name="expirationDate" value={updatedItem.expirationDate} onChange={handleChange} />}
                    {item.notes && <textarea name="notes" value={updatedItem.notes} onChange={handleChange} />}
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleEditToggle}>Cancel</button>
                </>
            ) : (
                <>
                    <h3>{item.name}</h3>
                    {item.amount && <p>Amount: {item.amount} {item.unit}</p>}
                    {item.category && <p>Category: {item.category}</p>}
                    {item.location && <p>Location: {item.location}</p>}
                    {item.servings && <p>Servings: {item.servings}</p>}
                    {item.purchaseDate && <p>Purchased: {new Date(item.purchaseDate).toLocaleDateString()}</p>}
                    {item.expirationDate && <p>Expires: {new Date(item.expirationDate).toLocaleDateString()}</p>}
                    {item.notes && <p>Notes: {item.notes}</p>}
                    <button onClick={handleEditToggle}>Edit</button>
                    <button onClick={onDelete}>Delete</button>
                </>
            )}
        </div>
    );
}

InventoryCard.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        amount: PropTypes.number,
        unit: PropTypes.string,
        category: PropTypes.string,
        location: PropTypes.string,
        servings: PropTypes.number,
        purchaseDate: PropTypes.string,
        expirationDate: PropTypes.string,
        notes: PropTypes.string,
    }).isRequired,
    onUpdate: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default InventoryCard;
