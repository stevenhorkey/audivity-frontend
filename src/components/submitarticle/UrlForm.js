import React from 'react'
import { Field, reduxForm } from 'redux-form'

  //Add url validation  => Required && look for numbers, date...
  const validate = values => {
    const errors = {}
    if (!values.url) {
      errors.url = 'URL Required'
    } else if (/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(values.url)) {
      errors.url = 'Hmm, doesn’t look like you’ve submitted a link to a specific blog posts. Try again.'
    }
 
    return errors
  }

  const warn = values => {
    const warnings = {}
    if (values.age < 19) {
      warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
  }

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div>
        <input {...input} placeholder={label} type={type} className="form-control px-4 pt-2  card-shadow"  />
        <div className="error">{touched && ((error && <div className="label"><i className="ion-alert"> </i> &nbsp; {error}</div>) || (warning && <div>{warning}</div>))}</div>
      </div>
      // <div>  </div> 
      
  )

let UrlForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form className= "mt-3" onSubmit={handleSubmit}>
    <div className="form-group mr-1 input-container url">
      <Field component={renderField} type="text" label="Your article full url (e.g., http://myblogsite.com/02/01/2018/my-best-article)" name="url"/>
    </div>
    <button className="btn btn-primary px-4 pt-2 text-uppercase card-shadow">Submit &nbsp;<i className="ion-android-arrow-forward"> </i></button> 
    </form>
  )
}

UrlForm = reduxForm({
  // a unique name for the form
  form: 'url',
  validate
})(UrlForm)

export default UrlForm