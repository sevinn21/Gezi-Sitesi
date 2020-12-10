import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { getCityPlaces } from '../../services/CityPlacesApi';
import { Wrapper, WrapperTitle, WrapperTitleDiv } from '../../styles/CityPlaces.styles';
import CityPlacesItem from './CityPlacesItem';

const CityPlaces = (props) => {

  // const {name} = useParams();
   const name = props.match.params.cityName;
   const history = useHistory();
   const [places, setPlaces] = useState([]);
   const [error, setError] = useState('');

   useEffect(() => {
      const init = async () => {
          try {
              const {data} = await getCityPlaces();
              setPlaces(data);
          } catch(err) {
              setError(err)
          }      
      };
      init();
   }, [])

   const handleShowDetailClick = (placeName) =>  {(
    history.push(`/place/${placeName}`)
   )};
    return (
        <>
        <WrapperTitleDiv>
        <WrapperTitle>{name} Gezilecek Yerler</WrapperTitle>
        </WrapperTitleDiv>
        
       <Wrapper data-testid="item">
         {           
           places.map((item) => (
              name==item.cityName ?
               <CityPlacesItem 
               key={item.id}
               item={item}
               onShowDetail={handleShowDetailClick}
               /> :null
           )) 
         }
       </Wrapper>
       </>
    )
}

export default CityPlaces
