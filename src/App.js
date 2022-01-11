import {
	AnmiatedLogo,
	DarkButton,
	FancyButton,
	StyledButton,
	SubmitButton,
} from './components/Button/Button.styles';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
	dark: {
		primary: '#000',
		text: '#fff',
	},
	light: {
		primary: '#fff',
		text: '#000',
	},
	fontFamily: 'Roboto',
};

const GlobalStyle = createGlobalStyle`
button {
	font-family: ${({ theme }) => theme.fontFamily};
}
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
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
				<br />
				<DarkButton>Dark Button</DarkButton>
			</div>
		</ThemeProvider>
	);
}

export default App;
