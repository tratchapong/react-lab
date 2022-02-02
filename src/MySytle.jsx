// let try to use styled-components with BS5

// https://stackoverflow.com/questions/63210614/how-to-use-default-bootstrap-class-with-styled-components

// Ex.
// const Heading = styled.h2.attrs(() => ({
//   className: 'display-4',
// }))`
//   font-weight: bold,
//   color: #968c8c,
// `;

// ----------------------------------

import React from 'react';
import styled from 'styled-components';

function MySytle() {
	const Heading = styled.h2.attrs(() => ({
		className: 'display-4 border text-info',
	}))`
		font-weight: bold,
		color: #968c8c,
	`;

  const OKButton = styled.button.attrs(props=>({
    className: `btn btn-outline btn-${props.color}`
  }))``


	const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
  return (
  <div>
		<Button>Normal</Button>
		<OKButton color='danger' >OK</OKButton>
		<Heading>Codecamp 10</Heading>
  </div>);
}

export default MySytle;
