import styled from 'styled-components';

export const WrapperTitleDiv = styled.div`
padding-left:560px;
padding-top: 10px;
padding-bottom:10px;
background-color:#663333;

`;
export const WrapperTitle = styled.h3`
     font-style:italic;
     font-size: 20px;
     color:white;
`;
export const WrapperDetail = styled.h4`
     font-style:italic;
     font-size: 15px;
     color:black;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 15px;
  background-color:	#666666;
`;

export const CardWrapper = styled.div`
  width: 250px;
  min-height:350px;
  border: 1px solid #d3d3d3;
  margin-bottom: 20px;
  box-shadow: 0 0 5px 5px #d3d3d3;
  cursor: pointer;
  outline: none;
  &:hover {
    border: 1px solid #a00b42;
  }
`;

export const CardContent = styled.div`
  padding: 0.25em 1em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp:5; /* kaç satırla sınırlayacağımızı yazıyoruz */
  -webkit-box-orient: vertical;
`; 

export const Image = styled.img`
  width: 235px;
  height: 150px;
  padding: 10px 5px 0;
`; 