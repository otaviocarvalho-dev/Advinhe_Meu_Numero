let nome_Jogador1 = ""
let nome_Jogador2 = ""
let num_Jogador1 = 0
let num_Jogador2 = 0
let tent_Jgd1 = 0
let tent_Jgd2 = 0
let num_tent_Jgd1 = 0
let num_tent_Jgd2 = 0
let num_partidas = 0
let fase = 1

function salvar_nome_Jogador1() {
    nome_Jogador1 = document.getElementById("input_nome_Jogador1").value.trim()
    document.getElementById("escolha_nome_Jogador1").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function salvar_nome_Jogador2() {
    nome_Jogador2 = document.getElementById("input_nome_Jogador2").value.trim()
    document.getElementById("escolha_nome_Jogador2").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function escolha_num_Jogador1() {
    document.getElementById("erro_num_max1").classList.add("invisivel")
    if (document.getElementById("input_num_Jogador1").value.trim() < 501 && document.getElementById("input_num_Jogador1").value.trim() !== "") {
        num_Jogador1 = document.getElementById("input_num_Jogador1").value.trim()
        document.getElementById("escolha_num_secreto_Jogador1").classList.add("invisivel")
        document.getElementById("input_num_Jogador1").value = ""
        fase ++
        atualizar_tela()
    }
    else if (document.getElementById("input_num_Jogador1").value.trim() > 500) {
        const erro_num_max1 = document.getElementById("input_num_Jogador1").value.trim() > 500
        document.getElementById("input_num_Jogador1").value = ""
        document.getElementById("input_num_Jogador1").style.borderColor = "red"
        document.getElementById("erro_num_max1").classList.toggle("invisivel", !erro_num_max1)
    }
    else {
        const erro_num_max1 = document.getElementById("input_num_Jogador1").value.trim() === ""
        document.getElementById("input_num_Jogador1").value = ""
        document.getElementById("input_num_Jogador1").style.borderColor = "red"
        document.getElementById("erro_num_max1").classList.toggle("invisivel", !erro_num_max1)
    }
}

function tentativa_Jogador2() {
    if (document.getElementById("input_tentativa_Jogador2").value.trim() < 501 && document.getElementById("input_tentativa_Jogador2").value.trim() !== "") {
        tent_Jgd2 = Number(
            document.getElementById("input_tentativa_Jogador2").value.trim()
        )
        if (tent_Jgd2 === Number(num_Jogador1)) {
            document.getElementById("advinhacao_Jogador2").classList.add("invisivel")
            document.getElementById("msg_Jgd2_advinhou").classList.remove("invisivel")
            document.getElementById("input_tentativa_Jogador2").value = ""
            num_tent_Jgd2 ++
            fase ++
            atualizar_tela()
        }
        else {
            num_tent_Jgd2 ++
            document.getElementById("input_tentativa_Jogador2").value = ""
        }
    }
    else if (document.getElementById("input_tentativa_Jogador2").value.trim() > 500) {
        const erro_tent_num_max2 = document.getElementById("input_num_Jogador2").value.trim() > 500
        document.getElementById("input_tentativa_Jogador2").value = ""
        document.getElementById("input_tentativa_Jogador2").style.borderColor = "red"
        document.getElementById("erro_tent_num_max2").classList.toggle("invisivel", !erro_tent_num_max2)
    }
    else {
        const erro_tent_num_max2 = document.getElementById("input_tentativa_Jogador2").value.trim() === ""
        document.getElementById("input_tentativa_Jogador2").value = ""
        document.getElementById("input_tentativa_Jogador2").style.borderColor = "red"
        document.getElementById("erro_tent_num_max2").classList.toggle("invisivel", !erro_tent_num_max2)
    }
}

function Proximo_Jogador() {
    document.getElementById("msg_Jgd2_advinhou").classList.add("invisivel")
    fase ++
    atualizar_tela()
}

function escolha_num_Jogador2() {
    document.getElementById("erro_num_max2").classList.add("invisivel")
    if (document.getElementById("input_num_Jogador2").value < 501) {
        num_Jogador2 = document.getElementById("input_num_Jogador2").value
        document.getElementById("escolha_num_secreto_Jogador2").classList.add("invisivel")
        document.getElementById("input_num_Jogador2").value = ""
        fase ++
        atualizar_tela()
    }
    else {
        const erro_num_max2 = document.getElementById("input_num_Jogador2").value > 500
        document.getElementById("input_num_Jogador2").value = ""
        document.getElementById("input_num_Jogador2").style.borderColor = "red"
        document.getElementById("erro_num_max1").classList.toggle("invisivel", !erro_num_max2)
    }
}

function tentativa_Jogador1() {
    if (document.getElementById("input_tentativa_Jogador1").value < 501) {
        tent_Jgd1 = Number(
            document.getElementById("input_tentativa_Jogador1").value
        )
        if (tent_Jgd1 === Number(num_Jogador2)) {
            document.getElementById("advinhacao_Jogador1").classList.add("invisivel")
            document.getElementById("msg_Jgd1_advinhou").classList.remove("invisivel")
            document.getElementById("input_tentativa_Jogador1").value = ""
            num_tent_Jgd1 ++
            fase ++
            atualizar_tela()
        }
        else {
            num_tent_Jgd1 ++
            document.getElementById("input_tentativa_Jogador1").value = ""
        }
    }
    else {
        const erro_tent_num_max1 = document.getElementById("input_num_Jogador1").value > 500
        document.getElementById("input_num_Jogador1").value = ""
        document.getElementById("input_num_Jogador1").style.borderColor = "red"
        document.getElementById("erro_num_max1").classList.toggle("invisivel", !erro_tent_num_max1)
    }
}

function Mostrar_Placar() {
    document.getElementById("msg_Jgd1_advinhou").classList.add("invisivel")
    num_partidas ++
    fase ++
    atualizar_tela()
}

function Partida_Desempate() {
    fase = 3
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
            document.getElementById("fim_de_jogo").classList.add("invisivel")
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
            document.getElementById("msg_jogador_venceu").style.textTransform = "uppercase"
            document.getElementById("placar_nome_Jogador1").textContent = nome_Jogador1
            document.getElementById("placar_num_tent_Jogador1").textContent = num_tent_Jgd1
            document.getElementById("placar_num_tent_Jogador2").textContent = num_tent_Jgd2
            document.getElementById("placar_nome_Jogador2").textContent = nome_Jogador2
            if (num_tent_Jgd1 < num_tent_Jgd2) {
                document.getElementById("msg_jogador_venceu").textContent = nome_Jogador1 + " VENCEU!"
                document.getElementById("botao_desempate").classList.add("invisivel")
                document.getElementById("link_voltar_ao_menu").classList.remove("invisivel")
            }
            else if (num_tent_Jgd1 > num_tent_Jgd2) {
                document.getElementById("msg_jogador_venceu").textContent = nome_Jogador2 + " VENCEU!"
                document.getElementById("botao_desempate").classList.add("invisivel")
                document.getElementById("link_voltar_ao_menu").classList.remove("invisivel")
            }
            else {
                const empate = num_tent_Jgd1 == num_tent_Jgd2
                if (empate) {
                    fase = 3
                    num_tent_Jgd1 = 0
                    num_tent_Jgd2 = 0
                    document.getElementById("msg_jogador_venceu").textContent = "EMPATOU!"
                }
                else if (num_tent_Jgd1 < num_tent_Jgd2) {
                    document.getElementById("msg_jogador_venceu").textContent = nome_Jogador1 + " VENCEU!"
                }
                else {
                    document.getElementById("msg_jogador_venceu").textContent = nome_Jogador2 + " VENCEU!"
                }
                document.getElementById("botao_desempate").classList.toggle("invisivel", !empate)
                document.getElementById("link_voltar_ao_menu").classList.toggle("invisivel", empate)
            }
            break
        default:
            break
    }
}

atualizar_tela()
