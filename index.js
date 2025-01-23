// Go Back Button Function
function goBack() {
    window.history.back();
}

// Smooth scroll for Explore button
// @ts-ignore
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault();
    // @ts-ignore
    document.querySelector('#explore-section').scrollIntoView({ behavior: 'smooth' });
});
// quiz


// Optional: Highlight the button when scrolling
// @ts-ignore
document.getElementById('explore-btn').addEventListener('click', function () {
    this.style.backgroundColor = "#726a00";
    setTimeout(() => {
        this.style.backgroundColor = "transparent";
    }, 500);
});
