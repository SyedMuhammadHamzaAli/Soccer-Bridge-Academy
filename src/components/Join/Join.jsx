import React, { useRef } from "react";
import "./Join.css";
import { collection, addDoc } from "firebase/firestore"; // Firestore functions
import { firestore } from "../../Firebase"; // Import Firestore instance
import { useNavigate } from "react-router-dom";

const Join = () => {
  const form = useRef();
  const navigate = useNavigate();

  // Function to handle form submission and store data in Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collecting form data
    const formData = {
      parentFirstName: form.current.parent_first_name.value,
      parentLastName: form.current.parent_last_name.value,
      // username: form.current.username.value = "",
      // password: form.current.password.value = "",
      studentFirstName: form.current.student_first_name.value,
      studentLastName: form.current.student_last_name.value,
      birthday: {
        month: form.current.birthday_month.value,
        day: form.current.birthday_day.value,
        year: form.current.birthday_year.value,
      },
      address: form.current.address.value,
      city: form.current.city.value,
      state: form.current.state.value,
      zip: form.current.zip.value,
    };

    try {
      // Adding the form data to the Firestore "participants" collection
      await addDoc(collection(firestore, "participants"), formData);
      console.log("Document successfully written!");
      alert("Form submitted successfully!");

      // Navigate to the /plans route after successful submission
      navigate("/plans");
    } catch (error) {
      console.error("Error writing document: ", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="join" id="join" style={{ marginTop: "2rem" }}>
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
          
        </div>
        <div>
          <span>YOUR TRAINING</span>
          <span className="stroke-text">WITH US</span>
        </div>
        <div>
          
        </div>
      </div>
      <div className="right-j">
        <form
          action=""
          className="form-container"
          onSubmit={handleSubmit}
          ref={form}
        >
          <div className="section">
            <h3>Parent Information</h3>
            <div className="input-group">
              <label htmlFor="parent_first_name">Parent Name*</label>
              <input
                type="text"
                name="parent_first_name"
                id="parent_first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="parent_last_name"
                id="parent_last_name"
                placeholder="Last Name"
                required
              />
            </div>
            {/* <div className="input-group">
              <label htmlFor="username">Username*</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                required
              />
            </div> */}
            {/* <div className="input-group">
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
            </div> */}
          </div>

          <div className="section">
            <h3>Student Information</h3>
            <div className="input-group">
              <label htmlFor="student_first_name">Student Name*</label>
              <input
                type="text"
                name="student_first_name"
                id="student_first_name"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                name="student_last_name"
                id="student_last_name"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthday">Birthday*</label>
              <input
                type="number"
                name="birthday_month"
                id="birthday_month"
                placeholder="Month"
                min="1"
                max="12"
                required
              />
              <input
                type="number"
                name="birthday_day"
                id="birthday_day"
                placeholder="Day"
                min="1"
                max="31"
                required
              />
              <input
                type="number"
                name="birthday_year"
                id="birthday_year"
                placeholder="Year"
                min="1900"
                max="3050"
                required
              />
            </div>
          </div>

          <div className="section">
            <h3>Other Information</h3>
            <div className="input-group">
              <label htmlFor="address">Address*</label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                required
              />
              <input type="text" name="city" id="city" placeholder="City" />
            </div>
            <div className="input-group">
              <input style={{marginTop:"17px"}}  type="text" name="state" id="state" placeholder="State" required />
              <input type="text" name="zip" id="zip" placeholder="Zip Code" required />
            </div>
          </div>

          <button className="btn btn-j" type="submit">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
