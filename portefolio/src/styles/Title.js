import styled from 'styled-components';

export const NavbarNameBox = styled.div`
        width: 100%;
        height: 13vh;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20vh;
            h1{
                font-size: 48px;
            }

            .imgbox{
                width: 2rem;   
                height: 2rem;
                display: flex;
                margin-right: 20px;
                img{
                    &:hover{
                        filter: invert(50%);
                        cursor: pointer;
                    }
                    
                }
            }
`
