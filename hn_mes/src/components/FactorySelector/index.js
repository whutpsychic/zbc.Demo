
import React, { Component } from 'react';

import Cascader from 'antd/lib/cascader';
import 'antd/lib/cascader/style/index.css';

import { options } from './data.js';

class FactorySelector extends Component {

	render() {

		const { onChange } = this.props || (() => { });

		const { label } = this.props;

		return (
			<li>
				<label>{label}</label>
				<Cascader
					options={options}
					onChange={onChange}
					placeholder="请选择"
				/>
			</li>
		)
	}

}


export default FactorySelector;
