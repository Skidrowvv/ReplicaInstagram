import React from 'react';
import Posts from '../Posts/Posts.js';
import Users from '../Users/Users.js'

function Feeds() {
	return(
		<div className='container feed'>

			<Posts/>
			<Users/>

		</div>
	)
}

export default Feeds;