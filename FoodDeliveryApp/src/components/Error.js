import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  //   console.error("Error occurred:", error);
  return (
    <div className="error-container">
      <h1>
        {error.status} - {error.statusText || "Error"}
      </h1>
      <h2>Oops! Something went wrong.</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>
        Please check the URL or return to the <a href="/">home page</a>.
      </p>
    </div>
  );
};

export default Error;
