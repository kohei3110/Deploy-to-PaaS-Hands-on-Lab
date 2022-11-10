import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {

  const [verNo, setVerNo] = useState('')

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/GetVersion")
      setVerNo(res?.data)
    }

    getData()

  }, [])

  return (
    <>
      <h1>Hello!</h1>
      <div>version: {verNo}</div>
    </>
  );
}

export default App;
