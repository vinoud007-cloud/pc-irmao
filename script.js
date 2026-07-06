// ==============================
// COMPONENTES
// ==============================

const componentes = [

{
    nome:"Gabinete",
    imagem:"img/gabinete.jpg",
    meta:90,
    guardado:0
},

{
    nome:"Fonte",
    imagem:"img/fonte.jpg",
    meta:80,
    guardado:0
},

{
    nome:"Kit (Placa-mãe + CPU)",
    imagem:"img/kit.jpg",
    meta:240,
    guardado:0
},

{
    nome:"Memória RAM",
    imagem:"img/memoria.webp",
    meta:90,
    guardado:0
},

{
    nome:"SSD",
    imagem:"img/ssd.jpg",
    meta:80,
    guardado:0
},

{
    nome:"Monitor",
    imagem:"img/monitor.webp",
    meta:200,
    guardado:0
},

{
    nome:"Mouse",
    imagem:"img/mouse.webp",
    meta:30,
    guardado:0
},

{
    nome:"Teclado",
    imagem:"img/teclado.jpg",
    meta:30,
    guardado:0
}

];

// ==============================
// CARREGAR SALVAMENTO
// ==============================

const salvo = localStorage.getItem("pcProjeto");

if(salvo){

    const dados = JSON.parse(salvo);

    dados.forEach((item,i)=>{

        componentes[i].guardado=item.guardado;

    });

}

// ==============================

const tabela = document.getElementById("tabelaComponentes");

// ==============================

function atualizar(){

    tabela.innerHTML="";

    let metaTotal=0;
    let guardadoTotal=0;

    componentes.forEach((item,index)=>{

        metaTotal+=item.meta;
        guardadoTotal+=item.guardado;

        let falta=item.meta-item.guardado;

        if(falta<0) falta=0;

        let porcentagem=(item.guardado/item.meta)*100;

        if(porcentagem>100)
            porcentagem=100;

        let cor="#2ecc71";

        if(porcentagem<35)
            cor="#e74c3c";

        else if(porcentagem<75)
            cor="#f1c40f";

        tabela.innerHTML+=`

<tr>

<td>

<img src="${item.imagem}">

</td>

<td>

<b>${item.nome}</b>

</td>

<td>

R$ ${item.meta.toFixed(2)}

</td>

<td>

<input
type="number"
value="${item.guardado}"
onchange="alterar(${index},this.value)"
>

</td>

<td>

R$ ${falta.toFixed(2)}

</td>

<td>

<div class="progresso">

<div style="width:${porcentagem}%;background:${cor};"></div>

</div>

<br>

${porcentagem.toFixed(0)}%

</td>

</tr>

`;

    });

    let faltaTotal=metaTotal-guardadoTotal;

    if(faltaTotal<0)
        faltaTotal=0;

    let porcentagemTotal=(guardadoTotal/metaTotal)*100;

    if(porcentagemTotal>100)
        porcentagemTotal=100;

    document.getElementById("metaTotal").innerHTML="R$ "+metaTotal.toFixed(2);

    document.getElementById("guardadoTotal").innerHTML="R$ "+guardadoTotal.toFixed(2);

    document.getElementById("faltaTotal").innerHTML="R$ "+faltaTotal.toFixed(2);

    document.getElementById("porcentagemTotal").innerHTML=porcentagemTotal.toFixed(0)+"%";

    document.getElementById("barraTotal").style.width=porcentagemTotal+"%";

    localStorage.setItem("pcProjeto",JSON.stringify(componentes));

}

// ==============================

function alterar(indice,valor){

    componentes[indice].guardado=Number(valor);

    atualizar();

}

atualizar();