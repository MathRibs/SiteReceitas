require('../modelo/bancozinhohumild');
const Categoria = require('../modelo/Categoria');
const Receitas = require('../modelo/Receitas');
// GET HOME

exports.home = async (req, res) => {
    try {

        const numeroLimite = 5;
        const categories = await Categoria.find({}).limit(numeroLimite);
        const ultimasReceita = await Receitas.find({}).sort({ _id: -1 }).limit(numeroLimite);
        const nordestina = await Receitas.find({ 'categoria': "Nordeste" }).limit(numeroLimite);
        const sulista = await Receitas.find({ 'categoria': "Sul" }).limit(numeroLimite);
        const nortista = await Receitas.find({ 'categoria': "Norte" }).limit(numeroLimite);
        const centro = await Receitas.find({ 'categoria': "Centro-Oeste" }).limit(numeroLimite);
        const sudeste = await Receitas.find({ 'categoria': "Sudeste" }).limit(numeroLimite);

        const comida = { ultimasReceita, nordestina, sulista, nortista, centro, sudeste };

        res.render('index', { categories, comida });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Ocorreu um erro grave" });
    }

}



exports.displaycategories = async (req, res) => {
    try {

        const numeroLimite = 20;
        const categories = await Categoria.find({}).limit(numeroLimite);
        res.render('categories', { categories });
    } catch (error) {
        res.satus(500).send({ message: error.message || "Ocorreu um erro grave" });
    }

}

exports.showCategoriesId = async (req, res) => {
    try {

    let categoriaID = req.params.id;

        const numeroLimite = 20;
        const categoriesID = await Receitas.find({'categoria': categoriaID}).limit(numeroLimite);
        res.render('categories', { categoriesID});
    } catch (error) {
        res.satus(500).send({ message: error.message || "Ocorreu um erro grave" });
    }

}

exports.showReceita = async (req, res) => {
    try {
        let receitasId = req.params.id;
        const receitinha = await Receitas.findById(receitasId);    
        res.render('receita', {receitinha});
    } catch (error) {
        res.satus(500).send({ message: error.message || "Ocorreu um erro grave" });
    }

}







