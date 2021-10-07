import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm('xwkazlnv');
  if (state.succeeded) {
    return <h1 className='fs-3 font-monospace text-white'>Thanks for contact!</h1>;
  }

  return (
    <div id='divContact'>
      <div id='redes'>
        <h3 className='text'>
          <u>Find me on</u>
        </h3>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/devwelljr'
        >
          <img
            src='https://image.flaticon.com/icons/png/512/25/25231.png'
            alt='Logo do GitHub'
            width='50px'
            className="redesLinks"
          />
        </a>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/wellington-gregorio-jr/'
          className="redesLinks"
        >
          <img
            src='https://cdn.icon-icons.com/icons2/2699/PNG/512/linkedin_logo_icon_170234.png'
            alt='Logo do Linkdin'
            width='50px'
            className="redesLinks"
          />
        </a>
      </div>
      <div id='formEmail'>
        <form id='formR' onSubmit={handleSubmit}>
          <h3 className='fs-3 font-monospace text-white'>Contact by email</h3>
          <div className='form-group'>
            <input
              id='email'
              type='email'
              name='email'
              placeholder='email@example.com'
              className='form-control'
            />
            <ValidationError
              prefix='Email'
              field='email'
              errors={state.errors}
            />
            <textarea
              id='message'
              name='message'
              className='form-control'
              placeholder='Your message here'
              maxLength='500'
            />
            <ValidationError
              prefix='Message'
              field='message'
              errors={state.errors}
            />
          </div>
          <button
            type='submit'
            id='btSubmit'
            className='btn btn-primary'
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
