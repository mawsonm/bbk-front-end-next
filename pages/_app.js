import "@/styles/globals.css";
import SnackbarContext, {
  SnackbarContextProvider,
} from "@/store/snackbar-context";
import { useContext } from "react";
import Snackbar from "@/components/general/snackbar";
import Portal from "@/components/general/portal";

export default function App({ Component, pageProps }) {
  const snackbarCtx = useContext(SnackbarContext);
  return (
    <SnackbarContextProvider>
      <Portal>{snackbarCtx && <Snackbar />}</Portal>
      <Component {...pageProps} />
    </SnackbarContextProvider>
  );
}
