import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

export const Card = ({smile, text}) => {
	return (
		<div className="card">
			<div className="like">&lt;3</div>
			{smile}
			<h6>{text}</h6>
		</div>
	)
}

const hello = 'hello';

console.log(hello)

const emotions = [
	{smile: "=>", description: 'hello', id: '1'},
	{smile: "=(", description: 'грусть', id: '2'},
	{smile: "=)", description: 'smile', id: '3'},
	{smile: "^_^", description: 'oh shit!', id: '4'},
	{smile: "0_o", description: 'wow', id: '4'},
	{smile: "-_-", description: 'китаяся', id: '4'},
]

ReactDOM.render(
	<div className="wrapper">
		{emotions.map(el =>
			<Card smile={el.smile} text={el.description} key={el.id} />
		)}
	</div>,
	document.querySelector("#root")
);
