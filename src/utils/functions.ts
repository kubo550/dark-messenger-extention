import { optionInterface } from "../popup/Popup"

export const getBackground = (options: optionInterface, isNormalDir = true) => {
    const { primary, secondary } = options
    return {
        "background-color": primary,
        "background-image": `linear-gradient(17deg, ${isNormalDir ? primary : secondary} 17%, ${isNormalDir ? secondary : primary} 84%)`,
    }
}


export const getColor = (options: optionInterface) => {
    const { textColor } = options
    return {
        color: textColor,
        "font-family": "Verdana, Geneva, Tahoma, sans-serif",
    }
};


export const getBgImg = (options: optionInterface) => {
    const { bgUrl } = options
    return {
        "background-image": `url(${bgUrl})`,
        "background-size": "100% 100%",
        "background-position": "center",
    }
}