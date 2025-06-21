const descriptions = [
    'really brainroted individual.',
    'proffesional <br /> hater.',
    'sleeping <br /> expert.',
    'certified reel sender.'
];

let activeId = 0;
const desc_element = document.getElementById('Desc_text');
const desc_ids = document.getElementsByClassName('Desc_id');

desc_element.innerHTML = descriptions[activeId];
desc_ids[activeId].classList.add('active_id');

// Store interval ID
let interval = setInterval(changeDescription, 5000);

function changeDescription() {
    // Remove all highlights
    for (let i = 0; i < desc_ids.length; i++) {
        desc_ids[i].classList.remove('active_id');
    }

    // Update ID and content
    activeId = (activeId + 1) % descriptions.length;
    desc_element.innerHTML = descriptions[activeId];
    desc_ids[activeId].classList.add('active_id');
}

// Add click listeners
Array.from(desc_ids).forEach((e, idx) => {
    e.addEventListener('click', () => {
        // Clear and restart interval
        clearInterval(interval);
        interval = setInterval(changeDescription, 5000);

        // Update manually
        for (let i = 0; i < desc_ids.length; i++) {
            desc_ids[i].classList.remove('active_id');
        }
        activeId = idx;
        desc_element.innerHTML = descriptions[activeId];
        desc_ids[activeId].classList.add('active_id');
    });
});


