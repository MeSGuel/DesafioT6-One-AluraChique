let myObservation = new IntersectionObserver(entries => showHideElements(entries));

function showHideElements(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.remove('hidden-scroll');
            entry.target.classList.add('show-scroll');
        } else {
            entry.target.classList.add('hidden-scroll');
            entry.target.classList.remove('show-scroll');
        }
    })
}
