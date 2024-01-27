
const $count = document.querySelector("i")
let progress = 0

setInterval(
    ()=>{
        progress++
        $count.innerText = `${progress}%`
        if (progress === 100)
            progress = 0
    }, 80
)

