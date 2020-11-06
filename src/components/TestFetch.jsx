import React from 'react'
import { useFetch } from '../hooks/useFetch';

export const TestFetch = () => {
    const url = 'https://official-joke-api.appspot.com/random_joke'
    const { data, loading, error } = useFetch(url);
    const {id, type, setup, punchline} = !!data && data;
    
    console.log(data);
    var i = 0;
    return (
        <div> 
            {
                !!data &&
                Object.keys(data).map(function(key, index) {
                    console.log(i++);
                })
            }
        </div>
    )
}
