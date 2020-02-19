import React, { useEffect } from 'react'
import Input from 'components/common/Form/components/Input'
import Error from 'components/common/Form/components/Error'
import UseField from 'components/common/Form/components/UseField'
import PropTypes from 'prop-types'

const propTypes = {}

function Form(props) {
	const { children, onSubmit, ...restProps } = props
	useEffect(() => {})

	return (
		<form onSubmit={onSubmit} {...restProps}>
			{children}
		</form>
	)
}

Form.Input = Input
Form.Error = Error
Form.UseField = UseField

Form.propTypes = propTypes

export default Form
