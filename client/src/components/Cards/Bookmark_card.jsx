import React from 'react';
import { FiTrash } from 'react-icons/fi';

const Card = ({ url, name, onDelete }) => (
  <div className="border border-gray-300 p-4 m-4 rounded-md">
    <button
      className="ml-2 text-red-500 hover:underline float-right"
      onClick={() => onDelete()}
    >
      <FiTrash />
    </button>
    <p>
      <strong>Bookmark Name:</strong> {name}
    </p>
    <p>
      <strong>Url:</strong> {url}
    </p>
  </div>
);

export default Card;
