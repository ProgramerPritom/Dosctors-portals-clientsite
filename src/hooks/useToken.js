import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        
        const email = user?.user?.email;
        const currentEmail = {email: email};
        if (email) {
            fetch(`https://whispering-sierra-92266.herokuapp.com/user/${email}`,{
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(currentEmail)
            })
            .then(res => res.json())
            .then(data => {
                // console.log( 'data inside useToken : ', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
            })
        }
    },[user]);
    return [token];
};

export default useToken;