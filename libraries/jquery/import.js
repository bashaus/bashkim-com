export default async function jQueryImport() {
  const jQuery = await import('jquery');
  window.jQuery = jQuery.default;

  return jQuery;
}
