import { useCookies } from 'react-cookie';

import { CurrentUser } from './UserProfile';




    // const handleUserAuth = () => {
    //     cookies.authorized ? <h1>Welcome</h1> :
    //         <a href="http://localhost:5000">
    //             <button className="rounded-3xl bg-slate-500 p-5 text-black">
    //                 Log in to Spotify
    //             </button>
    //         </a>
    // }


export default function LoginAccess() {
    const [cookies, setCookies] = useCookies(['user'])

    return (
        <div>
            {cookies.authorized ? <h1 className='size-10'>Welcome to the Party</h1> :
                <button className="rounded-3xl bg-slate-500 p-5 text-black">
                    Log in to Spotify
                </button>
            }
        </div>
    )
};
