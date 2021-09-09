import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchQuotes, getRandomQuote} from '../actions/index.js';

const QuoteContainer = (props) => {

    useEffect(() => {
        props.fetchQuotes();
    },[])

    const handleClick = () => {
        props.getRandomQuote();
    }

    return(
        <div className='page'>
            <h2> Need an inspirational quote? </h2>
            <button onClick={handleClick}>Click Here!</button>

            {(props.quote!=={}) && <div className='quote_box'>
                <p>{props.quote.text}</p>
                <h4>{(props.quote.author===null) ? "anonymous": props.quote.author}</h4>
            </div>}

        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        quotes: state.quotes,
        quote: state.quote
    }
}

export default connect(mapStateToProps, {fetchQuotes, getRandomQuote})(QuoteContainer);