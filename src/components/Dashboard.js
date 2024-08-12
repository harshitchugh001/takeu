import React, { useState } from 'react';
import { updateBannerData } from '../api/apiService';

export default function Dashboard({ onUpdate }) {
    
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [timer, setTimer] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

   
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try {
            await updateBannerData({ description, link, timer, isVisible });
            if (onUpdate) {
                onUpdate({ description, link, timer, isVisible });
            }
        } catch (error) {
            console.error('Error updating banner:', error);
        }
    };

    return (
        <div className="dashboard bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Banner Dashboard</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium">Description:</label>
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Enter banner description"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium">Link:</label>
                    <input
                        type="url"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Enter link URL"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 text-sm font-medium">Timer (seconds):</label>
                    <input
                        type="number"
                        value={timer}
                        onChange={(e) => setTimer(e.target.value)}
                        className="p-2 border border-gray-300 rounded"
                        placeholder="Enter duration in seconds"
                        min="0"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={isVisible}
                        onChange={(e) => setIsVisible(e.target.checked)}
                        className="w-4 h-4 text-blue-600"
                    />
                    <label className="text-sm font-medium">Banner Visible</label>
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200"
                >
                    Update Banner
                </button>
            </form>
        </div>
    );
}
