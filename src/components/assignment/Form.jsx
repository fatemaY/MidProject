import { Button, TextField } from '@mui/material';
import React from 'react'
import './assignment.css'
import axios from "../../Data/axios"



export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formErrors: {
                Name: true,
                Phone: true,
                Email: true,
                Subject: true,
                Message: true
            },
            formIsValid: true,
            user: {
                type:"FREE",
                description: '',
                name: "",
                phone: "",
                email: "",
                subject: "",
                message: "",
            },
            mailStatus: false,
        }
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        let { formIsValid, formErrors, mailStatus } = this.state;
        let {type,name,phone, email, subject, message } = this.state.user;

        // const submitEmail = async (data) => {
        //     try{
        //     await axios.post('/studenForm', data);
        //     // setData([...data, response.data]);
        //     // console.log(response)
        //     // fetchData()
        //     // setNewItem('')
        //   } 
        //   catch (error) {
        //     console.log(error);
        //   }
        // }

        //     console.log(data)
        //     await fetch("https://tutoring-server.onrender.com/send", {
        //         method: "POST",
        //         body: JSON.stringify(data),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     })
        // };

        const handleSubmit = async e => {
            e.preventDefault();
            let formErrors = {};
            let formIsValid = true;
            if (formIsValid) {
                if (!name) {
                    formIsValid = false;
                    formErrors.Name = false;
                } else {
                    formErrors.Name = true;
                }
                if (!phone) {
                    formIsValid = false;
                    formErrors.Phone = false;
                } else {
                    formErrors.Phone = true;
                }
                // Email
                if (!email) {
                    formIsValid = false
                    formErrors.Email = false
                } else {
                    var mailPatter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                    if (!mailPatter.test(email)) {
                        formIsValid = false
                        formErrors.Email = false
                    } else {
                        formErrors.Email = true
                    }
                }
                // Subject
                if (!subject) {
                    formIsValid = false;
                    formErrors.Subject = false;
                } else {
                    formErrors.Subject = true;
                }

                if (!message) {
                    formIsValid = false;
                    formErrors.Message = false;
                } else {
                    formErrors.Message = true;
                }
            }
            this.setState({ formErrors: formErrors, formIsValid: formIsValid })

            // Main Email Sending
            if (formIsValid) {
                try {
                    let data = {
                        
                        name,
                        email,
                        subject,
                        message,
                        type
                    }
                    const response = await axios.post('/studenForm', data);
                    // submitEmail(data)
                    console.log(response)
                    console.log("Email sent")
                    this.setState({ mailStatus: true })

                } 
                catch (error) {
                    console.log(error);
                }
            }
        };


        return (
            <div className='formContainer' id='asForm'>
                <div className="form-wrapper">
                    <p> Book A Free Assessment Today </p>
                    {
                        !mailStatus ?
                            <form>
                                <div>
                                    <TextField
                                        label='Name'
                                        fullWidth
                                        values={name}
                                        onChange={(e) => {
                                            name = e.target.value;
                                        }}
                                        variant='outlined'
                                        error={!formErrors.Name}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label='Phone'
                                        fullWidth
                                        variant='outlined'
                                        error={!formErrors.Phone}
                                        values={phone}
                                        onChange={(e) => {
                                            phone = e.target.value;
                                        }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label='Email'
                                        fullWidth
                                        variant='outlined'
                                        error={!formErrors.Email}
                                        values={email}
                                        onChange={(e) => {
                                            email = e.target.value;
                                        }}
                                    />
                                </div>
                              
                                <div>
                                    <TextField
                                        label='Subject'
                                        fullWidth
                                        variant='outlined'
                                        error={!formErrors.Subject}
                                        values={subject}
                                        onChange={(e) => {
                                            subject = e.target.value;
                                        }}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        label='Message'
                                        fullWidth
                                        variant='outlined'
                                        error={!formErrors.Message}
                                        values={message}
                                        onChange={(e) => {
                                            message = e.target.value;
                                        }}
                                    />
                                </div>
                                <Button
                                    variant='contained'
                                    onClick={handleSubmit}
                                > Submit </Button>
                            </form>
                            :
                            <div>
                                <div class="success-checkmark">
                                    <div class="check-icon">
                                        <span class="icon-line line-tip"></span>
                                        <span class="icon-line line-long"></span>
                                        <div class="icon-circle"></div>
                                        <div class="icon-fix"></div>
                                    </div>
                                </div>
                                <div className="mailStatus">
                                    <p className='formSubtitle'> Mail Sent </p>
                                    <p> Thank you for your visit. We will respond to you soon.</p>
                                    <p> If you faced any issue, please try again or try sending the mail manually </p>
                                    <p> <a href='mailto:Fatemayasen2@gmail.com'> Click here </a> </p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}