import './App.css';
import { FancyButton, StyledButton } from './components/Button/Button.styles';

function App() {
	return (
		<div className='App'>
			{/*Basic Styled Component  */}
			<StyledButton>Styled Button</StyledButton>
			<br />
			{/* Passing props  */}
			<StyledButton variant='outline'>Styled Props Button</StyledButton>
			<br />
			{/* Extending Styles  */}
			<FancyButton as='a'>Fancy Button</FancyButton>
		</div>
	);
}

export default App;
