import React from 'react'
import buzz from 'musquito'
import { cond, T } from 'ramda'

import { styled } from '@material-ui/core/styles'
import { ButtonBase } from '@material-ui/core'

const actionIs = actionType => (_, action) => actionType === action.type

const reducer = cond([
	[actionIs('playstart'), state => ({ ...state, playing: true })],
	[actionIs('stop'), state => ({ ...state, playing: false })],
	[actionIs('loadprogress'), state => ({ ...state, loading: true })],
	[actionIs('load'), state => ({ ...state, loading: false })],
	[T, state => state],
])

const StyledButtonBase = styled(ButtonBase)(
	({ backgroundColor = 'white', theme }) => {
		return {
			backgroundColor,
			padding: '1rem',
			height: '50vw',
			width: '50vw',
			position: 'relative',
			color: 'white',
			[theme.breakpoints.up('sm')]: {
				height: '25vw',
				width: '25vw',
			},
			[theme.breakpoints.up('md')]: {
				height: '20vw',
				width: '20vw',
			},
		}
	},
)

const Audiobutton = props => {
	const Icon = props.icon
	const [{ playing, loading }, dispatch] = React.useReducer(reducer, {
		playing: false,
		loading: false,
	})
	// const [enabled, toggle] = useToggle(false)
	const { current: buzzInstance } = React.useRef(
		buzz({
			src: props.src,
			loop: true,
			onplaystart: () => dispatch({ type: 'playstart' }),
			onstop: () => dispatch({ type: 'stop' }),
			onloadprogress: () => dispatch({ type: 'loadprogress' }),
			onload: () => dispatch({ type: 'load' }),
			onerror: console.error,
		}),
	)

	const toggle = () =>
		playing || loading ? buzzInstance.stop() : buzzInstance.play()

	console.log({ playing, loading })

	return (
		<StyledButtonBase {...props} onClick={toggle}>
			{loading && (
				<Icon
					style={{ fontSize: '4rem', opacity: 0.3, filter: 'blur' }}
				/>
			)}
			{playing && <Icon style={{ fontSize: '4rem' }} />}
		</StyledButtonBase>
	)
}

export default Audiobutton
