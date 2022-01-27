/**Inserir quantidade de alunos
 * Mostrar se é par ou impar
 * Se for igual a zero, mostrar
 */

//Variável de Alunos
let qtdAlunos = 7;

//Mostrar se é par, impar ou igual a zero
for (let contador = 0; contador < qtdAlunos; contador++) {
    
    if (contador == 0) {
        console.log(`A quantidade de alunos é igual a ${contador}`);
    }

    else if (contador % 2 == 0) {
    console.log(`A quantidade de alunos (${contador}) é par`);
    }
   else if (contador % 2 == 1) {
   console.log (`A quantidade de alunos (${contador}) é impar`);
   }
}

 // Fim.   