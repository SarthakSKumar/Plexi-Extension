import React, { useState } from 'react';
import { FiEye, FiEyeOff, FiTrash } from 'react-icons/fi'; // Assuming you have imported eye icons from a library like react-icons

const Card = ({ url, password, onDelete }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="border border-gray-300 p-4 m-4 rounded-md">
            <button
                className="ml-2 text-red-500 hover:underline float-right"
                onClick={() => onDelete()}
            >
                <FiTrash />
            </button>
            <p>
                <strong>URL:</strong> {url}
            </p>
            <p>
                <strong>Password:</strong>
                {showPassword ? (
                    <span>{password}</span>
                ) : (
                    <span>
                        {password.replace(/./g, '*')} {/* Mask the password characters */}
                    </span>
                )}
                <button
                    className="ml-2 text-blue-500 hover:underline"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
            </p>
        </div>
    );
};

export default Card;