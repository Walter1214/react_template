import React, { useState } from 'react'
import style from './style'
import { isFunction } from 'lodash'
import PropTypes from 'prop-types'

const propTypes = {
	value: PropTypes.any,
	name: PropTypes.string,
	type: PropTypes.string,
	ref: PropTypes.string,
	placeholder: PropTypes.string,
}

function Input(props) {
	console.log('props :', props)
	const getStyle = style(props)
	const { input } = props
	console.log('input :', input)

	return (
		<getStyle.Input>
			<getStyle.InputText type='text' {...input}></getStyle.InputText>
			<getStyle.InputPrefix></getStyle.InputPrefix>
			<getStyle.InputSuffix></getStyle.InputSuffix>
		</getStyle.Input>
	)
}

Input.propTypes = propTypes

export default Input
