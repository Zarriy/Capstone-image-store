import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div id="error-page">
      <h1>Opps !</h1>
      <p>Sorry, an unexpected error Occured</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
