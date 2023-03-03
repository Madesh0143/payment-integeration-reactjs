import { useState } from 'react';
import './App.css';

function App() {

  const [amount, setAmount] = useState('');

// SET A EVENT FUNCTION  

  const HandleSubmit = (e) => {
    e.preventDefault();

// GIVE A RAZORPAY  PAYMENT METHOD  OPTIONS HAVE TO DECELARE AND SET 

    if (amount === "") {
      alert("please enter some amount")
    } else {
      var options = {
        key: "rzp_test_s9fjfDlnRn4KMz",
        key_secret: "RGsX73hJlGJjam9zSkVTP128",
        amount: amount * 100,
        currency: "INR",
        name: "Payment Method",
        description: " For Testing Purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id)
        },       
        prefill: {    //  THIS FUNCTION IS SEND TO USER OTP MSG IN YOUR MOBILE 
          name: "Madesh",
          email: "example123@gmail.com",
          contact: "1234567890" // CORRECT NUMBER
        },
        notes: { //   SIMPLE NOTES
          address: "Razorpay corporate office"
        },   
        theme: {  //   TEMPLATE COLORS
          color: "#3399cc"
        }
      };

      var pay = new window.Razorpay(options);
      pay.open();

    }
  }

  return (
    <section className='form'>
      <div className='container'>
        <div className='row'>

          <div className='img '>

            <img src='/images/payment.png' alt='no images' />
          </div>

          <div className='form__div '>

            <h2>Online Payment Integration Using React JS</h2>
            <br />

            <input
              id='pay'
              type="number"
              placeholder='Enter Amount'
              className='flex bg-gray-500 text-white px-4 py-3 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-green-600'
              value={amount}
              onChange={(e) => setAmount(e.target.value)} />

            <br />
            <button
              className='btn flex bg-indigo-500  text-white px-5 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-rose-600 '
              type='button'
              onClick={HandleSubmit}>
              Pay..!</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
