AOS.init();

document.getElementById("home_btn_sticky").dataset.aos = "flip-right";
document.getElementById("home_btn_sticky").dataset.aosAnchor = "#apropos";

document.querySelectorAll(".btn_menu_principal").forEach(
    element => {
        element.dataset.aos = "flip-left"
        element.dataset.aosEasing = "linear"
        element.dataset.aosMirror = "true"
        element.dataset.aosDelay = "200"
    }
);

document.querySelectorAll("#apropos div").forEach(
    element => {
        element.dataset.aos = "fade-down"
        element.dataset.aosEasing = "linear"
        element.dataset.aosMirror = "true"
    }
);

document.querySelectorAll("#competences .progress-bar").forEach(
    element => {
        element.dataset.aos = "slide-right"
        element.dataset.aosEasing = "ease-in-out-quad"
        element.dataset.aosDuration = "1000"
        element.dataset.aosMirror = "false"
        element.dataset.aosAnchor = "#competences"
    }
);

document.querySelectorAll("#experiences div[class^=barre]").forEach(
    element => {
        element.dataset.aos = "slide-up"
        element.dataset.aosEasing = "linear"
        element.dataset.aosDuration = "1000"
        element.dataset.aosMirror = "false"
        element.dataset.aosAnchor = "#experiences"
    }
);

document.querySelectorAll("#diplomes div[class^=barre]").forEach(
    element => {
        element.dataset.aos = "slide-up"
        element.dataset.aosEasing = "linear"
        element.dataset.aosDuration = "1000"
        element.dataset.aosMirror = "false"
        element.dataset.aosAnchor = "#diplomes"
    }
);

document.querySelectorAll(".point").forEach(
    element => {
        element.dataset.aos = "zoom-in" ,
        element.dataset.aosEasing = "linear" ,
        element.dataset.aosDuration = "1000" ,
        element.dataset.aosDelay = "500" ,
        element.dataset.aosMirror = "false"
    }
);

document.querySelectorAll("#port-folio div[id^=\"logo\"]").forEach(
    element => {
        element.dataset.aos = "slide-right"
        element.dataset.aosEasing = "ease-in-out-back"
        element.dataset.aosDuration = "1000"
        element.dataset.aosMirror = "false"
    }
);

document.querySelectorAll("#contact div").forEach(
    element => {
        element.dataset.aos = "fade-down"
        element.dataset.aosEasing = "ease-in-out"
        element.dataset.aosDuration = "1000"
        element.dataset.aosMirror = "false"
    }
);

AOS.refreshHard();