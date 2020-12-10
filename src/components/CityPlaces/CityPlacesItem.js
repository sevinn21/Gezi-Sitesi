import React from 'react'
import { CardContent, CardWrapper,Image, WrapperTitle,WrapperDetail } from '../../styles/CityPlaces.styles';

const CityPlacesItem = ({item,onShowDetail}) => {
    return (
        <CardWrapper
       onClick={() => {
        onShowDetail && onShowDetail(item.place);
      }}>
        <Image src={`/image/${item.image}`} />
       <CardContent>
       <WrapperTitle>{item.place}</WrapperTitle>
       <WrapperDetail data-testid="item">{item.detail}</WrapperDetail>
       </CardContent> 
       </CardWrapper>
    )
}

export default CityPlacesItem
