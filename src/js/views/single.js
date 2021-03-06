import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className=" container jumbotdon text-light">
			
			<h1>{store.characters[params.theid]?.name}</h1>
				<div className="d-flex">
					<div>
						//PREGUNTAR
						<img src={`https://starwars-visualguide.com/assets/img/characters/${Number(params.theid)+1}.jpg`}/>
					</div>
					<div className="p-3">
						<p>Sed ut perspiciatis unde omnis iste natus error sit 
						voluptatem accusantium doloremque laudantium, totam rem 
						aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
						architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
						voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
						sed quia consequuntur magni dolores eos qui ratione voluptatem 
						sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum 
						quia dolor sit amet, consectetur, adipisci velit, sed quia non 
						numquam eius modi tempora incidunt ut labore et dolore magnam 
						aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
						nostdum exercitationem ullam corporis suscipit laboriosam, 
						nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
						iure reprehenderit qui in ea voluptate velit esse quam nihil 
						molestiae consequatur, vel illum qui dolorem eum fugiat quo 
						voluptas nulla pariatur?</p>
					</div>
				</div>
				

			<hr className="my-4" />

			<div>
				<table className="table table-striped text-center text-light">
					<tr className="ms-4">
						<th>Height</th>
						<th>Mass</th>
						<th>Hair color</th>
						<th>Eye color</th>
						<th>Birth year</th>
						<th>Gender</th>
					</tr>
						<tr>
						<td>{store.characters[params.theid].height}</td>
						<td>{store.characters[params.theid].mass}</td>
						<td>{store.characters[params.theid].hair_color}</td>
						<td>{store.characters[params.theid].eye_color}</td>
						<td>{store.characters[params.theid].birth_year}</td>
						<td>{store.characters[params.theid].gender}</td>
					</tr>
				</table>
			</div>
			<div className="text-center">
				<Link to="/demo">
				<span className="btn btn-gradient text-light border" href="#" role="button">
					Back
				</span>
			</Link>
			</div>
			
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
