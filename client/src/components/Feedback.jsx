import React, { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-6 w-full">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full">
        <h1 className="text-3xl font-bold text-center text-[#2f5d72] mb-6">
          Feedback
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Your opinion matters! Please let us know how we can improve this portal.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f5d72]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2f5d72]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full px-4 py-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#2f5d72]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#2f5d72] text-white py-2 px-4 rounded-md hover:bg-[#244656] transition-colors duration-300"
          >
            Submit Feedback
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-8 text-center">
          © {new Date().getFullYear()} Department of Agriculture & Farmers Welfare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Feedback;
