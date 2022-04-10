import './index.scss';
import Input from '../UI/Input';
const Banc = () => {
	return (
		<div className='container--banc'>
		<h4>Lorem</h4>
		<p>Працюючі варіанти</p>
			<div className='newInput grid'>
				<form className='form'>
					<Input 
						label="Banc"
						errorMassage={'test'}/>
					<Input label="Interest rate"/>
					<Input label="Max loan"/>
					<Input label="Min doun paymant"/>
					<Input label="Loan term"/>
				</form>
				<div className='show'>
					<h5>Prev</h5>
					<ul>
						<li><span>Name:</span><span>Your ining</span></li>
					</ul>
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