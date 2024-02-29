import React, { useState, useEffect } from 'react';
import { getTaslakarzlar } from '../api'; // Taslak arzları getirmek için kullanacağımız API fonksiyonu
import Table from 'react-bootstrap/Table'; // Tablo bileşeni
import './TaslakArzList.css'; // Taslak arz listesi için CSS dosyası
import { useNavigate } from 'react-router-dom'; // Yönlendirme için kullanacağımız hook
import Container from 'react-bootstrap/Container'; // Container bileşeni
import Row from 'react-bootstrap/Row'; // Row bileşeni
import Col from 'react-bootstrap/Col'; // Col bileşeni
import Navbars from '../Navbars';
import Footers from '../Footers';

export default function TaslakArzList() {
    const [taslakArzlar, setTaslakArzlar] = useState([]); // Taslak arzlar için state
    const navigate = useNavigate(); // Yönlendirme için hook

    useEffect(() => {
        const fetchTaslakArzlar = async () => {
            const taslakArzlarData = await getTaslakarzlar(); 
            setTaslakArzlar(taslakArzlarData); 
        };

        fetchTaslakArzlar(); // Fetch işlemini gerçekleştir
    }, []); 
    const handleRowClick = (id) => {
        navigate(`/taslak-arz/${id}`); 
    };

    // JSX içinde geri döndürülen bileşenler
    return (
        <div className='taslakArzListContainer'>
            <Navbars/>
            <Container>
                <Row>
                    <Col>
                        {/* Sol taraftaki reklam alanı */}
                        <div>
                            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847965526054512" crossorigin="anonymous"></script>
                            <ins className="adsbygoogle"
                                style={{ display: 'block' }}
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
                        {/* Taslak arzlar için tablo */}
                        <Table hover borderless>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Taslak Arz İsmi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {taslakArzlar.map(arz => (
                                    <tr key={arz.id} onClick={() => handleRowClick(arz.id)} style={{ cursor: 'pointer' }}>
                                        <td><img src={arz.image} alt={arz.name} style={{ maxWidth: '50px' }} /></td>
                                        <td>{arz.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        {/* Sağ taraftaki reklam alanı */}
                        <div>
                            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4847965526054512" crossorigin="anonymous"></script>
                            <ins className="adsbygoogle"
                                style={{ display: 'block' }}
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
            <Footers/>
        </div>
    );
}
