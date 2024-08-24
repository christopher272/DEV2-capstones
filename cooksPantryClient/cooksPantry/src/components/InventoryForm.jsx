// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';

function InventoryForm() {
    const [formType, setFormType] = useState('ingredient'); // Default form type
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        unit: 'cup', // Default value
        location: 'refrigerator', // Default value
        category: 'spices', // Default value for ingredients
        purchaseDate: '',
        expiration: true,
        expirationDate: '',
        servings: '',
        notes: '',
    });

    const handleFormTypeChange = (e) => {
        setFormType(e.target.value);
        setFormData({
            ...formData,
            amount: '',
            unit: 'cup',
            category: 'spices',
            purchaseDate: '',
            expiration: true,
            expirationDate: '',
            servings: '',
        });
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = formType === 'ingredient' ? 'ingredients' : 'dishes';

        const filteredData = formType === 'ingredient'
            ? {
                name: formData.name,
                amount: formData.amount,
                unit: formData.unit,
                location: formData.location,
                category: formData.category,
                purchaseDate: formData.purchaseDate,
                expiration: formData.expiration,
                expirationDate: formData.expirationDate,
                notes: formData.notes,
            }
            : {
                name: formData.name,
                servings: formData.servings,
                location: formData.location,
                expirationDate: formData.expirationDate,
                notes: formData.notes,
            };

        try {
            await axios.post(`http://localhost:9000/${endpoint}`, filteredData);
            alert(`${formType === 'ingredient' ? 'Ingredient' : 'Dish'} added successfully!`);
            setFormData({
                name: '',
                amount: '',
                unit: 'cup',
                location: 'refrigerator',
                category: 'spices',
                purchaseDate: '',
                expiration: true,
                expirationDate: '',
                servings: '',
                notes: '',
            });
        } catch (err) {
            console.error(`Error adding ${formType}:`, err);
            alert(`Failed to add ${formType}`);
        }
    };

    return (
        <div>
            <h1>Inventory Management</h1>
            <div>
                <label>
                    <input
                        type="radio"
                        value="ingredient"
                        checked={formType === 'ingredient'}
                        onChange={handleFormTypeChange}
                    />
                    Add Ingredient
                </label>
                <label>
                    <input
                        type="radio"
                        value="dish"
                        checked={formType === 'dish'}
                        onChange={handleFormTypeChange}
                    />
                    Add Dish
                </label>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                {formType === 'ingredient' && (
                    <>
                        <div>
                            <label>Amount: </label>
                            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Unit: </label>
                            <select name="unit" value={formData.unit} onChange={handleChange} required>
                                <option value="cup">Cup</option>
                                <option value="gallon">Gallon</option>
                                <option value="pound">Pound</option>
                                <option value="kg">Kg</option>
                                <option value="oz">Oz</option>
                                <option value="floz">Fluid Oz</option>
                                <option value="jar">Jar</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <label>Category: </label>
                            <select name="category" value={formData.category} onChange={handleChange} required>
                                <option value="spices">Spices</option>
                                <option value="grains">Grains</option>
                                <option value="dairy">Dairy</option>
                                <option value="veggies">Veggies</option>
                                <option value="fruits">Fruits</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <div>
                            <label>Location: </label>
                            <select name="location" value={formData.location} onChange={handleChange} required>
                                <option value="refrigerator">Refrigerator</option>
                                <option value="freezer">Freezer</option>
                                <option value="pantry">Pantry</option>
                                <option value="cupboard">Cupboard</option>
                            </select>
                        </div>
                        <div>
                            <label>Purchase Date: </label>
                            <input type="date" name="purchaseDate" value={formData.purchaseDate} onChange={handleChange} required />
                        </div>
                    </>
                )}

                {formType === 'ingredient' && (
                    <div>
                        <label>Expiration: </label>
                        <input type="checkbox" name="expiration" checked={formData.expiration} onChange={handleChange} />
                    </div>
                )}

                {(formData.expiration || formType === 'dish') && (
                    <div>
                        <label>Expiration Date: </label>
                        <input type="date" name="expirationDate" value={formData.expirationDate} onChange={handleChange} required />
                    </div>
                )}

                {formType === 'dish' && (
                    <>
                        <div>
                            <label>Servings: </label>
                            <input type="number" name="servings" value={formData.servings} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Location: </label>
                            <select name="location" value={formData.location} onChange={handleChange} required>
                                <option value="refrigerator">Refrigerator</option>
                                <option value="freezer">Freezer</option>
                                <option value="pantry">Pantry</option>
                                <option value="cupboard">Cupboard</option>
                            </select>
                        </div>
                    </>
                )}

                <div>
                    <label>Notes: </label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>
                </div>

                <button type="submit">Add {formType === 'ingredient' ? 'Ingredient' : 'Dish'}</button>
            </form>
        </div>
    );
}

export default InventoryForm;
