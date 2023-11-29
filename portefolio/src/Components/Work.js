import React from 'react'
import styled from 'styled-components';

export default function Work() {
    return (
        <Container>
            <div className='container'>
                <div className='title'>
                    <h1>Work</h1>
                </div>
                <div className='contents'>
                    <div className='firstcontent'>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                    </div>
                    <div className='firstcontent'>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                    </div>
                    <div className='firstcontent'>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                    </div>
                    <div className='firstcontent'>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                        <div className='select'></div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff2cc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 3rem;
    font-weight: bold;
    color: #ff9900;
    .firstcontent{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        marogin-bottom: 20px;
    }      
    .select{
        width:200px;
        margin: 10px 10px;
        height: 90px;
        border: 1px solid black;
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:hover{
            background-color: #ff9900;
            h1{
                color: white;
                }
            }
        }
    
    .container{
        width: 80%;
        height: 80%;
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        border-radius: 1rem;
        border: 1px solid black;
        background-color: white;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
  
        .title{
            width: 70%;
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            h1{
                font-size: 3rem;
                font-weight: bold;
                color: black;
            }
        }
        .contents{
            width: 150vw;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            div{
                width: 50%;
            }
            h3{
                font-size: 2rem;
                font-weight: bold;
                color: black;   
            }
            p{
                font-size: 1.5rem;
                font-weight: bold;
                color: black;
            }
        }
    }
`
