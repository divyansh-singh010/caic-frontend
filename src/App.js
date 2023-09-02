import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Footer from './components/footer/footer.js';
import Navbar from './components/navbar/navbar.js';
import Home from './pages/home/home.js';
import { Allclubs } from './pages/allclubs/allclubs.js';
import { Allsociety } from './pages/allsociety/allsociety.js';
import { Core } from './pages/team/core.js';
import { Meetings } from './pages/meetings/meetings.js';
import { UsefulLinks } from './pages/usefulLinks/usefulLinks.js';
import { OneSociety } from './pages/oneSociety/oneSociety.js';
import { OneClub } from './pages/oneClub/oneClub.js';
import { Events } from './pages/events/events.js';
import { Tryst } from './pages/tryst/tryst.js';
import { OneEvent } from './pages/oneEvent/oneEvent.js';
import { UGconvenor } from './pages/team/ugconvenor.js';
import { PGconvenor } from './pages/team/pgconvenor.js';
import onlyClubs from './clubs.json';
import onlySocs from './societies.json';
import { Clubocs } from './pages/team/cluboc.js';
import { Outreach } from './pages/team/outreach.js';
function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	return (
		<Router>
			<Navbar />
			<ScrollToTop />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Home />
						</>
					}
				></Route>

				<Route
					path='/clubs'
					element={
						<>
							<Allclubs />
						</>
					}
				></Route>

				<Route
					path='/societies'
					element={
						<>
							<Allsociety />
						</>
					}
				></Route>

				<Route
					path='/team'
					element={
						<>
							<Core />
						</>
					}
				></Route>

				<Route
					path='/team/ugconvenor'
					element={
						<>
							<UGconvenor />
						</>
					}
				></Route>
				<Route
					path='/team/clubocs'
					element={
						<>
							< Clubocs />
						</>
					}
				></Route>
				<Route
					path='/team/pgconvenor'
					element={
						<>
							<PGconvenor />
						</>
					}
				></Route>
				<Route
					path='/team/outreach'
					element={
						<>
							<Outreach />
						</>
					}
				></Route>
				<Route
					path='/meetings'
					element={
						<>
							<Meetings />
						</>
					}
				></Route>
				<Route
					path='/events'
					element={
						<>
							<Events />
						</>
					}
				></Route>
				<Route
					path='/tryst'
					element={
						<>
							<Tryst />
						</>
					}
				></Route>
				<Route
					path='/usefulLinks'
					element={
						<>
							<UsefulLinks />
						</>
					}
				></Route>
				{onlySocs.map((soc, id) => {
					return (
						<Route
							key={id}
							path={`/society/${soc.info.link}`}
							element={
								<>
									<OneClub props={soc} />
								</>
							}
						></Route>
					);
				})}
				<Route
					path='/one-society'
					element={
						<>
							<OneSociety />
						</>
					}
				></Route>
				<Route
					exact
					path='/getevent/:club/:id'
					element={
						<>
							<OneEvent />
						</>
					}
				></Route>

				{onlyClubs.map((club, id) => {
					return (
						<Route
							key={id}
							path={`/club/${club.info.link}`}
							element={
								<>
									<OneClub props={club} />
								</>
							}
						></Route>
					);

				})}
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;

