import React, { useState, useEffect } from 'react'
import { getHalkarz } from '../api';
import Table from 'react-bootstrap/Table';
import './ArzList.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
       <Container>
      <Row>
        <Col>
            <div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847965526054512" crossorigin="anonymous"></script>
          <ins className="adsbygoogle"
              style={{display:'block'}}
              data-ad-client="ca-pub-4847965526054512"
              data-ad-slot="2762370418"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        </Col>
        <Col xs={8}>
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
        </Col>
        <Col>
        <div>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847965526054512" crossorigin="anonymous"></script>
          <ins className="adsbygoogle"
              style={{display:'block'}}
              data-ad-client="ca-pub-4847965526054512"
              data-ad-slot="2762370418"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
