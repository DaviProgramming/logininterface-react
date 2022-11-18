import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Form = () => {

    const [typeForm, setTypeForm] = useState("signin");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [errorName, setErrorName] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, SetErrorEmail] = useState(false);


    const handler = {
        email(value: any) {
            if (value == null || value.length <= 4) {
                SetErrorEmail(true);
            }
        },
        name(value: any) {
            if (value == null || value.length <= 4) {
                setErrorName(true);
            }
            else {
                setErrorName(false);
            }
        },
        password(value: any) {
            if (value == null || value.length <= 4) {
                setErrorPassword(true);
            }
            else {
                setErrorPassword(false);
            }
        }
    }

    window.addEventListener("beforeunload", () => setTypeForm("signin"));

    function testeFunction(evento: any, form: string) {
        let searchActivedText = document.querySelectorAll(".actived");

        searchActivedText.forEach(actived => {
            actived.classList.remove("actived");
        })

        let input = evento.target;

        input.classList.add("actived")

        setTypeForm(form)

        if (form == "singin") {
            setTypeForm("signin")
        }

        if (form == "signup") {
            setTypeForm("signup");
        }

        console.log(typeForm);
    }

    return (

        <Container>
            <form className='form'>
                <div className="choiceSing">
                    <h3 className="text-choice actived" onClick={(evento) => { testeFunction(evento, "singin") }}>sign in</h3>
                    <h3 className="text-choice" onClick={(evento) => { testeFunction(evento, "singup") }}>sign up</h3>
                </div>

                <div className="inputs buttons">

                    {typeForm == "signin" ? (
                        <>
                            <div className="form-control">
                                <input type="text" name="username" id="username" placeholder='USERNAME' onChange={(e) => handler.name(e.target.value)} />
                                {errorName == false ? (
                                    <>

                                    </>
                                ) : (
                                    <>
                                        <small>
                                            <i className="fa-solid fa-circle-exclamation"></i> Digite um username valido
                                        </small>
                                    </>
                                )}
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" id="password" placeholder='PASSWORD' onChange={(e) => handler.password(e.target.value)} />
                                {errorPassword == false ? (
                                    <>

                                    </>
                                ) : (
                                    <>
                                        <small>
                                            <i className="fa-solid fa-circle-exclamation"></i> Digite uma senha valida
                                        </small>
                                    </>
                                )}
                            </div>
                            <div className="checkbox-input">
                                <input type="checkbox" name="sign" id="" /><small>Keep me sign in</small>
                            </div>

                            <Button className='button'>SIGN IN</Button>

                            <a href=""><small>FORGOT PASSWORD?</small></a>
                        </>
                    ) : (
                        <>
                            <div className="form-control">
                                <input type="text" name="username" id="username" placeholder='USERNAME' onChange={(e) => handler.name(e.target.value)} required />
                                {errorName == false ? (
                                    <>

                                    </>
                                ) : (
                                    <>
                                        <small>
                                            <i className="fa-solid fa-circle-exclamation"></i> Digite um username valido
                                        </small>
                                    </>
                                )}
                            </div>
                            <div className="form-control">
                                <input type="password" name="password" id="password" placeholder='PASSWORD' onChange={(e) => handler.password(e.target.value)} required />
                                {errorPassword == false ? (
                                    <>

                                    </>
                                ) : (
                                    <>
                                        <small>
                                            <i className="fa-solid fa-circle-exclamation"></i> Digite uma senha valida
                                        </small>
                                    </>
                                )}
                            </div>

                            <div className="form-control">
                                <input type="email" name="email" id="email" placeholder='EMAIL' required onChange={(e) => handler.email(e.target.value)} />
                                {errorPassword == false ? (
                                    <>

                                    </>
                                ) : (
                                    <>
                                        <small>
                                            <i className="fa-solid fa-circle-exclamation"></i> Digite um email valido
                                        </small>
                                    </>
                                )}
                            </div>


                            <Button type='submit' className='button'>SIGN UP</Button>

                            <a href="" onClick={() => { setTypeForm("signin") }}><small>ALREADY HAVE A ACCOUNT?</small></a>
                        </>
                    )}

                </div>




            </form>
        </Container >

    )
}

export default Form;