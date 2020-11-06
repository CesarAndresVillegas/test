import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

export const TestComponentParam = ({clientId}) => {
    let url = `https://y4c2pahw01.execute-api.us-east-1.amazonaws.com/default/qx_test_dynamo?screen=user_information_${clientId}`;
    const { data, loading, error } = useFetch(url);
    
    //const {client_view_id, client_name} = !!data && data;

    //console.log(client_view_id, client_name)
    
    useEffect(() => {
        if(data) { 
            const {client_view_id, form_attributes, form_name, client_name} = data;
            console.log(client_view_id, form_attributes, form_name, client_name)
        }
    }, [data])
    
    console.log(clientId);
    return (
        <div>
            <h1>hola amiguitosssssss</h1>
            <h2>{clientId}</h2>

            

        </div>
    )
}