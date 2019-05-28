import React,{Component} from 'react';
import logo from '../../img/surf-30-137086.png';
import newsProfile from '../../img/1024x1024sr.jpg'
import {Link} from 'react-router-dom';
import style from  './Header.module.css';
	
	{/*https://cdn.playbuzz.com/cdn/3605b14c-acc5-4d09-820c-5aea010515f8/2caf1610-c525-4378-85f5-d6a7bc0b59c9.png*/}
export default class Header extends Component{
	render(){
		return(
		<header>
			<div className='container h-flex'>
				<Link to='/' >
					<h1><img alt='logo' src={logo} className={style.logo}/>|
					webSurf</h1>
				</Link>
	<li>
		<input type='text' className={style.search}/>
		<span>search</span>
	</li>	
		<nav className='links'>
			<ul>
				<li><Link to='/' ><img className={style.newsProfile} src={newsProfile}/>News</Link ></li>
				<li><Link to='/profile'><img className={style.home} src='https://cdn.iconscout.com/icon/premium/png-512-thumb/surfboard-7-298683.png'/></Link ></li>
			</ul>
		</nav>
			</div>
		</header>			
		)
	}
}