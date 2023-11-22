import React from 'react'
import styled from 'styled-components'

export default function About() {
    return (
        <AboutContainer>
            <pre>
                안녕하세요
                저는 이현우라고 합니다.

                ㄴㅇㄹㄴㅇ
                ㄹ
                ㄴㅇ
                ㄹㄴㅇ
                ㄹ
                ㄴ
                ㅇ
            </pre>
        </AboutContainer>
    )
}

const AboutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #white;
`