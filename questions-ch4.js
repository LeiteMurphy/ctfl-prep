// Capítulo 4 – questões originais escritas a partir do Syllabus CTFL v4.0 (pt-BR). a = índice da correta.
// As alternativas são embaralhadas na tela: a explicação nunca deve citar letra ou ordem das opções.
(function (root) {
  root.DATA = root.DATA || { cards: [], questions: [] };
  root.DATA.questions.push(
    // ---------- 4.1 Visão geral ----------
    { id: '4-001', ch: 4, lo: 'FL-4.1.1', k: 'K2', ref: '4.1',
      q: 'Qual afirmação descreve corretamente as técnicas de teste caixa-preta?',
      opts: [
        'Baseiam-se na análise da estrutura interna e do processamento do objeto de teste',
        'Usam o conhecimento e a experiência do Testador para projetar os casos de teste',
        'Baseiam-se no comportamento especificado, sem referência à estrutura interna',
        'Só podem ser aplicadas após o projeto ou a implementação do objeto de teste'
      ], a: 2,
      exp: 'As técnicas caixa-preta (baseadas em especificações) analisam o comportamento especificado sem referência à estrutura interna. Analisar a estrutura interna e depender do projeto/implementação são características das técnicas caixa-branca.' },
    { id: '4-002', ch: 4, lo: 'FL-4.1.1', k: 'K2', ref: '4.1',
      q: 'Um módulo foi totalmente reescrito para melhorar a performance, mas o comportamento exigido permaneceu o mesmo. Quais casos de teste existentes tendem a continuar úteis sem alteração?',
      opts: [
        'Os derivados de técnicas caixa-preta, pois não dependem da implementação',
        'Os derivados de técnicas caixa-branca, pois dependem da estrutura do código',
        'Os derivados de cobertura de instrução, pois medem o código executado',
        'Os derivados de cobertura de ramificação, pois seguem o fluxo de controle'
      ], a: 0,
      exp: 'Casos de teste caixa-preta são independentes de como o software é implementado; se a implementação muda e o comportamento exigido não, eles continuam úteis. Os casos caixa-branca (instrução, ramificação) dependem da estrutura do código, que foi reescrita.' },
    { id: '4-003', ch: 4, lo: 'FL-4.1.1', k: 'K2', ref: '4.1',
      q: 'Qual afirmação sobre as técnicas de teste baseadas na experiência está correta?',
      opts: [
        'Substituem as técnicas caixa-preta e caixa-branca quando o Testador é experiente',
        'Sua eficácia independe das habilidades do Testador que as aplica',
        'Detectam apenas defeitos que as técnicas caixa-preta também detectariam',
        'São complementares às técnicas caixa-preta e caixa-branca'
      ], a: 3,
      exp: 'As técnicas baseadas na experiência podem detectar defeitos que as outras não detectam e, por isso, são complementares a elas, não substitutas. Sua eficácia depende muito das habilidades do Testador.' },

    // ---------- 4.2.1 Particionamento de equivalência ----------
    { id: '4-004', ch: 4, lo: 'FL-4.2.1', k: 'K3', ref: '4.2.1',
      q: 'Um sistema de bilheteria recebe a idade (número inteiro) e calcula o ingresso:\n0 a 5: gratuito\n6 a 17: meia-entrada\n18 a 64: inteira\n65 ou mais: desconto sênior\nIdades negativas são rejeitadas.\nQuantos casos de teste são necessários, no mínimo, para atingir 100% de cobertura com particionamento de equivalência?',
      opts: ['4', '5', '6', '8'], a: 1,
      exp: 'Há 5 partições: negativos (inválida), 0–5, 6–17, 18–64 e 65 ou mais. Um caso de teste por partição basta, logo 5. Quem responde 4 esquece que a partição inválida também precisa ser coberta.' },
    { id: '4-005', ch: 4, lo: 'FL-4.2.1', k: 'K3', ref: '4.2.1',
      q: 'Um sistema calcula o frete pelo peso (kg, inteiro):\nabaixo de 1: erro “peso inválido”\n1 a 5: R$ 10\n6 a 20: R$ 25\n21 a 50: R$ 60\nacima de 50: erro “excede o limite”\nQual conjunto de valores de teste atinge 100% de cobertura de particionamento de equivalência?',
      opts: [
        '1, 5, 6, 20 e 21',
        '−5, 0, 4, 18 e 44',
        '0, 3, 12, 35 e 60',
        '3, 12, 35, 50 e 51'
      ], a: 2,
      exp: 'As partições são: abaixo de 1, 1–5, 6–20, 21–50 e acima de 50. Os valores 0, 3, 12, 35 e 60 caem um em cada partição (5/5). Os outros conjuntos deixam de fora ao menos uma partição inválida: valores de limite como 1, 5, 6, 20 e 21 cobrem só as três partições válidas.' },
    { id: '4-006', ch: 4, lo: 'FL-4.2.1', k: 'K3', ref: '4.2.1',
      q: 'Um sistema escolar recebe a nota (inteiro):\nabaixo de 0: erro “nota inválida”\n0 a 49: reprovado\n50 a 69: recuperação\n70 a 100: aprovado\nacima de 100: erro “acima do máximo”\nOs testes usaram as notas 10, 45, 55, 100 e 120. Qual é a cobertura de particionamento de equivalência atingida?',
      opts: ['80%', '60%', '75%', '100%'], a: 0,
      exp: 'São 5 partições. As notas 10 e 45 caem na mesma (0–49), 55 em 50–69, 100 em 70–100 e 120 em “acima de 100”: 4 partições executadas de 5 = 80%. A partição de notas negativas não foi exercida, e cinco valores não significam cinco partições.' },
    { id: '4-007', ch: 4, lo: 'FL-4.2.1', k: 'K3', ref: '4.2.1',
      q: 'Um formulário tem dois parâmetros, cada um com suas partições válidas:\nTipo de cliente: regular, premium, corporativo\nPagamento: cartão, boleto, pix, transferência\nQuantos casos de teste são necessários, no mínimo, para atingir 100% de Each Choice Coverage (cobertura de cada escolha)?',
      opts: ['3', '7', '12', '4'], a: 3,
      exp: 'A cobertura de cada escolha exige cada partição de cada conjunto pelo menos uma vez, sem considerar combinações. Cada caso de teste cobre uma partição de cada parâmetro, então o mínimo é o tamanho do maior conjunto: 4. Doze seria o número de todas as combinações (3 × 4), o que o critério não exige.' },
    { id: '4-008', ch: 4, lo: 'FL-4.2.1', k: 'K3', ref: '4.2.1',
      q: 'Uma tela de check-in tem dois parâmetros:\nBagagem: mão, despachada\nClasse: econômica, executiva, primeira\nQual conjunto de casos de teste (bagagem, classe) atinge 100% de Each Choice Coverage (cobertura de cada escolha)?',
      opts: [
        '(mão, econômica); (mão, executiva); (mão, primeira)',
        '(mão, econômica); (despachada, executiva); (mão, primeira)',
        '(mão, econômica); (despachada, econômica); (despachada, executiva)',
        '(mão, executiva); (despachada, executiva); (despachada, primeira)'
      ], a: 1,
      exp: 'Cada partição de cada parâmetro deve aparecer ao menos uma vez: mão e despachada; econômica, executiva e primeira. Só o conjunto (mão, econômica); (despachada, executiva); (mão, primeira) contém as cinco. Os demais deixam de fora “despachada”, “primeira” ou “econômica”.' },
    { id: '4-009', ch: 4, lo: 'FL-4.2.1', k: 'K3', ref: '4.2.1',
      q: 'Um sistema calcula a comissão pelas vendas do mês (R$, inteiro):\n0 a 1.000: sem comissão\n1.001 a 5.000: 5%\n5.001 a 20.000: 8%\nacima de 20.000: 12%\nValores negativos são rejeitados.\nJá existem casos de teste com os valores 500, 800, 3.000 e 25.000. Quantos casos de teste adicionais são necessários, no mínimo, para 100% de cobertura de particionamento de equivalência?',
      opts: ['2', '1', '3', '5'], a: 0,
      exp: 'São 5 partições: negativos, 0–1.000, 1.001–5.000, 5.001–20.000 e acima de 20.000. Os testes existentes cobrem três (500 e 800 caem na mesma). Faltam a partição 5.001–20.000 e a inválida (negativos): 2 casos adicionais.' },

    // ---------- 4.2.2 Análise de valor de limite ----------
    { id: '4-010', ch: 4, lo: 'FL-4.2.2', k: 'K3', ref: '4.2.2',
      q: 'Um campo aceita idades inteiras de 18 a 65 (inclusive); os demais valores são rejeitados. Aplicando o BVA de 2 valores, quais são os itens de cobertura?',
      opts: [
        '18, 19, 64 e 65',
        '17, 19, 64 e 66',
        '17, 18, 65 e 66',
        '17, 18, 19, 64, 65 e 66'
      ], a: 2,
      exp: 'No BVA de 2 valores, cada valor de limite (18 e 65) gera dois itens: ele próprio e o vizinho mais próximo na partição adjacente (17 e 66). Resultado: 17, 18, 65 e 66. Incluir também 19 e 64 corresponde ao BVA de 3 valores.' },
    { id: '4-011', ch: 4, lo: 'FL-4.2.2', k: 'K3', ref: '4.2.2',
      q: 'Um campo aceita quantidades inteiras de 10 a 50 (inclusive). Aplicando o BVA de 3 valores aos dois valores de limite da partição válida (10 e 50), quais são os itens de cobertura?',
      opts: [
        '9, 10, 50 e 51',
        '10, 11, 49 e 50',
        '8, 9, 10, 50, 51 e 52',
        '9, 10, 11, 49, 50 e 51'
      ], a: 3,
      exp: 'No BVA de 3 valores, cada valor de limite gera três itens: ele próprio e seus dois vizinhos. Para 10: 9, 10, 11; para 50: 49, 50, 51. O conjunto 9, 10, 50 e 51 é o do BVA de 2 valores.' },
    { id: '4-012', ch: 4, lo: 'FL-4.2.2', k: 'K3', ref: '4.2.2',
      q: 'Um termostato recebe a temperatura (°C, inteiro):\naté 17: liga o aquecimento\n18 a 25: não faz nada\n26 ou mais: liga a refrigeração\nOs testes usaram os valores 17, 20, 25 e 30. Qual é a cobertura de BVA de 2 valores atingida?',
      opts: ['25%', '50%', '75%', '100%'], a: 1,
      exp: 'Os valores de limite das partições são 17, 18, 25 e 26 (cada um é também o vizinho do outro na partição adjacente), logo 4 itens de cobertura. Dos valores usados, só 17 e 25 são itens de cobertura; 20 e 30 não estão em nenhum limite. Cobertura = 2/4 = 50%.' },
    { id: '4-013', ch: 4, lo: 'FL-4.2.2', k: 'K3', ref: '4.2.2',
      q: 'Requisito: “conceder desconto se quantidade ≥ 50” (quantidade inteira). O desenvolvedor implementou por engano “se quantidade = 50”. Considerando o valor de limite 50, qual valor de teste revela o defeito e de qual versão do BVA ele é derivado?',
      opts: [
        '51, derivado apenas do BVA de 3 valores',
        '49, derivado do BVA de 2 valores e do de 3 valores',
        '50, derivado do BVA de 2 valores e do de 3 valores',
        '48, derivado apenas do BVA de 3 valores'
      ], a: 0,
      exp: 'O BVA de 2 valores gera 50 e 49 (vizinho na partição adjacente); em ambos o código errado se comporta como o esperado (50 dá desconto, 49 não). Só com 51, que deveria dar desconto e não dá, a falha aparece, e 51 só é gerado pelo BVA de 3 valores (49, 50, 51). Por isso o BVA de 3 valores é mais rigoroso.' },
    { id: '4-014', ch: 4, lo: 'FL-4.2.2', k: 'K3', ref: '4.2.2',
      q: 'Um programa de fidelidade classifica o saldo de pontos (inteiro):\nabaixo de 0: erro “saldo inválido”\n0 a 59: bronze\n60 a 89: prata\n90 a 100: ouro\nacima de 100: erro “saldo excedido”\nQuantos casos de teste são necessários, no mínimo, para 100% de cobertura com o BVA de 2 valores, considerando todas as partições?',
      opts: ['4', '6', '12', '8'], a: 3,
      exp: 'Há 4 fronteiras entre partições adjacentes (−1|0, 59|60, 89|90, 100|101) e cada uma contribui com dois valores de limite: −1, 0, 59, 60, 89, 90, 100 e 101. São 8 itens de cobertura, um caso de teste para cada. Quem responde 6 esquece os limites das partições inválidas (−1 e 101).' },
    { id: '4-015', ch: 4, lo: 'FL-4.2.2', k: 'K3', ref: '4.2.2',
      q: 'Um campo “mês” aceita inteiros de 1 a 12. Os itens de cobertura do BVA de 3 valores foram identificados para os valores de limite 1 e 12. Os testes executados usaram os valores 0, 1, 12 e 13. Qual é a cobertura de BVA de 3 valores atingida?',
      opts: ['33%', '50%', '67%', '100%'], a: 2,
      exp: 'Itens do BVA de 3 valores: 0, 1, 2 (para o limite 1) e 11, 12, 13 (para o limite 12), total 6. Foram executados 0, 1, 12 e 13: 4/6 ≈ 67%. Esses quatro valores dariam 100% apenas no BVA de 2 valores; faltam os vizinhos internos 2 e 11.' },

    // ---------- 4.2.3 Tabela de decisão ----------
    { id: '4-016', ch: 4, lo: 'FL-4.2.3', k: 'K3', ref: '4.2.3',
      q: 'Uma regra de desconto depende de três condições booleanas:\nC1: cliente cadastrado?\nC2: possui cartão fidelidade?\nC3: compra acima de R$ 200?\nSomente clientes cadastrados podem ter cartão fidelidade. Partindo da tabela de decisão completa e excluindo as colunas inviáveis, quantos casos de teste são necessários, no mínimo, para 100% de cobertura?',
      opts: ['5', '6', '8', '3'], a: 1,
      exp: 'A tabela completa tem 2³ = 8 colunas. As combinações com C1 = F e C2 = V são inviáveis (duas colunas, uma para cada valor de C3). Restam 8 − 2 = 6 colunas viáveis, que são os itens de cobertura. Oito ignora que colunas inviáveis não contam.' },
    { id: '4-017', ch: 4, lo: 'FL-4.2.3', k: 'K3', ref: '4.2.3',
      q: 'Tabela de decisão (ações: X = ocorre, – = não ocorre):\nCondição | R1 | R2 | R3 | R4\nMembro? | V | V | F | F\nTotal > 100? | V | F | V | F\nAção\nDesconto 10% | X | – | – | –\nFrete grátis | X | X | X | –\nCasos de teste executados:\nT1: membro, total 150\nT2: não membro, total 80\nT3: membro, total 120\nQual é a cobertura da tabela de decisão atingida?',
      opts: ['50%', '25%', '75%', '100%'], a: 0,
      exp: 'T1 e T3 exercitam a mesma coluna (R1: membro e total > 100) e T2 exercita R4. São 2 colunas executadas de 4 viáveis = 50%. Contar três casos de teste como três colunas (75%) é o erro típico.' },
    { id: '4-018', ch: 4, lo: 'FL-4.2.3', k: 'K3', ref: '4.2.3',
      q: 'Tabela de decisão minimizada de um login (“-” = condição irrelevante):\nCondição | R1 | R2 | R3\nSenha válida? | F | V | V\nConta ativa? | - | F | V\nAção\nAcesso? | não | não | sim\nQuantos casos de teste são necessários, no mínimo, para 100% de cobertura desta tabela?',
      opts: ['2', '4', '3', '8'], a: 2,
      exp: 'Os itens de cobertura são as colunas da tabela com combinações viáveis de condições: R1, R2 e R3, portanto 3 casos de teste. Quatro seria o número de colunas da tabela completa (2²), antes da fusão indicada pelo “-”.' },
    { id: '4-019', ch: 4, lo: 'FL-4.2.3', k: 'K3', ref: '4.2.3',
      q: 'Tabela de decisão de entrada estendida para limite de crédito (“-” = irrelevante):\nCondição | R1 | R2 | R3 | R4\nIdade | <18 | ≥18 | ≥18 | ≥18\nRenda | - | baixa | média | alta\nAção\nLimite (R$) | 0 | 500 | 2000 | 5000\nJá foram executados os casos (idade, renda): (17, alta), (30, média), (45, alta) e (16, baixa). Qual caso de teste adicional leva a cobertura a 100%?',
      opts: ['(15, média)', '(60, alta)', '(18, média)', '(25, baixa)'], a: 3,
      exp: '(17, alta) e (16, baixa) exercitam R1; (30, média) exercita R3; (45, alta) exercita R4. Falta R2 (idade ≥ 18 e renda baixa), coberta por (25, baixa). O caso (18, média) repete R3, pois 18 já pertence a “≥18”.' },
    { id: '4-020', ch: 4, lo: 'FL-4.2.3', k: 'K3', ref: '4.2.3',
      q: 'Tabela de decisão (ações: X = ocorre, – = não ocorre):\nCondição | R1 | R2 | R3 | R4\nEm estoque? | V | V | F | F\nPgto aprovado? | V | F | V | F\nAção\nEnviar pedido | X | – | – | –\nEstornar pgto | – | – | X | –\nCancelar pedido | – | X | X | X\nQual caso de teste tem o resultado esperado correto segundo a tabela?',
      opts: [
        'Sem estoque, pagamento aprovado → enviar o pedido, sem estorno',
        'Em estoque, pagamento recusado → cancelar o pedido, sem estorno',
        'Em estoque, pagamento aprovado → enviar o pedido e estornar',
        'Sem estoque, pagamento recusado → estornar e cancelar o pedido'
      ], a: 1,
      exp: 'Em estoque com pagamento recusado é a regra R2: apenas “Cancelar pedido” ocorre. Sem estoque com pagamento aprovado (R3) exige estornar e cancelar; R1 envia sem estornar; R4 apenas cancela, pois não há pagamento a estornar.' },
    { id: '4-021', ch: 4, lo: 'FL-4.2.3', k: 'K3', ref: '4.2.3',
      q: 'Uma tabela de decisão de entrada estendida terá as condições:\nTipo de conta: básica, plus ou premium\nCliente novo? V ou F\nValor acima do limite? V ou F\nTodas as combinações são viáveis. Quantas colunas (regras) tem a tabela de decisão completa?',
      opts: ['7', '8', '12', '16'], a: 2,
      exp: 'A tabela completa cobre todas as combinações de condições: 3 × 2 × 2 = 12 colunas. Oito (2³) só valeria se as três condições fossem booleanas; sete é a soma dos valores, não o número de combinações.' },

    // ---------- 4.2.4 Transição de estado ----------
    { id: '4-022', ch: 4, lo: 'FL-4.2.4', k: 'K3', ref: '4.2.4',
      q: 'Tabela de estados de uma conta (linhas = estados, colunas = eventos, “–” = transição inválida):\nEstado | bloquear | desbloquear | encerrar\nAtiva | Bloqueada | – | Encerrada\nBloqueada | – | Ativa | Encerrada\nEncerrada | – | – | –\nPara atingir 100% de cobertura de todas as transições, quantas transições inválidas os casos de teste devem tentar executar?',
      opts: ['5', '4', '9', '3'], a: 0,
      exp: 'A tabela tem 3 × 3 = 9 células: 4 transições válidas e 5 células vazias (Ativa/desbloquear, Bloqueada/bloquear e as três de Encerrada). A cobertura de todas as transições exige executar as 4 válidas e tentar as 5 inválidas. Nove é o total de itens de cobertura, não o número de inválidas.' },
    { id: '4-023', ch: 4, lo: 'FL-4.2.4', k: 'K3', ref: '4.2.4',
      q: 'Um tocador de música tem as transições válidas (estado inicial: Desligado):\nDesligado –ligar→ Espera\nEspera –play→ Tocando\nTocando –pausa→ Pausado\nPausado –play→ Tocando\nTocando –stop→ Espera\nUm caso de teste executa os eventos: ligar, play, stop, play, pausa. Qual é a cobertura de transições válidas (0-switch) atingida?',
      opts: ['60%', '75%', '100%', '80%'], a: 3,
      exp: 'O caso percorre Desligado→Espera, Espera→Tocando, Tocando→Espera, Espera→Tocando (repetida) e Tocando→Pausado: 4 transições distintas de 5 = 80%. A transição Pausado –play→ Tocando não foi executada; cinco eventos não significam cinco transições diferentes.' },
    { id: '4-024', ch: 4, lo: 'FL-4.2.4', k: 'K3', ref: '4.2.4',
      q: 'Um pedido tem as transições válidas (todo caso de teste começa em Novo):\nNovo –pagar→ Pago\nNovo –cancelar→ Cancelado\nPago –enviar→ Enviado\nPago –cancelar→ Cancelado\nEnviado –entregar→ Entregue\nNão há transições saindo de Entregue nem de Cancelado. Quantos casos de teste são necessários, no mínimo, para 100% de cobertura de todos os estados?',
      opts: ['1', '2', '3', '5'], a: 1,
      exp: 'Entregue e Cancelado são estados sem saída, então nenhum caso de teste visita os dois: são necessários pelo menos 2. Dois bastam: (pagar, enviar, entregar) visita Novo, Pago, Enviado e Entregue; (cancelar) visita Cancelado. Cobrir todos os estados não exige executar todas as transições.' },
    { id: '4-025', ch: 4, lo: 'FL-4.2.4', k: 'K3', ref: '4.2.4',
      q: 'Um pedido tem as transições válidas (todo caso de teste começa em Novo):\nNovo –pagar→ Pago\nNovo –cancelar→ Cancelado\nPago –enviar→ Enviado\nPago –cancelar→ Cancelado\nEnviado –entregar→ Entregue\nNão há transições saindo de Entregue nem de Cancelado. Quantos casos de teste são necessários, no mínimo, para 100% de cobertura de transições válidas (0-switch)?',
      opts: ['2', '4', '3', '5'], a: 2,
      exp: 'Três transições levam a um estado sem saída (Novo→Cancelado, Pago→Cancelado, Enviado→Entregue), e cada caso de teste só pode conter uma delas: mínimo 3. Três bastam: (pagar, enviar, entregar), (pagar, cancelar) e (cancelar) cobrem as 5 transições. Visitar todos os estados não basta: cada transição válida precisa ser executada.' },
    { id: '4-026', ch: 4, lo: 'FL-4.2.4', k: 'K3', ref: '4.2.4',
      q: 'Tabela de estados de um documento (“–” = transição inválida):\nEstado | envia | aprova | rejeita | arquiva\nRascunho | Revisão | – | – | –\nRevisão | – | Publicado | Rascunho | –\nPublicado | – | – | – | Arquivado\nArquivado | – | – | – | –\nQual sequência de eventos, partindo de Rascunho, contém somente transições válidas e atinge 100% de cobertura de transições válidas?',
      opts: [
        'envia, rejeita, envia, aprova, arquiva',
        'envia, aprova, arquiva, envia, aprova',
        'envia, rejeita, aprova, envia, arquiva',
        'envia, aprova, rejeita, envia, arquiva'
      ], a: 0,
      exp: 'A sequência envia, rejeita, envia, aprova, arquiva percorre Rascunho→Revisão→Rascunho→Revisão→Publicado→Arquivado e executa as 4 transições válidas. Nas demais há um evento sem transição definida no estado corrente: “envia” em Arquivado, “aprova” em Rascunho ou “rejeita” em Publicado.' },
    { id: '4-027', ch: 4, lo: 'FL-4.2.4', k: 'K3', ref: '4.2.4',
      q: 'Um documento tem as transições válidas (estado inicial: Rascunho):\nRascunho –enviar→ Revisão\nRevisão –aprovar→ Publicado\nRevisão –rejeitar→ Rascunho\nPublicado –arquivar→ Arquivado\nUm único caso de teste executa: enviar, aprovar, arquivar. Que cobertura ele atinge?',
      opts: [
        '75% dos estados e 75% das transições válidas',
        '100% dos estados e 100% das transições válidas',
        '75% dos estados e 100% das transições válidas',
        '100% dos estados e 75% das transições válidas'
      ], a: 3,
      exp: 'O caso visita Rascunho, Revisão, Publicado e Arquivado (4/4 estados = 100%), mas executa só 3 das 4 transições válidas (75%): falta Revisão –rejeitar→ Rascunho. Isso mostra por que a cobertura de todos os estados é mais fraca que a de transições válidas.' },

    // ---------- 4.3.1 Teste de instrução ----------
    { id: '4-028', ch: 4, lo: 'FL-4.3.1', k: 'K2', ref: '4.3.1',
      q: 'Um componente tem 40 instruções executáveis. O conjunto de testes exercita 30 delas. Qual é a cobertura de instrução atingida?',
      opts: ['25%', '75%', '70%', '100%'], a: 1,
      exp: 'Cobertura de instrução = instruções exercidas ÷ total de instruções executáveis = 30/40 = 75%. Os 25% correspondem às instruções que não foram exercidas.' },
    { id: '4-029', ch: 4, lo: 'FL-4.3.1', k: 'K2', ref: '4.3.1',
      q: 'O que é garantido quando se atinge 100% de cobertura de instrução?',
      opts: [
        'Todas as instruções executáveis do código foram executadas pelo menos uma vez',
        'Todas as ramificações do código, condicionais e incondicionais, foram exercidas',
        'Toda a lógica de decisão do código foi testada com resultados verdadeiro e falso',
        'Todos os defeitos que dependem de dados foram detectados pelos casos de teste'
      ], a: 0,
      exp: '100% de cobertura de instrução garante apenas que cada instrução executável foi executada ao menos uma vez. Ela não garante que toda a lógica de decisão foi testada nem que todas as ramificações foram exercidas; isso é assunto da cobertura de ramificação.' },
    { id: '4-030', ch: 4, lo: 'FL-4.3.1', k: 'K2', ref: '4.3.1',
      q: 'Uma instrução calcula “media = total / quantidade”. Os testes atingem 100% de cobertura de instrução, mas nenhum deles usa quantidade igual a zero. O que essa situação ilustra?',
      opts: [
        'A cobertura de instrução medida está incorreta, pois a instrução não foi exercida',
        'A cobertura de 100% de instrução garante que essa divisão não falhará em produção',
        'Executar uma instrução não garante detectar defeitos que dependem de dados',
        'Defeitos que dependem de dados só são detectáveis por técnicas caixa-preta'
      ], a: 2,
      exp: 'A instrução foi executada, então conta para a cobertura; mas a divisão por zero só falha quando o denominador é zero. Executar uma instrução com um caso de teste não detecta defeitos em todos os casos, em especial os que dependem de dados.' },
    { id: '4-031', ch: 4, lo: 'FL-4.3.1', k: 'K2', ref: '4.3.1',
      q: 'No teste de instrução, quais são os itens de cobertura?',
      opts: [
        'As ramificações do fluxo de controle',
        'Os resultados de cada decisão',
        'As partições de equivalência',
        'As instruções executáveis'
      ], a: 3,
      exp: 'No teste de instrução os itens de cobertura são as instruções executáveis. Ramificações são os itens de cobertura do teste de ramificação, e partições pertencem ao particionamento de equivalência (caixa-preta).' },

    // ---------- 4.3.2 Teste de ramificação ----------
    { id: '4-032', ch: 4, lo: 'FL-4.3.2', k: 'K2', ref: '4.3.2',
      q: 'Como o syllabus define uma ramificação?',
      opts: [
        'Uma instrução executável que contém uma decisão do tipo “if...then”',
        'Uma transferência de controle entre dois nós do gráfico de fluxo de controle',
        'Um caminho completo do início ao fim do gráfico de fluxo de controle',
        'Uma combinação de condições que leva a um resultado de decisão'
      ], a: 1,
      exp: 'Uma ramificação é uma transferência de controle entre dois nós do gráfico de fluxo de controle, podendo ser incondicional (código em linha reta) ou condicional (resultado de decisão). Não é um caminho completo nem uma instrução.' },
    { id: '4-033', ch: 4, lo: 'FL-4.3.2', k: 'K2', ref: '4.3.2',
      q: 'Qual afirmação sobre a relação entre cobertura de ramificação e cobertura de instrução está correta?',
      opts: [
        '100% de cobertura de instrução garante 100% de cobertura de ramificação',
        'As duas coberturas são equivalentes: 100% de uma implica 100% da outra',
        '100% de cobertura de ramificação garante 100% de cobertura de instrução',
        'As duas coberturas são independentes: nenhuma garante nada sobre a outra'
      ], a: 2,
      exp: 'A cobertura de ramificação substitui (inclui) a cobertura de instrução: qualquer conjunto de testes com 100% de ramificação também atinge 100% de instrução, mas não vice-versa.' },
    { id: '4-034', ch: 4, lo: 'FL-4.3.2', k: 'K2', ref: '4.3.2',
      q: 'Um trecho de código tem uma única decisão “if” sem “else”. Um único caso de teste torna a decisão verdadeira e executa todas as instruções do trecho. O que se pode afirmar sobre a cobertura atingida?',
      opts: [
        '100% de cobertura de instrução, mas menos de 100% de cobertura de ramificação',
        '100% de cobertura de instrução e também 100% de cobertura de ramificação',
        'Menos de 100% de cobertura de instrução, mas 100% de cobertura de ramificação',
        'Menos de 100% de cobertura de instrução e também de cobertura de ramificação'
      ], a: 0,
      exp: 'Todas as instruções foram executadas (100% de instrução), mas a ramificação correspondente ao resultado falso da decisão, que pula o bloco do “if”, não foi exercida. É o exemplo clássico de que 100% de instrução não implica 100% de ramificação.' },
    { id: '4-035', ch: 4, lo: 'FL-4.3.2', k: 'K2', ref: '4.3.2',
      q: 'Qual é uma limitação do teste de ramificação, mesmo quando se atinge 100% de cobertura?',
      opts: [
        'Ele não exercita as ramificações incondicionais existentes no código',
        'Ele não garante que todas as instruções do código tenham sido executadas',
        'Ele não cobre os resultados de instruções “switch/case” nem de “loops”',
        'Ele pode não detectar defeitos que exijam um caminho específico no código'
      ], a: 3,
      exp: 'Executar cada ramificação não detecta defeitos em todos os casos; por exemplo, defeitos que só se manifestam em um caminho específico. Com 100% de ramificação, todas as ramificações (condicionais e incondicionais) e todas as instruções foram exercidas.' },

    // ---------- 4.3.3 Valor do teste caixa-branca ----------
    { id: '4-036', ch: 4, lo: 'FL-4.3.3', k: 'K2', ref: '4.3.3',
      q: 'Qual é um ponto forte fundamental compartilhado pelas técnicas caixa-branca?',
      opts: [
        'Detectam com facilidade requisitos que não foram implementados no software',
        'Consideram toda a implementação, mesmo com especificação vaga ou desatualizada',
        'Produzem casos de teste que continuam úteis após mudanças na implementação',
        'Dispensam o uso de técnicas caixa-preta quando a cobertura de código é alta'
      ], a: 1,
      exp: 'Nas técnicas caixa-branca toda a implementação é levada em conta, o que facilita detectar defeitos mesmo quando a especificação é vaga, desatualizada ou incompleta. Detectar requisitos não implementados é justamente o ponto fraco delas.' },
    { id: '4-037', ch: 4, lo: 'FL-4.3.3', k: 'K2', ref: '4.3.3',
      q: 'Um requisito da especificação simplesmente não foi implementado no código. Por que o teste caixa-branca pode não detectar esse defeito?',
      opts: [
        'Porque ele se baseia no código existente, e não há código para o requisito omitido',
        'Porque ele só pode ser aplicado depois que todos os requisitos foram implementados',
        'Porque ele não fornece medidas objetivas de cobertura do código implementado',
        'Porque ele depende da experiência do Testador para prever defeitos de omissão'
      ], a: 0,
      exp: 'O teste caixa-branca deriva os testes da estrutura do que foi implementado; se o software não implementa um requisito, não há estrutura a cobrir e o defeito pode passar despercebido. Fornecer medidas objetivas de cobertura é, na verdade, um ponto forte dessas técnicas.' },
    { id: '4-038', ch: 4, lo: 'FL-4.3.3', k: 'K2', ref: '4.3.3',
      q: 'Qual afirmação sobre o valor do teste caixa-branca está correta?',
      opts: [
        'Técnicas caixa-branca não podem ser usadas em testes estáticos, só dinâmicos',
        'Realizar somente testes caixa-preta já fornece a medida da cobertura real do código',
        'Medidas de cobertura caixa-branca dão uma medição objetiva da cobertura',
        'Técnicas caixa-branca não se aplicam a pseudocódigo nem a lógica de alto nível'
      ], a: 2,
      exp: 'As medidas de cobertura caixa-branca fornecem uma medição objetiva e permitem gerar testes adicionais para aumentar a cobertura. As técnicas caixa-branca também podem ser usadas em testes estáticos (execuções secas, revisão de código e pseudocódigo), e só testes caixa-preta não medem a cobertura real do código.' },

    // ---------- 4.4.1 Suposição de erro ----------
    { id: '4-039', ch: 4, lo: 'FL-4.4.1', k: 'K2', ref: '4.4.1',
      q: 'O que caracteriza a técnica de suposição de erro?',
      opts: [
        'Modelar, executar e avaliar testes ao mesmo tempo, aprendendo sobre o objeto de teste',
        'Cobrir as condições de teste de uma lista formulada na forma de perguntas',
        'Derivar casos de teste a partir dos limites das partições de equivalência',
        'Prever a ocorrência de erros, defeitos e falhas com base no conhecimento do Testador'
      ], a: 3,
      exp: 'A suposição de erro prevê erros, defeitos e falhas com base no conhecimento do Testador (como o aplicativo funcionou no passado, erros típicos dos desenvolvedores, falhas em aplicativos semelhantes). Modelar, executar e avaliar simultaneamente descreve o teste exploratório.' },
    { id: '4-040', ch: 4, lo: 'FL-4.4.1', k: 'K2', ref: '4.4.1',
      q: 'O que são os ataques a falhas?',
      opts: [
        'Sessões de teste exploratório com tempo definido e guiadas por uma carta de teste',
        'Abordagem metódica de suposição de erro, com uma lista de possíveis erros, defeitos e falhas',
        'Tentativas de executar transições inválidas de uma tabela de estados, uma por caso de teste',
        'Testes de segurança que simulam invasores para explorar vulnerabilidades do sistema'
      ], a: 1,
      exp: 'Os ataques a falhas são uma abordagem metódica para implementar a suposição de erro: o Testador cria ou adquire uma lista de possíveis erros, defeitos e falhas e modela testes para expô-los. Sessões com carta de teste pertencem ao teste exploratório.' },
    { id: '4-041', ch: 4, lo: 'FL-4.4.1', k: 'K2', ref: '4.4.1',
      q: 'Um Testador sabe que, em aplicativos semelhantes, campos de data costumam falhar com 29 de fevereiro e que os desenvolvedores da equipe tendem a esquecer a validação de campos vazios. Ele projeta testes mirando exatamente esses pontos. Que técnica está usando?',
      opts: [
        'Teste baseado em lista de verificação',
        'Teste exploratório',
        'Suposição de erro',
        'Análise de valor de limite'
      ], a: 2,
      exp: 'Ele prevê defeitos a partir do que sabe sobre falhas em aplicativos semelhantes e sobre erros que os desenvolvedores tendem a cometer: é suposição de erro. Não há uma lista de verificação sendo percorrida nem limites de partições sendo analisados.' },

    // ---------- 4.4.2 Teste exploratório ----------
    { id: '4-042', ch: 4, lo: 'FL-4.4.2', k: 'K2', ref: '4.4.2',
      q: 'Qual afirmação descreve o teste exploratório?',
      opts: [
        'Os testes são modelados, executados e avaliados ao mesmo tempo em que se aprende sobre o objeto',
        'Os testes são modelados e documentados em detalhe antes de qualquer execução do objeto de teste',
        'Os testes são executados sem objetivo definido e sem nenhum registro das descobertas feitas',
        'Os testes são derivados da estrutura interna do código e medidos por cobertura de instrução'
      ], a: 0,
      exp: 'No teste exploratório, os testes são modelados, executados e avaliados simultaneamente enquanto o Testador aprende sobre o objeto de teste. Ele pode ser estruturado (sessões, carta de teste, fichas de sessão), portanto não é teste sem objetivo nem sem registro.' },
    { id: '4-043', ch: 4, lo: 'FL-4.4.2', k: 'K2', ref: '4.4.2',
      q: 'No teste exploratório baseado em sessões, o que orienta o Testador durante a sessão?',
      opts: [
        'Um conjunto de casos de teste detalhados, escritos antes da sessão',
        'Uma tabela de decisão completa com todas as regras de negócio',
        'Uma lista de verificação de critérios de entrada e de saída',
        'Uma carta de teste contendo os objetivos do teste'
      ], a: 3,
      exp: 'Na abordagem baseada em sessões, o teste ocorre dentro de um período definido e o Testador usa uma carta de teste com os objetivos do teste para se orientar. Casos de teste detalhados escritos antes contradizem a ideia de modelar e executar simultaneamente.' },
    { id: '4-044', ch: 4, lo: 'FL-4.4.2', k: 'K2', ref: '4.4.2',
      q: 'Em qual situação o teste exploratório é especialmente útil?',
      opts: [
        'Quando há especificações completas e é exigida alta repetibilidade dos testes',
        'Quando há poucas especificações ou pressão significativa de tempo sobre os testes',
        'Quando o Testador é iniciante e ainda não conhece o domínio do negócio',
        'Quando é preciso medir de forma objetiva a cobertura do código'
      ], a: 1,
      exp: 'O teste exploratório é útil quando há poucas especificações ou especificações inadequadas, ou quando há pressão significativa de tempo. Ele é mais eficaz com Testadores experientes e com conhecimento do domínio, não com iniciantes.' },

    // ---------- 4.4.3 Lista de verificação ----------
    { id: '4-045', ch: 4, lo: 'FL-4.4.3', k: 'K2', ref: '4.4.3',
      q: 'Segundo o syllabus, que tipo de item deve ser evitado em uma lista de verificação de teste?',
      opts: [
        'Itens que possam ser verificados automaticamente',
        'Itens formulados na forma de uma pergunta',
        'Itens que se refiram a características de qualidade',
        'Itens que possam ser verificados separada e diretamente'
      ], a: 0,
      exp: 'As listas de verificação não devem conter itens que possam ser verificados automaticamente, itens mais adequados como critérios de entrada/saída ou itens muito gerais. Ser formulado como pergunta e ser verificável separada e diretamente são características desejadas.' },
    { id: '4-046', ch: 4, lo: 'FL-4.4.3', k: 'K2', ref: '4.4.3',
      q: 'Uma equipe testa usando listas de verificação de alto nível, sem casos de teste detalhados. Qual é o efeito provável sobre os testes?',
      opts: [
        'Cobertura potencialmente menor, com mais repetibilidade',
        'Cobertura potencialmente maior, com mais repetibilidade',
        'Cobertura potencialmente maior, com menos repetibilidade',
        'Cobertura potencialmente menor, com menos repetibilidade'
      ], a: 2,
      exp: 'Listas de alto nível deixam margem para variabilidade no teste real: cada execução pode exercitar coisas diferentes, o que tende a aumentar a cobertura, mas reduz a repetibilidade.' },
    { id: '4-047', ch: 4, lo: 'FL-4.4.3', k: 'K2', ref: '4.4.3',
      q: 'Por que as listas de verificação devem ser atualizadas regularmente com base na análise de defeitos?',
      opts: [
        'Porque listas mais longas sempre aumentam a eficácia dos testes',
        'Porque cada item precisa virar um caso de teste automatizado',
        'Porque os itens devem espelhar os critérios de entrada e saída',
        'Porque algumas entradas se tornam menos eficazes com o tempo'
      ], a: 3,
      exp: 'Algumas entradas perdem eficácia porque os desenvolvedores aprendem a evitar os mesmos erros, e novas entradas podem ser necessárias para refletir defeitos graves recentes. Deve-se, porém, evitar que a lista fique longa demais.' },

    // ---------- 4.5.1 Histórias de usuário ----------
    { id: '4-048', ch: 4, lo: 'FL-4.5.1', k: 'K2', ref: '4.5.1',
      q: 'Nos “3C” de uma história de usuário, o que é a Conversação?',
      opts: [
        'O meio onde a história de usuário é descrita, como um quadro eletrônico',
        'A explicação de como o software será usado, documentada ou verbal',
        'Os critérios de aceite que a implementação da história deve atender',
        'A estimativa de esforço negociada entre a equipe e o negócio'
      ], a: 1,
      exp: 'Conversação é a explicação de como o software será usado e pode ser documentada ou verbal. O meio onde a história é descrita é o Cartão, e os critérios de aceite são a Confirmação.' },
    { id: '4-049', ch: 4, lo: 'FL-4.5.1', k: 'K2', ref: '4.5.1',
      q: 'Durante a escrita colaborativa, um stakeholder diz que não sabe como testar uma história de usuário. Segundo o syllabus, o que isso pode indicar?',
      opts: [
        'Que a história é grande demais e deve ser dividida em várias histórias',
        'Que a história depende de outras e deve ser implementada por último',
        'Que a história não está clara o bastante ou não reflete valor para ele',
        'Que a história não pode ser estimada e deve sair do backlog'
      ], a: 2,
      exp: 'Se um stakeholder não sabe como testar a história, isso pode indicar que ela não está suficientemente clara, que não reflete algo valioso para ele ou que ele apenas precisa de ajuda para testar. Está ligado ao “Testável” do INVEST, não ao tamanho ou à independência.' },

    // ---------- 4.5.2 Critérios de aceite ----------
    { id: '4-050', ch: 4, lo: 'FL-4.5.2', k: 'K2', ref: '4.5.2',
      q: 'Uma equipe documenta os critérios de aceite de uma história como uma tabela que mapeia cada entrada à saída esperada. Como esse formato é classificado?',
      opts: [
        'Orientado por regras',
        'Orientado a cenários',
        'Orientado a comportamento',
        'Orientado a personas'
      ], a: 0,
      exp: 'Listas de pontos de verificação e formas tabuladas de mapeamento de entrada e saída são exemplos do formato orientado por regras. O formato orientado a cenários é o Given/When/Then usado no BDD.' },
    { id: '4-051', ch: 4, lo: 'FL-4.5.2', k: 'K2', ref: '4.5.2',
      q: 'Uma equipe quer escrever critérios de aceite em um formato próprio, diferente dos dois mais comuns. O que o syllabus diz sobre isso?',
      opts: [
        'Não é permitido: somente o formato Given/When/Then pode ser usado',
        'Não é permitido: os critérios devem sempre ser orientados por regras',
        'É permitido, desde que o cliente escreva os critérios sem a equipe',
        'É permitido, desde que os critérios sejam bem definidos e não ambíguos'
      ], a: 3,
      exp: 'Os formatos mais comuns são o orientado a cenários e o orientado por regras, mas a equipe pode usar outro formato personalizado, desde que os critérios de aceite sejam bem definidos e não ambíguos.' },

    // ---------- 4.5.3 ATDD ----------
    { id: '4-052', ch: 4, lo: 'FL-4.5.3', k: 'K3', ref: '4.5.3',
      q: 'Uma equipe adota ATDD para uma nova história de usuário. Qual é a sequência correta de atividades?',
      opts: [
        'Implementar a história; criar os casos de teste; realizar o workshop de especificação',
        'Realizar o workshop de especificação; criar os casos de teste; implementar a história',
        'Criar os casos de teste; implementar a história; realizar o workshop de especificação',
        'Realizar o workshop de especificação; implementar a história; criar os casos de teste'
      ], a: 1,
      exp: 'ATDD prioriza o teste: primeiro o workshop de especificação (história e critérios de aceite analisados, discutidos e escritos), depois a criação dos casos de teste e só então a implementação. Criar os testes depois de implementar contraria a abordagem.' },
    { id: '4-053', ch: 4, lo: 'FL-4.5.3', k: 'K3', ref: '4.5.3',
      q: 'História: “Como cliente, quero aplicar um cupom no carrinho para pagar menos.”\nCritérios de aceite:\n1. Cupom válido aplica 10% de desconto\n2. Cupom expirado exibe mensagem de erro\n3. A aplicação do cupom responde em até 2 s\nSeguindo o ATDD, qual caso de teste a equipe deve escrever primeiro?',
      opts: [
        'Aplicar um cupom válido e verificar o desconto de 10% no total',
        'Aplicar um cupom expirado e verificar a mensagem de erro exibida',
        'Aplicar um cupom com 500 usuários simultâneos e medir a resposta',
        'Aplicar um cupom inexistente e verificar que o total não muda'
      ], a: 0,
      exp: 'No ATDD os primeiros casos de teste são positivos, confirmando o comportamento correto sem exceções: cupom válido com desconto de 10%. Depois vêm os testes negativos (cupom expirado ou inexistente) e, por fim, as características não funcionais (tempo de resposta).' },
    { id: '4-054', ch: 4, lo: 'FL-4.5.3', k: 'K3', ref: '4.5.3',
      q: 'História: “Como usuário, quero redefinir minha senha por e-mail para recuperar o acesso à conta.”\nQual caso de teste NÃO deveria fazer parte dos testes de aceite dessa história em ATDD?',
      opts: [
        'Solicitar a redefinição com e-mail cadastrado e receber o link',
        'Solicitar a redefinição com e-mail não cadastrado e ver o aviso',
        'Alterar a foto do perfil após entrar na conta com a nova senha',
        'Usar um link de redefinição já expirado e ver a mensagem de erro'
      ], a: 2,
      exp: 'Os casos de teste devem abranger todas as características da história e não ir além dela; alterar a foto do perfil está fora do escopo da redefinição de senha. Os casos com e-mail não cadastrado e link expirado são testes negativos legítimos da própria história.' },
    { id: '4-055', ch: 4, lo: 'FL-4.5.3', k: 'K3', ref: '4.5.3',
      q: 'Critérios de aceite de uma história sobre frete:\n1. Cliente regular, pedido a partir de R$ 150: frete grátis\n2. Cliente regular, pedido abaixo de R$ 150: frete de R$ 20\n3. Cliente premium: frete grátis em qualquer valor\nQual conjunto de exemplos (cliente, valor → frete) cobre os três critérios com resultados esperados corretos?',
      opts: [
        '(regular, 200 → grátis); (premium, 200 → grátis); (premium, 300 → grátis)',
        '(regular, 100 → R$ 20); (regular, 50 → R$ 20); (premium, 100 → grátis)',
        '(regular, 200 → grátis); (regular, 100 → R$ 20); (premium, 100 → R$ 20)',
        '(regular, 200 → grátis); (regular, 100 → R$ 20); (premium, 100 → grátis)'
      ], a: 3,
      exp: 'Regular com 200 exemplifica o critério 1, regular com 100 o critério 2 e premium com 100 o critério 3 (grátis mesmo abaixo de R$ 150). Os outros conjuntos deixam um critério sem exemplo (o 2 ou o 1) ou trazem resultado esperado errado para o cliente premium. Além disso, dois casos de teste não devem descrever a mesma característica da história.' }
  );
})(typeof window !== 'undefined' ? window : globalThis);
