/**
 * Creates an error to be thrown from inside getInitialProps
 * when you want to return a 404 error
 *
 * @example
 * Component.getInitialProps = function (context:NextPageContext) {
 *  if (error) {
 *    throw new NotFoundError();
 *  }
 * }
 */

class NotFoundError extends Error {
  code = 'ENOENT';
}

export default NotFoundError;
