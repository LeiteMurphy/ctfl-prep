// Capítulo 5 – questões originais escritas a partir do Syllabus CTFL v4.0 (pt-BR). a = índice da correta.
// As alternativas são embaralhadas na tela: a explicação nunca deve citar letra ou ordem das opções.
(function (root) {
  root.DATA = root.DATA || { cards: [], questions: [] };
  root.DATA.questions.push(
    // ---------- 5.1.1 Plano de teste ----------
    { id: '5-001', ch: 5, lo: 'FL-5.1.1', k: 'K2', ref: '5.1.1',
      q: 'Qual das opções a seguir descreve uma finalidade de um plano de teste?',
      opts: [
        'Registrar as falhas observadas durante a execução dos testes',
        'Servir como meio de comunicação com a equipe e outros stakeholders',
        'Resumir os resultados de um nível de teste após sua conclusão',
        'Definir os dados de entrada e os resultados esperados de cada teste'
      ], a: 1,
      exp: 'O plano de teste serve como meio de comunicação com os membros da equipe e outros stakeholders. Resumir os resultados de um nível de teste é papel do relatório de conclusão de teste, e registrar falhas é papel dos relatórios de defeitos.' },
    { id: '5-002', ch: 5, lo: 'FL-5.1.1', k: 'K2', ref: '5.1.1',
      q: 'Em qual item do conteúdo típico de um plano de teste são documentados os níveis de teste, as técnicas de teste e os critérios de entrada e de saída?',
      opts: [
        'Contexto do teste',
        'Registro de riscos',
        'Abordagem de teste',
        'Premissas e restrições do projeto de teste'
      ], a: 2,
      exp: 'Níveis, tipos e técnicas de teste, critérios de entrada e de saída, independência do teste e métricas a coletar fazem parte da abordagem de teste. O contexto do teste trata de escopo, objetivos do teste, restrições e base de teste.' },
    { id: '5-003', ch: 5, lo: 'FL-5.1.1', k: 'K2', ref: '5.1.1',
      q: 'Qual das informações a seguir NÃO faz parte do conteúdo típico de um plano de teste?',
      opts: [
        'Passos de reprodução das falhas encontradas na execução',
        'Funções, responsabilidades e necessidades de treinamento dos stakeholders',
        'Formas e frequência de comunicação e modelos de documentação',
        'Riscos do produto e riscos do projeto, em um registro de riscos'
      ], a: 0,
      exp: 'Os passos de reprodução de uma falha pertencem ao relatório de defeitos, escrito durante a execução, e não ao plano de teste. Stakeholders, comunicação e registro de riscos são itens típicos do plano.' },

    // ---------- 5.1.2 Planejamento de iteração e liberação ----------
    { id: '5-004', ch: 5, lo: 'FL-5.1.2', k: 'K1', ref: '5.1.2',
      q: 'Em um SDLC iterativo, qual contribuição do Testador é típica do planejamento de liberação?',
      opts: [
        'Dividir as histórias de usuário em tarefas de teste',
        'Determinar a testabilidade das histórias de usuário',
        'Estimar o esforço de todas as tarefas de teste da iteração atual',
        'Determinar a abordagem de teste e planejar o teste da versão'
      ], a: 3,
      exp: 'No planejamento de liberação, os Testadores determinam a abordagem de teste e planejam o teste para a versão. Dividir histórias em tarefas, avaliar a testabilidade e estimar as tarefas de teste são contribuições do planejamento da iteração.' },
    { id: '5-005', ch: 5, lo: 'FL-5.1.2', k: 'K1', ref: '5.1.2',
      q: 'Qual atividade o Testador realiza tipicamente no planejamento da iteração?',
      opts: [
        'Participar da análise de risco detalhada das histórias de usuário',
        'Participar das análises de risco do projeto e da qualidade',
        'Determinar a abordagem de teste e planejar o teste para a versão',
        'Definir e redefinir o backlog do produto para o próximo lançamento'
      ], a: 0,
      exp: 'No planejamento da iteração, os Testadores participam da análise de risco detalhada das histórias de usuário. As análises de risco do projeto e da qualidade e a definição da abordagem de teste da versão pertencem ao planejamento de liberação.' },

    // ---------- 5.1.3 Critérios de entrada e de saída ----------
    { id: '5-006', ch: 5, lo: 'FL-5.1.3', k: 'K2', ref: '5.1.3',
      q: 'Qual das opções a seguir é um exemplo típico de critério de entrada?',
      opts: [
        'O nível de cobertura planejado foi alcançado',
        'Todos os defeitos encontrados foram relatados',
        'Todos os testes de fumaça foram aprovados',
        'Os testes planejados foram executados'
      ], a: 2,
      exp: 'A aprovação dos testes de fumaça indica o nível de qualidade inicial do objeto de teste, uma condição prévia para iniciar a atividade. As demais opções dizem o que deve ser alcançado para declarar a atividade concluída, ou seja, são critérios de saída.' },
    { id: '5-007', ch: 5, lo: 'FL-5.1.3', k: 'K2', ref: '5.1.3',
      q: 'No desenvolvimento ágil de software, como são chamados os critérios de entrada que uma história de usuário deve cumprir para que as atividades de desenvolvimento e/ou teste sejam iniciadas?',
      opts: [
        'Definição de Feito (DoD)',
        'Definição de Pronto (DoR)',
        'Critérios de aceite',
        'Backlog da iteração'
      ], a: 1,
      exp: 'Os critérios de entrada de uma história de usuário são a Definição de Pronto (DoR). A Definição de Feito (DoD) corresponde aos critérios de saída: as métricas objetivas da equipe para um item liberável.' },
    { id: '5-008', ch: 5, lo: 'FL-5.1.3', k: 'K2', ref: '5.1.3',
      q: 'O orçamento de teste de um projeto se esgotou antes que a cobertura planejada fosse atingida. Segundo o syllabus, em que condição os testes podem ser encerrados nessa situação?',
      opts: [
        'Se os desenvolvedores garantirem que não restam defeitos no código',
        'Se todos os casos de teste restantes forem de baixa prioridade',
        'Se o relatório de conclusão de teste já tiver sido distribuído',
        'Se os stakeholders tiverem analisado e aceitado o risco envolvido'
      ], a: 3,
      exp: 'O esgotamento do tempo ou do orçamento pode ser um critério de saída válido, desde que os stakeholders tenham analisado e aceitado o risco de entrar em operação sem mais testes. A baixa prioridade dos testes restantes, sozinha, não substitui essa aceitação do risco.' },

    // ---------- 5.1.4 Técnicas de estimativa (K3) ----------
    { id: '5-009', ch: 5, lo: 'FL-5.1.4', k: 'K3', ref: '5.1.4',
      q: 'Para uma tarefa de teste, os especialistas forneceram (em homens/hora):\no (mais otimista) = 4\nm (mais provável) = 7\np (mais pessimista) = 16\nUsando a estimativa de três pontos, qual é a estimativa final com o erro de medição?',
      opts: [
        '9 ± 2 homens/hora',
        '8 ± 2 homens/hora',
        '8 ± 12 homens/hora',
        '7 ± 2 homens/hora'
      ], a: 1,
      exp: 'E = (o + 4m + p) / 6 = (4 + 28 + 16) / 6 = 48 / 6 = 8. SD = (p − o) / 6 = (16 − 4) / 6 = 2. Logo, 8 ± 2. O valor 9 resulta da média simples dos três números, sem o peso 4 da estimativa mais provável.' },
    { id: '5-010', ch: 5, lo: 'FL-5.1.4', k: 'K3', ref: '5.1.4',
      q: 'Estimativas dos especialistas para o teste de uma versão (em homens/hora):\no = 10\nm = 13\np = 28\nPela estimativa de três pontos, considerando o erro de medição, em que faixa fica a estimativa final?',
      opts: [
        'Entre 10 e 28 homens/hora',
        'Entre 14 e 20 homens/hora',
        'Entre 12 e 18 homens/hora',
        'Entre 13 e 17 homens/hora'
      ], a: 2,
      exp: 'E = (10 + 4×13 + 28) / 6 = 90 / 6 = 15. SD = (28 − 10) / 6 = 3. A estimativa é 15 ± 3, isto é, entre 12 e 18. A faixa de 14 a 20 vem de usar a média simples (17) no lugar da média ponderada.' },
    { id: '5-011', ch: 5, lo: 'FL-5.1.4', k: 'K3', ref: '5.1.4',
      q: 'No projeto anterior de uma organização, a proporção entre esforço de desenvolvimento e esforço de teste foi de 5:2. No projeto atual, semelhante, espera-se um esforço de desenvolvimento de 800 homens/hora. Usando a estimativa baseada em índices, qual é o esforço de teste estimado?',
      opts: [
        '2.000 homens/hora',
        '160 homens/hora',
        '400 homens/hora',
        '320 homens/hora'
      ], a: 3,
      exp: 'Na proporção 5:2, cada 5 unidades de desenvolvimento correspondem a 2 de teste: 800 × 2 / 5 = 320 homens/hora. O valor 2.000 resulta de inverter a proporção (800 × 5 / 2).' },
    { id: '5-012', ch: 5, lo: 'FL-5.1.4', k: 'K3', ref: '5.1.4',
      q: 'Dados históricos de uma organização:\nProjeto | Desenv. | Teste\nA | 900 h | 300 h\nB | 600 h | 200 h\nO novo projeto, semelhante, tem esforço de desenvolvimento previsto de 1.200 h. Pela estimativa baseada em índices, qual é o esforço de teste estimado?',
      opts: [
        '400 h',
        '300 h',
        '600 h',
        '3.600 h'
      ], a: 0,
      exp: 'Nos dois projetos anteriores a proporção desenvolvimento:teste foi de 3:1 (900/300 e 600/200). Aplicando esse indicador: 1.200 / 3 = 400 h. O valor 3.600 resulta de multiplicar por 3 em vez de dividir.' },
    { id: '5-013', ch: 5, lo: 'FL-5.1.4', k: 'K3', ref: '5.1.4',
      q: 'Esforço de teste nas iterações já concluídas:\nIteração 1 | 52 h\nIteração 2 | 30 h\nIteração 3 | 36 h\nIteração 4 | 42 h\nA equipe extrapola o esforço de teste da próxima iteração como o esforço médio das três últimas iterações. Qual é a estimativa para a iteração 5?',
      opts: [
        '40 h',
        '42 h',
        '36 h',
        '48 h'
      ], a: 2,
      exp: 'Média das três últimas iterações: (30 + 36 + 42) / 3 = 108 / 3 = 36 h. O valor 40 h é a média das quatro iterações (160 / 4), que inclui indevidamente a iteração 1.' },
    { id: '5-014', ch: 5, lo: 'FL-5.1.4', k: 'K3', ref: '5.1.4',
      q: 'Cinco especialistas estimam, cada um isoladamente, o esforço de teste de uma versão. Como os resultados ficaram fora da faixa de limites acordada, eles discutem suas estimativas e depois estimam de novo, outra vez de forma isolada, repetindo o processo até o consenso. Qual técnica de estimativa está sendo usada?',
      opts: [
        'Wideband Delphi',
        'Extrapolação',
        'Estimativa de três pontos',
        'Estimativa baseada em índices'
      ], a: 0,
      exp: 'Estimativas isoladas, discussão dos desvios e novas rodadas até o consenso caracterizam o Wideband Delphi. A estimativa de três pontos também é baseada em especialistas, mas combina os valores otimista, mais provável e pessimista em uma fórmula, sem rodadas de consenso.' },

    // ---------- 5.1.5 Priorização de casos de teste (K3) ----------
    { id: '5-015', ch: 5, lo: 'FL-5.1.5', k: 'K3', ref: '5.1.5',
      q: 'Casos de teste (1 = prioridade mais alta):\nCT | Prioridade | Depende de\nCT1 | 2 | CT4\nCT2 | 1 | CT3\nCT3 | 4 | —\nCT4 | 3 | —\nQual ordem de execução respeita as dependências e executa os casos de maior prioridade o mais cedo possível?',
      opts: [
        'CT2, CT1, CT4, CT3',
        'CT3, CT4, CT2, CT1',
        'CT3, CT2, CT4, CT1',
        'CT4, CT1, CT3, CT2'
      ], a: 2,
      exp: 'CT2 (prioridade 1) depende de CT3, então CT3 vem antes: CT3, CT2. Em seguida CT1 (prioridade 2), que depende de CT4: CT4, CT1. Resultado: CT3, CT2, CT4, CT1. Executar CT3 e CT4 antes de tudo também respeita as dependências, mas atrasa sem necessidade o caso de maior prioridade.' },
    { id: '5-016', ch: 5, lo: 'FL-5.1.5', k: 'K3', ref: '5.1.5',
      q: 'Instruções cobertas por cada caso de teste (o código tem 10 instruções):\nCT1 | 1, 2, 3, 4, 5, 6\nCT2 | 1, 2, 3, 7\nCT3 | 7, 8, 9\nCT4 | 6, 10\nUsando a priorização de cobertura adicional, qual é a ordem de execução?',
      opts: [
        'CT1, CT2, CT3, CT4',
        'CT1, CT3, CT4, CT2',
        'CT3, CT1, CT4, CT2',
        'CT1, CT3, CT2, CT4'
      ], a: 1,
      exp: 'CT1 cobre mais instruções (6) e vem antes. Faltam 7, 8, 9 e 10: CT3 acrescenta três (7, 8, 9), CT2 uma (7) e CT4 uma (10), então segue CT3. Falta só a 10: CT4 acrescenta uma e CT2 nenhuma. Ordem: CT1, CT3, CT4, CT2. Ordenar pela cobertura total de cada caso (CT1, CT2, CT3, CT4) é a variante simples, não a de cobertura adicional.' },
    { id: '5-017', ch: 5, lo: 'FL-5.1.5', k: 'K3', ref: '5.1.5',
      q: 'Prioridades dos requisitos definidas pelos stakeholders (1 = mais importante):\nR1 | 2\nR2 | 1\nR3 | 4\nR4 | 3\nRastreabilidade:\nCT1 → R3\nCT2 → R1\nCT3 → R4\nCT4 → R2\nUsando a priorização baseada em requisitos, qual é a ordem de execução?',
      opts: [
        'CT4, CT2, CT3, CT1',
        'CT2, CT4, CT1, CT3',
        'CT1, CT3, CT2, CT4',
        'CT1, CT2, CT3, CT4'
      ], a: 0,
      exp: 'Os casos de teste herdam a prioridade do requisito rastreado: CT4 (R2, prioridade 1), CT2 (R1, prioridade 2), CT3 (R4, prioridade 3), CT1 (R3, prioridade 4). A ordem CT2, CT4, CT1, CT3 segue a numeração dos requisitos, não as suas prioridades.' },
    { id: '5-018', ch: 5, lo: 'FL-5.1.5', k: 'K3', ref: '5.1.5',
      q: 'Casos de teste (1 = prioridade mais alta):\nCT | Prioridade | Depende de\nCT1 | 1 | CT3\nCT2 | 2 | —\nCT3 | 5 | CT5\nCT4 | 3 | —\nCT5 | 4 | —\nOs testes são ordenados respeitando as dependências, de modo que o caso de prioridade 1 seja executado o mais cedo possível, depois o de prioridade 2, e assim por diante. Qual caso de teste é executado em terceiro lugar?',
      opts: [
        'CT2',
        'CT3',
        'CT5',
        'CT1'
      ], a: 3,
      exp: 'CT1 (prioridade 1) depende de CT3, que depende de CT5. A execução começa por CT5, depois CT3 e então CT1, seguida de CT2 e CT4. O terceiro executado é CT1. CT2 não depende de ninguém, mas tem prioridade menor que CT1 e por isso fica depois dele.' },
    { id: '5-019', ch: 5, lo: 'FL-5.1.5', k: 'K3', ref: '5.1.5',
      q: 'Cada caso de teste cobre um risco de produto. O nível de risco é calculado pela abordagem quantitativa:\nCT | Probabilidade | Impacto\nCT1 | 0,6 | 10\nCT2 | 0,5 | 30\nCT3 | 0,1 | 80\nCT4 | 0,3 | 40\nUsando a priorização baseada em risco, qual é a ordem de execução?',
      opts: [
        'CT1, CT2, CT4, CT3',
        'CT3, CT4, CT2, CT1',
        'CT4, CT2, CT3, CT1',
        'CT2, CT4, CT3, CT1'
      ], a: 3,
      exp: 'Nível de risco = probabilidade × impacto: CT1 = 6, CT2 = 15, CT3 = 8, CT4 = 12. Os casos que cobrem os riscos mais importantes vêm antes: CT2, CT4, CT3, CT1. Ordenar só pelo impacto (CT3, CT4, CT2, CT1) ou só pela probabilidade ignora um dos dois fatores do nível de risco.' },

    // ---------- 5.1.6 Pirâmide de teste ----------
    { id: '5-020', ch: 5, lo: 'FL-5.1.6', k: 'K1', ref: '5.1.6',
      q: 'Qual afirmação sobre os testes da camada inferior da pirâmide de teste está correta?',
      opts: [
        'São complexos e de ponta a ponta, e bastam poucos para uma cobertura razoável',
        'São pequenos, isolados e rápidos, e em geral são necessários muitos deles',
        'São lentos e verificam uma grande parte da funcionalidade de uma só vez',
        'São de alto nível e normalmente executados pela interface do usuário'
      ], a: 1,
      exp: 'Os testes da camada inferior são pequenos, isolados, rápidos e verificam uma pequena parte da funcionalidade, por isso são necessários muitos deles. Testes complexos, de ponta a ponta e mais lentos pertencem à camada superior.' },
    { id: '5-021', ch: 5, lo: 'FL-5.1.6', k: 'K1', ref: '5.1.6',
      q: 'Quais são as três camadas do modelo original da pirâmide de teste (Cohn 2009)?',
      opts: [
        'Testes de unidade, testes de integração e testes de ponta a ponta',
        'Testes de componente, testes de sistema e testes de aceite',
        'Testes de unidade, testes de serviço e testes de interface do usuário',
        'Testes de serviço, testes de API e testes exploratórios'
      ], a: 2,
      exp: 'O modelo original define testes de unidade, testes de serviço e testes de interface do usuário. Unidade, integração e ponta a ponta formam outro modelo popular citado no syllabus, mas não o original.' },

    // ---------- 5.1.7 Quadrantes de teste ----------
    { id: '5-022', ch: 5, lo: 'FL-5.1.7', k: 'K2', ref: '5.1.7',
      q: 'Qual afirmação sobre os quadrantes de teste está correta?',
      opts: [
        'Q1 é voltado para os negócios e contém testes de aceite do usuário',
        'Q2 é voltado para a tecnologia e contém testes de componentes',
        'Q3 apoia a equipe e contém testes que devem ser incluídos na CI',
        'Q4 é voltado para a tecnologia e contém testes não funcionais'
      ], a: 3,
      exp: 'Q4 é voltado para a tecnologia, avalia o produto e contém smoke tests e testes não funcionais (exceto usabilidade). Q1 é voltado para a tecnologia (componentes e integração de componentes, na CI), Q2 é voltado para os negócios e Q3 avalia o produto.' },
    { id: '5-023', ch: 5, lo: 'FL-5.1.7', k: 'K2', ref: '5.1.7',
      q: 'Uma equipe ágil planeja testes exploratórios, testes de usabilidade e testes de aceite do usuário. A qual quadrante de teste eles pertencem?',
      opts: [
        'Quadrante Q1',
        'Quadrante Q2',
        'Quadrante Q3',
        'Quadrante Q4'
      ], a: 2,
      exp: 'Testes exploratórios, de usabilidade e de aceite do usuário são orientados para o usuário, geralmente manuais, e ficam em Q3. Q4 contém os testes não funcionais, mas o syllabus exclui expressamente dele os testes de usabilidade.' },
    { id: '5-024', ch: 5, lo: 'FL-5.1.7', k: 'K2', ref: '5.1.7',
      q: 'Qual descrição corresponde ao quadrante Q2 dos quadrantes de teste?',
      opts: [
        'Testes de histórias de usuários e de API, que verificam os critérios de aceite',
        'Testes de componentes, que devem ser automatizados e incluídos na CI',
        'Testes orientados para o usuário, geralmente manuais, como os testes exploratórios',
        'Smoke tests e testes não funcionais, que geralmente são automatizados'
      ], a: 0,
      exp: 'Q2 (voltado para os negócios, apoia a equipe) contém testes funcionais, exemplos, testes de histórias de usuários, protótipos de experiência do usuário, testes de API e simulações, que verificam os critérios de aceite. Os testes de componentes automatizados na CI são de Q1.' },

    // ---------- 5.2.1 Risco e seus atributos ----------
    { id: '5-025', ch: 5, lo: 'FL-5.2.1', k: 'K1', ref: '5.2.1',
      q: 'Quais dois fatores expressam o nível de risco?',
      opts: [
        'Severidade e prioridade',
        'Probabilidade e impacto',
        'Custo e cronograma',
        'Identificação e mitigação'
      ], a: 1,
      exp: 'Um risco é caracterizado pela probabilidade de ocorrência e pelo impacto (dano); juntos, eles expressam o nível de risco. Severidade e prioridade são atributos de um relatório de defeitos, não de um risco.' },
    { id: '5-026', ch: 5, lo: 'FL-5.2.1', k: 'K1', ref: '5.2.1',
      q: 'Qual afirmação sobre os atributos de um risco está correta?',
      opts: [
        'A probabilidade de ocorrência do risco é maior que zero e menor que um',
        'O impacto do risco é a chance de ele ocorrer ao longo do projeto',
        'Quanto menor o nível de risco, mais importante é o seu tratamento',
        'O nível de risco é medido apenas pelas consequências da ocorrência do risco'
      ], a: 0,
      exp: 'A probabilidade de um risco é maior que zero e menor que um. O impacto são as consequências da ocorrência (não a chance de ocorrer), e quanto MAIOR o nível de risco, mais importante é o seu tratamento.' },

    // ---------- 5.2.2 Riscos de projeto e de produto ----------
    { id: '5-027', ch: 5, lo: 'FL-5.2.2', k: 'K2', ref: '5.2.2',
      q: 'Qual das opções a seguir é um risco de produto?',
      opts: [
        'Falta de pessoal na equipe de teste',
        'Atraso na entrega de produtos de trabalho',
        'Tempo de resposta inadequado do sistema',
        'Suporte insuficiente a ferramentas'
      ], a: 2,
      exp: 'Tempo de resposta inadequado está ligado a uma característica de qualidade do produto, logo é risco de produto. Falta de pessoal, atrasos na entrega e suporte insuficiente a ferramentas estão ligados ao gerenciamento e controle do projeto.' },
    { id: '5-028', ch: 5, lo: 'FL-5.2.2', k: 'K2', ref: '5.2.2',
      q: 'Qual das opções a seguir é um risco de projeto?',
      opts: [
        'Arquitetura ruim do sistema',
        'Vulnerabilidades de segurança',
        'Cálculos incorretos em relatórios',
        'Falha na entrega de um fornecedor'
      ], a: 3,
      exp: 'A falha na entrega de terceiros é um problema com fornecedores, um risco de projeto. Arquitetura ruim pode parecer um problema técnico do projeto, mas o syllabus a lista entre os riscos de produto, junto com cálculos incorretos e vulnerabilidades de segurança.' },
    { id: '5-029', ch: 5, lo: 'FL-5.2.2', k: 'K2', ref: '5.2.2',
      q: 'Na análise de risco, a equipe registra dois riscos: “o algoritmo de busca pode ser ineficiente” e “as estimativas de esforço podem ser imprecisas”. Como esses riscos se classificam?',
      opts: [
        'O do algoritmo é risco de produto; o das estimativas, risco de projeto',
        'O do algoritmo é risco de projeto; o das estimativas, risco de produto',
        'Os dois são riscos de produto, pois afetam a qualidade do sistema',
        'Os dois são riscos de projeto, pois afetam o cronograma e o orçamento'
      ], a: 0,
      exp: 'Algoritmos ineficientes dizem respeito às características de qualidade do produto (risco de produto). Estimativas imprecisas são um problema organizacional, ligado ao gerenciamento e controle do projeto (risco de projeto).' },

    // ---------- 5.2.3 Análise de risco do produto ----------
    { id: '5-030', ch: 5, lo: 'FL-5.2.3', k: 'K2', ref: '5.2.3',
      q: 'Qual atividade faz parte da avaliação de riscos, e não da identificação de riscos?',
      opts: [
        'Realizar um brainstorming para gerar uma lista abrangente de riscos',
        'Conduzir entrevistas com stakeholders para descobrir novos riscos',
        'Categorizar os riscos e determinar sua probabilidade, impacto e nível',
        'Verificar se as ações de mitigação implementadas estão sendo eficazes'
      ], a: 2,
      exp: 'A avaliação de riscos envolve categorizar os riscos, determinar probabilidade, impacto e nível, priorizar e propor maneiras de lidar com eles. Brainstorming e entrevistas são técnicas de identificação; verificar a eficácia da mitigação é monitoramento, parte do controle de riscos.' },
    { id: '5-031', ch: 5, lo: 'FL-5.2.3', k: 'K2', ref: '5.2.3',
      q: 'Como os resultados da análise de risco do produto podem influenciar o rigor e o escopo dos testes?',
      opts: [
        'Garantindo que todos os riscos do produto sejam eliminados antes da liberação',
        'Determinando as técnicas de teste a empregar e a cobertura a alcançar',
        'Substituindo os critérios de saída que foram definidos no plano de teste',
        'Transferindo a terceiros a responsabilidade pelos riscos do projeto'
      ], a: 1,
      exp: 'Os resultados da análise são usados, entre outros fins, para determinar as técnicas de teste e a cobertura a alcançar, o escopo, os níveis e tipos de teste e a priorização. A análise busca minimizar o nível residual de risco, não eliminar todos os riscos.' },

    // ---------- 5.2.4 Controle de risco do produto ----------
    { id: '5-032', ch: 5, lo: 'FL-5.2.4', k: 'K2', ref: '5.2.4',
      q: 'Qual é o objetivo do monitoramento de riscos no controle de riscos do produto?',
      opts: [
        'Gerar uma lista abrangente dos riscos do produto com os stakeholders',
        'Calcular o nível de cada risco identificado por meio de uma matriz de risco',
        'Implementar as ações propostas na avaliação para reduzir o nível de risco',
        'Garantir a eficácia das ações de mitigação e identificar riscos emergentes'
      ], a: 3,
      exp: 'O monitoramento de riscos busca garantir que as ações de mitigação sejam eficazes, obter mais informações para melhorar a avaliação e identificar riscos emergentes. Implementar as ações propostas para reduzir o nível de risco é a mitigação, a outra parte do controle de riscos.' },
    { id: '5-033', ch: 5, lo: 'FL-5.2.4', k: 'K2', ref: '5.2.4',
      q: 'Um risco de produto de nível alto foi analisado. Qual das ações a seguir mitiga esse risco por meio de testes?',
      opts: [
        'Contratar um seguro que cubra os prejuízos causados por falhas',
        'Selecionar Testadores com experiência adequada para esse tipo de risco',
        'Registrar formalmente que os stakeholders decidiram aceitar o risco',
        'Preparar um plano de contingência para o caso de uma falha grave em produção'
      ], a: 1,
      exp: 'Selecionar Testadores com o nível de experiência e habilidade adequado é uma das ações de mitigação por meio de testes. Transferência do risco, aceite do risco e plano de contingência são outras opções de resposta ao risco, mas não reduzem o risco por meio de testes.' },

    // ---------- 5.3.1 Métricas ----------
    { id: '5-034', ch: 5, lo: 'FL-5.3.1', k: 'K1', ref: '5.3.1',
      q: 'Qual das opções a seguir é uma métrica de defeitos?',
      opts: [
        'Tempo médio até a falha',
        'Nível de risco residual',
        'Cobertura de requisitos',
        'Densidade de defeitos'
      ], a: 3,
      exp: 'Densidade de defeitos é uma métrica de defeitos, assim como o número de defeitos encontrados/corrigidos e a porcentagem de detecção de defeitos. O tempo médio até a falha parece ligado a defeitos, mas é classificado como métrica de qualidade do produto.' },
    { id: '5-035', ch: 5, lo: 'FL-5.3.1', k: 'K1', ref: '5.3.1',
      q: 'A disponibilidade e o tempo de resposta são exemplos de qual tipo de métrica de teste?',
      opts: [
        'Métricas de progresso do teste',
        'Métricas de qualidade do produto',
        'Métricas de cobertura',
        'Métricas de progresso do projeto'
      ], a: 1,
      exp: 'Disponibilidade, tempo de resposta e tempo médio até a falha são métricas de qualidade do produto. As métricas de progresso do teste tratam, por exemplo, do número de casos de teste executados/não executados e aprovados/fracassados.' },

    // ---------- 5.3.2 Relatórios de teste ----------
    { id: '5-036', ch: 5, lo: 'FL-5.3.2', k: 'K2', ref: '5.3.2',
      q: 'Qual informação é típica de um relatório de progresso de teste, mas não de um relatório de conclusão de teste?',
      opts: [
        'Lições aprendidas que são relevantes para o teste',
        'Riscos não mitigados e defeitos não corrigidos',
        'Testes planejados para o próximo período',
        'Avaliação da qualidade com base no plano de teste original'
      ], a: 2,
      exp: 'O relatório de progresso apoia o controle contínuo do teste e inclui os testes planejados para o próximo período. Lições aprendidas, riscos não mitigados e a avaliação frente ao plano original são conteúdo típico do relatório de conclusão de teste.' },
    { id: '5-037', ch: 5, lo: 'FL-5.3.2', k: 'K2', ref: '5.3.2',
      q: 'O teste de sistema de uma versão terminou e seus critérios de saída foram atendidos. A equipe prepara um documento com o resumo do teste, os desvios do plano de teste, os riscos não mitigados e as lições aprendidas. Que documento é esse?',
      opts: [
        'Relatório de conclusão de teste',
        'Relatório de progresso de teste',
        'Relatório de defeitos',
        'Plano de teste'
      ], a: 0,
      exp: 'O relatório de conclusão de teste é preparado quando um projeto, nível de teste ou tipo de teste está concluído e resume esse estágio. O relatório de progresso é gerado regularmente durante o teste, para apoiar o controle contínuo.' },
    { id: '5-038', ch: 5, lo: 'FL-5.3.2', k: 'K2', ref: '5.3.2',
      q: 'Qual afirmação sobre o público e a formalidade dos relatórios de teste está correta?',
      opts: [
        'Relatórios para a própria equipe seguem um modelo definido e ocorrem uma única vez',
        'Relatórios de progresso para a própria equipe costumam ser frequentes e informais',
        'Todos os públicos devem receber o mesmo relatório, com a mesma frequência',
        'Relatórios sobre um projeto concluído costumam ser frequentes e informais'
      ], a: 1,
      exp: 'Públicos diferentes exigem informações diferentes e influenciam a formalidade e a frequência. Relatórios de progresso para a mesma equipe costumam ser frequentes e informais; os de um projeto concluído seguem um modelo definido e ocorrem apenas uma vez.' },

    // ---------- 5.3.3 Comunicação do status ----------
    { id: '5-039', ch: 5, lo: 'FL-5.3.3', k: 'K2', ref: '5.3.3',
      q: 'Uma equipe de teste está distribuída em três países com fusos horários diferentes. O que o syllabus indica sobre a comunicação do status do teste nesse caso?',
      opts: [
        'A comunicação verbal face a face deve ser o único meio utilizado',
        'Os painéis de CI/CD devem ser substituídos por e-mails diários',
        'O status só deve ser comunicado no relatório de conclusão de teste',
        'Uma comunicação mais formal pode ser mais apropriada para a equipe'
      ], a: 3,
      exp: 'Em equipes distribuídas, a comunicação direta, face a face, nem sempre é possível por causa da distância ou dos fusos horários, e por isso uma comunicação mais formal pode ser mais apropriada. Uma ou mais opções de comunicação podem ser combinadas; nenhuma delas é obrigatória ou exclusiva.' },

    // ---------- 5.4.1 Gerenciamento de configuração ----------
    { id: '5-040', ch: 5, lo: 'FL-5.4.1', k: 'K2', ref: '5.4',
      q: 'Um ambiente de teste, tratado como item de configuração, foi aprovado para teste. O que acontece com ele segundo o gerenciamento de configuração?',
      opts: [
        'Passa a poder ser alterado livremente por qualquer Testador da equipe de teste',
        'Deixa de ser controlado por versão até o fim do nível de teste',
        'Torna-se uma linha de base, alterável só por controle formal de alterações',
        'É arquivado e não pode mais ser usado para reproduzir resultados'
      ], a: 2,
      exp: 'Um item de configuração aprovado para teste torna-se uma linha de base (baseline) e só pode ser alterado por meio de um processo formal de controle de alterações. Alterações livres impediriam rastrear o que foi de fato testado.' },
    { id: '5-041', ch: 5, lo: 'FL-5.4.1', k: 'K2', ref: '5.4',
      q: 'Um Testador não consegue reproduzir um resultado de teste obtido há duas semanas, porque o objeto de teste e os scripts de teste mudaram desde então. Como o gerenciamento de configuração apoia o teste nessa situação?',
      opts: [
        'Permite reverter os itens de configuração para uma baseline anterior',
        'Calcula a cobertura alcançada pelos scripts de teste que foram alterados',
        'Prioriza os casos de teste afetados pelas alterações do objeto de teste',
        'Registra a falha observada e acompanha o seu status até o fechamento'
      ], a: 0,
      exp: 'O CM mantém o registro dos itens de configuração alterados a cada nova baseline, e é possível reverter para uma baseline anterior para reproduzir resultados de testes anteriores. Registrar a falha e acompanhar seu status é papel do gerenciamento de defeitos.' },

    // ---------- 5.5.1 Relatório de defeitos (K3) ----------
    { id: '5-042', ch: 5, lo: 'FL-5.5.1', k: 'K3', ref: '5.5',
      q: 'Relatório de defeitos registrado durante um teste dinâmico:\nID: 231\nTítulo: Total errado com cupom\nData/autor: 10/11, Ana (Testadora)\nObjeto de teste: app v2.3\nAmbiente: Android 14\nContexto: CT-17, teste de sistema\nPassos: 1) pôr item de R$ 200 no carrinho; 2) aplicar cupom PROMO10\nResultado real: total R$ 200,00\nSeveridade: alta\nPrioridade: alta\nStatus: aberto\nQual das informações a seguir, típica de um relatório de defeitos, está faltando?',
      opts: [
        'O resultado esperado para os passos descritos',
        'A correção a ser aplicada no código-fonte',
        'O nome do desenvolvedor que inseriu o defeito',
        'A estimativa de esforço para corrigir o defeito'
      ], a: 0,
      exp: 'O relatório traz identificador, título, data, autor, objeto e ambiente de teste, contexto, passos, resultado real, severidade, prioridade e status, mas não o resultado esperado; sem ele não se sabe por que R$ 200,00 está errado. Correção, culpado e esforço de correção não fazem parte do conteúdo típico de um relatório de defeitos.' },
    { id: '5-043', ch: 5, lo: 'FL-5.5.1', k: 'K3', ref: '5.5',
      q: 'Ao testar o app v2.3, um Testador observa que o cupom PROMO10 (10% de desconto) não reduz o total de um carrinho de R$ 200,00. Qual descrição da falha é a mais adequada para o relatório de defeitos?',
      opts: [
        'O cupom não funciona. É um erro grave de programação e precisa ser corrigido com urgência antes da liberação.',
        'Carrinho de R$ 200,00; ao aplicar o cupom PROMO10, o total exibido é R$ 200,00; o esperado era R$ 180,00.',
        'O desconto do checkout está com problema em alguns casos. Favor verificar o cálculo do total do carrinho.',
        'O total do carrinho ficou errado depois do cupom. Provavelmente o desenvolvedor esqueceu de testar o código.'
      ], a: 1,
      exp: 'A descrição deve permitir a reprodução e a resolução: traz os dados e os passos usados, o resultado real (R$ 200,00) e o esperado (10% de R$ 200,00 = R$ 20,00 de desconto, total R$ 180,00). As outras descrições são vagas ou trazem julgamentos, sem dados para reproduzir a falha.' },
    { id: '5-044', ch: 5, lo: 'FL-5.5.1', k: 'K3', ref: '5.5',
      q: 'Um Testador registra um defeito em uma ferramenta de gerenciamento de defeitos. Segundo o syllabus, quais dados do relatório podem ser incluídos automaticamente pela ferramenta?',
      opts: [
        'Severidade, prioridade e resultados esperados',
        'Descrição da falha, passos e capturas de tela',
        'Identificador, data, autor e status inicial',
        'Título, contexto do defeito e resultados reais'
      ], a: 2,
      exp: 'O syllabus cita identificador, data, autor e status inicial como dados que a ferramenta pode incluir automaticamente. Severidade, descrição da falha, contexto e resultados esperados e reais dependem da observação e da análise do Testador.' },
    { id: '5-045', ch: 5, lo: 'FL-5.5.1', k: 'K3', ref: '5.5',
      q: 'O desenvolvedor informou que corrigiu o defeito 231, e a correção já está disponível no ambiente de teste, mas o Testador ainda não executou de novo o teste que havia falhado. Qual status do relatório de defeitos é o mais adequado neste momento?',
      opts: [
        'Fechado',
        'Reaberto',
        'Aguardando correção',
        'Aguardando teste de confirmação'
      ], a: 3,
      exp: 'A correção foi entregue, mas ainda não foi verificada: o status adequado é “aguardando teste de confirmação”. “Fechado” só cabe depois que o teste de confirmação mostrar que o defeito foi resolvido, e “reaberto” só se esse teste falhar.' }
  );
})(typeof window !== 'undefined' ? window : globalThis);
