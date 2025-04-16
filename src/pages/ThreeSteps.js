import React from "react";

const ThreeSteps = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "#f8fafd",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const stepsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap", // Ensure proper wrapping for smaller screens
  };

  const stepStyle = {
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "300px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "80px",
    height: "80px",
    marginBottom: "20px",
  };

  const stepTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const stepDescriptionStyle = {
    fontSize: "14px",
    color: "#555",
    lineHeight: "1.5",
  };

  const infoSectionStyle = {
    marginTop: "40px",
    backgroundColor: "#ffffff",
    padding: "40px",
    textAlign: "left",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const infoTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  };

  const infoListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    alignItems: "start",
  };

  const infoItemStyle = {
    display: "flex",
    alignItems: "flex-start",
    gap: "15px",
  };

  const infoIconStyle = {
    fontSize: "24px",
    color: "#0A9F68",
  };

  const infoTextStyle = {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.5",
  };

  const infoTitleTextStyle = {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "5px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Booking car hire in three simple steps</h1>
      <div style={stepsStyle}>
        <div style={stepStyle}>
          <img
            style={imageStyle}
            src="https://i.postimg.cc/13gvtCPg/serch.png"
            alt="Search Icon"
          />
          <h2 style={stepTitleStyle}>Step 1: Search</h2>
          <p style={stepDescriptionStyle}>
            Enter your location and see what's available. From family-friendly
            SUVs to luxury convertibles, you’ll get a great price on every type
            of hire car.
          </p>
        </div>
        <div style={stepStyle}>
          <img
            style={imageStyle}
            src="https://i.postimg.cc/XYTQyf7s/compare.png"
            alt="Compare Icon"
          />
          <h2 style={stepTitleStyle}>Step 2: Compare</h2>
          <p style={stepDescriptionStyle}>
            Compare rental cars on fuel policy, mileage, provider rating,
            flexible booking, cleanliness, customer service and more.
          </p>
        </div>
        <div style={stepStyle}>
          <img
            style={imageStyle}
            src="https://i.postimg.cc/FK3GbYYN/car.png"
            alt="Book Icon"
          />
          <h2 style={stepTitleStyle}>Step 3: Book</h2>
          <p style={stepDescriptionStyle}>
            We compare car rental prices on 100s of sites for you, so once
            you’ve found your ride, you’ll be redirected to book with the
            provider, with no extra fees.
          </p>
        </div>
      </div>

      {/* Additional Section: How to find the best car hire deal */}
      <div style={infoSectionStyle}>
        <h2 style={infoTitleStyle}>How to find the best car hire deal</h2>
        <p style={stepDescriptionStyle}>
          We’re frequently named as the most trusted travel search site out
          there. We're free to use, and we’ll do the hard work for you by
          searching hundreds of car hire companies, allowing you to instantly
          compare prices and then book. Here's how to get the most out of your
          car rental search:
        </p>
        <div style={infoListStyle}>
          <div style={infoItemStyle}>
            <span style={infoIconStyle}>🚗</span>
            <div>
              <h3 style={infoTitleTextStyle}>Book now, cancel later</h3>
              <p style={infoTextStyle}>
                Many car and van hire options with flexible booking policies and
                free cancellation. So you can bag the best deal with total
                flexibility to change your plans last-minute if you need to.
              </p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <span style={infoIconStyle}>📅</span>
            <div>
              <h3 style={infoTitleTextStyle}>Rent a car in Pune for a whole month</h3>
              <p style={infoTextStyle}>
                Want to rent a car for almost a month? Often, car rental
                companies avoid costly admin in between pick-ups by hiring out
                cars for longer periods. So see if monthly car rental is cheaper
                than the three weeks you need it for by selecting 30 days.
              </p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <span style={infoIconStyle}>⛽</span>
            <div>
              <h3 style={infoTitleTextStyle}>Compare fuel policies</h3>
              <p style={infoTextStyle}>
                To save money on topping up the tank before you take off, look
                out for deals with a "full to full" fuel tank policy.
              </p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <span style={infoIconStyle}>🚪</span>
            <div>
              <h3 style={infoTitleTextStyle}>Skip the queues</h3>
              <p style={infoTextStyle}>
                We call out keyless or self-service pick-up when you search with
                us. No keys to pick up or paperwork to fill in means no queues.
                Just turn up at your preferred car hire location, hop in, and
                hit the road.
              </p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <span style={infoIconStyle}>🌱</span>
            <div>
              <h3 style={infoTitleTextStyle}>Go greener</h3>
              <p style={infoTextStyle}>
                Limit your impact on this beautiful planet while you explore it.
                Filter by electric vehicles, which will be charged up and ready
                to go when you pick them up.
              </p>
            </div>
          </div>
          <div style={infoItemStyle}>
            <span style={infoIconStyle}>📍</span>
            <div>
              <h3 style={infoTitleTextStyle}>Look further afield</h3>
              <p style={infoTextStyle}>
                If you're on a budget, it's often cheaper to hop on public
                transport to a car rental pick-up location a little farther
                away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;