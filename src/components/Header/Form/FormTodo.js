import React from 'react'
import {Formik,Field,Form} from "formik"
import validations from './Validations';
import { UseTodo } from '../../../Context/Context';

function FormTodo() {

  const{addTodo}=UseTodo();
  return (
 
    <Formik
    
    initialValues={{

        text:"",

    }}
    
    onSubmit={(values,bag) => {
     
 
     
        addTodo(values.text)
        bag.resetForm();


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