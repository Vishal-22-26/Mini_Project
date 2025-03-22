import { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    aadhar: "",
    state: "",
    district: "",
    income: 0,
    land: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex flex-col w-[100vw] h-full">
    <div className="items-center justify-center max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl text-black">
      <h2 className="text-2xl font-bold mb-4">Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full p-2 mb-2 border rounded placeholder-opacity-1" required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input type="text" name="aadhar" placeholder="Aadhar Number" value={formData.aadhar} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        <input type="text" name="district" placeholder="District" value={formData.district} onChange={handleChange} className="w-full p-2 mb-2 border rounded" required />
        
        <label className="block mt-4">Income (₹{formData.income})</label>
        <input type="range" name="income" min="0" max="50000" step="1000" value={formData.income} onChange={handleChange} className="w-full" />
        
        <label className="block mt-4">Land (sq ft: {formData.land})</label>
        <input type="range" name="land" min="0" max="10000" step="100" value={formData.land} onChange={handleChange} className="w-full" />
        
        <button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationForm;
