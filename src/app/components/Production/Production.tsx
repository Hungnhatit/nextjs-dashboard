
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductionList({ products }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.productBrand.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // pagination
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="p-4">
      {/* product table */}
      <table className="min-w-full table-auto bg-white border">
        <thead>
          <tr className="bg-[#162e4e]">
            <th className="px-4 py-2 text-left border text-white">#</th>
            <th className="px-4 py-2 text-left border text-white">Product Name</th>
            <th className="px-4 py-2 text-left border text-white">Brand</th>
            <th className="px-4 py-2 text-left border text-white">Price</th>
            <th className="px-4 py-2 text-left border text-white">Quantity</th>
            <th className="px-4 py-2 text-left border text-white">Description</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.length > 0 ? (
            currentItems.map((product, index) => (
              <tr key={index} className="hover:bg-gray-100 cursor-pointer">
                <td className="border px-4 py-2">{startIndex + index + 1}</td>
                <td className="border px-4 py-2">{product.productName}</td>
                <td className="border px-4 py-2">{product.productBrand}</td>
                <td className="border px-4 py-2">{product.productPrice}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="text-center py-4">
                No products found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}

ProductionList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productName: PropTypes.string.isRequired,
      productBrand: PropTypes.string.isRequired,
      productPrice: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};
