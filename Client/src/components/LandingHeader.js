import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { onSearchInputChange } from "../Redux/Actions/headerActions";
import logo from '../images/ProjectLogo.png'

const LandingHeader = () => {
    const dispatch = useDispatch();

    const { search } = useSelector((state) => state.headerReducer);
  return (
    <div className="LandingHeader">
    <img src={logo} alt="logo" className='logo'/>
    <h1>Northeastern Pharma</h1>
    <p>We are the leading health solutions agency at Northeastern University, the one-stop pharmacy that focuses on delivering care right to your doorstep. Our purpose is simple and clear; bringing our heart to every student at  moment of their health.</p>
        <div className="d-flex align-items-center">
                  <form className="searchbar">
                    <input
                      type="search"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => {
                        dispatch(onSearchInputChange(e.target.value));
                      }}
                    />
                    <button type="submit" className="search-button">
                      Search
                    </button>
                </form>
        </div>
        
    </div>
  )
}

export default LandingHeader