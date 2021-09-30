import React from 'react';
import Card from './Card';

const CardList = ({people}) => {
	const CardArray = people.map((user,i) => {
		return <Card key={people[i].id} name={people[i].name} email={people[i].email}/>;
	});
	return CardArray;
}

export default CardList; 