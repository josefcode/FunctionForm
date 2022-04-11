
import styled from 'styled-components'


export const Form = styled.form`
    max-width: 600px;
    background: aliceblue;
    color:  #072448;
    padding: 20px 10px;
  `;

export const Label = styled.label`
    /* display: block; */
     @media (min-width: 0px) and (max-width:600px){
      display: block;
    }
   
  `;

export const Input = styled.input`
 
    border-radius: 4px;
    border: 2px solid #dbe0e5;
    width: 120px;
    margin-left: 60px;
    &:focus {
      outline: none;
      border: 2px solid #015fff;
    }
      &[type="text"] {
      padding: 4px;
    }
    @media (min-width: 0px) and (max-width:600px){
      width: 100%;
      margin: 5px 0;
      
    }
  `;
export const FieledSet = styled.fieldset`
    border-radius: 4px;
    border-color: #dbe0e5;
    margin: 8px 0;
    padding: 16px;
    
`
 // list for text inputs
export const List = styled.li`
    display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 8px 0;
     @media (min-width: 0px) and (max-width:600px){
      display: flex;
      flex-direction: column;
      padding-right: 15px;
    }
`
// list for checkbox and radio inputs
export const ListCheckBox = styled.li`
display: flex;
    list-style: none;
    justify-content: space-between;
    margin: 8px 0;
`
// label for checkbox and radio inputs
export const LabelChoose = styled(Label)`
       margin:5px 0;
       display: flex;
       padding: 0;
       `

export const Submit = styled.button`
     padding-inline: 16px;
     background-color:  #015fff;
     height: 32px;
     border-radius: 4px;
     border:transparent;
     color: white;
     font-weight: 700;
     margin-top: 20px;
     &:hover{
       background-color: #156bff;
     }
  `

  // to display the error message
export const Error = styled.p`
      color: red;
      font-size: 12px;
      padding: 0;
      margin: 0;
`

export const Div = styled.div`
      max-width: 600px;
      background: #bbfaca;
      padding: 20px 10px;
`
export const Flex = styled.div`
      display: flex;
      gap: 30px;
`
export const Preview = styled(Error)`
     color: black;
     font-size: 16px;

`