import styled from 'styled-components';

export const StyledButton = styled.button`
	border: 2px solid #4caf50;
	border-radius: 20px;
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
`;

export const FancyButton = styled(StyledButton)`
	background-image: linear-gradient(to right, #f6d365 20%, #fda085 80%);
	border: none;
	max-width: 20%;
`;
