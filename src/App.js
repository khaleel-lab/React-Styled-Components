import {
	AnmiatedLogo,
	FancyButton,
	StyledButton,
	SubmitButton,
} from './components/Button/Button.styles';

function App() {
	return (
		<div className='App'>
			{/* Animations  */}
			<AnmiatedLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png' />
			{/* Basic Styled Component  */}
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
