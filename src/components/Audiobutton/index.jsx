import React from 'react'
import buzz from 'musquito'
import { cond, T } from 'ramda'

import { styled } from '@material-ui/core/styles'
import { withStyles, ButtonBase, Slider, Box } from '@material-ui/core'

const StyledSlider = withStyles({
    rail: {
        color: 'white'
    },
    track: {
        color: 'white'
    },
    thumb: {
        color: 'white'
    },
    disabled: {
        opacity: 0.15
    }
})(Slider)

const actionIs = actionType => (_, action) => actionType === action.type

const reducer = cond([
    [actionIs('playstart'), state => ({ ...state, playing: true })],
    [actionIs('stop'), state => ({ ...state, playing: false })],
    [actionIs('loadprogress'), state => ({ ...state, loading: true })],
    [actionIs('load'), state => ({ ...state, loading: false })],
    [actionIs('volume'), (state, { payload }) => ({ ...state, volume: payload })],
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
    const [{ playing, loading, volume }, dispatch] = React.useReducer(reducer, {
        playing: false,
        loading: false,
        volume: 35,
    })

    const { current: buzzInstance } = React.useRef(
        buzz({
            src: props.src,
            loop: true,
            onplaystart: () => dispatch({ type: 'playstart' }),
            onstop: () => dispatch({ type: 'stop' }),
            onloadprogress: () => dispatch({ type: 'loadprogress' }),
            onload: () => dispatch({ type: 'load' }),
            onerror: console.error,
            volume: 1
        }),
    )

    const toggle = () =>
        playing || loading ? buzzInstance.stop() : buzzInstance.play()

    const handleVolumeChange = (e, v) => {
        e.preventDefault(); e.stopPropagation(); 

        dispatch({ type: 'volume', payload: v })
    }

    React.useEffect(() => {
        const gainNode = buzzInstance.gain();
        gainNode.gain.value = volume
    }, [buzzInstance, volume])

    return (
        <StyledButtonBase {...props} onClick={toggle}>
            {loading && (
                <Box width="60%">
                    <Box marginBottom="1rem">
                        <Icon
                            style={{ fontSize: '4rem', opacity: 0.3, filter: 'blur' }}
                        />
                    </Box>
                    <Box display="flex">
                        <StyledSlider disabled value={volume} min={0} max={50} />
                    </Box>
                </Box>
            )}
            {playing &&
                <Box width="60%">
                    <Box marginBottom="1rem">
                        <Icon style={{ fontSize: '4rem' }} onClick={toggle} />
                    </Box>
                    <Box display="flex">
                        <StyledSlider 
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={e => { e.stopPropagation() }} 
                            min={0}
                            max={50}
                            step={1}
                        />
                    </Box>
                </Box>
            }


        </StyledButtonBase>
    )
}

export default Audiobutton
