import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { AuthProvider, CharacterProvider, TooltipProvider } from './contexts'
import App from './App.tsx'
// import { ChatProvider } from './contexts/ChatContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <CharacterProvider>
          <TooltipProvider>
            {/* <ChatProvider> */}
              <App />
            {/* </ChatProvider> */}
          </TooltipProvider>
        </CharacterProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
