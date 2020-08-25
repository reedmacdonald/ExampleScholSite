import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';

const Form = props => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {!showModal ? (
        <>
          <input style={{ width: '50%' }} placeholder="first_name" />
          <input style={{ width: '50%' }} placeholder="last_name" />
          <input style={{ width: '50%' }} type="number" placeholder="age" />
          <input style={{ width: '50%' }} placeholder="location" />
          <select style={{ width: '50%' }} name="School Year">
            <option value="freshman">Freshman</option>
            <option value="sophmore">Sophmore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
          </select>
          <br />
          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              style={{
                color: 'white',
                backgroundColor: 'red',
                borderRadius: '20px',
                //width: '300px',
                padding: '20px 30px',
              }}
            >
              Submit Application
            </button>
          </div>
        </>
      ) : (
        <div
          style={{
            display: 'grid',
            height: '700px',
            backgroundColor: 'skyBlue',
            placeItems: 'center',
          }}
        >
          <div>
            <h4 style={{ textAlign: 'center', padding: '10px' }}>
              {' '}
              Thank you for applying to the {props.title}
            </h4>
            <h5 style={{ textAlign: 'center', padding: '10px' }}>
              If you won anything you'll be contacted. Else, feel free to poke
              around the place.
            </h5>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
