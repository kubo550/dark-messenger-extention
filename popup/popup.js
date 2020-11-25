const primaryColorWrite = document.querySelector("#primary-color");
const primaryColorRead = document.querySelector("#primary");
const secondaryColorWrite = document.querySelector("#secondary-color");
const secondaryColorRead = document.querySelector("#secondary");
const textColorWrite = document.querySelector("#text-color");
const textColorRead = document.querySelector("#text");
const bgUrlInput = document.querySelector("#bg-url");

const previewLeft = document.querySelector(".preview-left");
const previewTop = document.querySelector(".preview-top");
const previewMenu = document.querySelector(".preview-menu");
const previewBg = document.querySelector(".preview-bg");

const saveBtn = document.querySelector("#save");

let options = {};

chrome.storage.sync.get(["settings"], ({ settings }) => {
  settings?.secondary
    ? (options = settings)
    : (options = {
        primary: "#000000",
        secondary: "#000000",
        textColor: "#ffffff",
        bgUrl: "",
      });
  setPreviewColors(options);
});

const setText = (el, content) => (el.value = content);

setPreviewColors = () => {
  const { primary, secondary, textColor, bgUrl } = options;
  previewLeft.style.backgroundColor = secondary;
  previewLeft.style.color = textColor;

  previewTop.style.backgroundColor = primary;
  previewTop.style.color = textColor;
  previewTop.style.backgroundImage = `linear-gradient(14deg, ${secondary} 17%, ${primary} 84%)`;

  previewMenu.style.backgroundColor = primary;
  previewMenu.style.backgroundImage = `linear-gradient(14deg, ${primary} 17%, ${secondary} 84%)`;

  previewBg.style.backgroundColor = primary;
  previewBg.style.backgroundImage = `url(${bgUrl})`;
  previewBg.style.backgroundSize = `cover`;
  previewBg.style.backgroundPosition = `center`;
};

primaryColorWrite.addEventListener("change", ({ target: { value } }) => {
  setText(primaryColorRead, value);
  options.primary = value;
  setPreviewColors();
});
primaryColorRead.addEventListener("change", ({ target: { value } }) => {
  options.primary = value;
  setPreviewColors();
});

secondaryColorWrite.addEventListener("change", ({ target: { value } }) => {
  setText(secondaryColorRead, value);
  options.secondary = value;
  setPreviewColors();
});
secondaryColorRead.addEventListener("change", ({ target: { value } }) => {
  options.secondary = value;
  setPreviewColors();
});

textColorWrite.addEventListener("change", ({ target: { value } }) => {
  setText(textColorRead, value);
  options.textColor = value;
  setPreviewColors();
});
textColorRead.addEventListener("cahnge", ({ target: { value } }) => {
  options.textColor = value;
  setPreviewColors();
});

bgUrlInput.addEventListener("change", ({ target: { value } }) => {
  options.bgUrl = value;
  setPreviewColors();
});

saveBtn.addEventListener("click", async () => {
  chrome.storage.sync.set({ settings: options }, () => {
    console.log("value set with no problems");
  });

  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, options);
  });
});
