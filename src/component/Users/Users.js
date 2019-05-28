import React from 'react';
import User from '../User/User.js'

function Users() {
	return(
		<div className='right'>
			<User
				src='https://look.com.ua/pic/201310/2560x1440/look.com.ua-80297.jpg'
				alt='Profile'
				name='Dodge__Officale'
				/>
			<div className='users__block'>
				<User
					src='https://www.conceptcarz.com/images/Chrysler/chrysler_TownNCountry_2008_011.jpg'
					alt='Profile'
					name='Chrylser__Officale'
					min
				/>
				<User
					src='http://wall.bestcarmag.com/sites/default/files/2015-jeep-cherokee-wallpaper-hd-58492-1472260.jpg'
					alt='Profile'
					name='Jeep__Officale'
					min
				/>
				<User
					src='https://look.com.ua/pic/201310/2560x1440/look.com.ua-80297.jpg'
					alt='Profile'
					name='Dodge__Officale'
					min
				/>
			</div>
		</div>
	)
}

export default Users