import * as yup from 'yup';

const validations = yup.object().shape({
  text: yup.string().required(),

  })

  export default validations;