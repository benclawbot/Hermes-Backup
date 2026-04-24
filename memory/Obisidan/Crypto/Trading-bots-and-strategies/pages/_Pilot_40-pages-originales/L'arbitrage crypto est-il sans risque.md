---
titre: "L'arbitrage crypto est-il sans risque"
type: controverse
cluster: "Trading bots and strategies"
statut: to-verify
controverse: high
importance: deep-cut
source_knowledge: web-checked
sources_count: 0
tags: [#controverse/arbitrage, #controverse/risk, #concept/marges]
créé: 2026-04-20
liens_forts: ["[[Arbitrage]]", "[[Execution risk]]", "[[Cross-exchange arbitrage]]"]
liens_opposition: ["[[Efficient Market Hypothesis]]"]
---

# L'arbitrage crypto est-il sans risque

> [!info] Résumé
> L'arbitrage cross-exchange semble sans risque en théorie mais implique en pratique des risques réels : execution risk, counterparty risk, withdrawal delays, et compétition de bots qui compresse les marges.

## Définition

L'arbitrage crypto classique consiste à acheter un actif sur un exchange où le prix est bas et à le vendre simultanément sur un exchange où le prix est plus élevé. La différence de prix est le profit.

L'arbitrage semble "sans risque" car le trade est censé être directionnellement neutre : le profit vient de la différence de prix, pas de la direction du marché. Si les deux jambes du trade sont exécutées, le profit est locké.

Mais en pratique, des risques existent à chaque étape : prix qui move pendant l'exécution, fonds qui arrivent en retard, exchanges qui ont des problèmes techniques, et bots concurrents qui mangent les opportunités.

## Les risques réels

**Execution risk** : les deux jambes du trade doivent être exécutées quasi-simultanément. Si la première jambe est exécutée mais pas la seconde, le trader a un inventory non protégé et un risque directionnel. En marché volatile, le prix peut movers significativement en quelques secondes.

**Counterparty risk** : l'exchange où les fonds sont déposés peut avoir des problèmes. FTX, Celsius, et BlockFi ont tous fait fail, causant des pertes pour les traders qui avaient des fonds sur ces plateformes pour l'arbitrage.

**Withdrawal delays** : beaucoup d'exchanges ont des délais de retrait (surtout pour les gros montants). Pendant ce délai, le prix peut changer et l'opportunité d'arbitrage peut disparaître.

**Regulatory risk** : certains exchanges ont limité ou interdit l'arbitrage automatisé. Les comptes peuvent être bannis si l'activité est détectée comme "abusive".

## La compétition compresse les marges

L'arbitrage crypto attire beaucoup de bots qui competing pour les mêmes opportunités. Plus il y a de bots, plus les opportunités disparaissent vite et plus les marges diminuent.

Sur les actifs liquides comme BTC et ETH, les opportunités d'arbitrage lasting quelques secondes sont souvent exécutées par des bots en moins d'une seconde. Les opportunities manuales sont généralement introuvables.

Les marges d'arbitrage sur les actifs majeurs sont devenues si fines (0.1-0.5%) que les frais de transaction et le slippage peuvent eat into the profit. Seuls les bots avec des frais très bas et une infrastructure optimisée peuvent être rentables.

## Nuances et complexité

L'arbitrage sur des small caps ou des assets moins compétitifs peut encore offrir des marges plus importantes. Mais le risque de liquidité (ne pas pouvoir exit) est plus élevé.

Le "statistical arbitrage" (avec des positions qui ont une espérance positive mais pas de guarantee) est différent de l'arbitrage "pure". Ce n'est pas sans risque.

Les stratégies d'arbitrage basées sur le funding rate (short perpetual, long spot) sont également risquées : le funding rate peut changer et manger les bénéfices.

## Liens et implications

L'[[arbitrage crypto est-il sans risque]] question implique l'[[arbitrage]], le [[cross-exchange arbitrage]], et le [[deFi arbitrage]]. Les risques sont souvent sous-estimés par les participants.

L'[[execution risk]] est le risque principal de l'arbitrage. Le [[funding rate arbitrage]] est une autre forme avec ses propres risques.

Le debat sur [[fiabilité des services de signaux]] inclut parfois des services d'arbitrage qui claim être sans risque.

## Sources

[^1]: Reuters, "Crypto Arbitrage Risks", https://www.reuters.com (consulted 2026) - information à confirmer
[^2]: Chainalysis, "Crypto Arbitrage Markets", https://www.chainalysis.com (consulted 2026) - information à confirmer