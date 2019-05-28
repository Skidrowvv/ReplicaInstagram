import React,{Component} from 'react';
import User from '../../User/User.js'

export default class Post extends Component{
	render(){
		return(
			<div className='post'>
				<User
				src='https://look.com.ua/pic/201310/2560x1440/look.com.ua-80297.jpg'
				alt='Profile'
				name='Dodge__Officale'
				/>
					<img src={this.props.src} alt={this.props.alt} />
				<div className='post__name'>
					some account
				</div>

				<div className='post_descr'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, atque.
			</div>
		</div>
		)
	}
}