import React from "react";
import buzz from "musquito";
import { cond, T } from "ramda";
import { motion } from "framer-motion"
import { styled } from "@material-ui/core/styles";
import { withStyles, Slider, Box, IconButton, LinearProgress } from "@material-ui/core";

buzz.setup({
    autoEnable: true,
});

const StyledSlider = withStyles({
    rail: {
        color: "white",
    },
    track: {
        color: "white",
    },
    thumb: {
        color: "white",
    },
    disabled: {
        opacity: 0.15,
    },
})(Slider);

const actionIs = (actionType) => (_, action) => actionType === action.type;

const reducer = cond([
    [actionIs("playstart"), (state) => ({ ...state, playing: true })],
    [actionIs("stop"), (state) => ({ ...state, playing: false })],
    [actionIs("loadprogress"), (state) => ({ ...state, loading: true })],
    [actionIs("load"), (state) => ({ ...state, loading: false })],
    [actionIs("volume"), (state, { payload }) => ({ ...state, volume: payload })],
    [T, (state) => state],
]);

const StyledBox = styled(Box)(({ backgroundColor = "white", theme }) => {
    return {
        padding: "1rem",
        color: "white",
    };
});

const Audiobutton = (props) => {
    const Icon = props.icon;
    const [{ playing, loading, volume }, dispatch] = React.useReducer(reducer, {
        playing: false,
        loading: false,
        volume: 8,
    });

    const { current: buzzInstance } = React.useRef(
        buzz({
            src: props.src,
            loop: true,
            onplaystart: () => dispatch({ type: "playstart" }),
            onstop: () => dispatch({ type: "stop" }),
            onloadprogress: () => dispatch({ type: "loadprogress" }),
            onload: () => dispatch({ type: "load" }),
            onerror: console.error,
            volume: 1,
        })
    );

    const toggle = () =>
        playing || loading ? buzzInstance.stop() : buzzInstance.play();

    const handleVolumeChange = (e, v) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch({ type: "volume", payload: v });
    };

    React.useEffect(() => {
        const gainNode = buzzInstance.gain();
        gainNode.gain.value = volume;
    }, [buzzInstance, volume]);

    const animationVariants = {
        disabled: {
            opacity: 0.2,
            filter: 'blur(0)'
        },
        loading: {
            opacity: 0.05
            // filter: 'blur(7px)'
        },
        playing: {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)'

        }
    }

    const animationState = playing ? 'playing' : loading ? 'loading' : 'disabled'

    return (
        <StyledBox {...props}>
            <motion.div animate={animationState} initial="disabled" variants={animationVariants}>
                <IconButton onClick={toggle}>
                    <Icon
                        style={{
                            color: "white",
                            fontSize: "4rem",
                        }}
                    />
                </IconButton>
            </motion.div>
            <Box display="flex">
                <StyledSlider
                    disabled={!playing}
                    value={volume}
                    onChange={handleVolumeChange}
                    min={0}
                    max={10}
                    step={1}
                />
            </Box>
        </StyledBox>
    );
};

export default Audiobutton;
