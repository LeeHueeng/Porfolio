import React from 'react'
import styled from 'styled-components';
import { goToScroll } from '../utils/Scroll';
import { NavbarNameBox } from '../styles/Title.js';

export default function Home() {
    return (
        <Container>
            <NavbarNameBox>
                <div className='imgbox'>
                    <img src='https://cdg-portfolio.com/images/black-link.png' width="100%" onClick={() => goToScroll("Home")} />
                </div>
                <h1>Home</h1>
            </NavbarNameBox>
            <div className='Container'>
                <div className='Title'>
                    <img src='/photo.jpg' width={200} />
                    <h1> 이현우</h1>
                </div>
                <div className='content'>
                    <div className='ContentLeft'>
                        <div>
                            <h3>👨‍🦰프로필</h3>
                            <p>👶 1999년 04월 14일 출생</p>
                            <p>🏫 도당고등학교 (2015~2018년)</p>
                            <p> 🧑‍🎓 성공회대학교 (2018 ~ 미정)</p>
                        </div>
                        <div>
                            <h3>💡 연락처</h3>
                            <p>📭  zzxx373014@gmail.com</p>
                            <p>📞  010-8408-9384</p>
                            <p>📘  www.hueeng.com</p>
                        </div>
                    </div>
                    <div className='ContentRight'>
                        <div>
                            <h3>🎞 Career</h3>
                            <p>GiantStep 기획자 인턴 (2022.01~2022.12)</p>

                        </div>
                    </div>
                </div>
            </div>

        </Container >
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
    font-size: 48px;
    font-weight: bold;
    color: #ff9900;
   

    .Container{
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: .0625rem solid black;
        background-color: white;
        box-shadow: 0 0 .625rem 0 rgba(0,0,0,0.5);
        .Title{
            width: 70%;
            height: 20%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            h1{
                font-size: 48px;
                font-weight: bold;
                color: black;
            }
        }
        .content{
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                width: 50%;
            }
            h3{
                font-size: 32px;
                font-weight: bold;
                color: black;   
            }
            p{
                font-size: 16px;
                font-weight: bold;
                color: black;
            }   
        }
    }
    img{
   animation: win 1s linear forwards;
    @keyframes win {
        to {
          transform: rotateY( 360deg );
        }
      }
    }
`