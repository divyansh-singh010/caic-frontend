import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './team.css';
import defBack from '../../images/defBack.png';
import Title from '../../components/title/title.js';
import ProfileCard from '../../components/profilecard/profilecard.js';

export const Outreach = () => {
	const [team, setTeam] = useState([]);

	useEffect(() => {
		axios.get(`https://caic.iitd.ac.in/newapi/team/convenor/outreach/`).then((response) => {
			console.log('sending request');
			setTeam(response.data);
		});
	}, []);
	
	const imageBaseUrl = 'https://caic.iitd.ac.in/';

	return (
		<div className='team-main'>
			<Title title='OUTREACH TEAM' image={defBack} />

			<div className='cards'>
				{team.map((member, index) => (
					<div
						key={index}
					>
						<ProfileCard
							width={'210px'}
							designation={member.designation}
							name={member.name}
							image={`${imageBaseUrl}${member.photo}`} 
							email={member.email}
							instagram={member.instagram}
							linkedin={member.linkedin}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
