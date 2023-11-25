import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


export default function About() {
  const [rainresult, setRainresult] = useState("");
  const [randomX, setRandomX] = useState(0);
  useEffect(() => {
    const rainElement = document.getElementById('rain');
    if (rainElement) {
      const randomX = Math.floor(Math.random() * 201) - 100;
      setRandomX(randomX);
      rainElement.style.left = `${randomX}px`;
      rainElement.classList.add('falling');
    }
  }, []);



  const inputChange = (e) => {
    console.log("rainresult after setRainresult:", rainresult);
    const inputValue = e.target.value;
    setRainresult(inputValue);
    if (rainresult === '문어') {
      const moonElement = document.getElementById('moon');
      if (moonElement) {
        moonElement.style.visibility = 'visible';

      }
      setRainresult("");
    }
    else if (rainresult === '멀티탭') {
      const multiElement = document.getElementById('multi');
      if (multiElement) {
        multiElement.style.visibility = 'visible';

      }
      setRainresult("");
    }
    else if (rainresult === "sns") {
      const snsElement = document.getElementById('sns');
      if (snsElement) {
        snsElement.style.visibility = 'visible';
      }
      setRainresult("");
    }

  }



  return (
    <AboutContainer>
      <div className='wrap'></div>
      <div className='gandan'>
        <div id='rain'>문어</div>
        <h1>
          🐙 이현우를 3가지 단어로 표현한다면?
        </h1>
        <div id="moon">
          <h3>1. 문어</h3>
          <p>여러가지 일을 진행하는 것을 좋아하며 호기심이 많은 편입니다.</p>
        </div>
        <div id="multi">
          <h3>2. 멀티탭</h3>
          <p>이사하는 첫날 설치하고 고장나지 않으면 볼일 없는 존재와 같이 묵묵히 일을 수행합니다.</p>
        </div>
        <div id="sns">

          <h3>3. SNS</h3>
          <p> sns 및 사람들과의 인간관계를 넓히는 것을 좋아합니다.</p>
          <p>처음 보더라도 친근감있게 금방 다가가는 편입니다.</p>
        </div>
      </div>
      <div className='result'>
        <input type='text' onChange={inputChange} value={rainresult} id="rainresult"></input>
      </div>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
background-color: #fff2cc;
width: 100vw;
height: 100vh;
margin-top: 10vh;

.result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  margin-top: 10vh;
}

.gandan {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 0;
}

#moon, #multi, #sns{
  width: 70%;
  visibility:hidden 
}

#rain.falling {
  animation: fallAnimation 2s linear forwards;
}

@keyframes fallAnimation {
  to {
    transform: translateX(${randomX}px) translateY(500px);
 
  }
}
`;
