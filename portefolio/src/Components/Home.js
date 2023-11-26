import React from 'react'
import styled from 'styled-components';

export default function Home() {
    return (
        <Container>
            <div className='Container'>
                <div className='Title'>
                    <img src='/photo.jpg' width={200} />
                    <h1>이현우</h1>
                </div>
                <div className='Content'>
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
    .Container{
        width: 80%;
        height: 80%;
        margin-top: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1rem;
        border: 1px solid black;
        background-color: white;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
        .Title{
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
        .Content{
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: center;
            align-items: center;
            div{
                width: 50%;
            }
            h3{
                font-size: 2rem;
                font-weight: bold;
                color: black;
            }
            p{
                font-size: 1rem;
                font-weight: bold;
                color: black;
            }   
        }
    }
`