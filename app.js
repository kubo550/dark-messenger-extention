const developMode = false;
let myOptions;

chrome.storage.sync.get(["settings"], ({ settings }) => {
  console.log(settings);
  // settings?.secondary
  developMode
    ? (myOptions = settings)
    : (myOptions = {
        primary: "#0d1b2a",
        secondary: "#a11d33",
        textColor: "#17c3b2",
        deg: 14,
        bgUrl:
          "https://i.pinimg.com/originals/7f/ea/17/7fea175e13ba4a4b29672d15b2497367.jpg",
      });
  setStyles(myOptions);
});

const addStyle = (style => {
  const sheet = document.head.appendChild(style).sheet;
  return (selector, css = {}) => {
    const propText = Object.entries(css).reduce(
      (a, c) => `${a + c.join(":")};`,
      ""
    );
    sheet.insertRule(`${selector}{${propText}}`, sheet.cssRules.length);
  };
})(document.createElement("style"));

setStyles = options => {
  const { primary, secondary, textColor, deg = 14, bgUrl } = options;
  console.log(`linear-gradient(${deg}deg, ${primary} 17%, ${secondary} 84%)`);

  const background = {
    "background-color": primary,
    "background-image": `linear-gradient(${deg}deg, ${primary} 17%, ${secondary} 84%)`,
  };
  const reverseBackground = {
    "background-color": primary,
    "background-image": `linear-gradient(${deg}deg, ${secondary} 17%, ${primary} 84%)`,
  };
  const color = {
    color: textColor,
    "font-family": "Verdana, Geneva, Tahoma, sans-serif",
  };
  const transparent = { background: "transparent" };

  // ? LeftSide----------
  // * LeftSide h1 "Chats"
  addStyle("._6-xo", color);

  // * Search Input
  addStyle("input._58al", color);
  addStyle("input._58al::placeholder", { color: "pink !important" });

  // * Search results names
  addStyle("._8slc", color);
  addStyle("._3q34", color);

  // * LeftSide Message Time
  addStyle(".timestamp", { color: "pink" });
  // * LeftSide menu
  addStyle("._1enh", background);

  // * LeftSide name spans
  addStyle("._1ht6", color);

  // ? Center -----------
  // * Header
  addStyle("._673w", reverseBackground);
  addStyle("._6ynn span", color);
  addStyle("._2v6o", color);

  // * LeftSide Names Spans
  addStyle("._1ht6", color);

  // * Main Content Container (presentation)
  addStyle("._1wfr", {
    "background-image": `url(${bgUrl})`,
    "background-size": "100% 100%",
    // "background-size": "cover",
    "background-position": "center",
  });

  // todo Single message
  addStyle("._3oh-", {
    "font-family":
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
  });

  // * Reaction emoticons div
  addStyle("._53ij", { background: primary });

  // * Responding info div
  addStyle("._67tu", { ...color, background: primary, border: "none" });

  // *  sb is writting msg div
  addStyle("._4gd0", transparent);

  // * Main Input to write
  addStyle("._5irm", background);
  addStyle("._1mf", color);

  // ? RightSide-----------
  // * Main rightside container
  addStyle("._3tkv", background);

  // ? Reset annoying default styles
  // * Remove whie lines
  addStyle("._4_j5", { border: "none" });
  addStyle("._1t2u", { border: "none" });

  // * Remove background from "Odpowiedzi"
  addStyle("._3egs", transparent);

  // * Set background for atachment div
  addStyle("._8rdt", { background: primary });
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const { primary, secondary, textColor, bgUrl } = request;
  myOptions.primary = primary;
  myOptions.secondary = secondary;
  myOptions.textColor = textColor;
  myOptions.bgUrl = bgUrl;

  console.log(myOptions);
  setStyles(myOptions);
});

// const images = {
//   strangerThings:
//     "https://i.pinimg.com/originals/1c/38/8d/1c388db9b547f00dc094ee11c7f70c08.jpg",
//   darkWallpaper: "https://i.ibb.co/YQL9JNr/dark-bg.jpg",
//   river:
//     "https://wallpaperboat.com/wp-content/uploads/2020/04/minimalist-4k-wallpaper-full-hd.jpg",
//   lake:
//     "https://i.pinimg.com/originals/7f/ea/17/7fea175e13ba4a4b29672d15b2497367.jpg",
// };
