import './App.css'
import Button from './Pages/Button';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Typography from './Pages/Typography';
import Theming from './Pages/Theming';
import {createTheme , ThemeProvider} from '@mui/material/styles'
import Text_Field from './Pages/TextField';
import MUIForm from './Pages/MUI-Form';

const theme = createTheme({
  palette: {
    primary:  {
      main : '#607d8b'
    },
    secondary: {
      main : '#212121'
    }
  },
  typography : {
    fontFamily : 'Quiksand'
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>    
      <BrowserRouter>
      <Routes>
        <Route path='/button' element={<Button />} />
        <Route path='/typography' element={<Typography />} />
        <Route path='/theming' element={<Theming />} />
        <Route path='/textField' element={<Text_Field />} />
        <Route path='/' element={<MUIForm />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
