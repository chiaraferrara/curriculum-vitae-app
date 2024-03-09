import React, { useEffect, useState } from 'react';
import app from './firebase';
import { getDatabase, ref, get } from "firebase/database";

function Home() {

  const [data, setData] = useState<any>();

  const fetchData = async () => {
    const db = getDatabase(app); //varibile che punta al database
    const dataRef = ref(db); //reference
    //snapshot
    const snapshot = await get(dataRef);
    if(snapshot.exists()){
      setData(snapshot.val());
    };
  };

  useEffect(() => {
    fetchData();
    console.log(data)
  }, []);

  return (
    <>
    <h1>Curriculum Vitae</h1>

    {data ? (
    <p>{data.infos.name}</p>
    
    
    
    ) 
    : 
    (
    <p>Loading...</p>
    )}
    </>
  );
}

export default Home;
