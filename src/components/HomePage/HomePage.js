import React from 'react'
import { useHistory } from 'react-router';
import {  Contact, Home, HomeText, TextH1, TextH3, TextH4 } from '../../styles/HomePage.styles'
import Button from '../Button/Button';


const HomePage = () => {

    const history = useHistory();

    const handleShowDetailClick = () =>  {(
        history.push('/citys')
       )};

    const contactShowDetailClick = () =>  {(
        history.push('/contact')
       )};
    
    return (
     <Home>
       <Contact>
       <Button onShowDetail={contactShowDetailClick}
       title="İletişim" />
       </Contact>

       <HomeText>
       <TextH1>Hoşgeldin</TextH1>
       <TextH3>Geziye Hazırmısın?</TextH3>
       <TextH4>Bakalım hangi şehir daha güzel</TextH4>
       <Button onShowDetail={handleShowDetailClick}
       title="Haydi Başlayalım" />
       </HomeText>
     </Home>

    )
}

export default HomePage
