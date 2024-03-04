import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getHalkarzById } from '../api';
import './ArzDetails.css';
import Navbars from '../Navbars';
import Footers from '../Footers';

export default function ArzDetails() {
    const { id } = useParams(); 
  const [arzDetails, setArzDetails] = useState(null); 

  useEffect(() => {
    const fetchArzDetails = async () => {
      try {
        const arzData = await getHalkarzById(id); 
        setArzDetails(arzData); 
      } catch (error) {
        console.error('Halka arzı detayları getirilirken bir hata oluştu:', error);
      }
    };

    fetchArzDetails(); 
  }, [id]); 

  if (!arzDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbars/>
      <div  className="arz-details-container">
          <h2>{arzDetails.company_name}</h2>
        <p><strong>Tarih:</strong> {arzDetails.halka_arz_tarihi}</p>
        <p><strong>Fiyat Aralığı:</strong> {arzDetails.img_src}</p>
      </div>
    <Footers/>
</div>
  )
}
