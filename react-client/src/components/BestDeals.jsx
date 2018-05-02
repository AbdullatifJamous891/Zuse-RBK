import React from 'react';

class BestDeals extends React.Component{
	constructor(){
		super()
	}

	render(){
		return(<div  className="container-fluid">
	<div id='BestDeals' align="center">
	<h1>Best Deals</h1>
	
	<p>Here You can find the best products</p>
	<center>
	<img src="http://www.kingpenny.com/images/bestdeals-heading.png" style={{"width":601}}/>
	</center>
	</div>
	</div>)
	}
}


export default BestDeals;