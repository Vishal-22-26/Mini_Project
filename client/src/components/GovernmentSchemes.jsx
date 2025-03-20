import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const GovernmentSchemes = () => {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchemes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/subsidies');
        if (!response.ok) {
          throw new Error('Failed to fetch schemes');
        }
        const data = await response.json();
        setSchemes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSchemes();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-4">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>Error: {error}</p>
          <Link to="/" className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header with link back to home */}
      <header className="bg-[#722f37] text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Government Schemes</h1>
          <Link to="/" className="px-4 py-2 bg-[#883944] hover:bg-[#9a4450] transition rounded">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="flex-grow bg-gray-50 p-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Agricultural Schemes for Farmers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {schemes.map((scheme, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {scheme.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-700">Description</h4>
                    <p className="text-gray-600">{scheme.description || "No description available"}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Eligibility</h4>
                    <p className="text-gray-600">{scheme.eligibility || "Eligibility criteria not specified"}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-700">Benefits</h4>
                    <p className="text-gray-600">{scheme.benefits || "Benefits not specified"}</p>
                  </div>
                  
                  {scheme.guideline_links && scheme.guideline_links.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-700">Guidelines</h4>
                      <ul className="list-disc list-inside text-blue-600">
                        {scheme.guideline_links.map((link, i) => (
                          <li key={i}><a href={link} target="_blank" rel="noopener noreferrer" className="hover:underline">View Guidelines</a></li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {scheme.lastDate && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm text-red-600">
                        Last Date: {scheme.lastDate}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Department of Agriculture & Farmers Welfare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default GovernmentSchemes;