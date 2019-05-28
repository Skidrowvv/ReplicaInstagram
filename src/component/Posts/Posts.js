import React,{Component} from 'react';
import User from '../User/User.js'
import InstaService from '../../services/instaService.js';
import ErrorMessage from '../ErrorMessage/ErrorMessage.js'

export default class Posts extends Component{

InstaService = new InstaService();
state = {
	posts:[],
	error:false
}


componentDidMount(){
	this.updatePosts();
}

updatePosts(){
	this.InstaService.getAllPosts()
	.then(this.onPostsLoaded)
	.catch(this.onError)
}



onPostsLoaded = (posts) => {
	this.setState({
		posts,
		error:false
	})
}

renderItems(arr){
	return arr.map(item => {
		const {name,altname,photo,src,alt,descr,id} = item;

		return(
				<div key={id} className='post'>
				<User
				src={photo}
				alt={alt}
				name={name}
				/>
					<img src={src} alt={alt} />
				<div className='post__name'>
					{name}
				</div>

				<div className='post_descr'>
				{descr}
			</div>
		</div>
		)
	})
}


	render(){

const {error,posts} = this.state;
	if(error){
		return <ErrorMessage/>
	}

const items = this.renderItems(posts)

		return(
	<div className='left'>
			{items}
	</div>
		)
	}
}