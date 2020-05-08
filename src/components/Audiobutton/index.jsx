import React from 'react'
import buzz from 'musquito'
import { cond, T } from 'ramda'

import { styled } from '@material-ui/core/styles'
import { withStyles, ButtonBase, Slider, Box, IconButton } from '@material-ui/core'

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

const StyledBox = styled(Box)(
    ({ backgroundColor = 'white', theme }) => {
        return {
            padding: '1rem',
            color: 'white',
        }
    },
)

const Audiobutton = props => {
    const Icon = props.icon
    const [{ playing, loading, volume }, dispatch] = React.useReducer(reducer, {
        playing: false,
        loading: false,
        volume: 8,
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
        <StyledBox {...props}>
            {!playing && !loading && (
                <>
                    <IconButton marginBottom="1rem" onClick={toggle}>
                        <Icon
                            style={{ color: 'white', fontSize: '4rem', opacity: 0.2, filter: 'blur' }}
                        />
                    </IconButton>
                    <Box display="flex">
                        <StyledSlider disabled value={volume} min={0} max={10} />
                    </Box>
                </>
            )}

            {loading && (
                <>
                    <IconButton marginBottom="1rem" onClick={toggle} color="white">

                        <Icon
                            style={{color: 'white', fontSize: '4rem', opacity: 0.5, filter: 'blur' }}
                        />
                    </IconButton>
                    <Box display="flex">
                        <StyledSlider disabled value={volume} min={0} max={10} />
                    </Box>
                </>
            )}
            {playing &&
                <>
                    <IconButton marginBottom="1rem" onClick={toggle} color="white">

                        <Icon style={{ color: 'white', fontSize: '4rem' }}/>
                    </IconButton>
                    <Box display="flex">
                        <StyledSlider
                            value={volume}
                            onChange={handleVolumeChange}
                            onClick={e => { e.stopPropagation() }}
                            min={0}
                            max={10}
                            step={1}
                        />
                    </Box>
                </>
            }
        </StyledBox>
    )
}

export default Audiobutton
