import "../styles/globals.css";
import "antd/dist/antd.css";
import Headers from "./components/Header";
import Footer from "./components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="my-app-container">
      <div className="my-app-headers">
        <Headers />
      </div>
      <Component {...pageProps} />
      <div className="my-app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default MyApp;
