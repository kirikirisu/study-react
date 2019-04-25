import React from 'react';
import Greeting from './greeting';

class ThreeGreeting extends React.Component {
	render() {
		return (
			<div>
				<Greeting name='ビルス様' />
				<Greeting name='フリーザ様' />
				<Greeting name='ベジータ様' />
			</div>
		);
	}
}

export default ThreeGreeting;
