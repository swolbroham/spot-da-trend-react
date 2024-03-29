import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import axios from 'axios';



function SpotRequest() {
    const [ authUrl, setAuthUrl ] = useState("")
    const [ auth, setAuth ] = useState([])
    const [user, setUser] = useState(false)
    


    const getUser = async () => {
        return axios.get('http://localhost:5000')
            .then((response) => setAuthUrl(response.data["oAuthHref"]))
            .catch((error) => console.log(error))
            .finally(() => console.log('Client info imported'))
    }

    useEffect(() => {
        Promise.all([getUser()]);
    }, [])
    
    return (
        <>
        <div>
                <h1>Sign In</h1>
                <a href={authUrl}>
                <button className="rounded-3xl bg-slate-500 p-5 text-black">Log in to Spotify</button>
                </a>
            
        </div>
        </>

);
}
export default SpotRequest;
