console.log('render');

window.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('#btn')
    btn.addEventListener('click', () => {
        window.api.send()
    })
})