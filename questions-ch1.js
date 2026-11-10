// Capítulo 1 – questões originais escritas a partir do Syllabus CTFL v4.0 (pt-BR). a = índice da correta.
// As alternativas são embaralhadas na tela: a explicação nunca deve citar letra ou ordem das opções.
(function (root) {
  root.DATA = root.DATA || { cards: [], questions: [] };
  root.DATA.chapters = {
    1: 'Fundamentos de Teste',
    2: 'Testes ao longo do SDLC',
    3: 'Teste Estático',
    4: 'Análise e Modelagem de Teste',
    5: 'Gerenciamento das Atividades de Teste',
    6: 'Ferramentas de Teste'
  };
  root.DATA.questions.push(
    { id: '1-001', ch: 1, lo: 'FL-1.1.1', k: 'K1', ref: '1.1.1',
      q: 'Qual das opções a seguir é um objetivo típico do teste?',
      opts: [
        'Provar que o objeto de teste não contém defeitos',
        'Fornecer informações aos stakeholders para que possam tomar decisões informadas',
        'Corrigir a causa das falhas encontradas',
        'Garantir que o processo de desenvolvimento seja seguido corretamente'
      ], a: 1,
      exp: 'Fornecer informações aos stakeholders para decisões informadas está na lista de objetivos típicos. Provar ausência de defeitos é impossível (princípio 1), corrigir a causa é depuração e cuidar do processo é garantia da qualidade (QA).' },
    { id: '1-002', ch: 1, lo: 'FL-1.1.1', k: 'K1', ref: '1.1.1',
      q: 'Qual das opções a seguir NÃO é um objetivo típico do teste?',
      opts: [
        'Criar confiança na qualidade do objeto de teste',
        'Reduzir o nível de risco de qualidade de software inadequada',
        'Diagnosticar e eliminar as causas das falhas',
        'Verificar se os requisitos especificados foram atendidos'
      ], a: 2,
      exp: 'Diagnosticar e eliminar as causas das falhas é depuração, uma atividade distinta do teste. As outras três opções constam na lista de objetivos típicos do teste.' },
    { id: '1-003', ch: 1, lo: 'FL-1.1.2', k: 'K2', ref: '1.1.2',
      q: 'Um teste dinâmico provocou uma falha. Em seguida, um desenvolvedor reproduz a falha, encontra a causa e a corrige. Como se chama a atividade realizada pelo desenvolvedor?',
      opts: ['Teste de confirmação', 'Depuração', 'Teste de regressão', 'Análise de teste'], a: 1,
      exp: 'Reproduzir a falha, diagnosticar e corrigir a causa é o processo típico de depuração. O teste de confirmação vem depois, para verificar se a correção resolveu o problema.' },
    { id: '1-004', ch: 1, lo: 'FL-1.1.2', k: 'K2', ref: '1.1.2',
      q: 'Qual afirmação descreve corretamente a relação entre teste e depuração quando um defeito é identificado por teste estático?',
      opts: [
        'A depuração precisa primeiro reproduzir a falha para depois remover o defeito',
        'A depuração se preocupa em remover o defeito, sem necessidade de reprodução ou diagnóstico',
        'Não há depuração, pois o teste estático não encontra defeitos',
        'O teste estático provoca falhas, que a depuração então analisa'
      ], a: 1,
      exp: 'O teste estático encontra defeitos diretamente e não pode causar falhas; por isso a depuração só precisa remover o defeito, sem reproduzir nem diagnosticar.' },
    { id: '1-005', ch: 1, lo: 'FL-1.2.1', k: 'K2', ref: '1.2.1',
      q: 'Qual das opções a seguir é um exemplo de como o teste contribui para o sucesso de um projeto?',
      opts: [
        'O teste remove os defeitos do código, aumentando diretamente a qualidade',
        'O teste dá aos usuários uma representação indireta no projeto de desenvolvimento',
        'O teste garante que nenhuma falha ocorrerá em operação, pois todos os defeitos são detectados antes',
        'O teste substitui a necessidade de atender a normas regulatórias'
      ], a: 1,
      exp: 'Os Testadores garantem que seu entendimento das necessidades dos usuários seja considerado, dando a eles uma representação indireta. O teste detecta defeitos; quem os remove é a depuração, então a contribuição para a qualidade é indireta.' },
    { id: '1-006', ch: 1, lo: 'FL-1.2.2', k: 'K1', ref: '1.2.2',
      q: 'Qual afirmação sobre teste e garantia da qualidade (QA) está correta?',
      opts: [
        'Teste e QA são a mesma coisa',
        'QA é uma abordagem corretiva e orientada para o produto',
        'O teste é uma forma de controle de qualidade (QC), que é orientado para o produto',
        'O teste é uma abordagem preventiva e orientada para o processo'
      ], a: 2,
      exp: 'O teste é uma forma de controle de qualidade (QC): corretivo e orientado para o produto. A QA é preventiva e orientada para o processo.' },
    { id: '1-007', ch: 1, lo: 'FL-1.2.3', k: 'K2', ref: '1.2.3',
      q: 'Um programador, cansado, digita ">" em vez de ">=" em uma condição. Semanas depois, um cliente com exatamente 18 anos tem o cadastro recusado indevidamente. Como se classificam, nessa ordem, a digitação incorreta do programador, o operador ">" no código e a recusa do cadastro?',
      opts: [
        'Defeito, erro, falha',
        'Erro, falha, defeito',
        'Erro, defeito, falha',
        'Causa-raiz, falha, defeito'
      ], a: 2,
      exp: 'A pessoa comete um erro (equívoco), que produz um defeito no código; quando o defeito é executado, pode resultar em uma falha observável. O cansaço seria a causa-raiz.' },
    { id: '1-008', ch: 1, lo: 'FL-1.2.3', k: 'K2', ref: '1.2.3',
      q: 'Uma equipe percebe que vários defeitos de cálculo surgiram porque os analistas não receberam treinamento sobre as regras fiscais. A falta de treinamento é um exemplo de:',
      opts: ['Falha', 'Defeito', 'Causa-raiz', 'Resultado de teste'], a: 2,
      exp: 'Causa-raiz é o motivo fundamental para a ocorrência de um problema, por exemplo uma situação que leva a um erro. Tratando a causa-raiz, defeitos semelhantes podem ser evitados ou reduzidos.' },
    { id: '1-009', ch: 1, lo: 'FL-1.3.1', k: 'K2', ref: '1.3',
      q: 'Uma equipe executa o mesmo conjunto de testes manuais há um ano e ele quase não encontra mais defeitos novos, embora os usuários continuem relatando falhas. Qual princípio de teste explica melhor essa situação?',
      opts: [
        'Os defeitos se agrupam',
        'Os testes se degradam',
        'Testes exaustivos são impossíveis',
        'Testes antecipados economizam tempo e dinheiro'
      ], a: 1,
      exp: 'Se os mesmos testes forem repetidos muitas vezes, tornam-se cada vez menos eficazes em detectar novos defeitos. Para superar isso, pode ser preciso modificar testes e dados de teste e escrever novos testes.' },
    { id: '1-010', ch: 1, lo: 'FL-1.3.1', k: 'K2', ref: '1.3',
      q: 'Um sistema passou em todos os testes dos requisitos especificados e todos os defeitos encontrados foram corrigidos. Mesmo assim, os usuários o rejeitaram porque ele não atende às suas necessidades. Qual princípio de teste essa situação ilustra?',
      opts: [
        'Falácia da ausência de defeitos',
        'O teste mostra a presença, não a ausência de defeitos',
        'Os testes dependem do contexto',
        'Os defeitos se agrupam'
      ], a: 0,
      exp: 'É uma falácia esperar que a verificação do software garanta o sucesso do sistema. Além da verificação, é preciso realizar validação, para checar se o sistema atende às necessidades dos usuários.' },
    { id: '1-011', ch: 1, lo: 'FL-1.3.1', k: 'K2', ref: '1.3',
      q: 'Na análise dos relatórios de defeitos, a equipe nota que três dos quarenta módulos concentram a maioria dos defeitos. A qual princípio de teste isso corresponde e como essa informação pode ser usada?',
      opts: [
        'Os testes se degradam; os testes desses módulos devem ser descartados',
        'Os defeitos se agrupam; a informação é uma entrada para o teste baseado em risco',
        'Testes exaustivos são impossíveis; os três módulos devem ser testados exaustivamente',
        'Falácia da ausência de defeitos; os outros módulos não têm defeitos'
      ], a: 1,
      exp: 'Um pequeno número de componentes costuma conter a maioria dos defeitos (Princípio de Pareto). Os agrupamentos previstos e observados são uma entrada importante para o teste baseado em risco.' },
    { id: '1-012', ch: 1, lo: 'FL-1.4.1', k: 'K2', ref: '1.4.1',
      q: 'Em qual atividade de teste são identificados os recursos testáveis e definidas e priorizadas as condições de teste, respondendo à pergunta "o que testar?"',
      opts: ['Planejamento do teste', 'Análise de teste', 'Modelagem de teste', 'Implementação do teste'], a: 1,
      exp: 'A análise de teste identifica os recursos testáveis e define e prioriza as condições de teste: responde "o que testar?". A modelagem de teste responde "como testar?".' },
    { id: '1-013', ch: 1, lo: 'FL-1.4.1', k: 'K2', ref: '1.4.1',
      q: 'Qual das tarefas a seguir pertence à implementação do teste?',
      opts: [
        'Elaborar as condições de teste em casos de teste',
        'Comparar os resultados reais com os resultados esperados',
        'Organizar os casos de teste em procedimentos de teste e montar o cronograma de execução',
        'Criar o relatório de conclusão do teste'
      ], a: 2,
      exp: 'Na implementação, os casos de teste são organizados em procedimentos de teste, que são priorizados em um cronograma de execução, e o ambiente de teste é criado. Elaborar casos de teste é modelagem; comparar resultados é execução; o relatório de conclusão é da conclusão do teste.' },
    { id: '1-014', ch: 1, lo: 'FL-1.4.2', k: 'K2', ref: '1.4.2',
      q: 'Qual das opções a seguir é um fator contextual que influencia a forma como o teste é realizado?',
      opts: [
        'A quantidade de defeitos que serão encontrados na execução',
        'As restrições do projeto, como escopo, tempo, orçamento e recursos',
        'O resultado do último teste de confirmação',
        'O número de princípios de teste descritos no syllabus'
      ], a: 1,
      exp: 'Restrições do projeto estão entre os fatores contextuais, junto com stakeholders, membros da equipe, domínio do negócio, fatores técnicos, fatores organizacionais, SDLC e ferramentas.' },
    { id: '1-015', ch: 1, lo: 'FL-1.4.3', k: 'K2', ref: '1.4.3',
      q: 'Qual das opções lista apenas produtos de trabalho da modelagem de teste?',
      opts: [
        'Plano de teste, cronograma de teste e registro de riscos',
        'Casos de teste, cartas de teste e itens de cobertura',
        'Procedimentos de teste, conjuntos de teste e dados de teste',
        'Registros de teste e relatórios de defeitos'
      ], a: 1,
      exp: 'A modelagem de teste produz casos de teste, cartas de teste, itens de cobertura e requisitos de dados e de ambiente de teste. Plano, cronograma e registro de riscos são do planejamento; procedimentos, conjuntos e dados de teste são da implementação; registros de teste e relatórios de defeitos são da execução.' },
    { id: '1-016', ch: 1, lo: 'FL-1.4.4', k: 'K2', ref: '1.4.4',
      q: 'Qual é um benefício de manter a rastreabilidade entre os resultados dos testes e os riscos?',
      opts: [
        'Permite avaliar o nível de risco residual em um objeto de teste',
        'Elimina a necessidade de testes de regressão',
        'Garante que todos os defeitos sejam corrigidos antes da liberação',
        'Reduz o número de casos de teste necessários'
      ], a: 0,
      exp: 'A rastreabilidade dos resultados dos testes aos riscos pode ser usada para avaliar o risco residual. Já a rastreabilidade dos casos de teste aos requisitos mostra se os requisitos estão cobertos.' },
    { id: '1-017', ch: 1, lo: 'FL-1.4.5', k: 'K2', ref: '1.4.5',
      q: 'Em quais atividades o papel de testador se concentra principalmente?',
      opts: [
        'Planejamento, monitoramento e controle, e conclusão do teste',
        'Análise, modelagem, implementação e execução de teste',
        'Depuração e correção de defeitos',
        'Definição dos requisitos e dos critérios de aceite'
      ], a: 1,
      exp: 'O papel de testador responde pelo aspecto de engenharia (técnico): análise, modelagem, implementação e execução. O papel de gerenciamento de teste se concentra em planejamento, monitoramento e controle, e conclusão.' },
    { id: '1-018', ch: 1, lo: 'FL-1.5.1', k: 'K2', ref: '1.5.1',
      q: 'Por que boas habilidades de comunicação são cruciais para os Testadores?',
      opts: [
        'Porque os Testadores são responsáveis por corrigir os defeitos junto com o autor do produto de trabalho',
        'Porque os Testadores costumam ser os portadores de más notícias',
        'Porque a comunicação substitui a necessidade de relatórios de defeitos',
        'Porque o viés de confirmação faz com que os autores aceitem facilmente os defeitos relatados'
      ], a: 1,
      exp: 'É comum culpar o portador das más notícias, e a comunicação dos resultados pode soar como crítica. Por isso as informações sobre defeitos e falhas devem ser comunicadas de forma construtiva.' },
    { id: '1-019', ch: 1, lo: 'FL-1.5.2', k: 'K1', ref: '1.5.2',
      q: 'Qual das opções a seguir é uma vantagem da abordagem de equipe completa?',
      opts: [
        'Apenas os Testadores são responsáveis pela qualidade',
        'Melhora a dinâmica da equipe e aprimora a comunicação e a colaboração',
        'Garante um alto nível de independência dos testes',
        'É sempre a abordagem adequada, inclusive em sistemas críticos para a segurança'
      ], a: 1,
      exp: 'A abordagem de equipe completa melhora a dinâmica da equipe, a comunicação e a colaboração, e todos são responsáveis pela qualidade. Em contextos críticos para a segurança pode não ser adequada, pois pode ser necessário alto nível de independência.' },
    { id: '1-020', ch: 1, lo: 'FL-1.5.3', k: 'K2', ref: '1.5.3',
      q: 'Qual das opções a seguir é uma desvantagem potencial da independência dos testes?',
      opts: [
        'Testadores independentes reconhecem tipos de defeitos diferentes dos reconhecidos pelos desenvolvedores',
        'Testadores independentes podem contestar suposições feitas pelos stakeholders',
        'Os desenvolvedores podem perder o senso de responsabilidade pela qualidade',
        'Os vieses cognitivos do autor e do Testador são diferentes'
      ], a: 2,
      exp: 'Entre as desvantagens estão o isolamento dos Testadores, problemas de comunicação, serem vistos como gargalo e os desenvolvedores perderem o senso de responsabilidade pela qualidade. As outras opções descrevem benefícios ou a razão deles.' }
  );
})(typeof window !== 'undefined' ? window : globalThis);
