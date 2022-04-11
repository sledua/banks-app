import React from "react";
import './index.scss';
function isValid ({valid, touched, shouldValidate}) {
	return !valid && shouldValidate && touched
}
const Input = props => {
	const inType = props.type || 'text';
	const htmlFor = `${inType}-${Math.random()}`;
	const clss = [];

	if (isValid(props)) {
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
			{
				isValid(props) ? <span>{props.errorMassage || 'Join text'}</span> : null
			}
			
		</div>
	)
}

export default Input;