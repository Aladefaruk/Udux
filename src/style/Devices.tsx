const sizes = {
  // mobileS: "320px",
  // mobileM: "375px",
  mobile: "768px",
  laptop: "1024px",
  // laptop: "1024px",
  // laptopL: "1440px",
  // desktop: "2560px",
};


export const devices = {
  // mobileS: `(min-width: ${sizes.mobileS})`,
  // mobileM: `(min-width: ${sizes.mobileM})`,
  mobile: `(max-width: ${sizes.mobile})`,
  // tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  // laptopL: `(min-width: ${sizes.laptopL})`,
  // desktop: `(min-width: ${sizes.desktop})`,
};