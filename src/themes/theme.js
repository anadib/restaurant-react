const base = {
  colors: {
    yellow: "#FDC844",
    pink: "#FF2351",
    darkGrey: "#848484",
    lightGrey: "#DADADA",
    lightYellow: "#FDC8444D",
    bgColor: "#FAFAFA",
    errorColor: "#fa3b3b",
  },
  medias: {
    smallDesktop: "screen and (max-width: 1265px)",
    tablets: "screen and (max-width: 767px)",
    smartphones: "screen and (max-width: 555px)",
  },
};

const theme = {
  default: {
    ...base,
  },
};

export default theme;
