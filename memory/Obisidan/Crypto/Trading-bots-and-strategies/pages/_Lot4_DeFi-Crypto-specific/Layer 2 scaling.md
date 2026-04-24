---
titre: "Layer 2 scaling"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/layer-2, #concept/scaling, #concept/ethereum]
créé: 2026-04-21
liens_forts: ["[[Optimism]]", "[[Arbitrum]]", "[[zkSync]]", "[[Gas optimization]]", "[[Decentralized exchanges (DEX)]]"]
liens_opposition: []
---

# Layer 2 scaling

> [!info] Résumé
> Le Layer 2 scaling désigne les solutions construites au-dessus d'une blockchain de base (Layer 1) pour augmenter la capacité de transaction et réduire les coûts. Ces protocoles traitent les transactions off-chain puis publient les résultats sur le Layer 1.

## Définition

Le Layer 2 (L2) est une catégorie de solutions de mise à l'échelle qui cherchent à augmenter le débit transactionnel et réduire les coûts en traitant les transactions hors chaîne (off-chain) tout en maintenant la sécurité du Layer 1 (blockchain principale).

Les principaux types de Layer 2 sont :
- Optimistic Rollups : supposent les transactions sont valides sedans preuve, avec une période de contestation
- ZK-Rollups : utilisent des preuves zero-knowledge pour valider les transactions
- Validiums : ZK-Rollups avec données stockées hors chaîne
- Plasma : framework plus ancien pour scaling, moins utilisé aujourd'hui

Les Optimistic Rollups comme [[Optimism]] et [[Arbitrum]] sont actuellement les plus utilisés. Ils traitent les transactions off-chain et publient les résultats sur Ethereum avec une fenêtre de contestation (typiquement 7 jours) pendant laquelle n'importe qui peut contester une transaction.

Les ZK-Rollups comme [[zkSync]] utilisent des preuves cryptographiques (SNARKs) pour validity les transactions instantanément,sans période de contestation. Cetttechnology est plus complexe mais offre des avantages en termes de finalité.

## Contexte et origine

Ethereum a été limité à environ 15-30 transactions par seconde (tps) sur le mainnet, avec des coûts de gaz pouvant atteindre des centaines de dollars pendant les pics. Cela a rendu de nombreuses applications DeFi économiquement non viables.

Les Layer 2 ont émergé comme solution à ces limitations. Les premiers rollups ont été lancés en 2021-2022. Arbitrum One a été lancé en mai 2021, Optimism en 2021, et zkSync Era en 2023.

L'impact a été majeur. Les coûts de transaction sur L2 sont typiquement 10 à 50 fois inférieurs au mainnet, permettant des micro-transactions et des stratégies DeFi complexes qui ne seraient pas rentables sur le mainnet.

## Mécanismes et caractéristiques

Les Optimistic Rollups fonctionnent ainsi :
1. Un "sequencer" traite les transactions off-chain
2. Les résultats (calldata) sont publiés sur Ethereum
3. Une période de contestation de 7 jours permet aux "watchers" de contester
4. Si contesté, une preuve frauduleuse est vérifiée on-chain

Les ZK-Rollups fonctionnent différemment :
1. Un "prover" génère une preuve cryptographique de validité
2. Le "verifier" valide la preuve on-chain
3. Pas de période de contestation - finalité instantanée
4. Les preuves sont plus coûteuses à générer mais moins coûteuses à vérifier

Les coûts de gaz sur L2 sont beaucoup plus bas car :
- Seule la calldata est publiée sur Ethereum (quelques centaines de bytes)
- Le calcul est fait off-chain
- Les frais de finalisation sont partagés entre de nombreuses transactions

## Nuances, critiques, limites

La période de contestation des Optimistic Rollups crée un délai de 7 jours pour les withdrawals vers le Layer 1. Cela peut être problematic pour les traders qui necesitan liquidation rapide.

La centralisation potentielle des sequencers est une préoccupation. Si un seul sequencer traite toutes les transactions, il peut censor ou influencer l'ordre des transactions. Des mesures comme l decentralization sont en cours.

Les ZK-Rollups sont plus complexes et certains ont encore des limitations fonctionnelles par rapport aux Optimistic Rollups. La génération de preuves peut être coûteuse.

## Liens et implications

Les [[Layer 2 scaling]] solutions incluent [[Optimism]], [[Arbitrum]], et [[zkSync]]. Ces protocoles ont drastiquement réduit les [[gas optimization|couts de gaz]]. Les [[Decentralized exchanges (DEX)]] migrent de plus en plus vers L2.

Les [[cross-chain bridges]] sont nécessaires pour mover des fonds vers et depuis les L2. Les [[staking rewards]] sur L2 ont des mécaniques différentes. Le [[yield farming]] est souvent plus rentable sur L2 en raison des faibles coûts.

Le [[risk-reward ratio]] des stratégies doit inclure les coûts de bridge. La [[volatility scaling]] s'applique différemment sur L2. Le [[backtesting]] doit considerer les spécificités de chaque L2.

## Sources

[^1]: Ethereum Foundation, "Layer 2", https://ethereum.org (consulted 2026)
[^2]: Arbitrum Documentation, "How Arbitrum Works", https://docs.arbitrum.io (consulted 2026)
[^3]: Optimism Documentation, "Optimism", https://docs.optimism.io (consulted 2026)
