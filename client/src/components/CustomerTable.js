import React from 'react';
import { MdClose } from 'react-icons/md';

const CustomerTable = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
      <label htmlFor="formTitle" class="form-title">Add/Edit Form</label>

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={rest.name}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={rest.email}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="mobile">Mobile:</label>
        <input
          type="number"
          id="mobile"
          name="mobile"
          value={rest.mobile}
          onChange={handleOnChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={rest.address}
          onChange={handleOnChange}
          required
        />

        <button type="submit">Submit</button>
        <button type="button" className="close-btn" onClick={handleclose}>
          <MdClose />
        </button>
      </form>
    </div>
  );
};

export default CustomerTable;
