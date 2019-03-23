import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
	state = {
		showContactInfo: false
	};
	onShowClick = e => {
		this.setState({
			showContactInfo: !this.state.showContactInfo
		});
	};
	render() {
		const { contact } = this.props;
		const { showContactInfo } = this.state;
		return (
			<div className='card card-body mb-3'>
				<h4>
					{contact.name}{' '}
					<i
						onClick={this.onShowClick}
						// .bind(this, contact.name)
						className='fas fa-sort-down'
					/>
				</h4>{' '}
				{showContactInfo ? (
					<ul className='list-group'>
						<li className='list-group-item'>{contact.email}</li>
						<li className='list-group-item'>{contact.phone}</li>
					</ul>
				) : null}
			</div>
		);
	}
}
Contact.propTypes = {
	// name: PropTypes.string.isRequired,
	// email: PropTypes.string.isRequired,
	// phone: PropTypes.string.isRequired
	contact: PropTypes.object.isRequired
};
export default Contact;
