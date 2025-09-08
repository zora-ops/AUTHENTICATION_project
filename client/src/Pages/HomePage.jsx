import { useState, useEffect } from 'react'

import ProjectIntro from '../components/ProjectIntro';
import Navbar from '../components/Navbar'
import api from '../lib/api';

const HomePage = () => {
  const [Data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect( () => {
    const fetchUser = async () => {
      try {
        const isUserLoggedIn = await api.post('/auth/isLoggedIn');
        if(isUserLoggedIn){
          const res = await api.get('/user/data');
          setData(res.data);
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.log(error.response.data.message)
      }
    }

    fetchUser();
  },[isLoggedIn]);

  if(Data) console.log(Data)

  return (
    <div className="h-screen">
      <Navbar islogin={{isLoggedIn, setIsLoggedIn}} data={Data} setData={setData}/>
      {
        Data ? <ProjectIntro  data={Data}/> : <ProjectIntro/>
      }
    </div>
  );
};

export default HomePage;