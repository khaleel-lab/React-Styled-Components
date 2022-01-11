import './App.css';
import { StyledButton } from './components/Button/Button.styles';

function App() {
	return (
		<div className='App'>
			{/*Basic Styled Component  */}
			<StyledButton>Styled Button</StyledButton>
			<br />
			{/* Passing props  */}
			<StyledButton variant='outline'>Styled Button</StyledButton>
		</div>
	);
}

export default App;
