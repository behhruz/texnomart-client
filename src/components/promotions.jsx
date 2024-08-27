import React, { useEffect, useState } from 'react';

const Promactions = () => {
  const [promactionsData, setPromactionsData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/Chegirmalarni')
      .then(response => response.json())
      .then(data => setPromactionsData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto py-16">
      <h2 className="text-center text-2xl font-bold mb-8">Chegirmalar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {promactionsData.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img src={item.img3} alt={item.title3} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-lg font-semibold mb-2">{item.title3}</h3>
            <p className="text-sm text-gray-600">{item.data1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promactions;
