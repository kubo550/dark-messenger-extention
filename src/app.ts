import { getBackground, getColor, getBgImg } from "./utils/functions"
import { addStyle } from "./utils/addStyle"
import { optionInterface } from "./popup/Popup"


let options: optionInterface = {
    primary: "#0d1b2a",
    secondary: "#a11d33",
    textColor: "#17c3b2",
    angle: 14,
    power: 20,
    bgUrl: "https://i.pinimg.com/originals/7f/ea/17/7fea175e13ba4a4b29672d15b2497367.jpg",
}

const backgroundStyles = ["._1enh", "._5irm", "._3tkv"]
const colorStyles = ["._6-xo", "._58al", "._8slc", "._3q34", "._1ht6", "._2v6o", "._1mf", "._6ynn span"]
const bgPrimary = ["._53ij", "._8rdt", "._4rv3"]

const reStyles = () => {
    const background = getBackground(options)
    const reverseBackground = getBackground(options, false)
    const color = getColor(options)
    const bgImg = getBgImg(options)
    const transparent = { background: "transparent" }

    addStyle("._673w", reverseBackground);
    addStyle("._1wfr", bgImg);
    addStyle("._4gd0", transparent);
    addStyle("._3egs", transparent);
    addStyle("._58al::placeholder", { color: "pink !important" });
    addStyle(".timestamp", { color: "pink" });
    addStyle("._67tu", { ...color, background: options.primary, border: "none" });
    addStyle("._4_j5", { border: "none" });
    addStyle("._1t2u", { border: "none" });

    backgroundStyles.forEach(b => addStyle(b, background))
    colorStyles.forEach(c => addStyle(c, color))
    bgPrimary.forEach(p => addStyle(p, { background: options.primary }))
}
reStyles();




