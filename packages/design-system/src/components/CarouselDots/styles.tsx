import { styled } from "@mui/material/styles";

export const CarouselDots = styled("ol")(({ theme }) => ({
  height: theme.spacing(5),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  padding: "0",
  margin: "0",
  listStyle: "none",
  textAlign: "center",

  ".slick-dotted.slick-slider": {
    marginBottom: "30px",
  },

  li: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: "20px",
    height: theme.spacing(5),
    margin: "0 5px",
    padding: "0",
  },

  button: {
    position: "relative",
    display: "block",
    fontSize: "0",
    width: "20px",
    height: "20px",
    padding: "0",
    cursor: "pointer",
    color: "currentColor",
    border: "0",
    outline: "none",
    background: "transparent",
  },

  "button:hover": {
    outline: "none",
  },
  "button:focus": {
    outline: "none",
  },

  "button::before": {
    fontSize: "2rem",
    lineHeight: "20px",
    position: "absolute",
    top: "0",
    left: "0",
    width: "20px",
    height: "20px",
    content: '"•"',
    textAlign: "center",
    color: "currentColor",
    opacity: "0.25",
    transition: "opacity 0.3s",
  },

  "button:hover::before": {
    opacity: 0.75,
  },

  "button:focus::before": {
    opacity: 0.75,
  },

  "li.slick-active button::before": {
    opacity: 1,
  },
}));
