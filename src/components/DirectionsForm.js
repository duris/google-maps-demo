import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import axios, { isCancel, AxiosError } from "axios";

const DirectionsForm = ({
  handleChange,
  startLocation,
  endLocation,
  setLocation,
  loading,
  setLoading,
}) => {
  return (
    <div className="directions-form">
      <h1>React Google Maps</h1>

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

            setLoading(true);
            setTimeout(() => {
              setLocation({
                start: startLocation,
                end: endLocation,
              });
              setTimeout(() => setLoading(false), 1000);
            }, 1500);

            //finish loading
          }}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default DirectionsForm;
