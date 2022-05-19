import React, { useState } from 'react';
import { Button, Collapse, makeStyles, TextField } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import userService from '../../services/user-service';
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
    formContainer: {
        paddingTop: '80px',
        width: '300px',
        margin: '0 auto',
    },
    form: {
        '& .MuiTextField-root, & .MuiButton-root': {
            margin: theme.spacing(1),
        },
    },
    alertContainer: {
        width: '100%',
        margin: theme.spacing(1),
    },
}));

export default function Register() {
    const classes = useStyles();
    const [alertMessage, setAlertMessage] = useState('');
    const [severity, setSeverity] = useState('error');

    const { 
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: '',
            first_name: '',
            last_name: '',
            password: ''
        }
    });

    // handle form submission
    const onSubmit = (user) => {
        userService.register(user).then(response => {
            setSeverity('success');
            setAlertMessage('Registration Successful', response.data);
        }).catch(error => {
            setSeverity('error');
            setAlertMessage('Submission error', error);
        });
    };

    return (
        <>
            <div className={classes.formContainer}>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
                    <TextField
                        {...register("username", {
                            required: true,
                            minLength: { value: 4, message: 'Username min length is 4'}
                        })}
                        id='username'
                        label='Username'
                        variant='filled'
                        required
                        fullWidth
                        error={errors.username ? true : false}
                    />

                    <TextField
                        {...register("first_name", {
                            required: true,
                            minLength: { value: 4, message: 'First name min length is 4'}
                        })}
                        id='first_name'
                        label='First Name'
                        variant='filled'
                        required
                        fullWidth
                        error={errors.first_name ? true : false}
                    />

                    <TextField
                        {...register("last_name", {
                            required: true,
                            minLength: { value: 4, message: 'Last name min length is 4'}
                        })}
                        id='last_name'
                        label='Last Name'
                        variant='filled'
                        required
                        fullWidth
                        error={errors.last_name ? true : false}
                    />

                    <TextField
                        {...register("password", {
                            required: true,
                            minLength: { value: 4, message: 'Password min length is 4'}
                        })}
                        id='password'
                        label='Password'
                        variant='filled'
                        type='password'
                        required
                        fullWidth
                        error={errors.password ? true : false}
                    />                    
                    
                    <Button
                        disabled={false}
                        variant='contained'
                        size='large'
                        color='primary'
                        fullWidth
                        type='submit'
                    >
                        Register
                    </Button>

                    <div className={classes.alertContainer}>
                        <Collapse in={(alertMessage.length > 0) || (Object.keys(errors).length > 0)}>
                            <Alert severity={severity}>
                                <div>{alertMessage}</div>
                                <div>{errors.username?.message}</div>
                                <div>{errors.first_name?.message}</div>
                                <div>{errors.last_name?.message}</div>
                                <div>{errors.password?.message}</div>
                            </Alert>
                        </Collapse>
                    </div>
                </form>
            </div>
        </>
    );
}
