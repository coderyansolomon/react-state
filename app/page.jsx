'use client'


export default function EventsPage() {
  const handleButtonClick = (e) => {
    console.log({buttonClick: e})
    console.log('Button clicked!');

  };

  const handleInputChange = (e) => {
    console.log({event: e})
    console.log(`Input value changed to: ${e.target.value}`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    alert(`Form submitted with Name: ${formData.get('name')} and Email: ${formData.get('email')}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12">Handling Events in React.js</h1>

      <button
    onClick={handleButtonClick}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded mb-8 text-2xl"
  >
    Click Me
  </button>

      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
        className="bg-gray-700 text-white p-4 rounded mb-8 text-2xl w-3/4"
      />

      <form onSubmit={handleFormSubmit} className="bg-gray-800 p-8 rounded shadow-lg w-3/4">
        <div className="mb-8">
          <label className="block text-gray-300 mb-4 text-2xl" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="bg-gray-700 text-white p-4 rounded w-full text-2xl"
          />
        </div>
        <div className="mb-8">
          <label className="block text-gray-300 mb-4 text-2xl" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-700 text-white p-4 rounded w-full text-2xl"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded text-2xl"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
