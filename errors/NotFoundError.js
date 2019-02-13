export default class NotFoundError extends Error {
  constructor(...args) {
    super(...args);

    this.code = 'ENOENT';
  }
}
