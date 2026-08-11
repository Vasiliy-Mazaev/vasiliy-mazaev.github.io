// Делает все фотографии в тэге <figure> кликальбельными.
// При нажатии открывается в нофом окне в полном размере.
// Скрипт подключен в _layout/default.html

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("figure img").forEach(function (img) {
        const link = document.createElement("a");

        link.href = img.src;
        link.target = "_blank";
        link.rel = "noopener";

        img.parentNode.insertBefore(link, img);
        link.appendChild(img);
    });
});