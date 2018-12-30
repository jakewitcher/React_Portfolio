import * as React from 'react';
import Title from './Title';
import Image from './Image';

const Home = () => (
    <div>
        <Title
            title='<Jake Witcher />'
            subTitle='Front-End Developer'
        />
        <Image
            src="/images/headshot.jpg"
            alt="Headshot of Jake Witcher"
        />
    </div>
)

export default Home;