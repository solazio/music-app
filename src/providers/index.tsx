import StoreProvider from "./StoreProvider";
import ThemeProvider from "./ThemeProvider";
import { ReactNode } from "react"

interface Props {
  children: ReactNode;
};

const Providers: React.FC<Props> = ({ children }) => (
  <StoreProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </StoreProvider>
);

export default Providers;
