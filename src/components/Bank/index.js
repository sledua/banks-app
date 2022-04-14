import React, { useEffect, useState} from 'react';
import './index.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';

const Banc = () => {
	const [listing, setListing] = useState({
		list: [],
		isLoad: true,
	})
	const [isFormValid, setIsFormValid] = useState(false)
	const [inputs, setInputs] = useState({
		banc: {
			value: '',
			type: 'text',
			label: 'Bank name',
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
			label: 'Interest Rate',
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
			label: 'Maximum loan',
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
			label: 'Minimum down payment',
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
			label: 'Loan term',
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
	const validateControl = (value, validation) => {
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
	useEffect(()=>{
		let isFValid = true;
		Object.keys(inputs).forEach(name => isFValid = inputs[name].valid && isFValid)
		setIsFormValid(isFValid)
	},[inputs])
	const onChangeHandler = (event, controlName) => {
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
				...inputs[controlName], valid : validateControl(event.target.value, control.validation)
			}
		}))
		
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
	useEffect(()=>{
		const loadListing = async () =>  {
			await	fetch('https://bank-banc-default-rtdb.europe-west1.firebasedatabase.app/list.json')
			.then(res =>  res.json())
			.then(result => setListing((listing) => ({...listing, list: result, isLoad: false})))
			}
		loadListing().catch (console.error)
	},[])
	const renderSore = () => {
		
			return Object.keys(listing.list).map((controls, index) => {
				const control = listing.list[controls][0];
				return (
					<tr key={index}>
						<td>{control.banc.value}</td>
						<td >{control.rate.value}</td>
						<td >{control.maxLoan.value}</td>
						<td >{control.minDoun.value}</td>
						<td >{control.loan.value}</td>
					</tr>
					
				)
			})
		
		
	}
	const submitHandler = event => {
		event.preventDefault()
	}

	const saveBancHandler = async event => {
		event.preventDefault()
		try {
			await fetch('https://bank-banc-default-rtdb.europe-west1.firebasedatabase.app/list.json', {
				method: 'POST',
				body: JSON.stringify([inputs]),
				headers: {'Content-Type': 'application/json'}
			})
			.then(
				(error) => {
					console.log(error);
			})
			setInputs((inputs) => ({...inputs,banc: {...inputs.banc, value: ''}}))
			setInputs((inputs) => ({...inputs,rate: {...inputs.rate, value: ''}}))
			setInputs((inputs) => ({...inputs,maxLoan: {...inputs.maxLoan, value: ''}}))
			setInputs((inputs) => ({...inputs,minDoun: {...inputs.minDoun, value: ''}}))
			setInputs((inputs) => ({...inputs,loan: {...inputs.loan, value: ''}}))
		} catch(error) {
			console.log('post error', error)
		}
	}  
	return (
		<div className='container--banc'>
			<div className='newInput grid'>
				<form className='form' onSubmit={submitHandler}>
					{renderInputs()}
				</form>
				<table className='grid'>
					<thead>
						<tr>
							<th>Bank name</th>
							<th>Interest Rate</th>
							<th>Maximum loan</th>
							<th>Down payment</th>
							<th>Loan term</th>
						</tr>
					</thead>
					<tbody>
						{renderSore()}
					</tbody>
				</table>
			</div>
			<div className='group-btn'>
				<Button
					type="success"
					onClick={saveBancHandler}
					disabled={!isFormValid}
					>
						Save</Button>
			</div>
		</div>
	);
}
export default Banc;