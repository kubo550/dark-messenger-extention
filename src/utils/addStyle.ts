export const addStyle = (style => {
    const sheet = document.head.appendChild(style).sheet;
    return (selector: string, css = {}) => {
        const propText = Object.entries(css).reduce((a, c) => `${a + c.join(":")};`, "");

        (sheet as CSSStyleSheet).insertRule(selector + "{" + propText + "}", (sheet as CSSStyleSheet).cssRules.length)
    };
})(document.createElement("style"));
