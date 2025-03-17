import { useState } from 'react'
import './Home.css'
import Gallary from '../Components/Gallary/Gallary'

import MainCart from './MainCart';
const Home = () => {
    const [pageState, setpageState] = useState(false);

    const handleGallary = () => {
        setpageState(true);
    };

    const handleCart = () => {
        setpageState(false);
    };
 
  return (
    <div className="Home">
    <div className="nav-buttons">
        <button className="btn btn-login" onClick={pageState ? handleCart : handleGallary}>
            {pageState ? "Cart Item" : "Gallary"}
        </button>
    </div>

    {pageState ? <Gallary /> :<MainCart/> }
</div>
);
};

export default Home
