import React from 'react';
import { Formik, Form, Field } from 'formik';

export default class Contact extends React.Component {
    render() {
        return <div><h1>Test</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ errors, touched, isSubmitting }) => (
                    <Form>
                        <Field type="email" name="email" />
                        {errors.email && touched.email && errors.email}
                        <Field type="password" name="password" />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>Send</button>
                    </Form>
                )}
            </Formik>
        </div>;
    }

}