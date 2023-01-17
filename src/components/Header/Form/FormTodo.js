import React from 'react'
import {Formik,Field,Form} from "formik"
import validations from './Validations';

function FormTodo() {
  return (
 
    <Formik
    
    initialValues={{

        text:"",

    }}
    
    onSubmit={(values) => {
     
        alert(JSON.stringify(values, null, 2));
  
        console.log(values.text)


      }}

      validationSchema={validations}

    >

    <Form>

    <Field className="new-todo" placeholder="What needs to be done?" autoFocus  id="text" name="text"/>

    </Form>

    </Formik>
  )
}

export default FormTodo