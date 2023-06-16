import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-scroll'; // react-scroll is a library for scrolling in React
import SmallScreensNavbar from '../SmallScreenNavbar/SmallScreenNavbar';
import { useWindowWidthAndHeight } from '../CustomHooks';

const Header: React.FC = () => {
	// use our custom hook to get the the window size
	const [width, height] = useWindowWidthAndHeight();
	console.log(height);

	return (
		<header>
			<div className="header-inner">
				<Link to="Home" smooth={true} className="logo nav-link">
					Artes da Jackeline (mudar p/logo)
				</Link>
				{/* if the width of the window is bigger than 1000px use <Navebar/>, else use <SmallScreensNavbar/> */}
				{width > 1000 ? (
					<Navbar navClass="nav-big" linkClassName="nav-big-link" />
				) : (
					<SmallScreensNavbar
						navClass="nav-small"
						linkClassName="nav-small-link"
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
