export default function decorate(block) { 
    [...block.children].forEach((row) => {
        [...row.children].forEach((col) => {
            const avatar = document.createElement("div");
            avatar.innerText = "⌨";
            avatar.classList.add('avatar')
            col.appendChild(avatar);
        });
      });
}
