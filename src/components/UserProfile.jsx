import { useEffect, useState } from 'react';
import axios from 'axios';
import useSWR from 'swr';


export default function CurrentUser () {
	const [authorized, setAuthorized] = useState(false);
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
			const fetchProfile = async() => {
					await axios.get('/curr_user',
					{
						baseURL: 'http://localhost:5000',
						withCredentials: true,
						xsrfCookieName: 'session',
						'Access-Control-Allow-Origin': '*',
					})
						.then(response => setUserProfile(response.data))
						.then(data => console.log(data))
						.catch(e => console.log(e))
				return
			}
		if (!userProfile) { fetchProfile() }
	}, []);

	return (
		<>
			<div className='flex w-full flex-row gap-2'>
                <div>
                    <img className='h-fit w-fit rounded-full' src={userProfile && userProfile.images[0].url}></img>
                </div>
                <div className='w-full py-4'>
                    <div className='h-full align-middle text-2xl font-bold tracking-tighter'>{userProfile && userProfile.display_name}</div>
                    {/* <div className='text-2xl font-bold'>{userProfile && userProfile.followers.total}</div> */}
                </div>
			</div>
		</>
	)
}
