import React, { useEffect, useState } from 'react';
import './allclubs.css';
import clubshome from '../../images/clubshome.png';
import { EnterCard } from '../../components/entercard/entercard.js';
import Title from '../../components/title/title.js';
import clubsData from '../../clubs.json';

export const Allclubs = () => {
	return (
		<div className='container-fluid rem-padding'>
			<Title title='CLUBS' image={clubshome} />
			<div className='h-events clubs-page'>
				<div className='clubs-page'>
					<h2 className='e-head mt-4'>TECHNICAL CLUBS</h2>
					<div className='e-home clubs-card-g all-all flex-clu-=b-card'>
						{clubsData.map((club, id) => {
							return (
								<EnterCard
									key={id}
									type='club'
									link={club.info.link}
									name={club.info.name}
									logo={club.info.image}
									info={club.info.about}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};