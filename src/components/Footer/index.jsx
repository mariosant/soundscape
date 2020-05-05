import React from 'react'
import { Box, Typography } from '@material-ui/core'

export default () => {
	return (
		<Box display="flex">
			<Box
				padding={2}
				style={{
					backgroundColor: '#FFD600',
					boxSizing: 'border-box',
					flexGrow: 1,
					color: '#263238',
				}}
			>
				<Typography variant="body1" color="white">
					Developed by{' '}
					<a
						href="https://github.com/mariosant"
						target="_blank"
						rel="noopener noreferrer"
					>
						mariosant
					</a>
				</Typography>
			</Box>
			<Box
				style={{ backgroundColor: '#01579B', width: '50vw' }}
				display={{ xs: 'none', sm: 'block' }}
			/>
		</Box>
	)
}
