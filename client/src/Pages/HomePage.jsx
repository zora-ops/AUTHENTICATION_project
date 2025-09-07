import { useState, useEffect } from 'react'

import ProjectIntro from '../components/ProjectIntro';
import api from '../lib/api';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect( () => {
    const fetchUser = async () => {
      try {
        const res = await api.get('/user/data');
        setData(res.data.name);
      } catch (error) {
        console.log(error.response.data.message)
      }
    }

    fetchUser();

  },[]);


  return (
    <div className="h-screen">
      {
        data ? <ProjectIntro name={data}/> : <ProjectIntro/>
      }
    </div>
  );
};

export default HomePage;