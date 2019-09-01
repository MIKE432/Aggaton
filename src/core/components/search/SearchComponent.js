import React from 'react';
import { Form, Field, Formik } from 'formik';

const SearchComponent = (props) => (
    <Formik  initialValues = {{
        search: ''
    }}
    render = {
        (formstate) => (
            <Form className = 'search-wrapper border-radius-l' >
                <Field className = 'border-radius-m search-input' name = 'text'></Field>
                <i className="fas fa-search"></i>
            </Form>
        )
        
    }
    />
)

export default SearchComponent;