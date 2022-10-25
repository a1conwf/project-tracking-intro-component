import React from "react";
import {useState} from "react";

//Styles
import "./Header.scss";

//Icons
import logo from "../../assets/svg/logo.svg";
import iconHamburger from "../../assets/svg/icon-hamburger.svg";
import iconClose from "../../assets/svg/icon-close.svg";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<header className="header">
			<div className="header__overlay"></div>
			<div className="container">
				<div className="header__inner">
					<a href="#!">
						<img src={logo} alt="logo-img" className="header__logo" />
					</a>

					<nav className={isExpanded ? "nav active" : "nav"}>
						<ul className="nav__list">
							<li className="nav__list-item">
								<a href="#!">Product</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Features</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Pricing</a>
							</li>
							<li className="nav__list-item">
								<a href="#!">Login</a>
							</li>
						</ul>
					</nav>

					<div className="header__hamburger" onClick={() => setIsExpanded(!isExpanded)}>
						{!isExpanded ? <img src={iconHamburger} alt="icon-hamburger" /> : <img src={iconClose} alt="icon-close" />}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
