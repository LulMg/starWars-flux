import React, {useEffect, useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import {Box} from "../component/box";

export const Demo = () => {

	const {store, actions}= useContext(Context)
return	<div className="container">
		<div>
			<div className="border-bottom m-1 mb-4 text-center boxs">
				<h1 className="text-light p-4 display-4"> CHARACTERS</h1>
			</div>
			
				<div className="overflow d-flex">
				{
				store.characters?.map((obj, i)=>{
					return <div key={i}>
					<Box 
						Key= {i}
						name= {obj.name}
						info= {<ul>
								<li><strong>Gender:</strong> {obj.gender}</li>
								<li><strong>Birth year:</strong> {obj.birth_year}</li>
								<li><strong>Mass:</strong> {obj.mass}</li>
							</ul>}
						source= {'https://starwars-visualguide.com/assets/img/characters/'+(i+1)+'.jpg'}
						i={i}
						layout= {'/single/'}
					/>	
				</div>
				})
			}
			</div>
			
		</div>

		<div className="my-4">
			<div className="border-bottom mb-4 m-1 mb-4 text-center boxs">
				<h1 className="text-light p-4 display-4"> PLANETS</h1>
			</div>
			
			<div className="d-flex overflow">
			{
				store.planets?.map((obj, i)=>{
				return <div key={i}> <Box
					Key={i}
					name={obj.name}
					info= {<ul>
						<li><strong>Terrain: </strong>{obj.terrain}</li>
						<li><strong>Gravity: </strong>{obj.gravity}</li>
					</ul>}
					source= {'https://starwars-visualguide.com/assets/img/planets/'+(i+2)+'.jpg'}
					i= {i}
					layout= {'/planets/'}
				/>
				</div>
				})
			}
			</div>
		</div>
	</div>
};


