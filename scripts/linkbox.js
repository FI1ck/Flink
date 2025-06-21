const linkbox_arr = document.getElementsByClassName('link_box');

Array.from(linkbox_arr).forEach((e) => {
    e.style.height = '55px';
    e.dataset.expanded = 'false'; // Initial collapsed state

    const arrow = e.querySelector('.arrow_down'); // Get the arrow inside this link_box

    e.addEventListener('click', () => {
        const isExpanded = e.dataset.expanded === 'true';

        if (!isExpanded) {
            e.style.height = 'fit-content';
            e.dataset.expanded = 'true';

            if (arrow) arrow.style.transform = 'rotate(180deg)';
        } else {
            e.style.height = '55px';
            e.dataset.expanded = 'false';

            if (arrow) arrow.style.transform = 'rotate(0deg)';
        }
    });
});
