import React from "react";
import './index.scss';

const Input = props => {
	const inType = props.type || 'text';
	const htmlFor = `${inType}-${Math.random()}`;
	const clss = [];
	console.log(clss)
	if (true) {
		clss.push('invalid');
	}
	return (
		<div className="Input">
			<label htmlFor={htmlFor} className={clss.join(' ')}>{props.label}</label>
			<input
				id={htmlFor}
				name='nameBanc'
				type={inType}
				value={props.value}
				onChange={props.onChange}
			/>
			<span>{props.errorMassage}</span>
		</div>
	)
}

export default Input;