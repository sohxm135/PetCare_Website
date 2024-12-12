function toggleFAQ(element) {
    const content = element.nextElementSibling;
    const plusSign = element.querySelector(".FAQ-plus");

    if (content.style.display === "none" || !content.style.display) {
        content.style.display = "block";
        plusSign.innerHTML = "-";
    } else {
        content.style.display = "none";
        plusSign.innerHTML = "+";
    }
}
