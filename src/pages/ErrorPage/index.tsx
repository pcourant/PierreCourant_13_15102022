import { useRouteError } from 'react-router-dom';

type ErrorResponse = {
  statusText?: string;
  message?: string;
};

const ErrorPage = () => {
  // Type Assertions because @types/react-router-dom is not updated to v6.4 ?
  const error = useRouteError() as ErrorResponse;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
