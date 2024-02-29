import ArzList from './Arzlist/ArzList';
import Footers from './Footers';
import Navbars from './Navbars'
import React from 'react';

export default function Home() {
  return (
    <div>
        <Navbars/>
        <ArzList/>
        <Footers/>
    </div>
  )
}
