import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <section className="not-found-section">
            <Helmet>
                <title>404 - Page Not Found</title>
            </Helmet>
            <div className="not-found-container">
                <div className="error-code-wrapper">
                    <span className="digit">4</span>
                    <span className="digit bouncing-zero">0</span>
                    <span className="digit">4</span>
                </div>
                <h1 className="error-title">Oops! Page Not Found</h1>
                <p className="error-message">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>
                <Link to="/" className="back-home-btn">
                    <span className="btn-text">Back to Home</span>
                    <div className="btn-glow"></div>
                </Link>
            </div>
        </section>
    );
};

export default NotFound;
