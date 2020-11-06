import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


//const url = 'https://official-joke-api.appspot.com/random_joke'
//const { data, loading, error } = useFetch(url);
//const {id, type, setup, punchline} = !!data && data;
//export const Field = ({ name, label, validate }) => {
export const InputForm = () => {
    const url = 'https://fep6etdgec.execute-api.us-east-1.amazonaws.com/Prod/v1/users/asd'
    const { data, loading, error } = useFetch(url);
    
    const [clientId, setClientId] = useState('')
    
    useEffect(() => {
        console.log('hola')
        
    }, [data])

    useEffect(() => {
        console.log(clientId)
        
    }, [clientId])

    //if (loading) return <div><h1>consultando datos</h1></div>
    if (error) return <div><h1>Error con los datos</h1></div>
    
    return (
        <div className="container mt-5">
            {loading ? ( 
                <div className="alert alert-primary text-center" role="alert">
                    Cargando...
                </div>
            ) : (  
                <form>
                    <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Client Id</span>
                            </div>
                            <input name="clientId" type="text" className="form-control" placeholder="client1" aria-label="Username" aria-describedby="basic-addon1" onChange={(e) => setClientId(e.target.value)}/>
                    </div>
                    {data.messages.map((message, index) =>
                        <div key={index} className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">{message.label}</span>
                            </div>
                            <input name={message.name} type="text" className="form-control" placeholder={message.name} aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                    )}
                <Button type="primary">
                    <Link to={`/layout/${clientId}`}>Sign in</Link>
                </Button>
                </form>
            )}
        </div>
        
    )
};
