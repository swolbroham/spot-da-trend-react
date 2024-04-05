import { useEffect, useState } from 'react';
import axios from 'axios';



export default function CurrentUser() {
    const [authorized, setAuthorized] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        if (!userProfile) {
            const fetchProfile = async () => {
                await axios.get('/curr_user',
                    {
                        baseURL: 'http://localhost:5000',
                        withCredentials: true,
                        xsrfCookieName: 'session',
                        'Access-Control-Allow-Origin': '*',
                    })
                    .then(response => setUserProfile(response.data))
                    .then(data => console.log(data))
                    .catch(e => console.log(e));
                return;
            };
        }
        fetchProfile();
    }, []);

    return (
        <>
            <div>
                {!userProfile ?
                    (<h1>Hello {userProfile.display_name}</h1>
                        ,
                        <h2>Followers {userProfile.followers.total}</h2>) :
                    <h1>hello</h1>}
            </div>
        </>
    );
}
