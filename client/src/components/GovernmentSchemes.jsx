import { useState, useEffect } from 'react';

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
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Government Schemes for Farmers
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schemes.map((scheme, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {scheme.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-700">Description</h3>
                  <p className="text-gray-600">{scheme.description}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700">Eligibility</h3>
                  <p className="text-gray-600">{scheme.eligibility}</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700">Benefits</h3>
                  <p className="text-gray-600">{scheme.benefits}</p>
                </div>
                
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
  );
};

export default GovernmentSchemes;