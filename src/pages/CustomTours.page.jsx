import React, { useState, Fragment } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Tour type you are interested in (in the dropdown: Tours, Treks, Birding Tour, other)
// Other : input box (e.g. Langtang birding tour 12 days)
// Arrival date
// Arrival time
// Duration of stay
// Number of adults
// Number of children
// Hotel Category :

// Any special request - texture

// Personal  Details

// Firstname
// Lastname
// Nationality
// Email
// Phone

// Trip Information

// Tour type you are interested in
// Arrival date
// Arrival time
// Duration of stay
// Number of adults
// Number of children
// Hotel category (Checkbox)

// Special request (Texture)

// Submit

export const CustomToursPage = () => {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    nationality: "",
    email: "",
    countryCode: "",
    phone: "",
    tourType: "",
    other: "",
    preferredTrip: "",
    arrivalDate: "",
    arrivalTime: "",
    durationOfStay: "",
    numberOfAdults: "",
    numberOfChildren: "",
    hotelCategory: "",
    specialRequest: "",
  });
  const hotelCategories = ["Luxury", "Standard", "First Class"];

  const nationalities = [
    "American",
    "Afghan",
    "Albanian",
    "Algerian",
    "Andorran",
    "Angolan",
    "Argentine",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Bahraini",
    "Bangladeshi",
    "Barbadian",
    "Belarusian",
    "Belgian",
    "Belizean",
    "Beninese",
    "Bhutanese",
    "Bolivian",
    "Bosnian",
    "Brazilian",
    "British",
    "Bruneian",
    "Bulgarian",
    "Burkinabe",
    "Burundian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Cape Verdean",
    "Central African",
    "Chadian",
    "Chilean",
    "Chinese",
    "Colombian",
    "Comorian",
    "Congolese",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Czech",
    "Danish",
    "Djiboutian",
    "Dominican",
    "East Timorese",
    "Ecuadorian",
    "Egyptian",
    "Emirati",
    "Equatorial Guinean",
    "Eritrean",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Filipino",
    "Finnish",
    "French",
    "Gabonese",
    "Gambian",
    "Georgian",
    "German",
    "Ghanaian",
    "Greek",
    "Grenadian",
    "Guatemalan",
    "Guinean",
    "Guyanese",
    "Haitian",
    "Honduran",
    "Hungarian",
    "Icelandic",
    "Indian",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Israeli",
    "Italian",
    "Ivorian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kazakh",
    "Kenyan",
    "Kiribati",
    "North Korean",
    "South Korean",
    "Kuwaiti",
    "Kyrgyz",
    "Laotian",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Libyan",
    "Liechtensteiner",
    "Lithuanian",
    "Luxembourgish",
    "Macedonian",
    "Malagasy",
    "Malawian",
    "Malaysian",
    "Maldivian",
    "Malian",
    "Maltese",
    "Marshallese",
    "Mauritanian",
    "Mauritian",
    "Mexican",
    "Micronesian",
    "Moldovan",
    "Monacan",
    "Mongolian",
    "Montenegrin",
    "Moroccan",
    "Mozambican",
    "Namibian",
    "Nauruan",
    "Nepalese",
    "Dutch",
    "New Zealander",
    "Nicaraguan",
    "Nigerien",
    "Nigerian",
    "Norwegian",
    "Omani",
    "Pakistani",
    "Palauan",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Filipino",
    "Polish",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Rwandan",
    "Saint Kitts and Nevis",
    "Saint Lucian",
    "Saint Vincentian",
    "Sammarinese",
    "Sao Tomean",
    "Saudi",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonean",
    "Singaporean",
    "Slovakian",
    "Slovenian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Sudanese",
    "Spanish",
    "Sri Lankan",
    "Sudanese",
    "Surinamese",
    "Swazi",
    "Swedish",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Tongan",
    "Trinidadian/Tobagonian",
    "Tunisian",
    "Turkish",
    "Turkmen",
    "Tuvaluan",
    "Ugandan",
    "Ukrainian",
    "Uruguayan",
    "Uzbek",
    "Vanuatuan",
    "Vatican City",
    "Venezuelan",
    "Vietnamese",
    "Yemeni",
    "Zambian",
    "Zimbabwean",
  ];
  const [selectedHotelCategory, setSelectedHotelCategory] = useState([]);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [isOthers, setIsOthers] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleButtonClick = (hotelCategorie) => {
    const isSelected = selectedHotelCategory.includes(hotelCategorie);

    if (isSelected) {
      // Remove the nationality from the selected list
      setSelectedHotelCategory((prevSelected) =>
        prevSelected.filter((item) => item !== hotelCategorie)
      );
    } else {
      // Add the nationality to the selected list
      setSelectedHotelCategory((prevSelected) => [
        ...prevSelected,
        hotelCategorie,
      ]);
    }
  };

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the captcha is verified
    if (!isCaptchaVerified) {
      alert("Please verify the captcha.");
      return;
    }

    // Handle form submission
    // Your form submission logic goes here
  };

  const handleRecaptchaVerify = (value) => {
    // console.log("Captcha value:", value);
    setIsCaptchaVerified(true);
  };

  return (
    <div className="custom-tours">
      <section>
        <div className="wrapper">
          <div className="custom-tours-form-area">
            <div className="inner-form">
              <div className="title-part no-bg">
                <div className="name">Customized Tour Request Form</div>
              </div>

              <p className="form-subtitle">
                Please fill the below information, and one of our agents will
                create your requested itinerary within Maximum 24 Hours.
              </p>
              <div className="form">
                <form onSubmit={handleSubmit}>
                  <div className="form-inputs">
                    <div className="input-group">
                      <div className="form-title">Personal Details</div>

                      <CustomInputComponent
                        type="text"
                        name="fname"
                        label="First Name"
                        handleChange={handleChange}
                        value={formValues.fname}
                      />

                      <CustomInputComponent
                        type="text"
                        name="lname"
                        label="Last Name"
                        handleChange={handleChange}
                        value={formValues.lname}
                      />

                      <CustomInputComponent
                        name="nationality"
                        label="Nationality"
                        handleChange={handleChange}
                        value={formValues.nationality}
                        select
                      >
                        <option value=""></option>
                        {nationalities.map((data, idx) => (
                          <option value={data} key={idx}>
                            {data}
                          </option>
                        ))}
                      </CustomInputComponent>

                      <CustomInputComponent
                        type="email"
                        name="email"
                        label="Email"
                        handleChange={handleChange}
                        value={formValues.email}
                      />
                      <CustomInputComponent
                        type="number"
                        name="phone"
                        label="Phone (optional)"
                        handleChange={handleChange}
                        value={formValues.phone}
                      />

                      {/* <div className="phone-number-box">
                        <CustomInputComponent
                          type="number"
                          name="countryCode"
                          label="Area Code"
                          handleChange={handleChange}
                          value={formValues.countryCode}
                        />

                        <CustomInputComponent
                          type="number"
                          name="phone"
                          label="Phone Number"
                          handleChange={handleChange}
                          value={formValues.phone}
                        />
                      </div> */}
                    </div>

                    <div className="input-group">
                      <div className="form-title">Trip Information</div>

                      <CustomInputComponent
                        name="tourType"
                        label="Tour type you are interested in"
                        handleChange={handleChange}
                        value={formValues.tourType}
                        select
                      >
                        <option value=""></option>
                        <option value="Bird watching tour">
                          Bird watching tour
                        </option>
                        <option value="Bird watching trek">
                          Bird watching trek
                        </option>
                        <option value="Himalayan adventure birding tour">
                          Himalayan adventure birding tour
                        </option>
                        <option value="other">Other</option>
                      </CustomInputComponent>

                      {formValues.tourType === "other" ? (
                        <CustomInputComponent
                          type="text"
                          name="other"
                          label="Other"
                          handleChange={handleChange}
                          value={formValues.other}
                        />
                      ) : null}

                      <CustomInputComponent
                        type="text"
                        name="preferredTrip"
                        label="Prefered bird watching destinations(Optional)"
                        handleChange={handleChange}
                        value={formValues.preferredTrip}
                      />

                      <CustomInputComponent
                        type="date"
                        name="arrivalDate"
                        label="Prefere travel date"
                        handleChange={handleChange}
                        value={formValues.arrivalDate}
                        active
                      />

                      <CustomInputComponent
                        type="text"
                        name="durationOfStay"
                        label="Duration Of Stay e.g. 14 Days"
                        handleChange={handleChange}
                        value={formValues.durationOfStay}
                      />

                      <CustomInputComponent
                        type="number"
                        name="numberOfAdults"
                        label="Number Of Adults"
                        handleChange={handleChange}
                        value={formValues.numberOfAdults}
                      />

                      <CustomInputComponent
                        type="number"
                        name="numberOfChildren"
                        label="Number Of Children"
                        handleChange={handleChange}
                        value={formValues.numberOfChildren}
                      />

                      <div className="hotelCategory-label">Hotel Category</div>

                      <div className="hotelCategory">
                        <ul>
                          {hotelCategories.map((hotelCategorie, index) => (
                            <li key={index}>
                              <div
                                className={`button ${
                                  selectedHotelCategory.includes(hotelCategorie)
                                    ? "active"
                                    : ""
                                }`}
                                onClick={() =>
                                  handleButtonClick(hotelCategorie)
                                }
                              >
                                <div className="box">
                                  <i className="fas fa-check"></i>
                                </div>
                                {hotelCategorie}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <CustomInputComponent
                        type="text"
                        name="specialRequest"
                        label="Special Request"
                        handleChange={handleChange}
                        value={formValues.specialRequest}
                        textarea
                      />
                    </div>
                  </div>

                  <div className="recaptcha">
                    <ReCAPTCHA
                      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                      onChange={handleRecaptchaVerify}
                    />
                  </div>

                  <button
                    className={`submit-btn ${buttonLoading ? "active" : ""}`}
                    disabled={isCaptchaVerified ? false : true}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const CustomInputComponent = ({
  type,
  name,
  label,
  handleChange,
  select,
  textarea,
  password,
  children,
  icon,
  error,
  image,
  active,
  ...otherProps
}) => {
  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <div
      className={`group ${error ? "error" : ""} ${textarea ? "textarea" : ""} ${
        type === "file" ? `fileType ${image !== null ? "active" : ""}` : ""
      } `}
    >
      {select ? (
        <Fragment>
          <select
            className={`custom-input ${
              otherProps.value.length ? "active" : ""
            }`}
            name={name}
            id={name}
            onChange={handleChange}
            {...otherProps}
          >
            {children}
          </select>
          {label ? (
            <label
              className={`form-input-label ${
                otherProps.value.length ? "active" : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
        </Fragment>
      ) : textarea ? (
        <Fragment>
          <textarea
            className={`custom-input ${
              otherProps.value.length ? "active" : active ? "autoActive" : ""
            }`}
            name={name}
            id={name}
            onChange={handleChange}
          >
            {children}
          </textarea>
          {label ? (
            <label
              className={`form-input-label ${
                otherProps.value.length ? "active" : active ? "autoActive" : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
        </Fragment>
      ) : (
        <div className={`inner-input`}>
          <input
            type={password ? (togglePassword ? "text" : "password") : type}
            className={`custom-input ${
              otherProps.value.length ? "active" : active ? "autoActive" : ""
            }`}
            name={name}
            id={name}
            onChange={handleChange}
            {...otherProps}
          />

          {icon ? (
            password ? (
              <div
                className={`input-icon eye-icon ${
                  togglePassword ? "active" : ""
                }`}
                onClick={() => {
                  setTogglePassword(!togglePassword);
                }}
              >
                {icon}
              </div>
            ) : (
              <div className="input-icon">{icon}</div>
            )
          ) : null}
          {label ? (
            <label
              className={`form-input-label ${
                otherProps.value.length ? "active" : active ? "autoActive" : ""
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          ) : null}
        </div>
      )}
      {error ? <p className="input-error">{error}</p> : null}
    </div>
  );
};
