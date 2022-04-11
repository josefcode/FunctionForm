

import Checkbox from "@mui/material/Checkbox";
import Radio from '@mui/material/Radio';
import { 

  Form, 
  Label, 
  Input, 
  LabelChoose,
  FieledSet,
  Error,
  Submit,
  Preview,
  Div,
  ListCheckBox,
  Flex,
  List } from './styledcomponent/styled'

import { useState } from "react";
// import User from './User';
function App() {
  
  // create an object to recieve data from client
   const [dataform, setDataform] = useState({
    fullName: "",
    quest: "",
    velocity: "",
    WiskersOnKittens: "",
    WarmWoolenMittens: "",
    CrispAppleStrudels: "",
    turingTest: "",
  });
  // create an object to recieve errors 
  const [formError, setFormErrors] = useState({})
  //create a boolean 
  const [isSubmit, setIsSubmit] = useState(false)

  // function to handel change of the inputs value.
  function handelChange(event) {

    const {name, value} = event.target
    setDataform((prev) => {
     
      return {
        ...prev,
        [name] : value
      };
    });
  }
 
   //function to sumbit our form
  function handelSubmit(event) {
    event.preventDefault();
    //call our validation function and set the value to error form
    setFormErrors(validateForm(dataform))
    //when is all true automaticly  isSubmit turn to true.
    setIsSubmit(true)

    localStorage.setItem("user", JSON.stringify(dataform))
  }
  // Validation function that recieve the dataform object value.
  function validateForm(dataform){
      const error = {}
      if(dataform.fullName === ""){
        error.fullName = "Name is required"
      }
      if(dataform.quest === ""){
        error.quest = "Quest is required"
      }
      if(dataform.velocity === ""){
        error.velocity = "Velocity is required"
      }
     
      if(dataform.turingTest === ""){
          error.turingTest = "one option is required"
      }
      return error; 
  }


  return (
    <div>
      
      {/* <pre>{JSON.stringify(dataform)}</pre> */}
        <Form onSubmit={handelSubmit} >
          {Object.keys(formError).length === 0 && isSubmit? alert('Form filled with success'): ""}
         {/* text inputs */}
          <FieledSet>
            <legend>Answer me these questions three</legend>
              <List>
              <Label>What is your name </Label>
              <Input type="text" 
                     name="fullName" 
                     onChange={handelChange} />
             </List>
             
              <Error>{formError.fullName}</Error>
              <List>
              <Label>What is your quest</Label>
              <Input type="text" 
                     name="quest" 
                     onChange={handelChange} />
              </List>
              <Error>{formError.quest}</Error>
              <List>
              <Label>What is the airspeed velocity of an unladen swallow</Label>
              <Input type="text" 
                     name="velocity" 
                     onChange={handelChange} />
              </List>
              <Error>{formError.velocity}</Error>
          </FieledSet>
           {/* checkbox inputs */}
          
          <FieledSet>
            <legend>A few of my favorite things</legend>
              <ListCheckBox>
              <LabelChoose> Wiskers on Kittens </LabelChoose>
              <Checkbox name="WiskersOnKittens" 
              value="Wiskers on kittens"
              checked={dataform.WiskersOnKittens === "Wiskers on kittens"}
              onChange={handelChange}  
              size="small" /> 
              </ListCheckBox>
              
              <ListCheckBox>
              <LabelChoose> Warm woolen mittens  </LabelChoose>
              <Checkbox  name="WarmWoolenMittens" 
              value="Warm woolen mittens"
              checked={dataform.WarmWoolenMittens === "Warm woolen mittens"} 
              onChange={handelChange}  
              size="small"/>
              </ListCheckBox>
             
              <ListCheckBox>
              <LabelChoose>Crisp apple strudels</LabelChoose>
              <Checkbox  name="CrispAppleStrudels" 
              value="Crisp apple strudels"
              checked={dataform.CrispAppleStrudels === "Crisp apple strudels"} 
              onChange={handelChange}  
              size="small"/>
              </ListCheckBox>
          </FieledSet>
           {/* Radio inputs */}

          <FieledSet>
            <legend>Turing Test</legend>
              <ListCheckBox>
              <LabelChoose>I am a robot</LabelChoose>
              <Radio 
              name="turingTest" 
              value="I am a robot" 
              onChange={handelChange} 
              checked={dataform.turingTest === "I am a robot"} size="small"/>
              </ListCheckBox>
              <ListCheckBox>

              <LabelChoose> I am not a robot </LabelChoose>
              <Radio
              name="turingTest" 
              value="I am not a robot" 
              onChange={handelChange} 
              checked={dataform.turingTest === "I am not a robot"}
              size="small"/>
              </ListCheckBox>
              <Error>{formError.turingTest}</Error>
          </FieledSet>
         
         
         <Submit type="submit"> Submit </Submit>
        </Form>
        {/* Preview the data of the form */}
        <Div>
          <h3>Data preview</h3>
         <Flex>
            <Preview>full name: {dataform.fullName}</Preview>
            <Preview>Quest: {dataform.quest}</Preview>
            <Preview>Velocity: {dataform.velocity}</Preview>
        </Flex>
        
            <Preview>favorite list: {dataform.WiskersOnKittens}  {dataform.WarmWoolenMittens}  {dataform.CrispAppleStrudels}
            </Preview>

            <Preview>Turing Test: {dataform.turingTest}</Preview>
        </Div>

    </div>
  );
}

export default App;
