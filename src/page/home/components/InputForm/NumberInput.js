const NumberInput = ({ amount,setAmount }) => {
    const handleInputChange = (e) => {
        setAmount(e.target.value);
    };

    return (
        <input type="number" className="amount px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white w-12 text-center" min="0" value={amount} onChange={handleInputChange} placeholder="0" />
    )
}

export default NumberInput;