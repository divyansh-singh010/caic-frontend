import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './oneClub.css';
import ProfileCard from '../../components/profilecard/profilecard.js';
import Title from '../../components/title/title.js';

export const OneClub = ({ props }) => {
	const [team, setTeam] = useState([]);
	useEffect(() => {
		axios.get(`https://caic.iitd.ac.in/newapi/team/club/${props.id}`).then((response) => {
			console.log('sending request');
			setTeam(response.data);
		});
	}, []);
	const imageBaseUrl = 'https://caic.iitd.ac.in/';
	return (
		<div>
			<Title title={props.info.name} image={'https://drive.google.com/uc?id=1kFu_zsuYXb_yZ2Fie3KSlPWYALXpblLT'} />
			<div id='about' className='container green-bor'>
				<div className='row'>
					<div className='col-md-6 blue-bor'>
						<h3>ABOUT US</h3>
						<p>{props.info.about}</p>
						<button>Learn More</button>
					</div>
					<div className='col-md-6 blue-bor d-flex align-items-center justify-content-center'>
						<img src={props.info.image} alt='' />
					</div>
				</div>
			</div>

			<div id='long_poster' className='green-bor'>
			</div>
			<div className='one-team-parent'>
				<h2>TEAM</h2>
				<div className='one-team'>
					{team.map((person, index) => {
						return (
							<div key={index}>
								<ProfileCard width={'200px'} image={`${imageBaseUrl}${person.photo}`} name={person.name} designation={person.designation} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
