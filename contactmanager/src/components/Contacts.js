import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
	constructor() {
		super();
		this.state = {
			contacts: [
				{
					id: 1,
					name: 'John Doe',
					email: 'jdoe@example.com',
					phone: '555-555-5555'
				},
				{
					id: 2,
					name: 'karen WIllaims',
					email: 'kwill@example.com',
					phone: '222-222-2222'
				},
				{
					id: 3,
					name: 'Henry Johnson',
					email: 'hjonn@example.com',
					phone: '444-223-8888'
				}
			]
		};
	}
	render() {
		const { contacts } = this.state;
		return (
			<React.Fragment>
				{contacts.map(contact => {
					return <Contact key={contact.id} contact={contact} />;
				})}
			</React.Fragment>
		);
	}
}

export default Contacts;
