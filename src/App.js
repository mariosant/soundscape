import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Audioplayer from "./components/Audioplayer";

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
	typography: {
		fontFamily: [
			"Jost",
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
	},
});

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Header />
			<Audioplayer />
			<Footer />
		</ThemeProvider>
	);
}
