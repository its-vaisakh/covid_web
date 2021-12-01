import React from "react";
import styled from "styled-components";

function Registration(){
        

        return(
                <Container>
                        <Main>
                        <form>
                        <Reg>
                         Registration
                        <Box>
                        <First>
                        <input type="checkbox"  id="myCheck" class="pl" checked/><span>Identification</span>
                        </First>
                        <Second>
                        <input type="checkbox" class="pl" /><span>Vaccine Center</span>
                        </Second>
                        <Third>
                        <input type="checkbox" class="pl" /><span>Appointment</span>
                        </Third>
                        </Box>
                        </Reg> 
                        <Head>
                         Select Identification Type
                        </Head>
                        <Adhar>
                        <One>
                        <h6>Adhar Id</h6>
                        </One>
                        <Two>
                        <h6>Student Id</h6>
                        </Two>
                        </Adhar>
                        <Passport>
                        <Pass>
                        <h6>Passport</h6>
                        </Pass>
                        <Personal>
                        <h6>Birth Certificate</h6>
                        </Personal>        
                        </Passport>
                        <Details>
                        <Adetails>
                        Enter your Adhar no
                        </Adetails>
                        <InputField>
                        <input type="text"   required/ >
                        </InputField>
                        <Button variant="primary">Next</Button>        
                        </Details>
                        </form>
                        </Main>
                </Container>
        )}

export default Registration

const Container = styled.div`
        background-color:white;
       
`
const Reg = styled.div`
        background-color:#D7E9F6;
        height:200px;
        color:#495375;
        font-weight:bold;
        font-size: 30px;
        text-align: center;
        padding-margin: 40px;
        position: relative;
        padding-top:10px;
        

        
`
const Main = styled.div`
        background-color:white;
        height : 1000px;
        position: relative;


`
const Box = styled.div`
        background-color:white;
        position: absolute;
        width: 900px;
        height: 200px;
        margin-left:220px;
        margin-right:50px;
        margin-top:80px; 
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;
        display:flex;
        align-items:center;
        justify-content:space-between;

`
const Head = styled.div`
        display: flex;
        align-items:center;
        justify-content:center;
        margin-top:150px;
        color: #6B6B6B;
        font-weight:600;
        font-size:28px;
        

`
const Adhar = styled.div`
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-right:350px;
        margin-left:350px;
        margin-top:100px;
        cursor:pointer;


`
const One = styled.div`
        width: 250px;
        height : 100px;
        padding: 10px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;
        display:flex;
        aligh-items:center;
        justify-content:center;
        font-weight:600;
        font-size:28px;
        color: #6B6B6B;
        outline: 1px solid #40B7FA;

`
const Two =  styled.div`
        width: 250px;
        padding: 10px;
        height : 100px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;
        display:flex;
        aligh-items:center;
        justify-content:center;
        font-weight:600;
        font-size:28px;
        color: #6B6B6B;
`
const Passport =  styled.div`
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-right:350px;
        margin-left:350px;
        margin-top:50px;
        cursor:pointer;

`
const Pass = styled.div`
        width: 250px;
        padding: 10px;
        height : 100px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;
        display:flex;
        aligh-items:center;
        justify-content:center;
        font-weight:600;
        font-size:28px;
        color: #6B6B6B;
`
const Personal = styled.div`
        width: 250px;
        padding: 10px;
        height : 100px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;
        display:flex;
        aligh-items:center;
        justify-content:center;
        font-weight:600;
        font-size:28px;
        color: #6B6B6B;
`
const Details = styled.div`

`
const Adetails = styled.div`
        display:flex;
        margin-left: 400px;
        font-weight:normal;
        font-size:20px;
        color: #6B6B6B;
        margin-top:50px;
`
const InputField = styled.div`
        display = flex;
        margin-left: 400px;
        input{
        width : 500px;
        height: 35px;
        border-radius:15px;
        border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
        decoration:none; 
        border: 1px solid;

        :focus {
                outline: none;
            }      
        }
        margin-top:20px;
     
`
const Button = styled.button`
        margin-left: 400px;
        width : 500px;
        height: 45px;
        margin-top:20px;
        border-radius:15px;
        background-color:#009FF9;
        color:white;
        :focus {
                outline: none;
            }      
         border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
        decoration:none; 
        border: 1px solid;
`
const First = styled.div`
        margin-right:30px;
        margin-left:30px;
        display:flex;
        align-items:center;
        span{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
        }
`
const Second = styled.div`
        margin-right:30px;
        margin-left:30px;
        display:flex;
        align-items:center;
        span{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
        }
`
const Third = styled.div`
        margin-right:30px;
        margin-left:30px;
        display:flex;
        align-items:center;
        span{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
        }
`