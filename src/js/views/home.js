import "../../styles/home.css";
import {Box} from "../component/box";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner" style={{height: '45rem'}}>
				<div className="carousel-item active">
				<img src="https://www.elheraldo.co/sites/default/files/articulo/2019/05/07/tnt-star-warsblog.jpg" className="d-block w-100"/>
				<div className="carousel-caption d-none d-md-block">
				</div>
				</div>
				<div className="carousel-item">
				<img src="https://p4.wallpaperbetter.com/wallpaper/106/341/199/star-wars-battlefront-yoda-8k-4k-wallpaper-preview.jpg" className="d-block w-100"/>
					<div className="carousel-caption d-md-flex ">
						<h1 className="display-4">Live the experience</h1>
					</div>
				</div>
				<div className="carousel-item">
				<img src="https://cherry-brightspot.s3.amazonaws.com/d3/52/3cce57164534a50d08dfb1b8ace7/original.jpg" className="d-block w-100"/>
				</div>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
			</div>

			<div className="mt-5 text-center list-group-item-action">
				<Link to={'/demo'}>
					<button className="btn rounded"><h1 className="display-4"><strong>CLICK ME</strong> to watch our content!</h1></button>
				</Link>
				<hr className="text-light"></hr>
			</div>

			<div className="row mt-5">
			<div className="col-2">
				<div className="list-group" id="list-tab" role="tablist">
				<a className="p-3 darkbox bg-gradient border-dark list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">Created by</a>
				<a className="p-3 darkbox bg-gradient border-dark list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">Premise</a>
				<a className="p-3 darkbox bg-gradient border-dark list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">Films</a>
				<a className="p-3 darkbox bg-gradient border-dark list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">Series</a>
				</div>
			</div>
			<div className="col-6">
				<div className="tab-content" id="nav-tabContent">
				<div className="tab-pane fade show active text-light" id="list-home" role="tabpanel" aria-labelledby="list-home-list">	George Lucas</div>
				<div className="tab-pane fade text-light" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">The Star Wars franchise depicts the adventures of characters "A long time ago in a galaxy far, far away", in which humans and many species of aliens (often humanoid) co-exist with robots (typically referred to in the films as 'droids'), who may assist them in their daily routines; space travel between planets is common due to lightspeed hyperspace technology. Spacecraft range from small starfighters, to huge capital ships such as the Star Destroyers, to space stations such as the moon-sized Death Stars. Telecommunication includes two-way audio and audiovisual screens, and holographic projections.</div>
				<div className="tab-pane fade text-light" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><li>A New Hope</li><li>The Empire Strikes Back</li><li>Return of the Jedi</li><li>The Phantom Menace</li><li>Attack of the Clones</li><li>Revenge of the Sith</li><li>The Force Awakens</li><li>The Last Jedi...</li></div>
				<div className="tab-pane fade text-light" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><li>Animated series</li><li>Animated micro-series</li><li>Live-action series</li><li>Game shows</li></div>
				</div>
			</div>
			<div className="col-4">
				<img id='imgpeq' src="https://media.timeout.com/images/105868736/750/422/image.jpg"></img>
			</div>
			</div>
		</div>
	);
};

