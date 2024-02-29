import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getHalkarzById } from '../api';
import './ArzDetails.css';

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
    <div className="arz-details-container">
    <h2>{arzDetails.name}</h2>
    <p><strong>Açıklama:</strong> {arzDetails.description}</p>
    <p><strong>Tarih:</strong> {arzDetails.listingDate}</p>
    <p><strong>Fiyat Aralığı:</strong> {arzDetails.priceRange}</p>
</div>
  )
}
