import React, { useState } from 'react';
import img1 from './assets/im.png';
import img2 from './assets/imagee.jpg';
import img3 from './assets/line.png';

const DashboardPage = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [showHome, setShowHome] = useState(false);

  const toggleDropdown = (dropdownSetter) => {
    dropdownSetter((prevState) => !prevState);
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 40px',
    borderBottom: '1px solid #E5E7EB',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const menuStyle = {
    display: 'flex',
    gap: '20px',
    fontSize: '16px',
    position: 'relative',
  };

  const dropdownMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    backgroundColor: '#FFFFFF',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    zIndex: 1000,
  };

  const dropdownItemStyle = {
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const sectionDividerStyle = {
    display: 'flex',
    width: '1440px',
    height: '1px',
    gap: '0px',
    opacity: 0,
    backgroundColor: '#FFFFFF',
    margin: '40px auto', // Optional: for spacing
  };

  const featureBoxStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa',
    flex: '1',
    textAlign: 'center',
    margin: '10px',
  };

  const featureIconStyle = {
    fontSize: '32px',
    marginBottom: '10px',
  };

  const featuresSectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '40px 20px',
  };

  return (
    <div>
      {/* Header */}
      <header style={headerStyle}>
        <div style={logoStyle}>
          <span style={{ fontWeight: 'bold', marginRight: '20px', fontSize: '20px' }}>
            Untitled UI
          </span>
        </div>
        <nav style={menuStyle}>
          {/* Home Dropdown */}
          <div
            onMouseEnter={() => toggleDropdown(setShowHome)}
            onMouseLeave={() => toggleDropdown(setShowHome)}
            style={{ position: 'relative' }}
          >
            <span>Home</span>
            <span style={{ marginLeft: '2px', fontSize: '12px' }}></span> {/* Dropdown Arrow */}
            {showHome && (
              <div style={dropdownMenuStyle}>
                <div style={dropdownItemStyle}>Overview</div>
                <div style={dropdownItemStyle}>About</div>
                <div style={dropdownItemStyle}>Contact</div>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div
            onMouseEnter={() => toggleDropdown(setShowProducts)}
            onMouseLeave={() => toggleDropdown(setShowProducts)}
            style={{ position: 'relative' }}
          >
            <span>Products</span>
            <span style={{ marginLeft: '5px', fontSize: '12px' }}>▼</span> {/* Dropdown Arrow */}
            {showProducts && (
              <div style={dropdownMenuStyle}>
                <div style={dropdownItemStyle}>ProductA</div>
                <div style={dropdownItemStyle}>ProductB</div>
                <div style={dropdownItemStyle}>ProductC</div>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div
            onMouseEnter={() => toggleDropdown(setShowResources)}
            onMouseLeave={() => toggleDropdown(setShowResources)}
            style={{ position: 'relative' }}
          >
            <span>Resources</span>
            <span style={{ marginLeft: '5px', fontSize: '12px' }}>▼</span> {/* Dropdown Arrow */}
            {showResources && (
              <div style={dropdownMenuStyle}>
                <div style={dropdownItemStyle}>Blog</div>
                <div style={dropdownItemStyle}>Documentation</div>
                <div style={dropdownItemStyle}>FAQs</div>
              </div>
            )}
          </div>

          <span>Pricing</span>
        </nav>
        <div style={{ marginLeft: 'auto' }}>
          <span style={{ marginRight: '1000px' }}></span>
          <img src={img2} alt="Logo" style={{ maxWidth: '3%' }} />
        </div>
      </header>

      {/* Main Content */}
      <main style={{ textAlign: 'center', padding: '60px 20px' }}>
        <p style={{ color: '#6366F1', fontWeight: '500', marginBottom: '10px' }}>
          New Feature &mdash; Check out the team dashboard →
        </p>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
          Beautiful analytics to grow smarter
        </h1>
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#6366F1',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
            }}
          >
            Demo
          </button>
          <button
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#4F46E5',
              color: 'white',
              borderRadius: '8px',
              border: 'none',
            }}
          >
            Sign up
          </button>
        </div>
      </main>

      {/* Stats Section */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '40px',
          padding: '20px',
          border: '1px solid #E5E7EB',
          borderRadius: '12px',
          maxWidth: '800px',
          margin: 'auto',
        }}
      >
        <div>
          <img src={img1} alt="" style={{ maxWidth: '100%' }} />
        </div>
      </section>

      <div>
        <span style={{ marginLeft: '300px', fontSize: '2px' }}></span>
        <img src={img3} alt="" style={{ maxWidth: '60%' }} />
      </div>

      {/* Feature Section */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#F9FAFB' }}>
      <h2 style={{ color: '#6366F1', marginBottom: '10px' }}>Features</h2>
      <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px' }}>
      Analytics that feels like it’s from the future
      </h3>
      <p style={{ fontSize: '18px', marginBottom: '40px', color: '#4B5563' }}>
      Powerful, self-serve product and growth analytics to help you convert, engage,
      and retain more users. Trusted by over 4,000 startups.
      </p>
      </section>

      <section style={featuresSectionStyle}>
        <div style={featureBoxStyle}>
          <div style={featureIconStyle}>☁️</div>
          <h3>Share team inboxes</h3>
          <p>
          whether you have a team of 2 or 200,our shared
            team inboxes keep every one on the same page 
            and in.
          </p>
        </div>

        <div style={featureBoxStyle}>
          <div style={featureIconStyle}>⚡</div>
          <h3>Deliver instant answers</h3>
          <p>
          An all-in-one customer service platform that helps you balance everything your
          customers need to be happy.
          </p>
        </div>

        <div style={featureBoxStyle}>
          <div style={featureIconStyle}>📊</div>
          <h3>Manage your team with reports</h3>
          <p>
          Measure what matters with Untitled's easy-to-use reports. You can filter, export,
          and drill down on the data in a couple of clicks.
          </p>
        </div>
      </section>

      <section style={featuresSectionStyle}>
        <div style={featureBoxStyle}>
          <div style={featureIconStyle}>💬</div>
          <h3>Connect with customers</h3>
          <p>
            Solve a problem or close a sale in real-time with chat. If no one is available,
            customers are seamlessly routed to email without confusion.
          </p>
        </div>

        <div style={featureBoxStyle}>
          <div style={featureIconStyle}>🔗</div>
          <h3>Connect the tools you already use</h3>
          <p>
            Explore 100+ integrations that make your day-to-day workflow more efficient and
            familiar. Plus, our extensive developer tools.
          </p>
        </div>

        <div style={featureBoxStyle}>
          <div style={featureIconStyle}>🌟</div>
          <h3>Our people make the difference</h3>
          <p>
            We're an extension of your customer service team, and all of our resources are
            free. Chat to our friendly team 24/7 when you need help.
          </p>
        </div>
      </section>
      <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#F9FAFB' }}>
      <h2 style={{ color: '#6366F1',fontSize: '40px', marginBottom: '10px' }}> sisyphus</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '20px' }}>
        <p style={{ fontSize: '40px', color: '#4B5563', fontStyle: 'Timesnewroman' }}>
        We’ve been using Untitled to kick start every new project and can’t imagine working without it.
        </p>
        <img
          src={img2}
          alt="Customer"
          style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '20px' }}
        />
        <p style={{ fontSize: '25px', color: '#4B5563', fontWeight: 'bold' }}>
      Candice Wu
         </p>
         <p style={{ fontSize: '16px', color: '#4B5563', fontWeight: 'bold' }}>
       Product Manager, Sisyphus
         </p>
      
      </div>
      </section>
    </div>
    
  );
};

export default DashboardPage;
