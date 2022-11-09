import Application from "./components/application/Application"
import Counter from "./components/counter/Counter"
import { MuiMode } from "./components/mui/MuiMode"
import { AppProviders } from "./components/providers/AppProviders"

function App() {
	return (
		<div className='App'>
			<h1>RTL Practice</h1>
      <Application />
      <Counter />
      <AppProviders>
        <MuiMode />
      </AppProviders>
		</div>
	)
}

export default App
