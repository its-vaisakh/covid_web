import React from "react";
import styled from "styled-components";

function Process({list,district,pincode}){
                        
                return ( 
                        <Container>
                        <Main>
                        <Reg>
                         Registration Processing
                        <Box>  
                        <First>
                        <input type="checkbox" class="pl"  checked/> <span>Identification</span>
                        </First>
                        <Second>
                        <input type="checkbox" class="pl"  checked /><span>Vaccine Center</span>
                        </Second>
                        <Third>
                        <input type="checkbox" class="pl" /><span>Appointment</span>
                        </Third>   
                        </Box>
                        </Reg> 
                        <Head>
                         Choose Vaccine Center
                        </Head>
                        <State>
                        <h6>State</h6> <h6>District</h6> <h6>Pincode</h6>
                        </State>
                        <Adhar>
                        <One>
                         <select>
                             {
                                list.map((lis)=>
                                <option key={lis.state_id}>{lis.state_name}</option> 
                                )
                             }
                        </select>
                          </One>
                          <Two>
                        <select>
                             {
                                district.map((dis)=>      
                                <option key={dis.district_id}>{dis.district_name}</option> 
                                )
                             }
                        </select>
                          </Two>
                          <Olx>
                        <select>
                             {
                                pincode.map((pin)=>
                                <option key={pin.center_id}>{pin.pincode}</option> 
                                )
                             }
                        </select>
                        </Olx>
                        </Adhar>
                        <Passport>
                        <Pass>
                        <h6>18+</h6>
                        </Pass>
                        <Personal>
                        <h6>45+</h6>
                        </Personal>
                        <Ppp>
                        <h6>Free</h6>
                        </Ppp>
                        <Kkk>
                        <h6>Paid</h6>
                        </Kkk>
                        <Paid>
                        <h6>First Dose</h6>
                        </Paid>
                        </Passport>
                        <Details>
                        <Tab>
                        <h6>NO</h6>  <h6>Name</h6>  <h6>Covaxin</h6>  <h6>Covishield</h6>  <h6>Action</h6>
                        </Tab>      
                        </Details>
                        <Table>
                                
                                {
                                   pincode.map((pin)=>
                                <tr class="tab">
                                <td width="100%"></td>
                                <td  width="100%"> {pin.name}</td>
                                <td  width="100%" class="abc">{pin.lat}</td>
                                <td  width="100%"clas>{pin.long}</td>
                                <td width="100%">Select</td>
                                </tr>  
                                   )         
                                }
                        </Table>
                        <Button>
                            Next
                        </Button>
                        </Main>
                        </Container>
                 )}
                 
export default Process

const Container = styled.div`
        background-color:white;
       
`
const Reg = styled.div`
        background-color:#D7E9F6;
        height:250px;
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
        margin-left:200px;
        margin-top:10px;
        

`
const One = styled.div`
       
        select{

            width : 280px;
            height : 50px;
            border-radius : 15px;
            margin-right : 50px;
            font-weight:600;  
            font-size:15px;  
            color:#6B6B6B;

        }
     
       
`
const Two =  styled.div`
        select{

            width : 280px;
            height : 50px;
            border-radius : 15px;
            margin-right : 50px;
            font-weight:600;  
            font-size:15px;  
            color:#6B6B6B;
        };
`
const Olx = styled.div`
        select{

            width : 280px;
            height : 50px;
            border-radius : 15px;
            font-weight:600;  
            font-size:15px;  
            color:#6B6B6B;
        };

`
const Passport =  styled.div`
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-right:200px;
        margin-left:200px;
        margin-top:50px;

`
const Pass = styled.div`
        width: 180px;
        padding: 10px;
        height : 80px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;
        display:flex;
        aligh-items:center;
        justify-content:center;
        h6{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
            }
            outline: 1px solid #40B7FA;

`
const Personal = styled.div`
        width: 180px;
        padding: 10px;
        height : 80px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;    
        h6{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
            }
        margin-left:50px;
        display:flex;
        align-items:center;     
        justify-content:center;

`
const Ppp = styled.div`
        width: 180px;
        padding: 10px;
        height : 80px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;    
        h6{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
            }
        margin-left:50px;
        display:flex;
        align-items:center;     
        justify-content:center;
        outline: 1px solid #40B7FA;

`
const Kkk = styled.div`
        width: 180px;
        padding: 10px;
        height : 80px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;    
        h6{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
            }
        margin-left:50px;
        display:flex;
        align-items:center;     
        justify-content:center;
`
const Paid = styled.div`
        width: 180px;
        padding: 10px;
        height : 80px;
        border-radius: 30px;     
        box-shadow: 0px 0px 5px 5px #EBEBEB;    
        h6{
                font-weight:600;  
                font-size:15px;  
                color:#6B6B6B;
            }
        margin-left:50px;
        align-text:center;
        justify-content:center;
        display:flex;
        outline: 1px solid #40B7FA;

`
const Details = styled.div`
        margin-left:200px;
        margin-right:200px;
        margin-top:100px;

`
const Adetails = styled.div`
        display:flex;
        margin-left: 400px;
        font-weight:normal;
        font-size:20px;
        color: #6B6B6B;
        margin-top:50px;
`
const Tab = styled.div`
        background-color:#DCDCDC;
        margin-top:10px;
        height:50px;
        border-radius:20px;
        display :flex;
        justify-content:space-between;
        align-items:center;
        padding-right:80px;
        padding-left:80px;
        h6{
            font-weight:600;  
            font-size:15px;  
            color:#6B6B6B;
        }

`
const Button = styled.button`
        margin-left: 400px;
        width : 500px;
        height: 45px;
        margin-top:20px;
        border-radius:15px;
        background-color:#009FF9;
        color:white;
        background-size:cover;       
         :focus {
                outline: none;
            }      
         border-color: inherit;
        -webkit-box-shadow: none;
        box-shadow: none;
        decoration:none; 
        border: 1px solid;   

`
const Table = styled.table`
        height: 250px;
        width:950px;
        background-color:white;
        margin-top:20px;
        margin-left:200px;
        margin-right:200px;
        border-radius:20px;
        box-shadow: 0px 0px 5px 5px #EBEBEB;    
        border-bottom: 1px solid #DDD;
        overflow: hidden;
       
      }
        td,tr{
            font-weight:600;  
            font-size:15px;  
            color:#6B6B6B;
            display: flex;
            justify-content:space-between;
            align-items:center;
            padding: 12px 12px 12px 12px;
            padding-left:40px;
          }

          tr{
               
                border-bottom: 1px solid #D0DFFF;

          }
          
      
`   
const Abc = styled.div`

        padding-right:10px;
        padding-left:10px;
        display:flex;
        justify-content:space-between;

`
const Def = styled.div`
        padding-right:10px;
        padding-left:10px;
        display:flex;
        justify-content:space-between;

`
const Hij = styled.div`
        padding-right:10px;
        padding-left:10px;
        display:flex;
        justify-content:space-between;
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
const State = styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-right:350px;
        margin-left:350px;
        h6{
        font-weight:600;  
        font-size:15px;  
        color:#009FF9;
}
`