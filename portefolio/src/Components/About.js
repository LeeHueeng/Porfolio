import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


export default function About() {
  const [rainresult, setRainresult] = useState("");

  const GameStart = () => {

    const gameElement = document.getElementById('game');
    const rainElement = document.getElementById('rain');
    const gameStartElement = document.getElementById('gamestart');


    if (gameStartElement) {
      gameStartElement.style.display = 'none';
    }

    if (gameElement) {
      gameElement.style.display = 'block';
    }

    setTimeout(function () {
      if (rainElement) {
        const x = Math.floor(Math.random() * 201) - 100;
        rainElement.style.transform = `translateX(${x}px) `;
        rainElement.style.display = `block`;
        rainElement.classList.add('falling');
      }

      setTimeout(function () {
        const rainElement = document.getElementById('rain2');

        if (rainElement) {
          const x = Math.floor(Math.random() * 201) - 100;
          rainElement.style.transform = `translateX(${x}px) `;
          rainElement.style.display = `block`;
          rainElement.classList.add('falling');

        }
      }, 2000);


      setTimeout(function () {
        const rainElement = document.getElementById('rain3');

        if (rainElement) {
          const x = Math.floor(Math.random() * 201) - 100;
          rainElement.style.transform = `translateX(${x}px) `;
          rainElement.style.display = `block`;
          rainElement.classList.add('falling');

        }
      }, 4000);
    }, 3000);


  };

  const NoGame = () => {
    const gameStartElement = document.getElementById('gamestart');
    const moonElement = document.getElementById('moon');
    const multiElement = document.getElementById('multi');
    const snsElement = document.getElementById('sns');
    const resulttextElement = document.getElementById('resulttext');
    const gameElement = document.getElementById('game');

    console.log("gameStartElement");

    if (resulttextElement) {
      resulttextElement.style.display = 'none';
    }
    if (gameStartElement) {
      gameStartElement.style.display = 'none';
      console.log("gameStartElement");
    }
    if (gameElement) {
      gameElement.style.display = 'block';
      gameElement.style.animation = `win 2s linear forwards`;
    }

    if (moonElement) {
      moonElement.style.visibility = 'visible';
    }
    if (multiElement) {
      multiElement.style.visibility = 'visible';
    }
    if (snsElement) {
      snsElement.style.visibility = 'visible';
    }



  }

  const inputChange = (e) => {

    const rainElement = document.getElementById('rain');
    const rainElement2 = document.getElementById('rain2');
    const rainElement3 = document.getElementById('rain3');
    const rainresultElement = document.getElementById('rainresult');
    const gameElement = document.getElementById('game');

    const inputValue = e.target.value;
    setRainresult(inputValue);
    if (rainresult === '문어') {
      const moonElement = document.getElementById('moon');
      if (moonElement) {
        moonElement.style.visibility = 'visible';
        rainElement.style.display = `none`;
      }
      setRainresult("");
    }
    else if (rainresult === '멀티탭') {
      const multiElement = document.getElementById('multi');
      if (multiElement) {
        multiElement.style.visibility = 'visible';
        rainElement2.style.display = `none`;
      }
      setRainresult("");
    }
    else if (rainresult === "sns" || rainresult === "SNS") {
      const snsElement = document.getElementById('sns');
      if (snsElement && rainElement3 && rainresultElement && gameElement) {
        snsElement.style.visibility = 'visible';
        rainElement3.style.display = `none`;
        rainresultElement.style.display = `none`;
        gameElement.style.animation = `win 2s linear forwards`;
      }
      setRainresult("");
    }


  }



  return (
    <AboutContainer>
      <div className='wrap' id="gamestart">
        <h1> 간단한 미니게임을 해보시겠습니까? </h1>
        <pre>
          한글과 컴퓨터의 산성비 게임을 모티브로 만들었습니다.
          <br />
          <br />
          떨어지는 단어를 입력하면 단어에 맞는 제 이야기가 나오게 됩니다. <br /><br />

          게임을 원치 않으시면 아니요를 클릭해 주세요
        </pre>
        <div>
          <button onClick={GameStart}>예</button>
          <button onClick={NoGame}>아니요</button>
        </div>
      </div>
      <div id='game'>
        <div className='gandan'>
          <h1>
            🐙 이현우를 3가지 단어로 표현한다면?
          </h1>
          <div id='rain'>문어</div>
          <div id='rain2'>멀티탭</div>
          <div id='rain3'>sns</div>

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
          <div className='result' id='resulttext'>
            <input type='text' onChange={inputChange} value={rainresult} id="rainresult"></input>
          </div>
        </div>
      </div>

    </AboutContainer>
  );
}

const AboutContainer = styled.div`
background-color: #fff2cc;
width: 100%;
height: 100vh;
margin-top: 10vh;
overflow: hidden;

.wrap {
  position: absolute;
  background-color: #FFD966;
  width: 70vw;
  top: 20vh;
  left: 15vw;
  z-index: 1;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid #dfa67b;
 
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10rem;
  }
  pre {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
    white-space: pre-line;
  }
  button {
    width: 10rem;
    height: 5rem;
    border-radius: 1rem;
    border: none;
    background-color: #F4B183;
    margin: 0 20px;
    padding: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    cursor: pointer;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    &:hover {
      background-color: #fff2cc;
    }
  }
}

input {
  width: 30%;
  height: 5vh;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1.5rem;
  text-align: center;
  &:focus {
    outline: none;
  }
}
.result {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
 
}

.gandan {
  display: flex;
  justify-content: center;
  height: 70vh;
  align-items: center;
  flex-direction: column; 
  z-index: 0;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 2rem;

  }
}

#moon, #multi, #sns{
  width: 70%;
  visibility:hidden 
}

#game{
  display: none;
}


#rain.falling, #rain2.falling, #rain3.falling{
  animation: fallAnimation 2s linear forwards;
}
#rain, #rain2, #rain3 {
  top : 30vh;
  position: absolute;
  display: none;
  font-size: 2rem;
  font-weight: bold;
  color: #DFA67B;
  z-index: 1;

}

@keyframes win {
  to {
    transform: rotateY( 360deg );
  }
}
@keyframes fallAnimation {
  to {
    transform: translateY(300px) translateX(${Math.floor(Math.random() * 201) - 100}px);
    display: none;
  }
}
`;
