
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Banc from './components/Banc'; 

function App() {
  return (
    <>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Banc />} />
					{/* <Route path='/calculator' element={<Calculator />} /> */}
				</Route>
			</Routes>
		</>
  );
}

export default App;
