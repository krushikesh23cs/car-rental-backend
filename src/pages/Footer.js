import React, { useState } from "react";

const Footer = ({ scrollToThreeSteps }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  const styles = {
    footer: {
      backgroundColor: "#f9f9f9",
      padding: "40px 20px",
      textAlign: "center",
      borderTop: "1px solid #eaeaea",
    },
    footerContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "20px",
    },
    column: {
      flex: "1 1 200px",
      textAlign: "left",
    },
    title: {
      fontWeight: "bold",
      marginBottom: "15px",
    },
    link: {
      display: "block",
      color: "#000",
      textDecoration: "none",
      marginBottom: "10px",
      fontSize: "14px",
      cursor: "pointer",
    },
    email: {
      display: "block",
      color: "#000",
      textDecoration: "none",
      marginBottom: "10px",
      fontSize: "14px",
    },
    socialIcons: {
      display: "flex",
      gap: "10px",
      marginTop: "10px",
    },
    socialIcon: {
      fontSize: "20px",
      color: "#000",
    },
    subscribe: {
      marginTop: "20px",
    },
    subscribeInput: {
      padding: "10px",
      fontSize: "14px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      marginRight: "10px",
      width: "70%",
    },
    subscribeButton: {
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    message: {
      marginTop: "10px",
      fontSize: "14px",
      color: message.includes("Thank") ? "green" : "red",
    },
    bottomBar: {
      marginTop: "40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      fontSize: "14px",
    },
    paymentIcons: {
      display: "flex",
      gap: "10px",
    },
    paymentIcon: {
      height: "25px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerContainer}>
        {/* Corporate Section */}
        <div style={styles.column}>
          <h4 style={styles.title}>Corporate</h4>
          <span
            style={styles.link}
            onClick={scrollToThreeSteps} // Call the scroll function on click
          >
            About Us
          </span>
          <a
            href="https://www.bing.com/copilotsearch?q=cookie+policy&FORM=CSSCOP"
            style={styles.link}
          >
            Cookie Policy
          </a>
          <a
            href="https://www.bing.com/copilotsearch?q=privacy+policy&FORM=CSSCOP"
            style={styles.link}
          >
            Privacy Policy
          </a>
          <a
            href="https://www.bing.com/copilotsearch?q=terms+of+service&FORM=CSSCOP"
            style={styles.link}
          >
            Terms of Service
          </a>
        </div>

        {/* Rent a Car Section */}
        <div style={styles.column}>
          <h4 style={styles.title}>Rent a Car</h4>
          <a href="/suppliers" style={styles.link}>
            Suppliers
          </a>
          <a href="/locations" style={styles.link}>
            Locations
          </a>
        </div>

        {/* Support Section */}
        <div style={styles.column}>
          <h4 style={styles.title}>Support</h4>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
          <a href="/faq" style={styles.link}>
            FAQ
          </a>
          <a href="mailto:info@bookcars.ma" style={styles.email}>
            info@bookcars.ma
          </a>
          <div style={styles.socialIcons}>
            <i className="fab fa-facebook-f" style={styles.socialIcon}></i>
            <i className="fab fa-twitter" style={styles.socialIcon}></i>
            <i className="fab fa-linkedin-in" style={styles.socialIcon}></i>
            <i className="fab fa-instagram" style={styles.socialIcon}></i>
          </div>
        </div>

        {/* Subscribe Section */}
        <div style={styles.column}>
          <h4 style={styles.title}>Subscribe</h4>
          <p>Subscribe to our mailing list for the latest updates!</p>
          <div style={styles.subscribe}>
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.subscribeInput}
            />
            <button onClick={handleSubscribe} style={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </div>
          {message && <p style={styles.message}>{message}</p>}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p>Copyright © 2025 BookCars. All rights reserved.</p>
        <div style={styles.paymentIcons}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            style={styles.paymentIcon}
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
            alt="Mastercard"
            style={styles.paymentIcon}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
