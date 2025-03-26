import { useState } from 'react'

const RequestServices = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Your request has been submitted!')
  }

  return (
    <div className='requestservices-container'>
      <button className=' requestservices-title'>
        Request Service Today
      </button>
      <form className='requestservices-form'>
        <div className='requestservices-grid'>
          <div className='requestservices-form-group'>
            <label className='requestservices-label'>Your name</label>
            <input type='text' className='requestservices-input' />
          </div>
          <div className='requestservices-form-group'>
            <label className='requestservices-label'>Your email</label>
            <input type='email' className='requestservices-input' />
          </div>
          <div className='requestservices-form-group'>
            <label className='requestservices-label'>Phone</label>
            <input type='text' className='requestservices-input' />
          </div>
          <div className='requestservices-form-group'>
            <label className='requestservices-label'>Date</label>
            <input type='date' className='requestservices-input' />
          </div>

          <div className='requestservices-input-button-container'>
            <button type='submit' className='requestservices-button btn'>
              Get Service
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}


export default RequestServices
