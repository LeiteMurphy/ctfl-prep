// Capítulo 2 – questões originais escritas a partir do Syllabus CTFL v4.0 (pt-BR). a = índice da correta.
// As alternativas são embaralhadas na tela: a explicação nunca deve citar letra ou ordem das opções.
(function (root) {
  root.DATA = root.DATA || { cards: [], questions: [] };
  root.DATA.questions.push(
    { id: '2-001', ch: 2, lo: 'FL-2.1.1', k: 'K2', ref: '2.1.1',
      q: 'Uma empresa troca o modelo em V por um modelo iterativo e incremental em que cada iteração entrega um incremento de produto. Qual consequência para os testes é esperada?',
      opts: [
        'Os testes dinâmicos passam a ser possíveis apenas nas fases posteriores do projeto',
        'Os testes de regressão perdem importância, já que cada entrega é pequena',
        'Os testes estáticos e dinâmicos podem ocorrer em todos os níveis a cada ciclo',
        'A documentação de teste precisa ser bem mais detalhada para acompanhar as entregas'
      ], a: 2,
      exp: 'Quando cada iteração entrega um incremento, testes estáticos e dinâmicos podem ocorrer em todos os níveis de teste em cada iteração, e a entrega frequente exige feedback rápido e testes de regressão extensivos. Testes dinâmicos só nas fases posteriores é característica dos modelos sequenciais.' },
    { id: '2-002', ch: 2, lo: 'FL-2.1.1', k: 'K2', ref: '2.1.1',
      q: 'Em um projeto que segue o modelo em cascata, de quais atividades os Testadores normalmente participam nas fases iniciais?',
      opts: [
        'Revisões de requisitos, análise de testes e modelagem de testes',
        'Execução de testes dinâmicos de componentes e de integração',
        'Automação dos testes de regressão sobre o código já entregue',
        'Testes exploratórios sobre protótipos funcionais do produto'
      ], a: 0,
      exp: 'Nos modelos sequenciais, os Testadores participam no início das revisões de requisitos, da análise e da modelagem de testes. Como o código executável só é criado nas fases posteriores, os testes dinâmicos não podem ser realizados no início do SDLC.' },
    { id: '2-003', ch: 2, lo: 'FL-2.1.1', k: 'K2', ref: '2.1.1',
      q: 'Por que projetos Ágeis favorecem a documentação leve dos produtos de trabalho e a ampla automação de testes?',
      opts: [
        'Porque os testes manuais deixam de ser necessários nesse contexto',
        'Porque o código executável só é criado nas fases posteriores',
        'Porque os critérios de saída de um nível alimentam o nível seguinte',
        'Porque se pressupõe que podem ocorrer mudanças ao longo do projeto'
      ], a: 3,
      exp: 'O Desenvolvimento Ágil pressupõe mudanças ao longo do projeto; por isso favorece documentação leve e ampla automação para facilitar os testes de regressão. Os testes manuais continuam existindo e tendem a usar técnicas baseadas na experiência.' },
    { id: '2-004', ch: 2, lo: 'FL-2.1.2', k: 'K1', ref: '2.1.2',
      q: 'Qual das opções a seguir é uma boa prática de teste válida independentemente do modelo de SDLC escolhido?',
      opts: [
        'Os testes dinâmicos começam somente depois que todo o código estiver completo',
        'Para cada atividade de desenvolvimento há uma atividade de teste correspondente',
        'Os diferentes níveis de teste compartilham os mesmos objetivos de teste',
        'Os Testadores revisam os produtos de trabalho somente em suas versões finais'
      ], a: 1,
      exp: 'Ter uma atividade de teste correspondente a cada atividade de desenvolvimento é uma das boas práticas listadas. Os níveis de teste têm objetivos específicos e diferentes, e os Testadores revisam os produtos de trabalho assim que os rascunhos estão disponíveis.' },
    { id: '2-005', ch: 2, lo: 'FL-2.1.2', k: 'K1', ref: '2.1.2',
      q: 'Segundo as boas práticas de teste, quando devem começar a análise e a modelagem do teste para um determinado nível de teste?',
      opts: [
        'Durante a fase de desenvolvimento correspondente do SDLC',
        'Logo após a conclusão do nível de teste anterior',
        'Quando o objeto de teste desse nível estiver disponível',
        'Depois que os critérios de entrada do nível forem atendidos'
      ], a: 0,
      exp: 'A análise e a modelagem do teste de um nível começam durante a fase de desenvolvimento correspondente, para aderir ao princípio do teste antecipado. Esperar o objeto de teste ficar disponível contraria esse princípio.' },
    { id: '2-006', ch: 2, lo: 'FL-2.1.3', k: 'K1', ref: '2.1.3',
      q: 'Em qual abordagem os casos de teste são escritos em uma forma simples de linguagem natural, fácil de entender pelos stakeholders, geralmente no formato Dado/Quando/Então?',
      opts: [
        'Desenvolvimento orientado por teste (TDD)',
        'Desenvolvimento orientado por teste de aceite (ATDD)',
        'Desenvolvimento orientado pelo comportamento (BDD)',
        'Feature-driven development (FDD)'
      ], a: 2,
      exp: 'O BDD expressa o comportamento desejado com casos de teste em linguagem natural simples, geralmente no formato Dado/Quando/Então, depois traduzidos automaticamente em testes executáveis. O ATDD deriva os testes dos critérios de aceite, sem ser caracterizado por esse formato.' },
    { id: '2-007', ch: 2, lo: 'FL-2.1.3', k: 'K1', ref: '2.1.3',
      q: 'Qual das opções descreve a forma de trabalho do TDD?',
      opts: [
        'O código é escrito primeiro, depois os testes que o cobrem, e então ambos são refatorados',
        'Os testes são derivados dos critérios de aceite como parte do desenho do sistema',
        'Os casos de teste em linguagem natural são traduzidos automaticamente em testes executáveis',
        'Os testes são escritos primeiro, depois o código que os satisfaz, e então ambos são refatorados'
      ], a: 3,
      exp: 'No TDD os testes são escritos primeiro, o código é escrito para satisfazê-los e, em seguida, testes e código são refatorados. Derivar testes dos critérios de aceite caracteriza o ATDD, e a tradução automática de casos em linguagem natural caracteriza o BDD.' },
    { id: '2-008', ch: 2, lo: 'FL-2.1.3', k: 'K1', ref: '2.1.3',
      q: 'O que TDD, ATDD e BDD têm em comum?',
      opts: [
        'Os testes são derivados dos critérios de aceite do sistema',
        'Os testes são definidos antes de o código ser escrito',
        'Os testes são escritos no formato Dado/Quando/Então',
        'Os testes substituem um projeto de software extenso'
      ], a: 1,
      exp: 'As três abordagens implementam o teste antecipado e seguem o shift-left porque os testes são definidos antes de o código ser escrito. Critérios de aceite são próprios do ATDD e o formato Dado/Quando/Então é típico do BDD.' },
    { id: '2-009', ch: 2, lo: 'FL-2.1.4', k: 'K2', ref: '2.1.4',
      q: 'Uma organização adota DevOps com um pipeline de CI/CD. Do ponto de vista dos testes, qual efeito é esperado?',
      opts: [
        'Feedback rápido sobre o efeito das alterações no código existente',
        'Eliminação dos testes manuais realizados na perspectiva do usuário',
        'Redução da atenção dada às características de qualidade não funcionais',
        'Dispensa de recursos adicionais para estabelecer a automação de testes'
      ], a: 0,
      exp: 'O feedback rápido sobre a qualidade do código e sobre o efeito das alterações no código existente é um benefício do DevOps. Os testes manuais continuam necessários, a visão das características não funcionais aumenta e a automação requer recursos adicionais.' },
    { id: '2-010', ch: 2, lo: 'FL-2.1.4', k: 'K2', ref: '2.1.4',
      q: 'Qual das opções a seguir representa um risco ou desafio do DevOps, e não um benefício para os testes?',
      opts: [
        'Os ambientes de teste estáveis são mais fáceis de estabelecer',
        'A necessidade de testes manuais repetitivos é reduzida',
        'A visão das características de qualidade não funcionais é ampliada',
        'As ferramentas de CI/CD precisam ser introduzidas e mantidas'
      ], a: 3,
      exp: 'Introduzir e manter as ferramentas de CI/CD está na lista de riscos e desafios, junto com definir o pipeline de entrega e sustentar a automação de testes. As demais opções constam como benefícios do DevOps para os testes.' },
    { id: '2-011', ch: 2, lo: 'FL-2.1.4', k: 'K2', ref: '2.1.4',
      q: 'Depois de implantar um pipeline de entrega com alto nível de automação, um gerente propõe abolir os testes manuais. Qual posição está alinhada ao syllabus?',
      opts: [
        'Os testes manuais só continuam necessários para os testes de regressão',
        'Os testes manuais só podem ser abolidos quando houver também Entrega Contínua (CD)',
        'Os testes manuais, sobretudo da perspectiva do usuário, continuam necessários',
        'Os testes manuais passam a ser uma responsabilidade exclusiva de operações'
      ], a: 2,
      exp: 'Embora o DevOps venha com alto nível de testes automatizados, os testes manuais, especialmente da perspectiva do usuário, ainda serão necessários. A automação reduz a necessidade de testes manuais repetitivos, mas não elimina os testes manuais.' },
    { id: '2-012', ch: 2, lo: 'FL-2.1.5', k: 'K2', ref: '2.1.5',
      q: 'Qual das práticas a seguir ilustra a abordagem shift-left?',
      opts: [
        'Realizar a análise estática do código-fonte depois dos testes dinâmicos',
        'Realizar testes não funcionais começando no nível de teste de componente',
        'Escrever os casos de teste logo após o código ter sido implementado',
        'Revisar as especificações quando o teste de sistema estiver concluído'
      ], a: 1,
      exp: 'Testes não funcionais tendem a ocorrer tarde no SDLC, então iniciá-los no nível de componente é uma forma de shift-left. No shift-left a análise estática é concluída antes do teste dinâmico e os casos de teste são escritos antes do código.' },
    { id: '2-013', ch: 2, lo: 'FL-2.1.5', k: 'K2', ref: '2.1.5',
      q: 'Qual afirmação sobre a abordagem shift-left está correta?',
      opts: [
        'Torna dispensáveis os testes realizados nas fases finais do SDLC',
        'Reduz o esforço e os custos de teste já desde o início do processo',
        'Aplica-se somente a projetos que adotam a Integração Contínua',
        'Pode gerar custos adicionais no início e economia no final do processo'
      ], a: 3,
      exp: 'O shift-left pode exigir treinamento, esforço e/ou custos adicionais no início, mas espera-se que economize esforços e/ou custos no final. Ele não significa negligenciar os testes posteriores no SDLC.' },
    { id: '2-014', ch: 2, lo: 'FL-2.1.5', k: 'K2', ref: '2.1.5',
      q: 'Antes de qualquer código ser escrito, uma equipe revisa a especificação sob a perspectiva de testes. Que tipo de problema essa atividade geralmente encontra?',
      opts: [
        'Ambiguidades, incompletude e inconsistências',
        'Falhas de performance sob carga elevada',
        'Regressões em partes inalteradas do código',
        'Falhas nas interações entre os componentes'
      ], a: 0,
      exp: 'A revisão das especificações sob a perspectiva de testes geralmente encontra possíveis defeitos como ambiguidades, incompletude e inconsistências. Falhas de performance ou de interação só aparecem com testes dinâmicos, que exigem código executável.' },
    { id: '2-015', ch: 2, lo: 'FL-2.1.6', k: 'K2', ref: '2.1.6',
      q: 'Qual afirmação sobre as retrospectivas está correta?',
      opts: [
        'Participam os Testadores, e os resultados ficam restritos à equipe de teste',
        'São realizadas no final do projeto, e não ao final de uma iteração',
        'Os resultados devem ser registrados e as melhorias recomendadas, acompanhadas',
        'Discutem o que não foi bem-sucedido, e não o que deve ser mantido'
      ], a: 2,
      exp: 'Os resultados das retrospectivas devem ser registrados e é importante que todas as melhorias recomendadas sejam acompanhadas. Participam também Desenvolvedores, Arquitetos, Product Owner e Analistas de Negócios, e a reunião pode ocorrer ao final de uma iteração ou quando necessário.' },
    { id: '2-016', ch: 2, lo: 'FL-2.1.6', k: 'K2', ref: '2.1.6',
      q: 'Em uma retrospectiva, a equipe constata que os requisitos chegaram incompletos durante a iteração e define ações para resolver essas deficiências. Qual benefício para os testes isso ilustra mais diretamente?',
      opts: [
        'Aumento da qualidade do material de teste',
        'Melhoria da qualidade da base de teste',
        'Vínculo e aprendizado da equipe',
        'Melhor cooperação entre desenvolvimento e testes'
      ], a: 1,
      exp: 'Abordar e resolver deficiências na extensão e na qualidade dos requisitos é o exemplo dado para a melhoria da qualidade da base de teste. A qualidade do material de teste está ligada à revisão conjunta dos processos de teste, não aos requisitos.' },
    { id: '2-017', ch: 2, lo: 'FL-2.2.1', k: 'K2', ref: '2.2.1',
      q: 'Um desenvolvedor testa uma classe isoladamente, em seu ambiente de desenvolvimento, usando um framework de teste de unidade. Qual nível de teste está sendo executado?',
      opts: [
        'Teste de integração de componentes',
        'Teste de sistema',
        'Teste de integração de sistema',
        'Teste de componente'
      ], a: 3,
      exp: 'O teste de componente (teste de unidade) testa componentes isoladamente, geralmente com frameworks de teste de unidade e realizado por desenvolvedores em seus ambientes. O teste de integração de componentes foca as interfaces e interações entre eles, e não um elemento isolado.' },
    { id: '2-018', ch: 2, lo: 'FL-2.2.1', k: 'K2', ref: '2.2.1',
      q: 'Uma equipe verifica a troca de mensagens entre o aplicativo de pedidos da empresa e um serviço externo de pagamentos, em um ambiente semelhante ao operacional. Qual nível de teste é esse?',
      opts: [
        'Teste de integração de sistema',
        'Teste de integração de componentes',
        'Teste de sistema',
        'Teste de aceite'
      ], a: 0,
      exp: 'O teste de integração de sistema foca as interfaces do sistema com outros sistemas e serviços externos, de preferência em ambiente semelhante ao operacional. O teste de integração de componentes trata das interfaces entre componentes do mesmo sistema.' },
    { id: '2-019', ch: 2, lo: 'FL-2.2.1', k: 'K2', ref: '2.2.1',
      q: 'Uma equipe de teste independente executa tarefas de ponta a ponta e avalia a usabilidade do produto completo em um ambiente de teste representativo, tendo as especificações do produto como base. Qual nível de teste é esse?',
      opts: [
        'Teste de aceite',
        'Teste de integração de sistema',
        'Teste de sistema',
        'Teste de integração de componentes'
      ], a: 2,
      exp: 'O teste de sistema foca o comportamento geral e os recursos do sistema inteiro, incluindo tarefas funcionais de ponta a ponta e características não funcionais, e pode ser feito por uma equipe independente. O teste de aceite foca a validação das necessidades de negócio e deve, de preferência, ser feito pelos usuários previstos.' },
    { id: '2-020', ch: 2, lo: 'FL-2.2.1', k: 'K2', ref: '2.2.1',
      q: 'Em que se concentra o teste de aceite?',
      opts: [
        'No comportamento geral e nos recursos de todo um sistema ou produto',
        'Na validação e na demonstração da disposição para implantação',
        'Nas interfaces com outros sistemas e serviços externos',
        'Nas interfaces e nas interações entre os componentes'
      ], a: 1,
      exp: 'O teste de aceite concentra-se na validação e na demonstração da disposição para a implantação, isto é, que o sistema atende às necessidades de negócio do usuário. O comportamento geral e os recursos do sistema são o foco do teste de sistema.' },
    { id: '2-021', ch: 2, lo: 'FL-2.2.1', k: 'K2', ref: '2.2',
      q: 'Nos modelos sequenciais de SDLC, como os níveis de teste geralmente se relacionam entre si?',
      opts: [
        'Os critérios de saída de um nível integram os critérios de entrada do próximo',
        'A base de teste de um nível é reutilizada sem alterações pelo próximo nível de teste',
        'Os tipos de teste aplicados em um nível não se repetem no próximo nível',
        'A equipe de teste independente de um nível é a mesma do próximo nível'
      ], a: 0,
      exp: 'Nos modelos sequenciais, os níveis de teste costumam ser definidos de modo que os critérios de saída de um nível façam parte dos critérios de entrada do seguinte. Os tipos de teste podem ser aplicados em todos os níveis, e cada nível tem base de teste e responsabilidades próprias.' },
    { id: '2-022', ch: 2, lo: 'FL-2.2.2', k: 'K2', ref: '2.2.2',
      q: 'Um Testador reaproveita um caso de teste da função de busca para verificar se o resultado é exibido em até 2 segundos. Que tipo de teste essa verificação adicional representa?',
      opts: [
        'Teste funcional',
        'Teste caixa-branca',
        'Teste de regressão',
        'Teste não funcional'
      ], a: 3,
      exp: 'Muitos testes não funcionais derivam de testes funcionais: usam o mesmo teste, mas verificam se uma restrição não funcional, como o tempo de execução, é atendida. O teste funcional avalia “o que” o objeto de teste deve fazer, não “quão bem” ele se comporta.' },
    { id: '2-023', ch: 2, lo: 'FL-2.2.2', k: 'K2', ref: '2.2.2',
      q: 'Qual afirmação distingue corretamente o teste caixa-preta do teste caixa-branca?',
      opts: [
        'O caixa-preta avalia funções; o caixa-branca, características não funcionais',
        'O caixa-preta se baseia em especificações; o caixa-branca, na estrutura interna',
        'O caixa-preta só se aplica ao teste de sistema; o caixa-branca, só ao de componente',
        'O caixa-preta cabe a Testadores; o caixa-branca, somente a desenvolvedores'
      ], a: 1,
      exp: 'O teste caixa-preta é baseado em especificações e deriva testes da documentação externa ao objeto de teste; o caixa-branca é baseado na estrutura e deriva testes da implementação ou estrutura interna. Ambos podem ser aplicados em todos os níveis de teste.' },
    { id: '2-024', ch: 2, lo: 'FL-2.2.2', k: 'K2', ref: '2.2.2',
      q: 'Qual afirmação sobre a relação entre tipos de teste e níveis de teste está correta?',
      opts: [
        'O teste não funcional deve ser realizado somente no teste de sistema',
        'O teste caixa-branca é restrito ao nível de teste de componente',
        'Os quatro tipos de teste podem ser aplicados a todos os níveis de teste',
        'O teste funcional é o único tipo adequado ao nível de teste de aceite'
      ], a: 2,
      exp: 'Os quatro tipos de teste (funcional, não funcional, caixa-preta e caixa-branca) podem ser aplicados a todos os níveis, embora o foco seja diferente em cada um. O teste não funcional, inclusive, às vezes deve começar cedo, em revisões e testes de componentes.' },
    { id: '2-025', ch: 2, lo: 'FL-2.2.3', k: 'K2', ref: '2.2.3',
      q: 'Um desenvolvedor informa que removeu um defeito. O Testador então reexecuta os casos de teste que haviam falhado por causa dele. Que teste está sendo realizado?',
      opts: [
        'Teste de confirmação',
        'Teste de regressão',
        'Teste de manutenção',
        'Teste de aceite'
      ], a: 0,
      exp: 'O teste de confirmação verifica se o defeito original foi corrigido com sucesso, por exemplo reexecutando os casos de teste que falharam devido a ele. O teste de regressão procura consequências adversas da alteração em outras partes.' },
    { id: '2-026', ch: 2, lo: 'FL-2.2.3', k: 'K2', ref: '2.2.3',
      q: 'Após a correção de um defeito no módulo de faturamento ter sido confirmada, a equipe executa um conjunto de testes nos demais módulos e em um sistema conectado. O que ela busca com isso?',
      opts: [
        'Confirmar que o defeito original foi removido com sucesso',
        'Decidir se a alteração deve ou não ser realizada',
        'Verificar se os dados migrados foram convertidos corretamente',
        'Confirmar que a alteração não causou consequências adversas'
      ], a: 3,
      exp: 'Esse é o teste de regressão: confirma que nenhuma consequência adversa foi causada por uma alteração, no mesmo componente, em outros componentes ou em sistemas conectados. Confirmar a remoção do defeito original é o papel do teste de confirmação, já realizado no cenário.' },
    { id: '2-027', ch: 2, lo: 'FL-2.2.3', k: 'K2', ref: '2.2.3',
      q: 'Por que os testes de regressão são fortes candidatos à automação?',
      opts: [
        'Exigem ambientes muito específicos, como laboratórios de usabilidade',
        'São executados muitas vezes e seu número tende a crescer a cada versão',
        'São executados uma única vez, logo após a correção de cada defeito',
        'Limitam-se ao componente alterado e por isso têm escopo reduzido'
      ], a: 1,
      exp: 'Os conjuntos de testes de regressão são executados muitas vezes e o número de casos de teste aumenta a cada iteração ou versão, o que os torna fortes candidatos à automação. Eles não se limitam ao componente alterado: podem alcançar outros componentes, sistemas conectados e o ambiente.' },
    { id: '2-028', ch: 2, lo: 'FL-2.3.1', k: 'K2', ref: '2.3',
      q: 'Um sistema legado será desativado, mas a legislação exige que seus dados fiquem retidos e acessíveis por dez anos. Que testes de manutenção podem ser necessários?',
      opts: [
        'Testes de conversão dos dados migrados de outro aplicativo para o sistema',
        'Testes associados ao novo ambiente operacional e ao software alterado',
        'Testes de arquivamento de dados e de restauração e recuperação dos dados',
        'Testes de confirmação dos hot fixes aplicados ao sistema ainda em produção'
      ], a: 2,
      exp: 'Na aposentadoria de um sistema com longos períodos de retenção, podem ser necessários testes de arquivamento de dados e dos procedimentos de restauração e recuperação. Testes de conversão de dados e do novo ambiente pertencem ao acionador de atualização ou migração.' },
    { id: '2-029', ch: 2, lo: 'FL-2.3.1', k: 'K2', ref: '2.3',
      q: 'Uma empresa move um aplicativo em produção de uma plataforma para outra, sem acrescentar funcionalidades. Em qual categoria de acionador do teste de manutenção essa situação se enquadra?',
      opts: [
        'Atualização ou migração do ambiente operacional',
        'Modificação por aprimoramento planejado',
        'Modificação por alteração corretiva ou hot fix',
        'Aposentadoria do aplicativo'
      ], a: 0,
      exp: 'Passar de uma plataforma para outra é uma atualização ou migração do ambiente operacional, que pode exigir testes do novo ambiente e do software alterado. Aprimoramentos planejados e hot fixes são modificações do próprio software.' },
    { id: '2-030', ch: 2, lo: 'FL-2.3.1', k: 'K2', ref: '2.3',
      q: 'Um hot fix é aplicado a um sistema em produção. Além de avaliar o sucesso da implementação da alteração, o que o teste de manutenção deve incluir?',
      opts: [
        'A repetição de todos os níveis de teste executados no desenvolvimento original',
        'A validação de todos os requisitos de negócio com os usuários previstos',
        'A verificação exclusiva das partes do sistema que foram diretamente alteradas',
        'A verificação de possíveis regressões nas partes do sistema que não mudaram'
      ], a: 3,
      exp: 'O teste das alterações em um sistema em produção inclui avaliar o sucesso da alteração e verificar possíveis regressões nas partes inalteradas, que geralmente são a maior parte do sistema. O escopo depende do grau de risco da mudança, do tamanho do sistema e do tamanho da mudança, não de repetir todos os testes.' }
  );
})(typeof window !== 'undefined' ? window : globalThis);
