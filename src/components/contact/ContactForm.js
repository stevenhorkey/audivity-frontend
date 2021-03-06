import React from 'react'
import { Field, reduxForm } from 'redux-form'

//Add url validation  => Required && look for numbers, date...
const validate = values => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Name Required'
  }
  if (!values.message) {
    // errors.message = 'Message Required'
  }
  if (!values.email) errors.email = 'Email Required'
  else if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
    errors.email = 'Hmm, doesn’t look like you’ve submitted a correct email. Try again.'
  }

  return errors
}

const warn = values => {
  const warnings = {}
  return warnings
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <input {...input} placeholder={label} type={type} className="form-control border-top-0 border-left-0 border-right-0" />
    <div className="error">{touched && ((error && <div className="label"><i className="ion-alert"> </i> &nbsp; {error}</div>) || (warning && <div>{warning}</div>))}</div>
  </div>

)

const textareaField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <textarea rows="3" placeholder="Hello, Audivity!" className="form-control border-top-0 border-left-0 border-right-0" ></textarea>
    <div className="error">{touched && ((error && <div className="label"><i className="ion-alert"> </i> &nbsp; {error}</div>) || (warning && <div>{warning}</div>))}
  </div></div>

)

let EmailForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (

    <form onSubmit={handleSubmit}>

      <div className="form-group mb-5 mt-4">
        <label htmlFor="nameInput">Your <strong>name.</strong></label>
        <Field component={renderField} type="text" label="Jon Dough" name="name" />
      </div>

      <div className="form-group mb-5">
        <label htmlFor="emailInput">Your <strong>email address</strong>.</label>
        <Field component={renderField} type="email" label="jon@dough.com" name="email" aria-describedby="emailHelp" />
      </div>

      <div className="form-group mb-5">
        <label htmlFor="emailInput">Your <strong>message</strong>.</label>
        <Field name="message" component={textareaField} />
      </div>

      <button type="submit" className="btn btn-primary text-uppercase px-3 pt-2">Send &nbsp;<i className="ion-android-arrow-forward"> </i></button>
    </form>

  )
}

EmailForm = reduxForm({
  // a unique name for the form
  form: 'email',
  validate
})(EmailForm)

export default EmailForm