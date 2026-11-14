let nome_Jogador1 = ""
let nome_Jogador2 = ""
let num_Jogador1 = 0
let num_Jogador2 = 0
let tent_Jgd2 = 0
let fase = 1

function salvar_nome_Jogador1() {
    nome_Jogador1 = document.getElementById("input_nome_Jogador1").value
    fase ++
    document.getElementById("escolha_nome_Jogador1").classList.add("invisivel")
    atualizar_tela()
}

function salvar_nome_Jogador2() {
    nome_Jogador2 = document.getElementById("input_nome_Jogador2").value
    fase ++
    document.getElementById("escolha_nome_Jogador2").classList.add("invisivel")
    atualizar_tela()
}

function escolha_num_Jogador1() {
    num_Jogador1 = document.getElementById("input_num_Jogador1").value
    fase ++
    document.getElementById("escolha_num_secreto_Jogador1").classList.add("invisivel")
    atualizar_tela()
}

function tentativa_Jogador2() {
    tent_Jgd2 = document.getElementById("input_tentativa_Jogador2").value
    if (tent_Jgd2 == num_Jogador1) {
        document.getElementById("msg_Jgd2_advinhou").classList.remove("invisivel")
        fase ++
        document.getElementById("advinhacao_Jogador2").classList.add("invisivel")
        atualizar_tela()
    }
    else {
        document.getElementById("input_tentativa_Jogador2").value = ""
        document.createElement("p")
    }
}

function Proximo_Jogador() {
    fase ++
    document.getElementById("msg_Jgd2_advinhou").classList.add("invisivel")
    atualizar_tela()
}

function escolha_num_Jogador2() {
    num_Jogador2 = document.getElementById("input_num_Jogador2").value
    fase ++
    document.getElementById("escolha_num_secreto_Jogador2").classList.add("invisivel")
    atualizar_tela()
}

function tentativa_Jogador1() {
    tent_Jgd1 = document.getElementById("input_tentativa_Jogador1").value
    if (tent_Jgd1 == num_Jogador2) {
        document.getElementById("msg_Jgd1_advinhou").classList.remove("invisivel")
        fase ++
        document.getElementById("advinhacao_Jogador1").classList.add("invisivel")
        atualizar_tela()
    }
    else {
        document.getElementById("input_tentativa_Jogador1").value = ""
        document.createElement("p")
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
            break
        case 4:
            document.getElementById("advinhacao_Jogador2").classList.remove("invisivel")
            break
        case 5:
            document.getElementById("msg_Jgd2_advinhou").classList.remove("invisivel")
            break
        case 6:
            document.getElementById("escolha_num_secreto_Jogador2").classList.remove("invisivel")
            break
        case 7:
            document.getElementById("advinhacao_Jogador1").classList.remove("invisivel")
            break
        case 8:
            document.getElementById("msg_Jgd1_advinhou").classList.remove("invisivel")
            break
        case 9:
            document.getElementById("fim_de_jogo").classList.remove("invisivel")
            break
        default:
            break
    }
}

atualizar_tela()
