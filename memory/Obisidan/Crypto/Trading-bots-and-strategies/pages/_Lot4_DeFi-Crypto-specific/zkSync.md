---
titre: "zkSync"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: web-checked
sources_count: 3
tags: [#concept/zksync, #concept/layer-2, #concept/ethereum]
créé: 2026-04-21
liens_forts: ["[[Layer 2 scaling]]", "[[Arbitrum]]", "[[Optimism]]", "[[Gas optimization]]", "[[Decentralized exchanges (DEX)]]"]
liens_opposition: []
---

# zkSync

> [!info] Résumé
> zkSync est un ZK-Rollup qui utilise des preuves cryptographiques zero-knowledge pour valider les transactions sur Ethereum. Contrairement aux Optimistic Rollups, zkSync offre une finalité instantanée sans période de contestation.

## Définition

zkSync est un ZK-Rollup construit par Matter Labs, utilisant des preuves cryptographiques (SNARKs) pour valider les transactions off-chain. Cette approche diffère fondamentalement des Optimistic Rollups en offrant une finalité instantanée.

Le protocole permet des transactions à faible coût sur Ethereum, avec des garanties de validité cryptographique plutôt qu'une période de contestation.

Les caractéristicas principales :
- Finalité : instantanée (vs 7 jours pour Optimistic Rollups)
- Preuves : SNARK (Succinct Non-Interactive Arguments of Knowledge)
- Coût : très bas, compétitif avec les Optimistic Rollups
- EVM Compatibility : zkSync Era (v2) offre une compatibilité EVM étendue

zkSync Era (lancé en 2023) est la dernière génération du protocole, supportant Solidity et offrant une compatibilité EVM beaucoup plus large que la version précédente.

## Contexte et origine

Matter Labs a développé zkSync, lançant la version 1 (zkSync 1.0) en 2020, qui se concentrait sur les paiements et transferts simples. Cette version ne supportait pas les smart contracts complexes.

zkSync Era (v2) a été lancé en 2023 avec le support complet des smart contracts EVM. Cette évolution a permis aux protocoles DeFi de se déployer sur zkSync.

L'utilisation de la technologie zero-knowledge proof (ZKP) permet à zkSync d'offrir des garanties de sécurité mathématiquement vérifiables, plutôt que de devoir rely sur une période de contestation.

## Mécanismes et caractéristiques

Le fonctionnement de zkSync repose sur des preuves cryptographiques :

1. Le "prover" génère une ZK-SNARK pour chaque batch de transactions
2. Le "verifier" sur Ethereum valide la preuve
3. Si la preuve est valide, le nouveau state est accepté
4. Pas de période de contestation - la validité est prouvée mathématiquement

Les avantages par rapport aux Optimistic Rollups :
- Finalité instantanée (pas de délai de 7 jours)
- Sécurité plus forte (pas de hypothèse de honest majority)
- Meilleure resistance à la censure

Les défis incluent la complexité de la génération des preuves, qui nécessite du matériel spécialisé et peut créer des goulots d'étranglement.

## Nuances, critiques, limites

La génération de preuves ZK est coûteuse en calcul. Pour certains types de transactions, cela peut prendre du temps et ajouter de la latence. Cependant, les coûts diminuent grâce aux améliorations matérielles.

La compatibilité EVM, bien qu'amélioration, n'est pas parfaite. Certains patterns Solidity peuvent se comporter différemment. Les développeurs doivent tester attentivement.

Le risque de centralisation du prover est une préoccupation. Currently, seuls certains actors peuvent générer des preuves de manière efficace. Matter Labs travaille sur la décentralisation.

## Liens et implications

[[zkSync]] est un [[Layer 2 scaling]] ZK-Rollup. Il offre une alternative aux [[Optimism]] et [[Arbitrum]] (Optimistic Rollups). Les [[Decentralized exchanges (DEX)]] commencent à se déployer sur zkSync.

Les [[gas optimization|coûts de gaz]] sur zkSync sont très bas. Les [[flash loans]] sont disponibles. Le [[yield farming]] peut être plus rentable grâce aux faibles coûts.

Le [[risk-reward ratio]] des stratégies zkSync intègre la finalité instantanée. Le [[backtesting]] nécessite des données spécifiques. Les [[staking rewards]] peuvent être disponibles.

## Sources

[^1]: zkSync Documentation, "zkSync Era", https://docs.zksync.io (consulted 2026)
[^2]: Matter Labs, "Zero Knowledge Proofs", https://matter-labs.io (consulted 2026)
[^3]: DeFi Llama, "zkSync TVL", https://defillama.com (consulted 2026)
