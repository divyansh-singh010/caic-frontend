import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './team.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title.js';
import { Link } from 'react-router-dom';
import ProfileCard from '../../components/profilecard/profilecard.js';

export const Core = () => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		axios.get(`https://caic.iitd.ac.in/newapi/team/core/`).then((response) => {
			console.log('sending request');
			setTeam(response.data);
		});
	}, []);
	
	const imageBaseUrl = 'https://caic.iitd.ac.in/';

	return (
		<div className='team-main'>
			<Title title='TEAM' image={defBack} />

			<div className='cards'>
				{team.map((member, index) => (
					<div
						key={index}
						className={`profile-card-container ${
							member.designation === 'General Secretary' ? 'center' : ''
						}`}
					>
						<ProfileCard
							width={'210px'}
							designation={member.designation}
							name={member.name}
							image={`${imageBaseUrl}${member.photo}`} // Complete image URL
							email={member.email}
							instagram={member.instagram}
							linkedin={member.linkedin}
						/>
					</div>
				))}
			</div>

			<div className='container team-link'>
				<ul className='list-container'>
					<li className='list'>
						<Link to='/team/ugconvenor' className='team-link'>
							UG Convenors
						</Link>
					</li>
					<li className='list'>
						<Link to='/team/pgconvenor' className='team-link'>
							PG Convenors
						</Link>
					</li>
					<li className='list'>
						<Link to='/team/clubocs' className='team-link'>
							Overall Co-ordinators
						</Link>
					</li>
					<li className='list'>
						<Link to='/team/outreach' className='team-link'>
							Outreach Team
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
