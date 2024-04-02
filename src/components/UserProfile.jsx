import { useEffect, useState } from 'react';
import axios from 'axios';



export default function CurrentUser () {
    const [authorized, setAuthorized] = useState(false);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data: response } = await axios.get('/curr_user',
                    {
                        baseURL: 'http://localhost:5000',
                        withCredentials: true,
                        xsrfCookieName: 'session',
                        'Access-Control-Allow-Origin': '*',
                    });
                setUserProfile(response);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchProfile()
    }, []);
    const handleFetch = () => {
        return fetchProfile()
    }

    return (
        <div>{userProfile.display_name}</div>
        // <div>
        //     {userProfile.map((item) => (
        //         <div key={item.id}>
        //             <h1>{item.title}</h1>
        //             <p>{item.description}</p>
        //         </div>
        //     ))}
        // </div>
    );
}
