import $ from "jquery";

if (typeof window !== typeof undefined) {
  window.$ = $;
  window.jQuery = $;
}

export default $;
