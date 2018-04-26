import React from 'react';
import {render} from 'react-dom';
import {Header} from './header';

import './index.css';
class App extends React.Component{
constructor(){
super();
this.state = {
	product:[
	{name:'Shopify', title:'its a CMS', price:5000},
	{ title:'its a CMS', price:6000},
	{name:'Wordpress', title:'its a CMS', price:5000},
	{name:'Drupal', title:'its a CMS', price:9000},
	{name:'JavaScript', title:'its a lang follows the ES', price:4000},
	{name:'React', title:'its a JS framework', price:2000},
	],
	price:'20000',
	productWarenty:'5 year'
   };
}


increasePrice(){

this.setState({

price:this.state.product.map((pr) => {

const tempPrice = pr;

tempPrice.price += 30;


	return tempPrice;


  })

})


}



render(){

return(
<div className="container">
	<div className="row">
		<div className="col-xs-12">
			<button onClick={this.increasePrice.bind(this)} className="btn btn-primary">increase price</button>
			<h1>{this.state.productWarenty}</h1>
			{
			this.state.product.map((d,i) => {
			
		       return <Header key={i} name={d.name} price={d.price}>{d.title}</Header>
		})
	}
	</div>
</div>


</div>
)
}
}
render(<App />, document.getElementById('root'));