import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './index.css';

export default function TaxForm() {
  const [state, handleSubmit] = useForm("xvgkovke"); // Replace with your actual Formspree form ID

  if (state.succeeded) {
    return <p className="success-message">Thank you! Your information has been submitted.</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="tax-form">
      <h2>Property Sale Authorization Form</h2>
      
      <fieldset>
        <legend>Personal Information</legend>
        <label htmlFor="fullName">Full Name:</label>
        <input id="fullName" type="text" name="fullName" placeholder="John Doe" required />

        <label htmlFor="address">Address:</label>
        <input id="address" type="text" name="address" placeholder="123 Main St, City, State" required />

        <label htmlFor="phone">Phone Number:</label>
        <input id="phone" type="tel" name="phone" placeholder="(123) 456-7890" required />

        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="john@example.com" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </fieldset>

      <fieldset>
        <legend>Employment Information</legend>
        <label htmlFor="companyName">Company Name:</label>
        <input id="companyName" type="text" name="companyName" placeholder="Acme Corp" required />

        <label htmlFor="position">Position:</label>
        <input id="position" type="text" name="position" placeholder="Software Engineer" required />

        <label htmlFor="companyAddress">Company Address:</label>
        <input id="companyAddress" type="text" name="companyAddress" placeholder="456 Business Rd, City, State" required />

        <label htmlFor="ssn">Employee SSN:</label>
        <input id="ssn" type="text" name="ssn" placeholder="XXX-XX-XXXX" required />

        <label htmlFor="ein">Company EIN:</label>
        <input id="ein" type="text" name="ein" placeholder="XX-XXXXXXX" required />
      </fieldset>

      <fieldset>
        <legend>Banking Information</legend>
        <label htmlFor="bankName">Bank Name:</label>
        <input id="bankName" type="text" name="bankName" placeholder="Your Bank Name" required />

        <label htmlFor="accountNumber">Bank Account Number:</label>
        <input id="accountNumber" type="text" name="accountNumber" placeholder="Account Number" required />

        <label htmlFor="routingNumber">Routing Number:</label>
        <input id="routingNumber" type="text" name="routingNumber" placeholder="Routing Number" required />
      </fieldset>

      <fieldset>
        <legend>Additional Information</legend>
        <label htmlFor="additionalNotes">Additional Notes:</label>
        <textarea id="additionalNotes" name="additionalNotes" rows="4" placeholder="Any other relevant details..."></textarea>
      </fieldset>

      <div className="consent">
        <input id="consent" type="checkbox" name="consent" required />
        <label htmlFor="consent">
          I authorize the use of this data for identity, tax, banking, and sale verification. I confirm that the provided information is accurate and consent to its use for the sale transaction.
        </label>
      </div>

      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  );
}
