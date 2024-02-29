import React, { useState, useEffect } from 'react'
import { getHalkarz } from '../api';
import Table from 'react-bootstrap/Table';
import './ArzList.css';
import { useNavigate } from 'react-router-dom';

export default function ArzList() {

    const [halkarz, setHalkarz] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
      const fetchHalkarz = async () => {
        const halkarzData = await getHalkarz(); 
        setHalkarz(halkarzData); 
      };
  
      fetchHalkarz(); 
    }, []);

    const handleRowClick = (id) => {
        navigate(`/arz/${id}`);
      };
  return (
    <div className='arzListContainer'>
      <Table hover borderless>
      <thead>
        <tr>
              <th></th>
              <th>Halka Arz İsmi</th>
              <th>Halka Arz Açıklaması</th>
              <th>Halka Arz Tarihi</th>
              <th>Halka Arz Fiyatı/Aralığı</th>
        </tr>
      </thead>
      <tbody>
        {halkarz.map(arz => (
              <tr key={arz.id} onClick={() => handleRowClick(arz.id)}  style={{ cursor: 'pointer' }}>
                <td><img src={arz.image} alt={arz.name} style={{ maxWidth: '50px' }} /></td>
                <td>{arz.name}</td>
                <td>{arz.description}</td>
                <td>{arz.listingDate}</td>
                <td>{arz.priceRange}</td>
              </tr>
            ))}
      </tbody>
    </Table>
    </div>
  )
}
