
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Bank from './components/Bank'; 
import Calculator from './components/Calculator';

function App() {
  return (
    <>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Bank />} />
					<Route path='/calculator' element={<Calculator />} />
				</Route>
			</Routes>
		</>
  );
}

export default App;
