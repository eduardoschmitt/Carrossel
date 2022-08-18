let page = 1

const botoes = document.querySelectorAll(".botao");
const trade = document.querySelector(".trade")

botoes.forEach(function(botao) {
    botao.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        console.log(botoes)
        console.log(styles)

        if (styles.contains("esquerdo")) {
            page--;
        } else if (styles.contains("direito")){
            page++;
        }

        if (page <= -1) {
            page = 2
        } else if (page >= 3) {
            page = 0
        }
        

        if (page == 0) {
            trade.innerHTML = `<img src="img/twitter.png" alt="">
            <h6>Twitter</h6>
            <p>Função: Quebrar códigos</p>
            <p>Grito de guerra: cade o banheiro?</p>`
        } else if (page == 1){
            trade.innerHTML = `<img src="img/google.png" alt="">
            <h6>Google</h6>
            <p>Função: Buscador</p>
            <p>Grito de guerra: aaaaaaaaaaaa</p>`
        } else {
            trade.innerHTML = `<img src="img/instagram.png" alt="">
            <h6>???</h6>
            <p>Função: ???</p>
            <p>Grito de guerra: ???</p>`
        }

        console.log(page)
    })
})