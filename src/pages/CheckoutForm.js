import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phonenumber: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    otherState: '',
    zip: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phonenumber) newErrors.phonenumber = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.address2) newErrors.address2 = 'Address 2 is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state && !formData.otherState) newErrors.state = 'State is required';
    if (formData.state === 'Other' && !formData.otherState) newErrors.otherState = 'Please specify your state';
    if (!formData.zip) newErrors.zip = 'PIN code is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Form data:', formData);
      // Here you would typically handle form submission,
      // e.g., sending the data to a server
    }
  };

  return (
    <div className="checkout-form">
      {submitted ? (
        <div className="success-message">Thank you for your purchase!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Checkout Form</h2>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
            />
            {errors.phonenumber && <p className="error">{errors.phonenumber}</p>}
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div className="form-group">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              value={formData.address2}
              onChange={handleChange}
            />
            {errors.address2 && <p className="error">{errors.address2}</p>}
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            {errors.city && <p className="error">{errors.city}</p>}
          </div>
          <div className="form-group">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="" disabled>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Other">Other</option>
            </select>
            {formData.state === 'Other' && (
              <div className="form-group">
                <label>Please specify your state</label>
                <input
                  type="text"
                  name="otherState"
                  value={formData.otherState}
                  onChange={handleChange}
                />
                {errors.otherState && <p className="error">{errors.otherState}</p>}
              </div>
            )}
            {errors.state && <p className="error">{errors.state}</p>}
          </div>
          <div className="form-group">
            <label>Pin Code</label>
            <input
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
            {errors.zip && <p className="error">{errors.zip}</p>}
          </div>
          <button type="submit">Process To Pay</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
