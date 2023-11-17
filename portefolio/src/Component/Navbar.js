import React from 'react'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <Container>
            <div className='CenterFlex'>
                <button>Home</button>
                <button>Home</button>
                <button>Home</button>
                <button>Home</button>
                <button>Home</button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    position: fixed;
    top:0;
    width:100%;
    height:10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #DFA67B;
    .CenterFlex{
       
    }
    button{
        width: 100px;
        height: 50px;
        border-radius: 1rem;
        border: none;
        background-color: #FFD966s;
        margin: 0 20px;
        padding: 0 20px;
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