const tabList = document.querySelector(".tabs");

tabList.addEventListener("click", (e) => {
if (e.target.classList.contains("active")) return;

const tabIndex = e.target.dataset.tab;
if (!tabIndex) return;

const tabs = document.querySelectorAll("[data-tab]");
Array.from(tabs).forEach((tab) => {
    if (tab.dataset.tab === tabIndex) {
    tab.classList.add("active");
    } else {
    tab.classList.remove("active");
    }
});

const activePanel = document.querySelector(".panel.active");
const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
activePanel.classList.add("close");
activePanel.addEventListener(
    "animationend",
    (e) => {
    activePanel.classList.remove("active");
    activePanel.classList.remove("close");
    toActivePanel.classList.add("active");
    },
    {
    once: true,
    }
);
});


const boxes = document.querySelectorAll(".box");
const triggerBottom = window.innerHeight / 2 * 5;

const checkBoxes = () => {
boxes.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
    box.classList.add("show");
    } else {
    box.classList.remove("show");
    }
});
};

window.addEventListener("scroll", checkBoxes);
checkBoxes();