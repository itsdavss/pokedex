import { AppRoutes } from "./pages/AppRoutes";
import { GlobalStyle } from "./styles/global-styles";
import { ThemeProvider } from './contexts/theme-context'


function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
