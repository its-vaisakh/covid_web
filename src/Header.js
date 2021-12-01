import React from "react";
import styled from "styled-components";

function Header(){

    return(
           <Container>
            <Top>
            <Toplinks>
            <Home>
                HOME
            </Home>
            <Vaccination>
                VACCINATION REGISTRATION
            </Vaccination>
            <About>
                ABOUT
            </About>
            <Contact>
                CONTACT
            </Contact>
            <Sign>
                SIGN UP
            </Sign>
            </Toplinks>
            <Topdown>
            <Text>  
            <abc>
            <h6> Welcome to Covid web <br/> <span class="abc">We're responsible.....Let's defeat COVID 19</span></h6  >
            </abc>
            <Image>
            <img src="assets/4999291-removebg-preview.png"/>
            </Image>
            </Text>
            </Topdown>
            </Top>
        </Container>
    )
}

export default Header

const Container = styled.div
`
    background-color:#009FF9;
    height: 480px;
    
`
const Top = styled.div
`
    max-height:90px;
    color:white;
    
`
const Toplinks = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:350px;
    padding-right:350px;
    padding-top:40px;
`

const Home = styled.div`

`
const Vaccination = styled.div`

`
const About = styled.div`

`
const Contact = styled.div`

`
const Sign = styled.div`

`
const Topdown = styled.div`
    padding-top : 5px;
    display : flex;
    padding-left : 150px;
`
const Text = styled.div`
h6{
    font-weight: 50px;
    font-size: 35px;
    color : white;
}
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
`
const abc = styled.div`
    display:flex;
    padding-left:100px;

`
const Image = styled.div`
img{
    width : 400px;
    margin-left: 200px;

}
`
