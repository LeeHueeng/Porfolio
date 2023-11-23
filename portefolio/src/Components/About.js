import React from 'react'

import styled from 'styled-components'

export default function About() {
    return (
        <AboutContainer>
            <div class="container">
                <div class="circle">
                    <img
                        src='/hueeng.jpeg'
                        alt='이현우'
                        width='40px'
                        height='40px'
                        style={{ borderRadius: '100%' }}
                    />
                </div>
                <div class="shadow"></div>
            </div>
            <div className='gandan'>

                <h1>
                    🐙 이현우를 3가지 단어로 표현한다면?
                </h1>

                <h3>1. 문어</h3>

                <p>여러가지 일을 진행하는 것을 좋아하며 호기심이 많은 편입니다.</p>
                <h3>2. 멀티탭</h3>
                <p>이사하는 첫날 설치하고 고장나지 않으면 볼일 없는 존재와 같이
                    묵묵히 일을 수행합니다.</p>
                <h3>3. SNS</h3>
                <p> sns 및 사람들과의 인간관계를 넓히는 것을 좋아합니다.</p>
                <p>처음 보더라도 친근감있게 금방 다가가는 편입니다.</p>

            </div>

        </AboutContainer >
    )
}

const AboutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 10vh;
    background-color: yellow;
 
      .circle {
        position: absolute;
        top: 40px;
        left: calc(50% - 20px);
        background-color: white;
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
      .shadow {
        position: absolute;
        width: 40px;
        height: 5px;
        left: calc(50% - 20px);
        bottom: 20px;
        border-radius: 100%;
        background-color: rgba(0, 0, 0, 0.2);
      }
      .circle {
        animation: bounce 1s infinite;
      }
      @keyframes bounce {
        0% {
          top: 40px;
        }
        50% {
          top: 120px;
            height: 40px;
        }
        55% {
          top: 150px;
          height: 25px;
        }
        65% {
          top: 120px;
          height: 40px;
        }
        95% {
          top: 40px;
        }
        100% {
          top: 40px;
        }
      }
      .shadow {
        animation: shadow 1s infinite;
      }
      @keyframes shadow {
        0% {
          transform: scale(0.1);
          background-color: rgba(0, 0, 0, 0.1);
          }
        50% {
          transform: scale(1);
          background-color: rgba(0, 0, 0, 0.2);
        }
        55% {
          transform: scale(1);
          background-color: rgba(0, 0, 0, 0.2);
        }
        65% {
          transform: scale(0.5);
          background-color: rgba(0, 0, 0, 0.15);
        }
        95% {
          transform: scale(0.1);
          background-color: rgba(0, 0, 0, 0.1);
        }
        100% {
          transform: scale(0.1);
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
      @keyframes bounce {
        0% {
          top: 40px;
            animation-timing-function: ease-in;
          }
          50% {
          top: 120px;
            height: 40px;
          animation-timing-function: ease-out;
          }
          55% {
          top: 150px; height: 25px;
            animation-timing-function: ease-in;
        }
          65% {
          top: 120px; height: 40px;
            animation-timing-function: ease-out;
        }
          95% {
            top: 40px;
            animation-timing-function: ease-in;
          }
          100% {
          top: 40px;
            animation-timing-function: ease-in;
          }
      }
      @keyframes shadow {
        0% {
          transform: scale(0.1);
          background-color: rgba(0, 0, 0, 0.1);
          animation-timing-function: ease-in;
          }
        50% {
          transform: scale(1);
          background-color: rgba(0, 0, 0, 0.2);
          animation-timing-function: ease-out;
        }
        55% {
          transform: scale(1);
          background-color: rgba(0, 0, 0, 0.2);
          animation-timing-function: ease-in;
        }
        65% {
          transform: scale(0.5);
          background-color: rgba(0, 0, 0, 0.15);
          animation-timing-function: ease-out;
        }
        95% {
          transform: scale(0.1);
          background-color: rgba(0, 0, 0, 0.1);
          animation-timing-function: ease-in;
        }
        100% {
          transform: scale(0.1);
          background-color: rgba(0, 0, 0, 0.1);
          animation-timing-function: ease-in;
        }
      }
    .gandan{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: yellow;
        z-index: 0;
    }
    
`