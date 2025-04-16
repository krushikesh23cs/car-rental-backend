import React, { useState } from "react";

const CarRentalDeals = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupDate, setPickupDate] = useState("2025-04-15");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffDate, setDropoffDate] = useState("2025-04-17");
  const [dropoffTime, setDropoffTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState(true);
  const [returnDifferentLocation, setReturnDifferentLocation] = useState(false);

  const handleSearch = () => {
    alert("Search initiated with current selections!");
  };

  const styles = {
    container: {
      backgroundImage: `url('https://i.postimg.cc/GhTLjRxq/happy-woman-waving-hand-outside-600nw-2153910111.webp')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "20px",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
    },
    searchBox: {
      background: "#002143",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
      display: "flex",
      flexDirection: "column",
      width: "90%",
      maxWidth: "1200px",
    },
    searchInputs: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "12px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    checkboxContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
      color: "#fff",
    },
    checkbox: {
      marginRight: "10px",
    },
    button: {
      padding: "12px",
      backgroundColor: "#0066ff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "16px",
      fontWeight: "bold",
      textAlign: "center",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Find the best car rental deals</h1>
      <div style={styles.searchBox}>
        <div style={styles.searchInputs}>
          <input
            style={styles.input}
            type="text"
            placeholder="Pick-up location"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
          <input
            style={styles.input}
            type="date"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
          />
          <input
            style={styles.input}
            type="time"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
          />
          <input
            style={styles.input}
            type="date"
            value={dropoffDate}
            onChange={(e) => setDropoffDate(e.target.value)}
          />
          <input
            style={styles.input}
            type="time"
            value={dropoffTime}
            onChange={(e) => setDropoffTime(e.target.value)}
          />
          <button style={styles.button} onClick={handleSearch}>
            Search
          </button>
        </div>
        <div style={styles.checkboxContainer}>
          <label>
            <input
              style={styles.checkbox}
              type="checkbox"
              checked={driverAge}
              onChange={(e) => setDriverAge(e.target.checked)}
            />
            Driver aged between 25 – 70
          </label>
          <label>
            <input
              style={styles.checkbox}
              type="checkbox"
              checked={returnDifferentLocation}
              onChange={(e) => setReturnDifferentLocation(e.target.checked)}
            />
            Return car to a different location
          </label>
        </div>
      </div>
    </div>
  );
};

export default CarRentalDeals;