import React, {useState} from 'react';
//Animations
import styled from "styled-components";
import {motion} from "framer-motion";
import logo from '../img/logo.svg';
//Redux and Routes
import {fetchSearch} from "../actions/gamesAction";
import {useDispatch} from "react-redux";
//Animations
import {fadeIn} from "../animations";


const Nav = () => {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState('');
    const inputHandler = (e) => {
          setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };
    const clearSearched = () => {
        dispatch({type: 'CLEAR_SEARCHED'});
    }
    return (
        <StyledNav variants={fadeIn} initial={'hidden'} animate={'show'}>
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo"/>
                <h1>Ignite</h1>
            </Logo>
            <form className="search">
                <input value={textInput} onChange={inputHandler} type="text"/>
                <button onClick={submitSearch} type={"submit"}>Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;

  input {
    width: 30%;
    font-size: 1rem;
    padding: 1rem 2rem;
    border: none;
    border-radius: 1.5rem;
    margin-top: 2rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
  }

  button {
    font-size: 1rem;
    border: none;
    padding: 1rem 2rem;
    margin-left: 1rem;
    border-radius: 1.5rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    outline: none;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 2rem;
    width: 2rem;
  }

`;

export default Nav;