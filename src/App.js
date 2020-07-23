import React, { Component} from 'react';
class App extends Component {

	constructor(props) {
   super(props); 
	this.state = {
		item:[],
		isloaded:true,
	}	
	}
componentDidMount(){
	fetch('https://avishkamovie2019.000webhostapp.com/blog3/myapi.php')
	.then(res =>res.json())
	.then(json => {
		this.setState({
			isLoaded:true,
			items:json,
		})
	});
}

	render() {
		var{ isLoaded,items} = this.state;
		if(!isLoaded){
			return <div>loading....</div>;
		}else{
			
		
		return (
			<div className="app">
			<ul>
			{items.map(item=>(
				<li key={item.id}>
					{item.post_title}

				</li>
				))}
			
</ul>
			</div>
			);

	
}}}
export default App;