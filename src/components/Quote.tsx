import * as React from 'react';

interface IQuoteProps {
    quote: string;
    name: string;
    position: string;
    company: string;
}

const Quote = (props: IQuoteProps) => {
    const { quote, name, position, company } = props;
    return (
        <div>
            <p>{`"${quote}"`}</p>
            <div>
                <p>{name}</p>
                <p>{position}</p>
                <p>{company}</p>
            </div>
        </div>
    )
}

export default Quote;