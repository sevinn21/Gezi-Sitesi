import styled from 'styled-components'

export const Wrapper = styled.div`
background-image: url(../image/gezi.jpg);
background-color: #cccccc;
height: 600px;
background-repeat: no-repeat;
background-size: cover;
position: relative;
padding-top:60px;
`;


export const Card = styled.div`
    background-color: #556B2F;
    opacity:0.9;
    text-align: center;
    position: absolute;
    padding-top:70px;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -50%);
    color: white;
    height:500px;
    width:700px;
    
    /*aşağıdaki kodu sadece dört kenarı oval yapmak için kullanıyoruz*/
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
     border-radius: 16px;
    
     /*kutumuzun arka kısmına hafiften bir gölge atıyoruz.*/
    -moz-box-shadow: 0px 0px 7px #000000;
    -webkit-box-shadow: 0px 0px 7px #000000;
    box-shadow: 0px 0px 7px #000000;
    `;

export const CardTitle = styled.div`
     width:700px;
    `;

export const Form = styled.form`
    width:700px;
    padding-top:30px;
   `;
  export const Input = styled.input`
   width:400px;
   font-size: 18px;
   padding: 10px;
   margin: 10px;
   background: papayawhip;
   border: none;
   border-radius: 3px;
   ::placeholder {
     color: palevioletred;
   }
 `;

 export const Button = styled.button`
background: #729e85;
background: -webkit-gradient(linear, 0 0, 0 bottom, from(#729e85), to(#486d5c));
background: -moz-linear-gradient(#729e85, #486d5c);
background: linear-gradient(#729e85, #486d5c);
border: solid 1px #236036;
border-bottom: solid 3px #225f33;
box-shadow: inset 0 0 0 1px #90a59c;
color: #fff;
text-shadow: 0 1px 0 #225f33;
padding-top:10px;
padding-bottom:10px;
margin-top:20px;
margin-left:50px;
margin-right:50px;
width:300px;
-moz-border-radius: 16px;
    -webkit-border-radius: 16px;
     border-radius: 16px;
`;
 