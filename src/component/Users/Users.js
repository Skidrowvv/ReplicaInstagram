import React from 'react';
import User from '../User/User.js';
import {Link} from 'react-router-dom'

function Users() {
	return(
		<div className='right'>
		<Link to='/profile' >	<User
				src='http://www.alfapumps.com/quotation/dist/img/user.png'
				alt='Profile'
				name='User'
				/>
		</Link>
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