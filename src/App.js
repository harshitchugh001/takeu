import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import { fetchBannerData} from './api/apiService';

function App() {
  const [bannerData, setBannerData] = useState({
    description: '',
    link: '',
    timer: 0,
    isVisible: false,
  });

  const fetchData = async () => {
    const data = await fetchBannerData();
    setBannerData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleUpdate = () => {
    console.log("hlo")
    fetchData();
    // setBannerData(data);
  };
  return (
    <div className="App">
      <Banner
        description={bannerData.description}
        link={bannerData.link}
        timer={bannerData.timer}
        isVisible={bannerData.isVisible}
      />
      <Dashboard onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
