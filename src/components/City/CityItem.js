import React from 'react'
import { CardContent, CardTitle, CardWrapper } from '../../styles/City.styles'

const CityItem = ({name,onShowDetail}) => {
    return (
       <CardWrapper
       onClick={() => {
        onShowDetail && onShowDetail(name);
      }}>
       <CardContent >
       <CardTitle>{name}</CardTitle> 
       </CardContent>
       </CardWrapper>
    )
}

export default CityItem
