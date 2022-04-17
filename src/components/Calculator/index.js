import React, {useEffect, useState} from 'react';
import './index.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Select from '../UI/Select';
const Calculator = () => {
	const [value, setValue] = useState()
	const [isFormValid, setIsFormValid] = useState(false)
	const [bank, setBank] = useState();
	const [inputs, setInputs] = useState({
		loan: {
			value: '',
			type: 'number',
			label: 'Initial loan',
			errorMassage: 'error',
			valid: false,
			touched: false,
			validation: {
				required: true,
				minLength: 3
			}
		},
		payment: {
			value: '',
			type: 'number',
			label: 'Down payment',
			errorMassage: 'error',
			valid: false,
			touched: false,
			validation: {
				required: true,
				minLength: 3
			}
		},
	})
	useEffect(()=>{
		let isFValid = true;
		Object.keys(inputs).forEach(name => isFValid = inputs[name].valid && isFValid)
		setIsFormValid(isFValid)
	},[inputs])
	useEffect(() => {
		const value = JSON.parse(localStorage.getItem('values'));
		if (value) {
			setValue(value)
		}
	}, [])
	
	const onChangeHandler = (event, controlInput) => {
		const forms = {...inputs};
		const control = {...forms[controlInput]};
		setInputs((inputs) => ({
			...inputs,[controlInput]:{...inputs[controlInput], value: event.target.value}
		}))
		setInputs((inputs) => ({
			...inputs,[controlInput]: {...inputs[controlInput], touched : true}
		}))
		setInputs((inputs) => ({
			...inputs,[controlInput]: {...inputs[controlInput], valid: validateControl(event.target.value, control.validation)}
		}))
	}
	const validateControl = (value, validation) => {
		if(!validation) {
			return true
		}
		let isValid = true;
		if (validation.minLength) {
			isValid = value.length >= validation.minLength && isValid
		}
		return isValid
	}
	const renderInput = () => {
		return Object.keys(inputs).map((name, index) => {
			const input = inputs[name];
			return (
				<Input
					key={input + index}
					type={input.type} 
					value={input.value}
					valid={input.valid}
					touched={input.touched}
					label={input.label}
					shouldValidate={!!input.validation}
					errorMassage={input.errorMassage}
					onChange={event => onChangeHandler(event, name)}/>
			)
		})
	}
	const renderSelect = () => {
		if (value) {
			const options = Object.keys(value).map((se, index) => {
				let selectOptions = {
					value: index,
					text: value[se][0].banc.value,
				}
				return selectOptions;
			})
			return (
					<Select
						label='Select bank'
						key={options.value}
						value={options.value}
						onChange={selectChengeHendler}
						options={options}
					/>
				)}
		
	}
	
	const renderSore = () => {
		//забрать перемение after seleck + serch

		//посчитать минимальний взнос

		//посчитать мес платеж

		//собрать статику
	}
	const selectChengeHendler = event => {
		if(event.target.value){
			setBank({value: event.target.value})
		}
	}
	const serchHendler = event => {
		event.preventDefault()
		const output = {};
		// eslint-disable-next-line array-callback-return
		Object.keys(value).map(i => {
			if (bank.value === value[i][0].banc.value) {
				return (output.banc = value[i][0].banc.value,
						output.loan = Number(value[i][0].loan.value),
						output.maxLoan = Number(value[i][0].maxLoan.value),
						output.minDoun = Number(value[i][0].minDoun.value),
						output.rate = Number(value[i][0].rate.value))
			}
		})
		console.log(output);
	}
	return (
		<div className='grid container--calc'>
			<div className='inputs grid'>
				<form className='form'>
					{renderInput()}
					{renderSelect()}
				</form>
				<div className='group-btn'>
					<Button
					onClick={serchHendler}
					type="primary"
					disabled={!isFormValid}
					>Serch</Button>
				</div>
			</div>
			<div className='conclusion'>
				<table className='grid'>
				<thead>
						<tr>
							<th>Bank name</th>
							<th>Rate</th>
							<th>Min doun</th>
							<th>loan</th>
							<th>Monthly fee</th>
						</tr>
					</thead>
					<tbody>
						{renderSore()}
					</tbody>
				</table>
			</div>
		</div>
	)
}
export default Calculator;