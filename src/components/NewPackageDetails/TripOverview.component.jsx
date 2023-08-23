/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";

const TripOverviewComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`TripOverview ${
        detailsPageNav === "TripOverview" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "TripOverview" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("TripOverview");
              }}
            >
              trip overview <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                {/*  <div className="TripOverview-card-list">
              <div className="TripOverview-card">
                <div className="image">
                  <img
                    src="https://i.assetzen.net/i/DMo3vU3S6Jia/w:160/h:160/q:90.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="card-title">ULTIMATE TRIP FLEXIBILITY</div>
                  <p>
                    Moving a trip date should be easy right? Hassle-free
                    flexibility. Move your dates, change your trek or your
                    payments for free at any time as well as be covered under
                    our Ultimate flexibility promise.
                  </p>
                </div>
              </div>

              <div className="TripOverview-card">
                <div className="image">
                  <img
                    src="https://i.assetzen.net/i/S2fb3BD07GlV/w:160/h:160/q:90.webp"
                    alt=""
                  />
                </div>
                <div className="content">
                  <div className="card-title">MOBILE TRIP APP</div>
                  <p>
                    Take preparation to the next level with free access to our
                    Mobile Trip App. Get maps of your trek, trip countdown
                    timers, our favourite hang-out spots and heaps more.
                  </p>
                </div>
              </div>
            </div> */}

                <div className="TripOverviewMainContent">
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data.content,
                    }}
                  />
                </div>

                {/*  <div className="included-and-not-included">
              <div className="what-included">
                <div className="name">WHAT'S INCLUDED?</div>

                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    Airport Pick-up and Drop-off
                  </li>

                  <li>
                    <i className="fas fa-check"></i>3 nights accommodation in
                    Kathmandu with breakfast
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Welcome and farewell dinner
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Airport transfers for domestic flight
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    All Trekking permits
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Kathmandu-Lukla-Kathmandu flight tickets
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    All meals (breakfast, lunch and dinner) during the trek
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    All accommodation whilst on trek (Lodge/Tea house)
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Purified water on the entire trek (Saves on plastic bottles)
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Experienced English speaking guide and his entire expenses
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Porters (One porter for each 2 members) and his entire
                    expenses
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Insurance of Guide and Porter
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    All required local and government taxes
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Hire of 800 fill North Face down jacket and winter sleeping
                    bag (if required)
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    FREE 80ltr EverTrek duffel bag
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    EverTrek Trip Planner & Mobile App
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    EverTrekker T shirt & Neck Buff
                  </li>

                  <li>
                    <i className="fas fa-check"></i>
                    Oximeter & Heart Rate Monitor
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Exclusive equipment discounts from Cotswold Outdoor, Osprey,
                    Snow and Rock and heaps more
                  </li>
                </ul>
              </div>

              <div className="what-included">
                <div className="name">WHAT'S INCLUDED?</div>

                <ul>
                  <li>
                    <i className="fas fa-times"></i>
                    International flight to Kathmandu
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Nepal arrival visa
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Meals in the city except for breakfast and other mentioned
                    special dinner
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Personal expenses including mineral water, and alcoholic
                    drinks and beverages
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Monument entrance fees
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Your travel insurance that covers Helicopter evacuation
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Any other extended trips and accommodation
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Any Staff Tips - Roughly 10% of trip cost
                  </li>

                  <li>
                    <i className="fas fa-times"></i>
                    Additional Airline baggage costs for return flights to Lukla
                    (only 15 kg included)
                  </li>
                </ul>
              </div>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripOverviewComponent;
