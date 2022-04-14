import React, { useEffect, useState} from 'react';
import './index.scss';
import Input from '../UI/Input';
import Button from '../UI/Button';

const Calculator = () => {
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
				minLength: 5
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
				minLength: 5
			}
		},
	})
	const onChangeHandler = () => {

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
	const renderSore = () => {

	}
	const serchHendler = () => {

	}
	return (
		<div className='grid container--calc'>
			<div className='inputs grid'>
				<form className='form'>
				{renderInput()}
				</form>
				
				{/* select */}
				<div className='group-btn'>
					<Button
					onClick={serchHendler}
					type="primary"
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