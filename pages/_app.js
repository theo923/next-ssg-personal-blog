import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/prism-material-dark.css";
import "../styles/common.css";
import "../styles/blog.css";
import "../styles/contact.css";
import "../styles/about.css";
import "../styles/about-project.css";
import "../styles/project.css";
import "../styles/content.css";
import "../styles/footer.css";
import "../styles/nav.css";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
