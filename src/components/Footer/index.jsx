import React from "react";
import { Box, Typography, Container, Link } from "@material-ui/core";

export default () => {
	return (
		<Container maxWidth="sm">
			<Box textAlign="center" color="#888" marginY="2rem">
				<Typography variant="body1">
					an experiment by{" "}
					<Link color="inherit" target="_blank" href="https://mariosant.dev">
						mariosant
					</Link>{" "}
					-{" "}
					<Link
						color="inherit"
						target="_blank"
						href="https://github.com/mariosant/soundscape"
					>
						source
					</Link>
				</Typography>
			</Box>
		</Container>
	);
};
