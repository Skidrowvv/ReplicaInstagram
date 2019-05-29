import React,{Component} from 'react';
import style from './Like.module.css';
import Comment from '../../../img/Comment.png';
import Likes from '../../../img/Heart.jpg'


let count = 0;

function Counter(){
return document.getElementById('counts').innerHTML = 'Like:' + count++;
}



export default class Like extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }



	render(){
		return(
	<div>
		<ul className={style.like_wrap}>
			<li><button onClick={Counter}><img src={Likes}/></button> <h5 id='counts'>Like:{count}</h5> </li>
			<li><img src={Comment}/><h5 id='counts'>Comments:0</h5> </li>
		</ul><br/>
			<div className={style.comments}><input type='text'/><button>Send</button></div>

	</div>
		)
	}

}

