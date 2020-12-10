import React, {useState} from 'react'
import { Card, Wrapper,CardTitle,Form, Input ,Button} from '../../styles/Contact.styles'
import {postInformations} from '../../services/ContactApi';

const Contact = () => {
    const [informations, setInformations] = useState({
        name:null,
        surname:null,
        phone:null,
        email:null,
        city:null
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        var data = {
          name: informations.name,
          surname:informations.surname,
          phone: informations.phone,
          email: informations.email,
          city: informations.city,

        };
      
        try {
           await postInformations(data);
           alert("Veri Eklendi");
        }
         catch(e) {
            console.log(e);
         }
 
      }

    return (
        <>
       <Wrapper>
       <Card>
           <CardTitle>Bizimle geziye var mısın?</CardTitle><br />
           <CardTitle>Bulunduğun şehirde ki gezi turlarını öğrenmek için bilgilerini doldur seninle iletişime geçelim.</CardTitle>
           <Form onSubmit={handleSubmit}>
           <Input placeholder="Ad"
            role='input'
            value={informations.name}
            onChange={(event) => {
                setInformations({
                  ...informations,
                  name : event.target.value,
                });}} />
           <Input placeholder="Soyad"
            value={informations.surname}
            onChange={(event) => {
                setInformations({
                  ...informations,
                  surname: event.target.value,
                });}} />
           <Input placeholder="Numara"
            value={informations.phone}
            onChange={(event) => {
                setInformations({
                  ...informations,
                  phone: event.target.value,
                });}} />
           <Input placeholder="E-mail"
            value={informations.email}
            onChange={(event) => {
                setInformations({
                  ...informations,
                  email: event.target.value,
                });}} />
           <Input placeholder="Yaşadığın Şehir"
            value={informations.city}
            onChange={(event) => {
                setInformations({
                  ...informations,
                  city: event.target.value,
                });}} />
           <Button>Gönder</Button>
           </Form>
       </Card>
       </Wrapper>

  
       </>
    )
}

export default Contact
