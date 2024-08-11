// script.js
document.addEventListener('DOMContentLoaded', () => {
    const column2 = document.querySelector('.column2');
    const column3 = document.querySelector('.column3');

    const syncScroll = () => {
        // Get the scrollable height of column3
        const maxScrollTopColumn3 = column3.scrollHeight - column3.clientHeight;

        if (column3.scrollTop < maxScrollTopColumn3) {
            // Sync column2 scroll with column3 until column3 is fully visible
            column2.scrollTop = column3.scrollTop;
        }
    };

    column2.addEventListener('scroll', syncScroll);
    column3.addEventListener('scroll', syncScroll);

    // Make column3 scrollable only until its content is fully visible
    const checkColumn3Scroll = () => {
        const maxScrollTopColumn3 = column3.scrollHeight - column3.clientHeight;
        if (column3.scrollTop >= maxScrollTopColumn3) {
            column3.scrollTop = maxScrollTopColumn3; // Ensure it stops at the bottom
        }
    };

    column3.addEventListener('scroll', checkColumn3Scroll);
});
