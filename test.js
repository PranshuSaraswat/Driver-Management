const axios = require('axios');

async function addDriver(name, phone, licenseNumber) {
  try {
    const response = await axios.post('http://localhost:3000/AddDriver', {
      name: name,
      phone: phone,
      licenseNumber: licenseNumber
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error adding driver:', error.response ? error.response.data : error.message);
  }
}

async function getDriverByName(name) {
  try {
    const response = await axios.get(`http://localhost:3000/DriverByName/${name}`);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error getting driver by name:', error.response ? error.response.data : error.message);
  }
}

async function getMultipleDriversByName(names) {
  try {
    const response = await axios.post('http://localhost:3000/MultipleByName', {
      names: names
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error getting multiple drivers by name:', error.response ? error.response.data : error.message);
  }
}

async function getDriverBalance(phone) {
  try {
    const response = await axios.get(`http://localhost:3000/Balance/${phone}`);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error getting driver balance:', error.response ? error.response.data : error.message);
  }
}

async function payBalance(phone, amount) {
  try {
    const response = await axios.post('http://localhost:3000/PayBalance', {
      phone: phone,
      amount: amount
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error paying balance:', error.response ? error.response.data : error.message);
  }
}

async function subscribe(phone, subscriptionAmount) {
  try {
    const response = await axios.post('http://localhost:3000/Subscribe', {
      phone: phone,
      subscriptionAmount: subscriptionAmount
    });
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error subscribing:', error.response ? error.response.data : error.message);
  }
}

async function getTransactionHistory(phone) {
  try {
    const response = await axios.get(`http://localhost:3000/TransactionHistory/${phone}`);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error getting transaction history:', error.response ? error.response.data : error.message);
  }
}

// Call the addDriver function
addDriver('John Doe', '9876543210', 'DL123456');

// Call the getDriverByName function
getDriverByName('John Doe');

// Call the getMultipleDriversByName function
getMultipleDriversByName(['John Doe', 'Jane Doe']);

// Call the getDriverBalance function
getDriverBalance('9876543210');

// Call the payBalance function
payBalance('9876543210', 1000);

// Call the subscribe function
subscribe('9876543210', 400);