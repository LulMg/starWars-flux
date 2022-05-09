import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
const {store, actions}= useContext(Context);
	return (
		<nav className="navbar navbar mb-3 border-bottom sticky-top" id="nav">
			<div className="container">
				<Link to="/">
					<div>
						<div><img id="logo" src= 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png'/></div>
					</div>	
			
				</Link>

				<div className="btn-group">
					<button id="btnGroupDrop1" type="button" className="btn bg-dark btn-gradient dropdown-toggle px-4 text-light" data-bs-toggle="dropdown" aria-expanded="false">
					Favorites 
					<span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    					{store.favoritesP.length}
    				<span class="visually-hidden">unread messages</span>
  					</span>
					</button>
					<ul className="dropdown-menu bg-dark text-light" aria-labelledby="btnGroupDrop1">
						{store.favoritesP.length==0? 'No favorites!': store.favoritesP.map((name, i)=>{
							return <li className="mx-0 ms-2" key={i}>{name} <button className="btn" onClick={()=>{actions.delete(name)}}>❌</button></li>
						})}	
					</ul>
				</div>
			</div>
			
		</nav>
	);
};
