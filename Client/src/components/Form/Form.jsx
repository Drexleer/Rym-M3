import { useState } from "react"
import validation from "./validation";
import {Formstyles, Heading, Field, InputField, ButtonGroup, Button, Container, Advertencia} from "./styledForm";

export default function Form ({login}) {

    const [userData, setUserData] = useState({
        email:'',
        password:''
    });

    const [errors, setErrors] = useState({})

    const handleChange =  (event) => {
        let property = event.target.name
        let value = event.target.value

        setErrors(validation({...userData, [property]:value}))
        setUserData({...userData, [property]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    return (
        <Container>
        <Formstyles onSubmit={handleSubmit}>
            <Heading>LOGIN</Heading>
            <Field>
            <InputField type="text" name="email" placeholder="Email" onChange={handleChange} value={userData.email}/>
            </Field>
            {errors.email && (<Advertencia>{errors.email}</Advertencia>)}
            <Field>
            <InputField type="password" name="password" placeholder="Password" onChange={handleChange} value={userData.password}/>
            </Field>
            {errors.password && (<Advertencia>{errors.password}</Advertencia>)}
            <ButtonGroup>
            <Button>SUBMIT</Button>
            </ButtonGroup>
            </Formstyles>
    </Container>
)}