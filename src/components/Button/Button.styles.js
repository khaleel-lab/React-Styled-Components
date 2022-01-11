import styled, { keyframes } from 'styled-components';

export const StyledButton = styled.button`
	border: 2px solid #4caf50;
	border-radius: 20px;
	/* Using Props */
	background-color: ${({ variant }) =>
		variant === 'outline' ? '#fff' : '#4caf50'};
	color: ${({ variant }) => (variant === 'outline' ? '#4caf50' : '#fff')};
	padding: 16px 32px;
	margin: 16px auto;
	text-align: center;
	text-decoration: none;
	display: block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.5s all ease-in-out;
	/* Pseudo Classes */
	&:hover {
		background-color: ${({ variant }) =>
			variant !== 'outline' ? '#fff' : '#4caf50'};
		color: ${({ variant }) => (variant !== 'outline' ? '#4caf50' : '#fff')};
	}
`;

// Extending Styles
export const FancyButton = styled(StyledButton)`
	background-image: linear-gradient(to right, #f6d365 20%, #fda085 80%);
	border: none;
	max-width: 20%;
`;

// Passed Props & Adding Attributes
export const SubmitButton = styled(StyledButton).attrs((props) => ({
	type: 'submit',
}))`
	box-shadow: 0 9px #999;
	&:active {
		background-color: ${({ variant }) =>
			variant !== 'outline' ? '#fff' : '#4caf50'};
		box-shadow: 0 5px #666;
		transform: translateY(4px);
	}
`;

// Animations
const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }`;

export const AnmiatedLogo = styled.img`
	margin: 0 auto;
	display: block;
	height: 40vmin;
	pointer-events: none;
	animation: ${rotate} infinite 20s linear;
`;

export const DarkButton = styled(StyledButton)`
	border: 2px solid ${({ theme }) => theme.dark.primary};
	background-color: ${({ theme }) => theme.dark.primary};
	color: ${({ theme }) => theme.dark.text};
`;
