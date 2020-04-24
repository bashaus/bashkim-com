const jQueryImport = async () => {
  const jQuery = await import('jquery');
  window.jQuery = jQuery.default;

  return jQuery;
};

export default jQueryImport;
