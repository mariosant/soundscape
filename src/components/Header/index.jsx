import React from 'react'
import { Box, Typography, Container } from '@material-ui/core'

export default function App() {
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" color="white" marginY="2rem">
                <Typography variant="h4" component="h1" color="white">
                    Soundscape
                </Typography>
            </Box>
        </Container>
    )
}
