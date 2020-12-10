import React, { useEffect, useState } from 'react'
import { getCityPlaces } from '../../services/CityPlacesApi';
import { Content, ContentTitle, Image, Wrapper } from '../../styles/CityPlacesDetail.styles'

const CityPlacesDetail = (props) => {
    //const {name} = useParams(); 
    const name = props.match.params.placeName;
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
 
    useEffect(() => {
       const init = async () => {
           try {
               const {data} = await getCityPlaces();
               setPosts(data);
           } catch(err) {
               setError(err)
           }      
       };
       init();
    }, [])
    return (
        <>
        { posts.map((item) => (
         name==item.place ?
        <>
        <Wrapper>
        <Image src={`/image/${item.image}`} />
        </Wrapper>
        <ContentTitle data-testid="item">{item.place}</ContentTitle>
        <Content>{item.detail}</Content>
        </> : null
        ))   
        }
       </>
    )
}

export default CityPlacesDetail
