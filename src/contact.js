import React from 'react';
import { Formik, Form, Field } from 'formik';

export default class Contact extends React.Component {
    render() {
        return <div><br/><br/><h1>CONTACT</h1>
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
                        <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
                            <div className="col-10">
                                <Field type="email" name="email" className="form-control" />
                                {errors.email && touched.email && errors.email}
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="example-text-input" className="col-2 col-form-label">Text</label>
                            <div className="col-10">
                                <Field type="password" name="password" className="form-control" />
                                {errors.password && touched.password && errors.password}
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="offset-sm-2 col-sm-10">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Send</button>
                            </div>
                        </div>

                    </Form>
                )}
            </Formik>
        </div>;
    }

}