import React from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import SearchBox from '../Components/SearchBox';
import './App.css';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			people: [],
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render(){
		const {people, searchfield} = this.state;
		const filteredPeople = people.filter(person =>{
			return person.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		if(!people.length) return <h1 className='tc'> LOADING </h1>;
		else{
			return(
			<div className='tc'>
				<h1 className='f1'> Human Resources </h1>
				<SearchBox searchChange = {this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList people = {filteredPeople} />
					</ErrorBoundry>
				</Scroll>
			</div>
			);
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({people: users}))
	}
}

export default App;