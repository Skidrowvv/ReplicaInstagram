import React  from 'react';
import User from '../User/User.js';
import Palette from './Palette/Palette.js'


const Profile = ()=>{
	return(
		<div className='container profile'>
			
			<User
			src='http://podpress.ru/images/plymouth_roadrunner-1970.jpg'
			alt='Plymoth'
			name='Plymoth'
			/>
			<Palette/>

		</div>
	)
}

export default Profile;