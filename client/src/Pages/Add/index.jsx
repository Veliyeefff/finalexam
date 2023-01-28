import React from 'react'
import { Helmet } from 'react-helmet'
import { Formik, Form, Field } from 'formik'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'
import './Add.scss'
import * as Yup from 'yup'
function Index() {

    const AddSchema = Yup.object().shape({
        icon: Yup.string().required("Icon is required"),
        title: Yup.string().min(3, "Title minimum").required("title is required"),
        info: Yup.string().min(10, "Info minimum").required("Info is required"),
    })
    return (
        <div id='add'>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <Formik
                initialValues={
                    {
                        icon: "",
                        title: "",
                        info: ""
                    }
                }
                validationSchema={AddSchema}
                onSubmit={(values, { resetForm }) => {
                    axios.post("http://localhost:4000/users", values)
                    resetForm()
                    console.log(values);
                }}
            >
                {({ values, errors }) => (
                    <Form>
                        <Field as={TextField} id="filled-basic" label="Icon" variant="filled" name="icon" />
                        {errors.icon ? <p style={{ color: "red" }}>{errors.icon}</p> : null}
                        <Field as={TextField} id="filled-basic" label="Title" variant="filled" name="title" />
                        {errors.title ? <p style={{ color: "red" }}>{errors.title}</p> : null}
                        <Field as={TextField} id="filled-basic" label="Info" variant="filled" name="info" />
                        {errors.info ? <p style={{ color: "red" }}>{errors.info}</p> : null}
                        <Button type="submit" variant="contained">Add user</Button>
                    </Form>
                )}
            </Formik>
        </div >
    )
}

export default Index