import React, { useEffect, useState } from 'react'
import { Wrapper, WrapperTitle, WrapperTitleDiv} from '../../styles/City.styles'
import {  getCitys } from '../../services/CitysApi';
import CityItem from './CityItem';
import {useHistory} from 'react-router-dom';
const Citys = () => {
    
    const history = useHistory();
    const [citys, setCitys] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
       const init = async () => {
           try {
               const {data} = await getCitys();
               setCitys(data);
           } catch(err) {
               setError(err) 
           }      
       };
       init();
    }, [])

    const handleShowDetailClick = (name) =>  {(
     history.push(`/city/${name}`)
    )};
   
    return (
        <>
        <WrapperTitleDiv>
        <WrapperTitle >Şehirler</WrapperTitle>
        </WrapperTitleDiv>
      
       <Wrapper>   
           { citys.map((item)=> (
               <CityItem
               data-testId ="contact-name"
               key={item.id}
               name={item.name}
               onShowDetail={handleShowDetailClick}
               />
           ))
           }
       </Wrapper>
       </>
    )
}

export default Citys
