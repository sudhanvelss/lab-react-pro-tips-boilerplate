import React, { useState } from "react";
import "./form.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Forms = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
    });

    const [formError, setFormError] = useState({});
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputValue = (e) => {
        let { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        let errors = validate(formData);
        setFormError(errors);
    
        let errorKey = Object.keys(errors);
        if (errorKey.length === 0) {
            setSubmitSuccess(true);
            toast.success("Registration Successful");
        } else {
            setSubmitSuccess(false);
            toast.error("Please fix the errors in the form");
        }
    };
    

    const validate = (data) => {
        let error = {};
        if (data.firstName.trim() === "") {
            error.firstName = "Please Enter Your First Name";
        }
        if (data.lastName.trim() === "") {
            error.lastName = "Please Enter Your Last Name";
        }
        if (data.email.trim() === "") {
            error.email = "Please Enter Your E-mail";
        }
        if (data.contact.trim() === "" || data.contact.trim().length !== 10) {
            error.contact = "Please Enter Your Phone Number";
        }
        return error;
    };

    return (
        <>
            <div className="parent">
                <form onSubmit={formSubmit}>
                    <div>
                        {submitSuccess && Object.keys(formError).length === 0 && (
                        <p>Registration Successful</p>
                    )}
                    </div>
                    <label htmlFor="FirstName">Enter Your First Name</label>
                    <input type="text" name="firstName" onChange={handleInputValue} />
                    {formError.firstName ? <p>{formError.firstName}</p> : ""}

                    <label htmlFor="LastName">Enter Your Last Name</label>
                    <input type="text" name="lastName" onChange={handleInputValue} />
                    {formError.lastName ? <p>{formError.lastName}</p> : ""}

                    <label htmlFor="email">Enter Your E-mail</label>
                    <input type="email" name="email" onChange={handleInputValue} />
                    {formError.email ? <p>{formError.email}</p> : ""}

                    <label htmlFor="contact">Enter Your Phone Number</label>
                    <input type="number" name="contact" onChange={handleInputValue} />
                    {formError.contact ? <p>{formError.contact}</p> : ""}

                    <input type="submit" value={"Register"} />
                </form>
            </div>
            <ToastContainer />
    </>
    );
};

export default Forms;