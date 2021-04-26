import 'typeface-work-sans';
import {
  createMuiTheme,
  Theme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { ReactNode } from "react"

interface Props {
  children: ReactNode;
};

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#791abe',
    },
    secondary: {
      main: '#ffff',
    },
  },
  typography: {
    fontFamily: 'Work Sans',
  },
});

const ThemeProvider: React.FC<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme}>
    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
