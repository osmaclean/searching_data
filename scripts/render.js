const ul = document.querySelector('ul')
const form = document.querySelector('form')
const input = document.querySelector('input')

function renderizaAcessorios(listaDeAcessorios) {
    ul.innerHTML = ''

    listaDeAcessorios.forEach((acessorio) => {
        const li = document.createElement('li')
        
        const img = document.createElement('img')
        img.src = acessorio.imagem
        img.alt = acessorio.nome
    
        const container = document.createElement('div')
        
        const title = document.createElement('h2')
        title.innerText = acessorio.nome
    
        const description = document.createElement('p')
        description.innerText = acessorio.descricao
    
        container.append(title, description)
        li.append(img, container)
        ul.append(li)
    })
}

form.addEventListener('submit', whenSubmitting)

function whenSubmitting(evento) {    
    evento.preventDefault()

    const valorInputUsuario = input.value

    if(procuraAcessorios(valorInputUsuario)) {
        renderizaAcessorios(procuraAcessorios(valorInputUsuario))
    } else {
        console.error("Função inválida")
    }
}

renderizaAcessorios(listaDeAcessorios)


/// Pesquisar

function procuraAcessorios(valorInputUser) {

    const itemPeloNome = listaDeAcessorios.filter(item => item.nome.toLowerCase().includes(valorInputUser.toLowerCase()))
    return itemPeloNome;
}
