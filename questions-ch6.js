// Capítulo 6 – questões originais escritas a partir do Syllabus CTFL v4.0 (pt-BR). a = índice da correta.
// As alternativas são embaralhadas na tela: a explicação nunca deve citar letra ou ordem das opções.
(function (root) {
  root.DATA = root.DATA || { cards: [], questions: [] };
  root.DATA.questions.push(
    { id: '6-001', ch: 6, lo: 'FL-6.1.1', k: 'K2', ref: '6.1',
      q: 'Uma equipe quer rodar seus testes automatizados e saber quanto do código foi exercitado por eles. Que tipo de ferramenta dá suporte a essa necessidade?',
      opts: [
        'Ferramentas de gerenciamento',
        'Ferramentas de teste estático',
        'Ferramentas de execução e cobertura de testes',
        'Ferramentas de projeto e implementação de testes'
      ], a: 2,
      exp: 'As ferramentas de execução e cobertura de testes facilitam a execução de testes automatizados e a medição da cobertura. As de projeto e implementação de testes facilitam a geração de casos, dados e procedimentos de teste, não a execução nem a medição.' },
    { id: '6-002', ch: 6, lo: 'FL-6.1.1', k: 'K2', ref: '6.1',
      q: 'Um Testador precisa avaliar características do sistema cujo teste é difícil ou impossível de realizar manualmente. Que tipo de ferramenta o syllabus associa a essa situação?',
      opts: [
        'Ferramentas de teste não funcional',
        'Ferramentas de projeto e implementação de testes',
        'Ferramentas de teste estático',
        'Ferramentas de gerenciamento'
      ], a: 0,
      exp: 'As ferramentas de teste não funcional permitem realizar testes não funcionais que são difíceis ou impossíveis de fazer manualmente. As de teste estático apoiam revisões e análises estáticas, o que não tem relação com a dificuldade de execução manual.' },
    { id: '6-003', ch: 6, lo: 'FL-6.1.1', k: 'K2', ref: '6.1',
      q: 'Qual afirmação compara corretamente as ferramentas de teste estático com as ferramentas de projeto e implementação de testes?',
      opts: [
        'As de teste estático medem a cobertura; as de projeto e implementação executam os testes automatizados',
        'As de teste estático geram dados de teste; as de projeto e implementação apoiam as revisões e as análises estáticas',
        'As de teste estático gerenciam os defeitos; as de projeto e implementação gerenciam os requisitos e a configuração',
        'As de teste estático apoiam revisões e análises estáticas; as de projeto e implementação geram casos e dados de teste'
      ], a: 3,
      exp: 'As ferramentas de teste estático dão suporte a revisões e análises estáticas, e as de projeto e implementação facilitam a geração de casos, dados e procedimentos de teste. A afirmação que inverte esses dois papéis é a mais tentadora, mas está trocada.' },
    { id: '6-004', ch: 6, lo: 'FL-6.1.1', k: 'K2', ref: '6.1',
      q: 'Uma equipe pequena registra seus casos de teste e os resultados em uma planilha comum. Como o syllabus trata essa planilha?',
      opts: [
        'Não é uma ferramenta de teste, pois não foi criada especificamente para testar',
        'É uma ferramenta de teste, pois qualquer ferramenta que auxilie no teste conta como tal',
        'É uma ferramenta de teste estático, pois os casos de teste são analisados sem execução',
        'Não é uma ferramenta de teste, pois não executa testes automatizados nem mede cobertura'
      ], a: 1,
      exp: 'O syllabus inclui entre as ferramentas de teste qualquer outra ferramenta que auxilie no teste e cita a planilha como exemplo no contexto do teste. Não é preciso que a ferramenta tenha sido criada para testar nem que automatize a execução.' },
    { id: '6-005', ch: 6, lo: 'FL-6.1.1', k: 'K2', ref: '6.1',
      q: 'Uma organização quer apoiar seu pipeline de entrega com rastreamento do fluxo de trabalho, construção automatizada e CI/CD. Que tipo de ferramenta dá esse suporte?',
      opts: [
        'Ferramentas de DevOps',
        'Ferramentas de colaboração',
        'Ferramentas de teste não funcional',
        'Ferramentas de execução e cobertura de testes'
      ], a: 0,
      exp: 'As ferramentas de DevOps dão suporte ao pipeline de entrega, ao rastreamento de fluxo de trabalho, aos processos de construção automatizados e a CI/CD. As ferramentas de colaboração, por sua vez, facilitam a comunicação.' },
    { id: '6-006', ch: 6, lo: 'FL-6.2.1', k: 'K1', ref: '6.2',
      q: 'Qual das opções a seguir é um possível benefício do uso da automação de testes?',
      opts: [
        'Garantia de sucesso obtida com a simples aquisição da ferramenta',
        'Avaliação mais objetiva, como na medição da cobertura',
        'Eliminação da necessidade do pensamento crítico humano',
        'Substituição do teste manual em todas as situações'
      ], a: 1,
      exp: 'A avaliação mais objetiva (p. ex., cobertura) consta na lista de benefícios. Ignorar a necessidade do pensamento crítico humano é, ao contrário, um risco: confiar demais na ferramenta.' },
    { id: '6-007', ch: 6, lo: 'FL-6.2.1', k: 'K1', ref: '6.2',
      q: 'Qual das opções a seguir é um possível risco do uso da automação de testes?',
      opts: [
        'Acesso mais fácil a informações sobre os testes para os relatórios',
        'Maior consistência e repetibilidade na execução dos testes',
        'Redução dos tempos de execução e feedback mais rápido',
        'Expectativas irreais sobre os benefícios de uma ferramenta'
      ], a: 3,
      exp: 'Expectativas irreais sobre os benefícios de uma ferramenta (incluindo funcionalidade e facilidade de uso) estão na lista de riscos. Consistência, repetibilidade, feedback mais rápido e acesso a informações são benefícios.' },
    { id: '6-008', ch: 6, lo: 'FL-6.2.1', k: 'K1', ref: '6.2',
      q: 'Qual risco o syllabus associa especificamente ao uso de um software de código aberto na automação de testes?',
      opts: [
        'O fornecedor pode vender a ferramenta para outro fornecedor',
        'O fornecedor pode dar respostas deficientes às consultas feitas',
        'A ferramenta pode ser abandonada e deixar de receber atualizações',
        'A ferramenta pode tornar a avaliação dos testes menos objetiva'
      ], a: 2,
      exp: 'O risco citado para o código aberto é o software ser abandonado, sem mais atualizações disponíveis. A venda da ferramenta e o suporte deficiente pertencem a outro risco da lista: a dependência do fornecedor.' },
    { id: '6-009', ch: 6, lo: 'FL-6.2.1', k: 'K1', ref: '6.2',
      q: 'A automação de testes economiza tempo ao reduzir o trabalho manual repetitivo. Qual das opções é um exemplo desse tipo de trabalho?',
      opts: [
        'Comparar os resultados esperados com os resultados reais',
        'Criar testes novos, mais profundos e mais eficazes',
        'Aplicar o pensamento crítico ao que a ferramenta faz',
        'Alterar o processo de teste manual que já existe na equipe'
      ], a: 0,
      exp: 'Comparar resultados esperados com resultados reais é um dos exemplos de trabalho manual repetitivo, ao lado de executar testes de regressão e reinserir os mesmos dados de teste. Criar testes novos e mais profundos é aquilo para que sobra mais tempo aos Testadores, não o trabalho que a ferramenta reduz.' },
    { id: '6-010', ch: 6, lo: 'FL-6.2.1', k: 'K1', ref: '6.2',
      q: 'Segundo o syllabus, o que cada nova ferramenta exige para que se obtenham benefícios reais e duradouros?',
      opts: [
        'Apenas a sua aquisição, que já é suficiente para garantir o sucesso',
        'Esforço, por exemplo para introdução, manutenção e treinamento',
        'A substituição de todo o processo de teste manual existente',
        'A escolha de um fornecedor que nunca aposente a ferramenta'
      ], a: 1,
      exp: 'Cada nova ferramenta exige esforço (p. ex., para a introdução, manutenção e treinamento da ferramenta) para trazer benefícios reais e duradouros. A simples aquisição de uma ferramenta não garante o sucesso.' }
  );
})(typeof window !== 'undefined' ? window : globalThis);
