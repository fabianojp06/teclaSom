var minhaIdade = 44;
var idadeEsposa = 41;
var idadeJp = 16;
var idadeAc = 6;

function comparaIdade () {
    if (minhaIdade > idadeEsposa) {
        console.log('O marido é mais velho.');
    }
    if (minhaIdade < idadeEsposa) {
        console.log('A esposa é mais velha');
    }
    
}    
comparaIdade();

function comparaFilhos () {
    if (idadeJp > idadeAc) {
        console.log('JP é mais velho.');
    }
    if (idadeJp < idadeAc) {
        console.log('AC é mais velha');
    }
    
}    
comparaFilhos();

if (comparaIdade > comparaFilhos) {
    console.log('Os pais são mais velhos que os filhos');
}