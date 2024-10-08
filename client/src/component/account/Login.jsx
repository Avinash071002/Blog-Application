import React from 'react'
import {Box, TextField, Button, styled, Typography} from '@mui/material';
import { useState } from 'react';




const Component = styled(Box)`
 width :400px;
 margin :auto;
 box-shadow: 5px 2px 5px 2px rgb(0 0 0/0.6);
`
const Image = styled('img')({
    width : 100,
    margin: 'auto',
    display : 'flex',
    padding: '50px 0 0'
    
});

const Wrapper = styled(Box)`
padding : 25px 35px; 
display: flex;
flex: 1;
flex-direction: column;
& >  div, & > button, & > p{
 margin-top: 20px;
 }
`
const LoginButton = styled(Button)`
text-transform :none;
background: #FB641B;
color: #fff;
border-radius : 2px;
height: 48px;
`
const SignupButton = styled(Button)`
text-transform :none;
background: #fff;
color: #2874f0;
border-radius : 2px;
height: 48px;
box-shadow: 0 2px 4px 0 rgb( 0 0 0/ 20%);
`
const Text = styled(Typography)`
  color: #878787;
`

const SignupInitialValue = {
    name :'',
    email:'',
    password :''

};

const Login = () => {

    const imgURL ='https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

const [account, toggleaccount] = useState('login');
const [signup, setSignup ] = useState('SignupInitialValue');
const toggleSignup = () =>{
    toggleaccount('signup');
}
const toggleLogin = () =>{
    toggleaccount('login');
}

const onInputChange = (e) =>{
    setSignup({ ...signup, [e.target.name] :e.target.value});
}






  return (
    <Component>
        <Box>
        <Image src= {imgURL}  alt = "login" />
        {
            account === 'login' ?
        
        <Wrapper>
   <TextField variant="standard" label ="Enter username or email" />

   <TextField variant="standard" label = "Enter password" />
   <LoginButton variant="contained">Login</LoginButton>
   <Text style={{ textAlign: 'center' }}>OR</Text>
   <SignupButton variant="text" onClick={ () => toggleSignup()}>Create an account</SignupButton>
   </Wrapper>
   :
   <Wrapper>
   <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label ="Enter Email" />
   <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label ="Enter Username" />
   <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label = "Enter password" />
   <SignupButton variant="contained">Login</SignupButton>
   <Text style={{ textAlign: 'center' }}>OR</Text>
   <LoginButton variant="text" onClick={ () => toggleLogin()}>Already have an Account</LoginButton>
   </Wrapper>
}
   </Box>
    </Component>
  )
}

export default Login;
