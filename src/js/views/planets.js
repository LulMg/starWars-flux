import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className=" container jumbotdon text-light">
			
			<h1>{store.planets[params.theid].name}</h1>
				<div className="d-flex">
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${Number(params.theid)+1}.jpg`}/>
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
						<th>Name</th>
						<th>Diameter</th>
						<th>Climate</th>
						<th>Surface water</th>
						<th>Population</th>
						<th>Orbital period</th>
					</tr>
						<tr>
						<td>{store.planets[params.theid].name}</td>
						<td>{store.planets[params.theid].diameter}</td>
						<td>{store.planets[params.theid].climate}</td>
						<td>{store.planets[params.theid].surface_water}</td>
						<td>{store.planets[params.theid].population}</td>
						<td>{store.planets[params.theid].orbital_period}</td>
					</tr>
				</table>
			</div>
			<div className="text-center">
				<Link to="/demo">
				<span className="btn bg-gradient text-light border" href="#" role="button">
					Back
				</span>
			</Link>
			</div>
			
		</div>
	);
};
