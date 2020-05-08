import React from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core'
import Header from './components/Header'
import Footer from './components/Footer'
import Audioplayer from './components/Audioplayer'

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Header />
			<Audioplayer />
			<Footer />
		</ThemeProvider>
	)
}
