import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios, { isCancel, AxiosError } from "axios";

// And now we can use these
const DirectionsForm = ({
  handleChange,
  startLocation,
  setStartLocation,
  endLocation,
  setEndLocation,
}) => {
  const [formData, setFormData] = useState({
    start: "",
    end: "",
  });

  return (
    <div className="directions-form">
      <h1>Google Maps API</h1>
      <form>
        <label htmlFor="startLocation">Start Location</label>
        <input
          type="text"
          name="startLocation"
          placeholder="Start Location"
          value={startLocation}
          onChange={handleChange}
        />
        <label htmlFor="endLocation">End Location</label>
        <input
          type="text"
          name="endLocation"
          placeholder="End Location"
          value={endLocation}
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            alert(`${startLocation} ${endLocation}`);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DirectionsForm;
