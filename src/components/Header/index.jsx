import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default function App() {
	return (
		<Box display="flex">
			<Box
				padding={2}
				style={{
					backgroundColor: '#263238',
					boxSizing: 'border-box',
					color: 'white',
				}}
				flexGrow={1}
			>
				<Typography variant="h4" component="h1" color="white">
					Soundscape
				</Typography>
			</Box>
			<Box
				style={{ backgroundColor: '#FFD600', width: '50vw' }}
				display={{ xs: 'none', sm: 'block' }}
			/>
		</Box>
	)
}
