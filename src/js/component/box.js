import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export function Box(props){
	const {store, actions}= useContext(Context);

	return(
		<div key={props.Key}>
			<div className="text-light mx-2 bg-gradient" style={{width: "26rem"}}>
				<img src={props.source} className="card-img-top" style={{height:'25rem'}}
					onError={(e)=>{
						e.target.src='http://media.idownloadblog.com/wp-content/uploads/2015/04/wallpaper-darth-vader-art-star-wars-illust-9-wallpaper.jpg'
					}}					
				/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">{props.info}</p>
				<div className="d-flex justify-content-between">
					<div>
						<Link to={props.layout+props.i}>
						<a href={props.url} className="btn btn-outline-secondary">Learn More</a>
						</Link>
					</div>
					<div>
						<button onClick={()=> actions.favorites(props.name)} type="button" className="btn btn-outline-warning"><i className="far fa-heart"></i></button>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}
