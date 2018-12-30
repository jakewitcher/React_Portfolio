import * as React from 'react';
import Title from './Title';
import Social from './Social';

const Contact = () => {
    return (
        <div>
            <Title title='Get in Touch' />
            <Social social='Twitter' />
            <Social social='GitHub' />
            <Social social='Blog' />
            <Social social='Email' />
        </div>
    )
}

export default Contact;