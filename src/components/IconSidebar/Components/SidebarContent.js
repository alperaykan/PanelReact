/**
 * admin header component
 */
/* eslint-disable */
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Tooltip } from '@material-ui/core';
import menuItems from 'assets/Data/MenuItems';
// Intl messages
import IntlMessages from 'Shared/util/IntlMessages';

class SidebarContent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			navLinks: menuItems.data
		}
	}

	getPlanName(name) {
		let newName = name.replace("-", " ");
		return newName
	}

	render() {
		const { navLinks } = this.state;
		return (
			<div className="icon-menu-wrap">
				<ul className="main-menu">
					{navLinks && navLinks.map((navlink, index) => (
						<Fragment key={index}>
							{navlink.child_routes !== null ?
								<li className="menu-item">
									<Link to={navlink.path}>
										<i className="material-icons-outlined">{navlink.icon}</i>
									</Link>
									<div className="sub-menu-wrap">
										<div className="sub-menu-header">
											<IntlMessages id={navlink.menu_title} />
										</div>
										<div className="sub-menu-list">
											<ul className="sub-menu">
												{navlink.child_routes.map((subMenu, subKey) => (
													<li key={subKey}>
														<Link to={subMenu.path}>
															<IntlMessages id={subMenu.menu_title} />
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
								</li>
								:
								<li className="menu-item">
									<Tooltip  title={<IntlMessages id={navlink.menu_title} />} placement="right">
										<a href={navlink.path}>
											<i className="material-icons-outlined">{navlink.icon}</i>
										</a>
									</Tooltip>
								</li>
							}
						</Fragment>
					))}
				</ul>
			</div>
		);
	}
}

export default SidebarContent;