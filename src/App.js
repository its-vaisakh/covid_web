import './App.css';
import Header from './Header.js'
import Registration from './Registration';
import Process from './Process';
import {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components';

function App() {

  const [list,getList] = useState([]);
  const [district,setDistrict] = useState([]);
  const [pincode,setPincode] = useState([]);

              useEffect(() => {
                axios.get('https://cdndemo-api.co-vin.in/api/v2/admin/location/states').then(response => {
                  getList(response.data.states)
                })
                axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/17').then(response => {
                  setDistrict(response.data.districts)
                })
                axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=302&date=14-09-2021  ').then(response => {
                  setPincode(response.data.centers)
                })

              }, []);

          return (
            <div className="App">
            <Header/>
            <Registration/>
            <Process list={list} district={district} pincode={pincode}/>
            </div> 
          );
        }

export default App;

