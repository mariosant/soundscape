import React from "react";
import { Box, Typography, Container, styled } from "@material-ui/core";

const StyledContainer = styled(Container)({
	paddingBottom: "2rem",
	paddingTop: "2rem",
	position: "sticky",
	top: 0,
	zIndex: 1000,
	backdropFilter: "blur(10px)",
});

export default function App() {
	return (
		<StyledContainer maxWidth="sm">
			<Box textAlign="center" color="#888">
				<Typography variant="h4" component="h1">
					soundscape
				</Typography>
			</Box>
		</StyledContainer>
	);
}
