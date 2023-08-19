import styled from "styled-components";

export const MenuBar = styled.div`
	border-radius: 25px;
	height: fit-content;
	display: flex;
	align-items: center;
	padding: 0 10px;
	margin: 50px 0 0 0;
	justify-content: center;
`;

export const MenuItem = styled.li`
	list-style: none;
	color: white;
	font-family: sans-serif;
	font-weight: bold;
	padding: 12px 16px;
	margin: 0 8px;
	position: relative;
	cursor: pointer;
	white-space: nowrap;

	&::before {
		content: " ";
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: -1;
		transition: .2s;
		border-radius: 25px;
	}

	&:hover {
		&::before {
			background: linear-gradient(to bottom, #e8edec, #d2d1d3);
			box-shadow: 0px 3px 20px 0px black;
			transform: scale(1.2);
		}
		color: black;
	}
`;
