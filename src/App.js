import './App.css';
import {
	FancyButton,
	StyledButton,
	SubmitButton,
} from './components/Button/Button.styles';

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
			<br />
			<SubmitButton>Submit Button</SubmitButton>
		</div>
	);
}

export default App;
