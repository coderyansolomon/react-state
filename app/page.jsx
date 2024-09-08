'use client'


export default function ReactState() {

  const handleInputChange = (e) => {
    // handle change
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12">How Does 'State' Work In React.js?</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mb-8 text-2xl"
      >
        Count: 0
      </button>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
        className="bg-gray-700 text-white p-4 rounded mb-8 text-2xl w-3/4"
      />
    </div>
  );
}
