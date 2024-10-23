import React, { useState, useEffect } from "react";


const App = () => {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {

    /* Fetch the data from the url https://synth.hackerearth.com/api/phones to display phone data. 
    Indicate that the data has finished loading and update the state.
    It's advisable to use setError(error) to handle errors more comprehensively.
    */
  }, []);

  if (!isLoading) {
    /*
    If the isLoading state is true,render a <div> with the text "Loading..." 
    to indicate that the data is being loaded.
    */
  }

  if (!error) {
    /*If the error state is truthy,render a <div> 
    displaying the error message, preceded by the text "Error:". */
  }

  return (
    <div>
      <h1>Phone List</h1>
      {phones.map(() => (
        <div key={phone.id}>
          {/*Enter the props of phone data below accordingly*/}
          <h2>{/*Name of the phone*/}</h2>
          <p>Processor:{/*Name of the processor*/}</p>
          <p>Manufacturer:{/*Name of the manufacturer*/}</p>
        </div>
      ))}
    </div>
  );
};

export default App;

