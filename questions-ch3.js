// Capítulo 3 – questões originais escritas a partir do Syllabus CTFL v4.0 (pt-BR). a = índice da correta.
// As alternativas são embaralhadas na tela: a explicação nunca deve citar letra ou ordem das opções.
(function (root) {
  root.DATA = root.DATA || { cards: [], questions: [] };
  root.DATA.questions.push(
    { id: '3-001', ch: 3, lo: 'FL-3.1.1', k: 'K1', ref: '3.1.1',
      q: 'O que um produto de trabalho precisa ter para poder ser examinado por análise estática?',
      opts: [
        'Uma versão executável instalada no ambiente de teste',
        'Um conjunto de casos de teste já escritos para ele',
        'Uma estrutura em relação à qual possa ser verificado',
        'Um autor disponível para conduzir a sessão de exame'
      ], a: 2,
      exp: 'Para a análise estática, o produto de trabalho precisa de uma estrutura em relação à qual possa ser verificado (p. ex., modelos, código ou texto com sintaxe formal). Nada precisa ser executado e não são necessários casos de teste.' },
    { id: '3-002', ch: 3, lo: 'FL-3.1.1', k: 'K1', ref: '3.1.1',
      q: 'Qual dos produtos de trabalho a seguir NÃO é apropriado para testes estáticos?',
      opts: [
        'Código executável de terceiros protegido por restrições legais',
        'Contrato de prestação de serviços firmado com um fornecedor',
        'Carta de teste preparada para uma sessão de teste exploratório',
        'Item da lista de pendências do produto ainda não refinado'
      ], a: 0,
      exp: 'Não são apropriados os produtos difíceis de interpretar por seres humanos e que não podem ser analisados por ferramentas, como código executável de terceiros por motivos legais. Contratos, cartas de teste e itens da lista de pendências podem ser lidos e compreendidos e, portanto, revisados.' },
    { id: '3-003', ch: 3, lo: 'FL-3.1.2', k: 'K2', ref: '3.1.2',
      q: 'Um gerente de projeto hesita em adotar revisões porque elas consomem muitas horas da equipe. Qual argumento, de acordo com o syllabus, responde a essa preocupação?',
      opts: [
        'As revisões têm custo desprezível, pois os participantes não precisam de tempo de preparação',
        'Os custos gerais do projeto geralmente ficam muito menores, pois se gasta menos esforço corrigindo defeitos mais tarde',
        'As revisões tornam desnecessários os testes dinâmicos posteriores, o que compensa o esforço investido',
        'Os custos só são relevantes nas revisões formais, pois as informais não consomem esforço da equipe'
      ], a: 1,
      exp: 'O syllabus admite que as revisões podem ser dispendiosas, mas afirma que os custos gerais do projeto geralmente são muito menores, pois se gasta menos tempo e esforço corrigindo defeitos posteriormente. Testes estáticos e dinâmicos se complementam; um não substitui o outro.' },
    { id: '3-004', ch: 3, lo: 'FL-3.1.2', k: 'K2', ref: '3.1.2',
      q: 'Qual dos itens a seguir é um exemplo de defeito que o teste estático consegue identificar, mas que o teste dinâmico não consegue detectar?',
      opts: [
        'Tempo de resposta acima do limite quando há muitos usuários',
        'Resultado incorreto calculado para uma entrada válida',
        'Consumo de memória crescente durante uma execução longa',
        'Trecho de código inacessível dentro de um módulo'
      ], a: 3,
      exp: 'O syllabus cita o código inacessível como exemplo de defeito que não pode ser detectado por testes dinâmicos, mas que o teste estático identifica. Os outros itens são comportamentos observados durante a execução, ou seja, exatamente o que o teste dinâmico revela.' },
    { id: '3-005', ch: 3, lo: 'FL-3.1.2', k: 'K2', ref: '3.1.2',
      q: 'Por que o syllabus recomenda envolver uma grande variedade de participantes nos testes estáticos?',
      opts: [
        'Porque isso ajuda a criar um entendimento compartilhado e aprimora a comunicação entre os stakeholders',
        'Porque isso permite dispensar os testes dinâmicos e reduz a quantidade de casos de teste necessários',
        'Porque isso distribui a responsabilidade pelos defeitos e facilita a avaliação individual dos autores',
        'Porque isso é exigido pela norma ISO/IEC 20246 e garante a formalidade de qualquer tipo de revisão'
      ], a: 0,
      exp: 'Como o teste estático pode ser feito no início do SDLC, ele cria um entendimento compartilhado e aprimora a comunicação entre os stakeholders; por esse motivo recomenda-se uma grande variedade de participantes. O syllabus não liga essa recomendação a normas, à formalidade da revisão nem à dispensa de testes dinâmicos.' },
    { id: '3-006', ch: 3, lo: 'FL-3.1.3', k: 'K2', ref: '3.1.3',
      q: 'Qual afirmação compara corretamente o teste estático e o teste dinâmico?',
      opts: [
        'O teste estático causa falhas que depois são analisadas; o teste dinâmico encontra os defeitos diretamente',
        'O teste estático só se aplica a produtos executáveis; o teste dinâmico se aplica a qualquer produto de trabalho',
        'O teste estático encontra defeitos diretamente; o teste dinâmico causa falhas que depois são analisadas',
        'O teste estático e o teste dinâmico encontram os mesmos tipos de defeitos; só muda o momento da detecção'
      ], a: 2,
      exp: 'O teste estático encontra defeitos diretamente, enquanto o dinâmico causa falhas a partir das quais os defeitos são determinados por análise subsequente. Há tipos de defeitos que só um dos dois encontra, e apenas o estático se aplica a produtos não executáveis.' },
    { id: '3-007', ch: 3, lo: 'FL-3.1.3', k: 'K2', ref: '3.1.3',
      q: 'Uma equipe quer medir duas características de qualidade de um componente: a capacidade de manutenção e a eficiência de performance. Como cada uma pode ser medida?',
      opts: [
        'A capacidade de manutenção por teste dinâmico e a eficiência de performance por teste estático',
        'A capacidade de manutenção por teste estático e a eficiência de performance por teste dinâmico',
        'As duas por teste estático, pois nenhuma delas depende da execução do código',
        'As duas por teste dinâmico, pois ambas dependem da execução do código'
      ], a: 1,
      exp: 'A capacidade de manutenção não depende da execução do código e pode ser medida por teste estático; a eficiência de performance depende da execução e exige teste dinâmico.' },
    { id: '3-008', ch: 3, lo: 'FL-3.1.3', k: 'K2', ref: '3.1.3',
      q: 'Qual dos problemas a seguir é um defeito típico que é mais fácil e/ou mais barato de encontrar por meio de teste estático?',
      opts: [
        'Lentidão do sistema quando muitos usuários o acessam ao mesmo tempo',
        'Travamento do aplicativo depois de várias horas de uso contínuo',
        'Mensagem de erro exibida ao usuário ao salvar um cadastro válido',
        'Ordem de parâmetros incompatível na especificação de uma interface'
      ], a: 3,
      exp: 'Especificações incorretas de interface (número, tipo ou ordem de parâmetros incompatíveis) estão na lista de defeitos típicos do teste estático. Lentidão, travamento e mensagens de erro são falhas, que só aparecem ao executar o software em teste dinâmico.' },
    { id: '3-009', ch: 3, lo: 'FL-3.2.1', k: 'K1', ref: '3.2.1',
      q: 'Qual das opções a seguir é um benefício do feedback antecipado e frequente dos stakeholders?',
      opts: [
        'Permite a comunicação precoce de possíveis problemas de qualidade',
        'Garante que os requisitos permaneçam inalterados durante o SDLC',
        'Dispensa a documentação dos requisitos e dos critérios de aceite',
        'Transfere aos stakeholders a responsabilidade pelos defeitos'
      ], a: 0,
      exp: 'O feedback antecipado e frequente permite comunicar cedo possíveis problemas de qualidade. Ele não impede mudanças nos requisitos: garante que as alterações sejam compreendidas e implementadas mais cedo.' },
    { id: '3-010', ch: 3, lo: 'FL-3.2.1', k: 'K1', ref: '3.2.1',
      q: 'Segundo o syllabus, o que pode resultar da incapacidade de entregar o que o stakeholder deseja, quando há pouco envolvimento dele durante o SDLC?',
      opts: [
        'Excesso de documentação, reuniões longas e métricas sem uso',
        'Código inacessível, variáveis não declaradas e duplicações',
        'Retrabalho dispendioso, perda de prazos e jogos de culpa',
        'Falta de trilha de auditoria e de critérios de saída'
      ], a: 2,
      exp: 'O syllabus cita retrabalho dispendioso, perda de prazos, jogos de culpa e até o fracasso total do projeto. Código inacessível e variáveis não declaradas são defeitos de codificação típicos do teste estático, não consequências da falta de feedback.' },
    { id: '3-011', ch: 3, lo: 'FL-3.2.2', k: 'K2', ref: '3.2.2',
      q: 'Em uma revisão, são definidos o objetivo, as características de qualidade a serem avaliadas, os critérios de saída, o esforço e os prazos. Em qual atividade do processo de revisão isso acontece?',
      opts: ['Início da revisão', 'Planejamento', 'Revisão individual', 'Correção e Relatório'], a: 1,
      exp: 'Definir o escopo da revisão (objetivo, produto de trabalho, características de qualidade, critérios de saída, esforço e prazos) é o Planejamento. O Início da revisão vem depois e serve para garantir que todos estejam preparados, com acesso ao produto e cientes de suas funções.' },
    { id: '3-012', ch: 3, lo: 'FL-3.2.2', k: 'K2', ref: '3.2.2',
      q: 'Por que as anomalias identificadas pelos revisores precisam passar pela atividade de Comunicação e Análise de Problemas?',
      opts: [
        'Porque anomalias só passam a existir depois de aprovadas pelo gerente, que define os critérios de saída da revisão',
        'Porque anomalias são sempre defeitos, e a reunião serve para o autor corrigi-las na presença de todos os revisores',
        'Porque anomalias precisam ser reproduzidas pela execução do produto de trabalho antes de serem aceitas pela equipe',
        'Porque anomalias não são necessariamente defeitos, e cada uma exige uma decisão sobre status, propriedade e ações'
      ], a: 3,
      exp: 'As anomalias identificadas em uma revisão não são necessariamente defeitos; por isso todas são analisadas e discutidas, decidindo-se status, propriedade e ações necessárias. A correção acontece depois, na atividade de Correção e Relatório, e nada é executado em teste estático.' },
    { id: '3-013', ch: 3, lo: 'FL-3.2.2', k: 'K2', ref: '3.2.2',
      q: 'A reunião de revisão de uma especificação terminou com cinco defeitos confirmados. O que acontece na atividade seguinte do processo de revisão?',
      opts: [
        'Cria-se um relatório para cada defeito, e o produto de trabalho pode ser aceito quando os critérios de saída forem atingidos',
        'Cada revisor examina o produto de trabalho sozinho e registra as anomalias, recomendações e perguntas que identificar',
        'Define-se o escopo da revisão, incluindo as áreas a serem enfocadas, as informações de apoio e os prazos a cumprir',
        'Garante-se que todos os participantes tenham acesso ao produto de trabalho e entendam suas funções e responsabilidades'
      ], a: 0,
      exp: 'A atividade seguinte à reunião (Comunicação e Análise de Problemas) é Correção e Relatório: cria-se um relatório de defeitos para cada defeito, o produto de trabalho pode ser aceito quando os critérios de saída são atingidos e os resultados são relatados. Examinar o produto sozinho e registrar anomalias é a Revisão individual, que ocorre antes da reunião.' },
    { id: '3-014', ch: 3, lo: 'FL-3.2.3', k: 'K1', ref: '3.2.3',
      q: 'Em uma revisão, quem decide o que deve ser revisado e fornece recursos, como equipe e tempo?',
      opts: ['Líder da revisão', 'Moderador', 'Gerente', 'Autor'], a: 2,
      exp: 'O gerente decide o que deve ser revisado e fornece recursos como equipe e tempo. O líder da revisão tem a responsabilidade geral pela revisão: decide quem estará envolvido e organiza quando e onde ela será realizada.' },
    { id: '3-015', ch: 3, lo: 'FL-3.2.3', k: 'K1', ref: '3.2.3',
      q: 'Qual é a responsabilidade do relator (também conhecido como registrador) em uma revisão?',
      opts: [
        'Garantir o andamento eficaz das reuniões, com mediação e gerenciamento de tempo',
        'Decidir quem estará envolvido e organizar quando e onde a revisão será realizada',
        'Criar o produto de trabalho em análise e corrigi-lo depois da reunião de revisão',
        'Reunir as anomalias dos revisores e anotar decisões e novas anomalias da reunião'
      ], a: 3,
      exp: 'O relator reúne as anomalias dos revisores e registra as informações da revisão, como decisões e novas anomalias encontradas na reunião. Garantir o andamento eficaz das reuniões é papel do moderador (facilitador).' },
    { id: '3-016', ch: 3, lo: 'FL-3.2.4', k: 'K2', ref: '3.2.4',
      q: 'Uma equipe precisa decidir entre duas soluções para um problema de arquitetura. Especialistas no assunto examinam a proposta em uma sessão liderada por um moderador, buscando consenso e uma decisão. Que tipo de revisão é esse?',
      opts: ['Walkthrough', 'Revisão técnica', 'Inspeção', 'Revisão informal'], a: 1,
      exp: 'A revisão técnica é realizada por revisores tecnicamente qualificados, liderada por um moderador, e tem como objetivos obter consenso e tomar decisões sobre um problema técnico. O walkthrough é conduzido pelo autor, e o objetivo principal da inspeção é encontrar o número máximo de anomalias.' },
    { id: '3-017', ch: 3, lo: 'FL-3.2.4', k: 'K2', ref: '3.2.4',
      q: 'Qual afirmação diferencia corretamente o walkthrough da inspeção?',
      opts: [
        'O walkthrough exige revisão individual prévia; na inspeção, essa preparação é opcional para os revisores',
        'O walkthrough segue o processo genérico completo; a inspeção não segue nenhum processo definido',
        'O walkthrough é conduzido pelo autor; na inspeção, o autor não pode atuar como líder da revisão ou relator',
        'O walkthrough coleta métricas para aprimorar o SDLC; a inspeção busca principalmente instruir os revisores'
      ], a: 2,
      exp: 'O walkthrough é conduzido pelo autor, enquanto na inspeção o autor não pode ser líder da revisão nem relator. No walkthrough a revisão individual prévia é opcional, e é a inspeção, o tipo mais formal, que segue o processo genérico completo e coleta métricas.' },
    { id: '3-018', ch: 3, lo: 'FL-3.2.4', k: 'K2', ref: '3.2.4',
      q: 'Um desenvolvedor pede a uma colega que examine rapidamente seu código, sem processo definido e sem resultado formal documentado. Qual é o principal objetivo desse tipo de revisão?',
      opts: [
        'Detectar anomalias no produto de trabalho',
        'Obter consenso sobre um problema técnico',
        'Coletar métricas para aprimorar o SDLC',
        'Instruir os revisores sobre o produto'
      ], a: 0,
      exp: 'Trata-se de uma revisão informal, cujo principal objetivo é detectar anomalias. Obter consenso sobre um problema técnico é objetivo da revisão técnica, e a coleta de métricas é característica da inspeção.' },
    { id: '3-019', ch: 3, lo: 'FL-3.2.5', k: 'K1', ref: '3.2.5',
      q: 'Qual das opções a seguir é um fator que contribui para o sucesso de uma revisão?',
      opts: [
        'Adotar o tipo mais formal de revisão em qualquer contexto',
        'Cobrir o produto de trabalho inteiro em uma única reunião',
        'Dispensar o treinamento dos participantes para reduzir custos',
        'Realizar as revisões em pequenas partes do produto de trabalho'
      ], a: 3,
      exp: 'Revisar em pequenas partes evita que os revisores percam a concentração na revisão individual e na reunião. O tipo de revisão deve ser o apropriado aos objetivos e ao contexto, não necessariamente o mais formal.' },
    { id: '3-020', ch: 3, lo: 'FL-3.2.5', k: 'K1', ref: '3.2.5',
      q: 'Qual das opções a seguir NÃO é um fator de sucesso para revisões?',
      opts: [
        'Fornecer tempo suficiente para a preparação dos participantes',
        'Incluir a avaliação dos participantes entre os objetivos da revisão',
        'Obter o apoio da gerência para o processo de revisão',
        'Tornar as revisões parte da cultura da organização'
      ], a: 1,
      exp: 'O syllabus pede objetivos claros e critérios de saída mensuráveis, mas afirma que a avaliação dos participantes nunca deve ser um objetivo. Tempo de preparação, apoio da gerência e revisões como parte da cultura da organização constam na lista de fatores de sucesso.' }
  );
})(typeof window !== 'undefined' ? window : globalThis);
