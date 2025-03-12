import React from "react";

const TaxForm = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Tax Authorization Form</h1>
        
        <form 
          name="tax-authorization-form" 
          method="POST" 
          data-netlify="true" 
          netlify-honeypot="bot-field"
          action="https://formspree.io/f/YOUR_FORM_ID"
        >
          <input type="hidden" name="form-name" value="tax-authorization-form" />

          {/* Personal Information */}
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name" className="p-3 rounded-md border border-gray-300" required />
            <input type="email" name="email" placeholder="Email Address" className="p-3 rounded-md border border-gray-300" required />
            <input type="text" name="address" placeholder="Address" className="p-3 rounded-md border border-gray-300" required />
            <input type="text" name="phone" placeholder="Phone Number" className="p-3 rounded-md border border-gray-300" required />
          </div>

          {/* Tax Information */}
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-4">Tax Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" name="taxID" placeholder="Tax Identification Number (TIN)" className="p-3 rounded-md border border-gray-300" required />
          </div>

          {/* Banking Information */}
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-4">Banking Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" name="bankName" placeholder="Bank Name" className="p-3 rounded-md border border-gray-300" required />
            <input type="text" name="accountNumber" placeholder="Account Number" className="p-3 rounded-md border border-gray-300" required />
            <input type="text" name="routingNumber" placeholder="Routing Number" className="p-3 rounded-md border border-gray-300" required />
          </div>

          {/* Additional Information */}
          <h2 className="text-xl font-semibold text-blue-700 mt-6 mb-4">Additional Information</h2>
          <div>
            <textarea name="additionalInfo" placeholder="Provide additional information if needed..." className="w-full p-3 rounded-md border border-gray-300" rows="5"></textarea>
          </div>

          {/* Authorization */}
          <div className="flex items-center space-x-2 mt-6">
            <input type="checkbox" name="authorization" className="h-5 w-5" required />
            <label className="text-gray-700 text-sm">
              I authorize the use of this data for identity, tax, banking, and sale verification. I confirm that the provided information is accurate and consent to its use for the sale transaction.
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button 
              type="submit" 
              className="bg-blue-600 text-white text-lg py-2 px-6 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaxForm;

