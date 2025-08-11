export function Dropdown() {
    const initDropdowns = () => {
        const dropdowns = document.querySelectorAll(".dropdown");
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector(".dropdown-toggle");
            const menu = dropdown.querySelector(".dropdown-menu");

            toggle.addEventListener("click", (e) => {

                // Prevent the listener from closing the menu immediately
                e.stopPropagation();
                dropdowns.forEach(other => {
                    if (other !== dropdown) {
                        other.querySelector(".dropdown-menu").classList.remove("visible");
                    }
                });
                menu.classList.toggle("visible");
            });

            document.addEventListener("click", (e) => {
                if (!dropdown.contains(e.target)) {
                    menu.classList.remove("visible");
                }
            })
        });
    };

    return {initDropdowns};
}