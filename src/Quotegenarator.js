import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Quote = () => {
    const [quote, setQuote] = useState('');
    const [author,setAuthor] =useState('')
    const fetchQuote = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/quotes/random');
            setQuote(response.data.quote);
            setAuthor(response.data.author);
        } catch (error) {
            console.error('Error fetching the quote:', error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    const shareQuote = () => {
        const text = `"${quote}" - ${author}`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className='quote-container' style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Quotes Genarator</h1>
            <h3 className='quotetext'>"{quote}"</h3>
            <h4 className='quoteauthor'>"-{author}"</h4>
            <button className='btn' onClick={fetchQuote} style={{ padding: '10px 20px', fontSize: '16px' }}>
            <i class="fa-solid fa-rotate-right"></i>
            </button>

            <button className='btn' onClick={shareQuote} style={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}>
            <i class="fa-solid fa-share"></i>
            </button>
        </div>
    );
};

export default Quote;
