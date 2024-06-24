import React from 'react';

const loginStyle = {
  display: 'flex',
color:'black',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
backgroundColor: '#f0f0f0', 
  color: '#ffffff', 
  fontSize: '2rem',
  margin: '1rem 0',
};


const textStyle = {
color:'black',
padding: '0.5rem 1rem',
};

const inputStyle = {
  margin: '10px 0',
  padding: '10px',
  fontSize: '16px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  width: '80%',
  maxWidth: '300px',
};

const buttonStyle = {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer',

};

export default function Login({appName}) {
  return (
    <div style={loginStyle}>
<h1 style={textStyle} >Login To {appName} </h1>
      <input type="text" placeholder="Username" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}
