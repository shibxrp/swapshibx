// Footer.tsx

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
	color: #fff;
	padding: 20px;
	text-align: center;

	a {
		color: #fff;
		text-decoration: none;
		cursor: pointer;
	}
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<div className="container">
				<p>
					<a href="https://t.me/camelabs" target="_blank" rel="noopener noreferrer">
						&copy; {new Date().getFullYear()} Camelabs. All rights reserved.
					</a>
				</p>
				{/* You can add additional content for your footer, such as links or other information */}
			</div>
		</FooterContainer>
	);
};

export default Footer;
