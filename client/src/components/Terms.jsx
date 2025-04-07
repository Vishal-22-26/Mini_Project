import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 w-full">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-center text-[#2f5d72] mb-6">
          Terms & Conditions
        </h1>

        <div className="text-gray-700 space-y-6">
          <p>
            Welcome to the Department of Agriculture & Farmers Welfare portal.
            By using this website, you agree to comply with and be bound by the following
            terms and conditions of use.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
          <p>
            Your access to and use of this website is subject exclusively to these Terms and Conditions.
            You will not use the website for any purpose that is unlawful or prohibited by these Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">2. Use of Content</h2>
          <p>
            All content on this site is for general information and use only. It is subject to change
            without notice and should not be used for commercial purposes without permission.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">3. Privacy</h2>
          <p>
            We are committed to ensuring your information is secure. For full details, refer to our
            Privacy Policy.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">4. Liability Disclaimer</h2>
          <p>
            The Department of Agriculture & Farmers Welfare shall not be held responsible for any loss
            or damage arising from use of this portal.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">5. Changes to Terms</h2>
          <p>
            We reserve the right to change these terms at any time. Continued use of the site means
            you accept any new or modified terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">6. Contact</h2>
          <p>
            If you have questions regarding these terms, please contact us through the 
            <a href="/contact" className="text-blue-600 underline ml-1">Contact Us</a> page.
          </p>
        </div>

        <p className="text-sm text-gray-500 mt-10 text-center">
          © {new Date().getFullYear()} Department of Agriculture & Farmers Welfare. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Terms;
