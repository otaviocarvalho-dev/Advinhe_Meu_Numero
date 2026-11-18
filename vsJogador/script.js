let nome_Jogador1 = ""
let nome_Jogador2 = ""
let num_Jogador1 = 0
let num_Jogador2 = 0
let tent_Jgd1 = 0
let tent_Jgd2 = 0
let num_tent_Jgd1 = 0
let num_tent_Jgd2 = 0
let fase = 1

function salvar_nome_Jogador1() {
    nome_Jogador1 = document.getElementById("input_nome_Jogador1").value
    document.getElementById("escolha_nome_Jogador1").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function salvar_nome_Jogador2() {
    nome_Jogador2 = document.getElementById("input_nome_Jogador2").value
    document.getElementById("escolha_nome_Jogador2").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function escolha_num_Jogador1() {
    num_Jogador1 = document.getElementById("input_num_Jogador1").value
    document.getElementById("escolha_num_secreto_Jogador1").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function tentativa_Jogador2() {
    tent_Jgd2 = Number(
        document.getElementById("input_tentativa_Jogador2").value
    )
    if (tent_Jgd2 === Number(num_Jogador1)) {
        document.getElementById("advinhacao_Jogador2").classList.add("invisivel")
        document.getElementById("msg_Jgd2_advinhou").classList.remove("invisivel")
        num_tent_Jgd2 ++
        fase ++
        atualizar_tela()
    }
    else {
        num_tent_Jgd2 ++
        document.getElementById("input_tentativa_Jogador2").value = ""
    }
}

function Proximo_Jogador() {
    document.getElementById("msg_Jgd2_advinhou").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function escolha_num_Jogador2() {
    num_Jogador2 = document.getElementById("input_num_Jogador2").value
    document.getElementById("escolha_num_secreto_Jogador2").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function tentativa_Jogador1() {
    tent_Jgd1 = Number(
        document.getElementById("input_tentativa_Jogador1").value
    )
    if (tent_Jgd1 === Number(num_Jogador2)) {
        document.getElementById("advinhacao_Jogador1").classList.add("invisivel")
        document.getElementById("msg_Jgd1_advinhou").classList.remove("invisivel")
        num_tent_Jgd1 ++
        fase ++
        atualizar_tela()
    }
    else {
        num_tent_Jgd1 ++
        document.getElementById("input_tentativa_Jogador1").value = ""
    }
}

function Mostrar_Placar() {
    document.getElementById("msg_Jgd1_advinhou").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function atualizar_tela() {
    switch (fase) {
        case 1:
            document.getElementById("escolha_nome_Jogador1").classList.remove("invisivel")
            break
        case 2:
            document.getElementById("escolha_nome_Jogador2").classList.remove("invisivel")
            break
        case 3:
            document.getElementById("escolha_num_secreto_Jogador1").classList.remove("invisivel")
            document.getElementById("h3_Nome_Jogador1").textContent = nome_Jogador1
            break
        case 4:
            document.getElementById("advinhacao_Jogador2").classList.remove("invisivel")
            document.getElementById("h3_Nome_Jogador2").textContent = nome_Jogador2
            break
        case 5:
            document.getElementById("msg_Jgd2_advinhou").classList.remove("invisivel")
            document.getElementById("h3_Parabens_Jogador2").textContent = "PARABÉNS, " + nome_Jogador2 + "!"
            document.getElementById("h3_Parabens_Jogador2").style.textTransform = "uppercase"
            document.getElementById("num_secreto_destacado_Jogador2").textContent = tent_Jgd2
            document.getElementById("msg_num_tentativas_Jogador2").textContent = "Número de tentativas: " + num_tent_Jgd2
            break
        case 6:
            document.getElementById("escolha_num_secreto_Jogador2").classList.remove("invisivel")
            document.getElementById("h3_Nome_Jgd2").textContent = nome_Jogador2
            break
        case 7:
            document.getElementById("advinhacao_Jogador1").classList.remove("invisivel")
            document.getElementById("h3_Nome_Jgd1").textContent = nome_Jogador1
            break
        case 8:
            document.getElementById("msg_Jgd1_advinhou").classList.remove("invisivel")
            document.getElementById("h3_Parabens_Jogador1").textContent = "PARABÉNS, " + nome_Jogador1 + "!"
            document.getElementById("h3_Parabens_Jogador1").style.textTransform = "uppercase"
            document.getElementById("num_secreto_destacado_Jogador1").textContent = tent_Jgd1
            document.getElementById("msg_num_tentativas_Jogador1").textContent = "Número de tentativas: " + num_tent_Jgd1
            break
        case 9:
            document.getElementById("fim_de_jogo").classList.remove("invisivel")
            break
        default:
            break
    }
}

atualizar_tela()
