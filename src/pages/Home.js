import React, { useState, useRef } from 'react';
import { Input, Button, Checkbox, Row, Col, Card } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import ThreeSteps from './ThreeSteps';
import CarRentalDeals from './CarRentalDeals';
import Footer from './Footer';

function Home() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [delivery, setDelivery] = useState(false);

  const navigate = useNavigate();
  const carSectionRef = useRef(null);
  const threeStepsRef = useRef(null);

  const handleSearch = async () => {
    const formData = { fullName, email, phoneNumber, address, delivery };

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`${data.message}\nOwner Contact: ${data.ownerContact}\nNote: ${data.note}`);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const scrollToCars = () => {
    if (carSectionRef.current) {
      carSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToThreeSteps = () => {
    if (threeStepsRef.current) {
      threeStepsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const styles = {
    header: {
      background: 'linear-gradient(90deg,rgb(0, 0, 0),rgb(86, 90, 91),rgb(75, 81, 83))', // Gradient for a luxurious look
      padding: '15px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 6px 20px rgba(216, 206, 206, 0.4)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    logo: {
      height: '83px',
      marginRight: '45px',
      borderRadius: '100px', // Removed external white background
      boxShadow: '0 0 10px rgba(255, 244, 244, 0.5)', // Subtle glow around the logo
    },
    navButton: {
      color: '#ffffff', // White text for contrast
      fontWeight: '900',
      fontSize: '20px',
      padding: '18px 25px',
      margin: '1 18px',
      background: 'transparent',
      border: '2px solid transparent',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
     // For a professional look
    },
    navButtonHover: {
      borderColor: '#ffffff', // White border on hover
      backgroundColor: '#1f4037', // Dark green for hover effect
      boxShadow: '0 0 15pxrgb(161, 182, 177)', // Glow effect on hover
    },
    appButton: {
      background: 'linear-gradient(135deg,rgb(206, 194, 194),rgb(241, 234, 232))', // Gradient for a premium look
      color: '135deg,rgb(4, 4, 4)',
      fontWeight: 'bold',
      fontSize: '18px',
      padding: '12px 25px',
      borderRadius: '30px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      boxShadow: '0 6px 20px rgba(255, 154, 158, 0.4)',
    },
    loginButton: {
      color: '#ffffff', // Matches the Home and Car buttons
      fontWeight: '900',
      fontSize: '18px',
      padding: '12px 25px',
      margin: '0 8px',
      background: 'transparent',
      border: '2px solid transparent',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      
    },
    loginButtonHover: {
      borderColor: '#ffffff', // White border on hover
      backgroundColor: '#1f4037', // Dark green for hover effect
      boxShadow: '0 0 15pxrgb(11, 18, 16)', // Glow effect on hover
    },
    mainContent: {
      backgroundImage: 'url("https://i.postimg.cc/qvThJztz/wp7034680.webp")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      padding: '40px 0',
      minHeight: '50vh',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    searchBox: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    title: {
      color: '#000',
      marginBottom: '10px',
      fontSize: '20px',
    },
    subtitle: {
      color: '#000',
      fontWeight: 'bold',
      marginBottom: '20px',
      fontSize: '24px',
    },
    highlightText: {
      color: '#0A9F68',
    },
    inputBox: {
      marginBottom: '20px',
      backgroundColor: '#F5F5F5',
      color: '#000',
      padding: '10px',
      borderRadius: '5px',
    },
    checkbox: {
      marginBottom: '20px',
    },
    searchButton: {
      width: '100%',
      backgroundColor: '#0A9F68',
      borderColor: '#0A9F68',
      color: '#fff',
      fontWeight: 'bold',
      padding: '12px',
      fontSize: '18px',
      cursor: 'pointer',
    },
    carsSection: {
      textAlign: 'center',
      padding: '40px 20px',
      backgroundColor: '#f5f5f5',
    },
    carCard: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    carImage: {
      height: '220px',
      objectFit: 'cover',
    },
    carTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    carSubtitle: {
      fontSize: '14px',
      color: '#555',
    },
    price: {
      fontWeight: 'bold',
      fontSize: '18px',
      color: '#000',
      marginTop: '10px',
    },
    callSection: {
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
    callIcon: {
      color: '#0A9F68',
      fontSize: '18px',
    },
    callText: {
      color: '#0A9F68',
      fontSize: '14px',
      fontWeight: 'bold',
      cursor: 'pointer',
      textDecoration: 'none',
    },
  };

  const carData = [
    {
      id: 1,
      name: 'Swift dzire',
      price: '₹13 Kilometer',
      image: 'https://i.postimg.cc/8P9YT7jG/maruti-suzuki-swift-dzire-magma-grey.png',
    },
    {
      id: 2,
      name: 'Swift dzire - White',
      price: '₹13 Kilometer',
      image: 'https://i.postimg.cc/PfBcjLLj/R.png',
    },
    {
      id: 3,
      name: 'Ertiga',
      price: '₹15 Kilometer',
      image: 'https://i.postimg.cc/8zTZpLNq/OIP.jpg',
    },
    {
      id: 4,
      name: 'Ertiga',
      price: '₹15 Kilometer',
      image: 'https://i.postimg.cc/1XpKP3Tm/ertiga-blanco-perlado.png',
    },
    {
      id: 5,
      name: 'Eeco',
      price: '₹12 Kilometer ',
      image: 'https://i.postimg.cc/9F1H7t0P/Maruti-Suzuki-Eeco-Solid-White.jpg',
    },
  ];

  return (
    <div>
      <header style={styles.header}>
        <img
          src="https://i.postimg.cc/MThgMFts/pngtree-ganesh-chaturthi-indian-festival-lord-ganesha-design-png-image-6123639.png"
          alt="Logo"
          style={styles.logo}
        />
        <nav>
          <Row gutter={16} align="middle">
            <Col>
              <button
                style={styles.navButton}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.navButtonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.navButton)}
                onClick={() => navigate('/')}
              >
                Home
              </button>
            </Col>
            <Col>
              <button
                style={styles.navButton}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.navButtonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.navButton)}
                onClick={scrollToCars}
              >
                Car
              </button>
            </Col>
            <Col>
              <button
                style={styles.navButton}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.navButtonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.navButton)}
                onClick={scrollToThreeSteps}
              >
                About Us
              </button>
            </Col>
            <Col>
              <a
                href="https://play.google.com/store/apps/details?id=com.olacabs.customer&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button style={styles.appButton}>Get the App</button>
              </a>
            </Col>
            <Col>
              <button
                style={styles.loginButton}
                onMouseEnter={(e) => Object.assign(e.target.style, styles.loginButtonHover)}
                onMouseLeave={(e) => Object.assign(e.target.style, styles.loginButton)}
                onClick={() => navigate('/login')}
              >
                Sign in/up
              </button>
            </Col>
          </Row>
        </nav>
      </header>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <Row justify="center" align="middle" gutter={32} style={{ marginTop: '50px' }}>
          <Col lg={10} sm={24} xs={24} style={{ textAlign: 'center', marginBottom: '50px' }}>
          <img
              src="https://i.postimg.cc/fb6njhj0/banner-content-2.png"
              alt="Banner Content"
              style={{ maxWidth: '90%', height: '35s0px' }}
            />
          </Col>
          <Col lg={10} sm={24} xs={24}>
            <div style={styles.searchBox}>
              <h3 style={styles.title}>Looking for car rentals?</h3>
              <h2 style={styles.subtitle}>
                Explore Car rentals in <span style={styles.highlightText}>Panvel</span>
              </h2>
              <Input placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} style={styles.inputBox} />
              <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.inputBox} />
              <Input placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={styles.inputBox} />
              <Input placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={styles.inputBox} />
              <Checkbox onChange={(e) => setDelivery(e.target.checked)} style={styles.checkbox}>
                Delivery & Pick-up, from anywhere
              </Checkbox>
              <Button type="primary" onClick={handleSearch} style={styles.searchButton}>
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Cars Section */}
      <div style={styles.carsSection} ref={carSectionRef}>
        <h2 style={styles.subtitle}>Available Cars</h2>
        <Row gutter={[16, 16]}>
          {carData.map((car) => (
            <Col span={8} key={car.id}>
              <Card
                hoverable
                style={styles.carCard}
                cover={<img alt={car.name} src={car.image} style={styles.carImage} />}
              >
                <div style={{ padding: '17px' }}>
                  <h3 style={styles.carTitle}>{car.name}</h3>
                  <p style={styles.carSubtitle}>{car.doors}</p>
                  <p style={styles.price}>{car.price}</p>
                  <div style={styles.callSection}>
                    <PhoneOutlined style={styles.callIcon} />
                    <a href="tel:+919821916687" style={styles.callText}>
                      +91 9821916687
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Car Rental Deals Section */}
      <CarRentalDeals />

      {/* Three Steps Section */}
      <div ref={threeStepsRef}>
        <ThreeSteps />
      </div>

      {/* Footer */}
      <Footer scrollToThreeSteps={scrollToThreeSteps} />
    </div>
  );
}

export default Home;