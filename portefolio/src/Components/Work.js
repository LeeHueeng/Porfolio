import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { NavbarNameBox } from '../styles/Title.js';
import { goToScroll } from '../utils/Scroll';

export default function Work() {
    const [select, setSelect] = useState(0);

    useEffect(() => {
        console.log(select);
    }, [select])
    return (
        <div>
            <NavbarNameBox>
                <div className='imgbox'>
                    <img src='https://cdg-portfolio.com/images/black-link.png' width="100%" onClick={() => goToScroll("Work")} />
                </div>
                <h1>Home</h1>
            </NavbarNameBox>
            <Container>
                <div className='container'>

                    <div className='contents'>
                        <div className='firstcontent'>
                            <div className='select' onClick={() => setSelect(1)}>
                                <h1>hueeng 사이트</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(2)}>
                                <h1>Giant Step 기획자 인턴</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(3)}>
                                <h1>알고리즘 어울림</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(4)}>
                                <h1>unity game 제작 </h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                        </div>
                        <div className='firstcontent'>
                            <div className='select' onClick={() => setSelect(5)}>
                                <h1>IT동아리 S.owl 활동</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(6)}>
                                <h1>나만의 커뮤니티 제작</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(7)}>
                                <h1>문서관리 웹사이트 제작(DMS)</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(8)}>
                                <h1>IT 경진대회 대상</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                        </div>
                        <div className='firstcontent'>
                            <div className='select' onClick={() => setSelect(9)}>
                                <h1>창업 동아리</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(10)}>
                                <h1>coding bottle 활동</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(11)}>
                                <h1>캘린더 제작 프로젝트</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(12)}>채우자</div>
                        </div>
                        <div className='firstcontent'>
                            <div className='select' onClick={() => setSelect(13)}>채우자</div>
                            <div className='select' onClick={() => setSelect(14)}>채우자</div>
                            <div className='select' onClick={() => setSelect(15)}>
                                <h1>내가 했던 활동</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                            <div className='select' onClick={() => setSelect(16)}>
                                <h1>내가 들었던 수업</h1>
                                <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width={500} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
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
        position: relative;
        width:200px;
        height: 120px;
        margin: 10px 10px;
        border: 1px solid black;
        border-radius: 1rem;
        cursor: pointer;
        overflow: hidden;
        h1{
            margin: 0;
            position: absolute;
            top: 40%;
            left: 8%;
            z-index: 1;
            font-size: 1rem;
        }
        img{
            background-image: url('https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg');
            filter: blur(3px);
         
        }
        &:hover{
            img{
            filter: blur(0px);
            background-color: #ff9900;
        }
            h1{
                color: white;
                }
            }
        }
    
    .container{
        width: 80%;
        height: 90vh;
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
