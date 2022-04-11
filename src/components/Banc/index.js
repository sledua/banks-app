import React, { useState} from 'react';
import './index.scss';
import Input from '../UI/Input';
const Banc = () => {
	const [isFormValid, setIsFormValid] = useState(false)
	const [inputs, setInputs] = useState({
		banc: {
			value: '',
			type: 'text',
			label: 'Banc',
			errorMassage: 'error',
			valid: false,
			touched: false,
			validation: {
				required: true,
				banc: true,
				minLength: 3
			}
		},
		rate: {
			value: '',
			type: 'number',
			label: 'Interest rate',
			errorMassage: 'error rate',
			valid: false,
			touched: false,
			validation: {
				required: true,
				rate: true,
				minRate: 0
			}
		},
		maxLoan: {
			value: '',
			type: 'number',
			label: 'max Loan',
			errorMassage: 'error rate',
			valid: false,
			touched: false,
			validation: {
				required: true,
				rate: true,
				loan: 320000
			}
		},
		minDoun: {
			value: '',
			type: 'number',
			label: 'min Doun',
			errorMassage: 'error rate',
			valid: false,
			touched: false,
			validation: {
				required: true,
				rate: true,
				loan: 5
			}
		},
		loan: {
			value: '',
			type: 'number',
			label: 'loan',
			errorMassage: 'error rate',
			valid: false,
			touched: false,
			validation: {
				required: true,
				rate: true,
				loan: 120
			}
		}
	})
	
	function validateControl (value, validation) {
		if(!validation) {
			return true
		}
		let isValid = true
		if (validation.required) {
			isValid = value.trim() !== '' && isValid
		}
		if (validation.rate) {

		}
		if (validation.loan) {

		}
		if (validation.minRate) {

		}
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}
		if (validation.banc) {

		}
		return isValid
	}
	
	function onChangeHandler(event, controlName) {
		const formControl = {...inputs}
		const control = {...formControl[controlName]}
		setInputs((inputs) => ({
			...inputs, 
			[controlName]: {
				...inputs[controlName], value: event.target.value
			}
		}))
		setInputs((inputs) => ({
			...inputs, 
			[controlName]: {
				...inputs[controlName], touched : true
			}
		}))
		setInputs((inputs) => ({
			...inputs, 
			[controlName]: {
				...inputs[controlName], valid : validateControl(control.value, control.validation)
			}
		}))
		let isFValid = true;
		Object.keys(inputs).forEach(name => {
			isFValid = inputs[name].valid && isFValid
		})
		setIsFormValid(isFValid)
		console.log(`state`,isFormValid,`let`,isFValid)
	}
	
	function renderInputs() {
		return  Object.keys(inputs).map((controlName, index) => {
			const control = inputs[controlName];
			return (
				<Input
					key={controlName + index}
					type={control.type} 
					value={control.value}
					valid={control.valid}
					touched={control.touched}
					label={control.label}
					shouldValidate={!!control.validation}
					errorMassage={control.errorMassage}
					onChange={event => onChangeHandler(event, controlName)}/>
			)
		})
	}
	return (
		<div className='container--banc'>
		<h4>New Banc</h4>
		<p>Працюючі варіанти</p>
			<div className='newInput grid'>
				<form className='form'>
					{renderInputs()}
				</form>
				<div className='show'>
					<h5>Prev</h5>
					<ul>
						<li><span>Name:</span><span>Your ining</span></li>
					</ul>
					<pre>
					{JSON.stringify(isFormValid, null, 2)}
					</pre>
				</div>
			</div>
			<div className='group-btn'>
				<button>New Banc</button>
				<button>Save Local</button>
				<button>Push</button>
			</div>
		</div>
	);
}
export default Banc;