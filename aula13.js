const alunos = [
    { nome: "João", nota1: 8, nota2: 7 },
    { nome: "Maria", nota1: 5, nota2: 4 },
    { nome: "Pedro", nota1: 9, nota2: 9 },
    { nome: "Ana", nota1: 6, nota2: 5 },
    { nome: "Lucas", nota1: 7, nota2: 6 }
];

const calcularMedia = (n1, n2) => (n1 + n2) / 2;

const alunosComMedia = alunos.map(aluno => ({
    ...aluno,
    media: calcularMedia(aluno.nota1, aluno.nota2)
}));

const aprovados = alunosComMedia.filter(aluno => aluno.media >= 6);
const reprovados = alunosComMedia.filter(aluno => aluno.media < 6);

const mediaGeralTurma = alunosComMedia.reduce((acc, aluno) => acc + aluno.media, 0) / alunosComMedia.length;

const alunosOrdenados = [...alunosComMedia].sort((a, b) => b.media - a.media);

console.log("--- Gerenciador de Alunos ---");
console.log(`Média Geral da Turma: ${mediaGeralTurma.toFixed(2)}`);

console.log("\nLista de Aprovados:");
aprovados.forEach(a => console.log(`- ${a.nome}: Média ${a.media}`));

console.log("\nRanking da Turma (Decrescente):");
alunosOrdenados.forEach((a, i) => console.log(`${i + 1}º ${a.nome} - Média: ${a.media}`));