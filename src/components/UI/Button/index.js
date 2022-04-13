import React from "react";
import './index.scss';

const Button = props => {
	const cl = [[props.type]]
	if(props.disabled) {
		cl.push('disabled')
	}
	return (
		<button
			onClick={props.onClick}
			className={cl.join(' ')}
			disabled={props.disabled}
		>
			{props.children}
		</button>
	)
}
export default Button;