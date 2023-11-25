import React from 'react'
import styled from 'styled-components'
import Menu from '../assets/icon/Menu.js'

export default function Navbar() {
    function goToScroll(name) {
        var location = document.querySelector("." + name).offsetTop;
        window.scrollTo({ top: location, behavior: 'smooth' });
    }
    return (
        <Container>
            <div className='LeftMenu'>
                <Menu />
            </div>
            <div className='CenterFlex'>

                <button onClick={() => goToScroll("Home")}>Home</button>
                <button onClick={() => goToScroll("About")}>About</button>
                <button onClick={() => goToScroll("Work")}>Work</button>
                <button onClick={() => goToScroll("Content")}>Content</button>
                <button onClick={() => goToScroll("Resume")}>Resume</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    z-index: 100;
    top:0;
    width:100%;
    height:10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DFA67B;
    .LeftMenu{
        
    }
    .CenterFlex{
       
    }
    button{
        width: 130px;
        height: 50px;
        border-radius: 1rem;
        border: none;
        background-color: #FFD966s;
        margin: 0 20px;
        padding: 0 ;
        font-size: 1.5rem;
        font-weight: bold;
        color: #DFA67B;
        cursor: pointer;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
        &:hover{
            background-color: #FFF2CC;
        }
    }
`