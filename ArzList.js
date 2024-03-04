import React, { useState, useEffect } from 'react'
import { getHalkarz } from '../api';
import Table from 'react-bootstrap/Table';
import './ArzList.css';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import AdSenseScript from '../Adsense/AdSenseScript';
export default function ArzList() {

    const [halkarz, setHalkarz] = useState([]);
    const navigate = useNavigate();
    const [visibleArzCount, setVisibleArzCount] = useState(7);

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

      const handleLoadMore = () => {
        setVisibleArzCount(prevCount => prevCount + 10); // Daha fazla yükle butonuna basıldığında 10 arz daha göster
    };
  return (
    <div className='arzListContainer'>
         <AdSenseScript />
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
              <th>Bist Kodu</th>
              <th>Halka Arz</th>
              <th>Tarih Aralığı</th>
              <th></th>
        </tr>
      </thead>
      <tbody>
        {halkarz.slice(0, visibleArzCount).map(arz => (
              <tr key={arz.id} onClick={() => handleRowClick(arz.id)}  style={{ cursor: 'pointer' }}>
                <td className={arz.blinkHover ? 'blinkHover' : ''}><img src={arz.img_src} alt={arz.name} style={{ maxWidth: '50px' }} /></td>
                <td className={arz.blinkHover ? 'blinkHover' : ''}>{arz.bist_code}</td>
                <td className={arz.blinkHover ? 'blinkHover' : ''}>
                    <div className="scroll-container">
                      <span className="scroll-text">{arz.company_name}</span>
                    </div>
              </td>
                <td className={arz.blinkHover ? 'blinkHover' : ''}>{arz.halka_arz_tarihi}</td>
                {arz.blink ? (
                        <td><div className="blink"></div></td>
                    ) : (
                        <td></td>
                    )}
              </tr>
            ))}
      </tbody>
    </Table>
        {halkarz.length > visibleArzCount && (
                                <div className="d-grid gap-2">
                                    <Button onClick={handleLoadMore} size="sm">Daha Fazla Yükle</Button>
                                </div>
                            )}
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
