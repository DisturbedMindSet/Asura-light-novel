document.addEventListener('click',e=> {
    const isDropdownButton = e.target.matches('js-dropdown-button')
    if(!isDropdownButton && e.target.closest('js-dropdown')!=null) return

    let currentDropdown
    if(isDropdownButton){
        currentDropdown=e.target.closest('js-dropdown')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("js-dropdown".active).forEach(dropdown=> {
        if (dropdown===currentDropdown) return
        dropdown.classList.remove('active')
    })
})