import React from 'react';
import { Form, Field, Formik } from 'formik';

const SearchComponent = (props) => (
    <Formik  initialValues = {{
        search: ''
    }}
    render = {
        (formstate) => (
            <Form className = 'search-wrapper m-s' >
                <Field className = 'search-input icon' name = 'text'></Field>
                <div className='search-icon'>
                    <i className="fas fa-search"></i>
                </div>
            </Form>
        )
        
    }
    />
)

export default SearchComponent;