
import styled from 'styled-components';

export const Home = styled.div`
background-image: url("https://www.gmdergi.com/wp-content/uploads/2016/03/29112ad57253426a90ef13e8f4604a1c.jpg");
background-color: #cccccc;
height: 600px;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
padding-top:60px;
`;

export const HomeText = styled.div`
    background-color: #556B2F;
    opacity:0.9;
    text-align: center;
    position: absolute;
    padding-top:50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    height:300px;
    width:300px;
    
    /*aşağıdaki kodu sadece dört kenarı oval yapmak için kullanıyoruz*/
    -moz-border-radius: 16px;
    -webkit-border-radius: 16px;
     border-radius: 16px;
  
     /*kutumuzun arka kısmına hafiften bir gölge atıyoruz.*/
    -moz-box-shadow: 0px 0px 7px #000000;
    -webkit-box-shadow: 0px 0px 7px #000000;
    box-shadow: 0px 0px 7px #000000;
    `;

    export const Contact = styled.div`
    opacity:0.9;
    text-align: center;
    position: absolute;
    top: 4%;
    left: 86%;
    transform: translate(-50%, -50%);
     width:50px;
    `;

 export const TextH1 = styled.h1`
  color:write;
`;

export const TextH3 = styled.h3`
color:write;
`;

export const TextH4 = styled.h4`
color:write;
`;
