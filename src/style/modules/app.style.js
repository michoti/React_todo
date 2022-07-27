import styled from "styled-components";

export const AppModule = styled.header`
	.app__wrapper {
		max-width: 750px;
		width: 100%;
		margin: 0 auto;
	}
	.appHeader {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 60px;
	}
	.content__wrapper {
		background-color: var(--bg-2);
		padding: 2rem;
		border-radius: 12px;
		@include smallDeviceSize {
			padding: 1.5rem;
		}
	}
	.emptyText {
		// display: inline-block;
		font-size: 1.6rem;
		font-weight: 500;
		color: var(--black-2);
		text-align: center;
		margin: 0 auto;
		padding: 0.5rem 1rem;
		border-radius: 8px;
		background-color: var(--gray-2);
		width: max-content;
		height: auto;
	}
`;