/*async function inserirDadosReceitas() {
    try {
        await Receitas.insertMany([
            {
                
            ///
            
              "nome": "X-Ga??cho",
                "descricao": `Como Fazer X-Gau??cho

    Hora de fritar
    De fato, fazer esse X ?? realmente muito f??cil. Tudo o que voc?? precisa fazer ?? fritar a carne em ??leo, dentro de uma frigideira.


    Ovo, p??o e maionese...
    Depois disso, frite o ovo. Agora, abra o p??o e espalhe a maionese. Em seguida, coloque todos os ingredientes dentro.


    Finalizando
    Para finalizar, coloque o p??o na frigideira e pressione bem para ficar prensado. Pronto! Voc?? j?? pode aproveitar!`,
    "ingredientes": ["1 p??o de xis (ou p??o de hamb??rguer)",
    "Maionese de sua preferencia",
    "1-2 colheres (sopa) de milho enlatado ou congelado",
    "1-2 colheres (sopa) de ervilha enlatada ou congelada",
    "100-120g de carne bovina cortada em tiras",
   " 1 ovo",
    "1-2 fatias de queijo",
    "Alface",
    "3-4 fatias de tomate"],
    "categoria":"Sul",
    "image": "xgaucho.png"
            },
            { 
                "nome": "Cuca",
                "descricao": `MODO DE PREPARO
                Inicialmente preparar a farofa.
                Misturar todos os ingredientes da farofa numa panela e levar ao fogo, mexendo sem parar, at?? secar.
                Separar.
                Preparo da massa: bater as claras em neve e separar.
                Bater na batedeira o a????car, as gemas e a margarina at?? formar um creme e depois acrescentar a farinha de trigo, o leite e o fermento em p??, batendo sem parar.
                Acrescentar as claras em neve mexendo lentamente.
                Pr??-aquecer o forno.
                Untar e enfarinhar uma forma de aproximadamente 40 cm de di??metro e 4 cm de altura e despejar a massa.
                Por cima da massa crua ir espalhando a farofa delicadamente.
                Levar ao forno em temperatura aproximada de 180?? graus.
                O bolo estar?? pronto quando as laterais estiverem douradas e ao espetar o palito, este sair limpo.`,
                "ingredientes":["4 colheres (sopa) de ??leo",
                    "1 colher (sopa) canela em p??",
                    "6 colheres (sopa) de farinha de trigo",
                   " 6 colheres (sopa) de a????car",
                    "MASSA:",
                    "4 x??caras de farinha de trigo",
                   "3 x??caras de a????car",
                   " 4 ovos (claras em neve)",
                   " 1 colher de sopa cheia de margarina",
                   " 1 x??cara e meia de leite",
                    "1 colher de sopa de fermento em p??"],
                    "categoria": "Sul",
                    "image": "cuca.png"
            },
            {"nome":"Galeto Assado com Laranja e Mel", 
            "descricao":`MODO DE PREPARO
            Preaque??a o forno a 200 ??C (temperatura m??dia). 
            No pil??o, bata o sal para ficar um pouco mais fino. Com um zester, fa??a raspas da casca de meia laranja-ba??a e junte ao sal. Misture o gengibre, o cravo, a c??rcuma, o colorau e pimenta-do-reino mo??da na hora a gosto. 
            Seque bem o galeto com um peda??o de papel-toalha e transfira para uma tigela. Tempere o galeto com a mistura de especiarias ??? esfregue bem sobre toda a pele, dentro da cavidade do galeto e entre a pele e a carne do peito, com cuidado para n??o rasgar a pele. 
            Tampe a tigela e mantenha em temperatura ambiente para marinar por  no m??nimo 30 minutos (se preferir, voc?? pode temperar o galeto algumas horas antes do preparo). 
            Enquanto isso, corte a laranja ao meio e uma metade ao meio novamente ??? esses dois quartos de laranja v??o ser usados para rechear o galeto e mant??-lo ??mido ao assar. Coloque o azeite numa tigela pequena ??? ele ser?? usado para pincelar o galeto durante o cozimento.
            Passado o tempo da marinada, posicione o galeto na t??bua, com o peito para cima. Recheie o galeto com os dois quartos de laranja e os 3 galhos de alecrim.
            Corte um peda??o grande de barbante, segure uma ponta em cada m??o e posicione o meio por baixo do curranchinho do galeto ??? aquele rabinho, que forma um bico. Levante o barbante e cruze sobre as coxas; enrole cada ponta de barbante na ponta de uma coxa, puxe para cima e amarre ??? assim o galeto assa de maneira uniforme.
            Regue uma assadeira m??dia com um fio de azeite. Disponha o galeto no centro. Pincele toda a superf??cie do galeto com um pouco do azeite e leve ao forno para assar por cerca de 40 minutos. 
            Na metade do tempo, abra o forno com cuidado e pincele o galeto com azeite. Nos ??ltimos 5 minutos, misture o mel ao restante do azeite e pincele sobre toda a pele do galeto para dar um sabor e brilho extra. 
            Para conferir se o galeto est?? assado: com a ponta de uma faca, fa??a um furinho na jun????o da sobrecoxa com o peito. Se o l??quido sair transparente, sem sangue, ?? sinal que est?? pronto, do contr??rio volte ao forno por mais alguns minutos. Se estiver usando um term??metro: a temperatura da carne deve ser no m??nimo 75 ??C.
            Retire o galeto do forno e espere 5 minutos antes de servir. N??o pule essa etapa: nesse tempo, os sucos da carne se redistribuem, o que garante um assado ??mido e saboroso. Sirva a seguir com salada caprese e molho pesto. `,
            "ingredientes":["1 galeto inteiro com pele e osso (cerca de 800g)",
            "?? laranja-ba??a",
            "?? colher (ch??) de mel",
           "1 colher (ch??) de sal grosso",
            "1 colher (ch??) de gengibre em p??",
            "?? colher (ch??) de colorau",
            "?? de colher (ch??) de c??rcuma",
            "1 pitada de cravo-da-??ndia em p??",
           "pimenta-do-reino mo??da na hora a gosto",
            "3 galhos de alecrim pequenos",
            "4 colheres (ch??) de azeite"],
            "categoria":"Sul",
            "image":"galeto.png" 
        },
                {"nome": "Marreco Rechado",
                "descricao": `MODO DE PREPARO
                Tempere o marreco com sal, lim??o e pimenta-do-reino. Moa os mi??dos junto com os p??ezinhos amolecidos na ??gua, tempere com sal, salsinha e cebolinha e cebola. Misture bem os ingredientes e recheie o marreco com esta massa. Leve ao forno moderado ( 180??C).
                
                Coloque o marreco para assar com o peito para cima em uma assadeira profunda (ferro ou alum??nio). Adicione 1/2 copo de ??gua. Quando estiver dourado, retire o l??quido que se formou na assadeira. Adicione 1/2 copo de ??gua. Regue o marreco com o molho que se formou para que ficar bem dourado.`,
                "ingredientes":["INGREDIENTES",
                    "1 marreco limpo com mi??dos (cora????o, moela e f??gado)",
                    "1 lim??o",
                    "1 cebola m??dia",
                    "3 p??ezinhos franceses",
                    "1/3 x??cara (de ch??) de ??gua",
                    "1 colher (sopa) de salsinha picada",
                    "1 colher (sopa) de cebolinha picada"
                    ],
                    "categoria":"Sul",
                    "image":"marreco.png"
                },
            ///
           
            
        ]);
    } catch (Erro) {
        console.log('Erro:', + Erro)
    }
}

inserirDadosReceitas();
*/
