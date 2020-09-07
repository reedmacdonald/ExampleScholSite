import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';
import Header from './header';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { Link } from 'gatsby';

const Form = props => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      {!showModal ? (
        <>
          <input
            style={{
              width: '45%',
              height: '40px',
              borderRadius: '30px',
              border: '1px solid black',
              backgroundColor: 'skyblue',
              padding: '5px',
              marginLeft: '2.5%',
              marginRight: '2.5%',
            }}
            placeholder="First Name"
          />
          <input
            style={{
              width: '45%',
              height: '40px',
              borderRadius: '30px',
              border: '1px solid black',
              backgroundColor: 'skyblue',
              padding: '5px',
              marginLeft: '2.5%',
              marginRight: '2.5%',
            }}
            placeholder="Last Name"
          />
          <input
            style={{
              width: '45%',
              height: '40px',
              borderRadius: '30px',
              border: '1px solid black',
              backgroundColor: 'skyblue',
              padding: '5px',
              marginLeft: '2.5%',
              marginRight: '2.5%',
            }}
            type="number"
            placeholder="Age"
          />
          <input
            style={{
              width: '45%',
              height: '40px',
              borderRadius: '30px',
              border: '1px solid black',
              backgroundColor: 'skyblue',
              padding: '5px',
              marginLeft: '2.5%',
              marginRight: '2.5%',
            }}
            placeholder="Location"
          />
          <select
            style={{
              width: '45%',
              height: '40px',
              borderRadius: '30px',
              border: '1px solid black',
              backgroundColor: 'skyblue',
              padding: '5px',
              marginLeft: '2.5%',
              marginRight: '2.5%',
            }}
            name="School Year"
          >
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
            position: 'fixed',
            top: 30,
            display: 'grid',
            height: '600px',
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
              If you won anything you'll be contacted. Otherwise, feel free to
              poke around the place.
            </h5>
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <Link to="/">Home</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
