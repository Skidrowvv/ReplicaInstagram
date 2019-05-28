import React  from 'react';
import User from '../User/User.js';
import Palette from './Palette/Palette.js'


const Profile = ()=>{
	return(
		<div className='container profile'>
			
			<User
			src='http://a2goos.com/data_images/models/dodge-durango/dodge-durango-06.jpg'
			alt='Durango'
			name='Some Durango'
			/>
			<Palette/>

		</div>
	)
}

export default Profile;