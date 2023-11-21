import React from 'react';

const Message = ({ text, isUser }) => (
  <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
    <div className={`max-w-xs rounded-lg p-3 ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
      {text}
    </div>
  </div>
);

export default Message;