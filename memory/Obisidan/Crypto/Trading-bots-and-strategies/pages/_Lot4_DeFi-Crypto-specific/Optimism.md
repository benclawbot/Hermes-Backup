---
titre: "Optimism"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/optimism, #concept/layer-2, #concept/ethereum]
créé: 2026-04-21
liens_forts: ["[[Layer 2 scaling]]", "[[Arbitrum]]", "[[zkSync]]", "[[Gas optimization]]", "[[Decentralized exchanges (DEX)]]"]
liens_opposition: []
---

# Optimism

> [!info] Résumé
> Optimism est un Optimistic Rollup qui augmente la capacité d'Ethereum en traitant les transactions off-chain tout en publuent les résultats sur la blockchain principale. Le protocole est utilisé par Uniswap, Synthetix, et de nombreux autres protocoles DeFi.

## Définition

Optimism est un Optimistic Rollup construit sur Ethereum. Il traite les transactions off-chain dans un environnement appelé "Optimistic Virtual Machine" (OVM), puis publie les résultats (state diffs) sur Ethereum en tant que calldata.

Le nom "Optimistic" vient du fait que le système suppose que toutes les transactions sont valides (optimistic) jusqu'à ce qu'elles soient contestées. Toute personne peut soumettre une "fraud proof" si elle détecte une transaction invalide.

Les caractéristiques principales :
- Débit : ~2 000-5 000 tps (vs ~15 sur Ethereum mainnet)
- Coût par transaction : ~10-50× moins cher que sur mainnet
- Finalité : Instant pour les L2, 7 jours pour withdrawal vers L1
- EVM Compatibility : Full (les smart contracts Ethereum tournent sans modification)

Optimism utilise un système de "sequencer" centralisé qui traite les transactions et les regroup in batches. Le sequencer publie périodiquement les batches sur Ethereum. La fiabilité vient de la possibilité de contester via des fraud proofs.

## Contexte et origine

Optimism a été fondé en 2019 par Jaynti Kanani et l'équipe d'Plasma Group. Le protocole a lancé son mainnet en 2021 après une période de test. L'objectif était de résoudre les problèmes de scalabilité d'Ethereum sans sacrifier la sécurité.

Le projet a evolué depuis le framework Plasma vers les Optimistic Rollups, qui offrent une meilleure compatibilité EVM et une expérience développeur supérieure.

Optimism a également lancé le OP Stack, un toolkit modular pour construire d'autres rollups. Cette approche a inspiré le concept de "superchain" où plusieurs rollups partagent une même interface.

## Mécanismes et caractéristiques

Le flujo de travail d'Optimism :

1. Un utilisateur soumet une transaction au sequencer
2. Le sequencer l'exécute et inclut la transaction dans le prochain batch
3. Le batch est publié sur Ethereum avec les state roots
4. Pendant la période de contestation (7 jours), anyone peut soumettre une fraud proof
5. Si la proof est validée, le sequencer est pénalisé et le correct state est appliqué

Le token OP est le token de gouvernance du protocole. Les détenteurs peuvent participer aux décisions de governance du réseau et des upgrades.

Les smart contracts sur Optimism sont compatibles avec Ethereum. Les développeurs peuvent déployer leurs contrats existants avec minimal ou aucune modification.

## Nuances, critiques, limites

La période de contestation de 7 jours pour les withdrawals vers L1 peut être problématique. Les traders qui ont besoin de liquider en cas d'urgence doivent planifier à l'avance.

Le sequencer centralisé est un point de préoccupation. Bien qu'Optimism travaille sur la décentralisation, actuellement le sequencer est opéré par la Optimism Foundation. Cela crée un risque de censure.

Les frais sur Optimism, bien que bien inférieurs à Ethereum mainnet, peuvent encore être élevés pendant les périodes de congestion sur L1 (lorsque les frais de publication des batches augmentent).

## Liens et implications

[[Optimism]] est un protocole de [[Layer 2 scaling]]. Il est similaire à [[Arbitrum]] mais avec des différences techniques. [[zkSync]] utilise une technologie different (ZK proofs).

Les [[Decentralized exchanges (DEX)]] comme Uniswap ont déployé sur Optimism. Les [[gas optimization|coûts de gaz]] sont significativement réduits. Les [[flash loans]] sont disponibles sur Optimism.

Le [[yield farming]] sur Optimism peut être plus rentable grâce aux faibles coûts. Les [[staking rewards]] peuvent être obtenus en staking OP. Le [[backtesting]] des stratégies Optimism requiert des données spécifiques.

## Sources

[^1]: Optimism Documentation, "How Optimism Works", https://docs.optimism.io (consulted 2026)
[^2]: Optimism Foundation, "OP Stack", https://optimism.io (consulted 2026)
[^3]: DeFi Llama, "Optimism TVL", https://defillama.com (consulted 2026)
