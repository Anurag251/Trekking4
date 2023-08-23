/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import { apis } from "../../utils/apis";

const PackageBookingComponent = ({
  selectedData,
  choosenPrice,
  setChoosenPrice,
  popup,
}) => {
  const { setMessage, bookingPopupForm, setBookingPopupForm } =
    useContext(AllDataContext);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    dateOfTravel: "",
    noOfDays: "",
    noOfPerson: "",
    comment: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.name !== "" ||
      formValues.email !== "" ||
      formValues.destination !== "" ||
      formValues.dateOfTravel !== "" ||
      formValues.noOfDays !== "" ||
      formValues.noOfPerson !== ""
    ) {
      apis
        .post("/booking", {
          name: formValues.name,
          email: formValues.email,
          phone: formValues.phone,
          destination: formValues.destination,
          dateoftravel: formValues.dateOfTravel,
          noofdays: formValues.noOfDays,
          noofperson: formValues.noOfPerson,
          comment: formValues.comment,
          trip_id: selectedData.id,
        })
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            setButtonLoading(false);
            setMessage({
              message: true,
              title: "Thank you",
              type: "success",
              desc: `Your Package is booked`,
            });
            setFormValues({
              ...formValues,
              name: "",
              email: "",
              phone: "",
              destination: "",
              dateOfTravel: "",
              noOfDays: "",
              noOfPerson: "",
              comment: "",
            });
          } else {
            setMessage({
              message: true,
              title: "Please Try Again",
              type: "error",
              desc: `Something went wrong`,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          setButtonLoading(false);
        });
    } else {
      alert("All fields are required");
      setButtonLoading(false);
    }
  };

  useEffect(() => {
    if (selectedData !== null) {
      setChoosenPrice(selectedData.price[0].value);
    }
  }, [selectedData]);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <div
      className={`${
        popup
          ? `bookingPopupForm ${
              bookingPopupForm.isBookingPopupForm ? "active" : ""
            }`
          : ""
      }`}
    >
      <div
        className={`${popup ? `bookingPopupFormBg` : ""}`}
        onClick={() =>
          setBookingPopupForm({
            ...bookingPopupForm,
            isBookingPopupForm: false,
            date: "",
            price: "",
          })
        }
      ></div>

      <div className="start-booking">
        <div
          className={`${popup ? `bookingPopupFormClose` : ""}`}
          onClick={() =>
            setBookingPopupForm({
              ...bookingPopupForm,
              isBookingPopupForm: false,
              date: "",
              price: "",
            })
          }
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="title-sec">
          <div className="form-title">
          Start Booking
          <br />
          <small>Date: {bookingPopupForm.date}</small>
          </div>

          <div className="price">
            <span>per person</span> {bookingPopupForm.price}/-
          </div>
        </div>

        <div className="booking-form">
          <form onSubmit={handleSubmit}>
            <div className="form-inputs">
              <div className="input-group">
                <div className="group">
                  <label htmlFor="inputName">Name</label>
                  <input
                    className="form-input"
                    id="inputName"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, name: e.target.value })
                    }
                    name="name"
                    value={formValues.name}
                    placeholder="Jhon"
                  />
                </div>

                <div className="group">
                  <label htmlFor="inputPhone">
                    Phone <span>(optional)</span>
                  </label>
                  <input
                    className="form-input"
                    id="inputPhone"
                    type="number"
                    onChange={(e) =>
                      setFormValues({ ...formValues, phone: e.target.value })
                    }
                    name="phone"
                    value={formValues.phone}
                    placeholder="XXX XXXXXXX"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="group">
                  <label htmlFor="inputEmail">Email</label>
                  <input
                    className="form-input"
                    id="inputEmail"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, email: e.target.value })
                    }
                    name="email"
                    value={formValues.email}
                    placeholder="something@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="inputDestination">Destination</label>
                  <input
                    className="form-input"
                    id="inputDestination"
                    type="text"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        destination: e.target.value,
                      })
                    }
                    name="destination"
                    value={formValues.destination}
                    placeholder="Nepal"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="group">
                  <label htmlFor="inputDateOfTravel">Date of Travel</label>
                  <input
                    className="form-input"
                    id="inputDateOfTravel"
                    type="text"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        dateOfTravel: e.target.value,
                      })
                    }
                    name="dateOfTravel"
                    value={formValues.dateOfTravel}
                    placeholder="YYYY-MM-DD"
                  />
                </div>

                <div className="group">
                  <label htmlFor="inputNoOfDays">No of Days</label>
                  <input
                    className="form-input"
                    id="inputNoOfDays"
                    type="text"
                    onChange={(e) =>
                      setFormValues({ ...formValues, noOfDays: e.target.value })
                    }
                    name="noOfDays"
                    value={formValues.noOfDays}
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="input-group">
                <div className="group">
                  <label htmlFor="inputNoOfPerson">No of Person</label>
                  <input
                    className="form-input"
                    id="inputNoOfPerson"
                    type="text"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        noOfPerson: e.target.value,
                      })
                    }
                    name="noOfPerson"
                    value={formValues.noOfPerson}
                    placeholder="1"
                  />
                </div>

                <div className="group">
                  <label htmlFor="inputCommentRemarks">
                    Comment/Remarks <span>(optional)</span>
                  </label>
                  <textarea
                    className="form-input"
                    id="inputCommentRemarks"
                    cols="50"
                    rows="3"
                    onChange={(e) =>
                      setFormValues({ ...formValues, comment: e.target.value })
                    }
                    name="comment"
                    value={formValues.comment}
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>

              <div className="group">
                <label htmlFor="Message">Package Type</label>

                <select
                  name=""
                  id=""
                  onChange={(e) => setChoosenPrice(e.target.value)}
                >
                  {selectedData.price.map((price, idx) => (
                    <option value={price.value} key={idx}>
                      {price.label} Rs {price.value}/-
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button className={`submit-btn ${buttonLoading ? "active" : ""}`}>
              Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PackageBookingComponent;
