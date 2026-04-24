---
uid: layer-2
title: "Layer 2"
tags:
  - layer-2
  - scaling
  - blockchain
created: 2026-04-21
updated: 2026-04-21
---

# Layer 2

[[Layer 2]] désigne les protocoles construits au-dessus d'une [[Layer 1]] qui augmentent la capacité de transaction et réduisent les coûts tout en bénéficiant de la sécurité de la couche inférieure. Ces solutions sont essentielles pour l'adoption massive des applications blockchain.

## Architecture des solutions Layer 2

Les solutions Layer 2 executent les transactions hors de la chaîne principale et les regroupent avant de les soumettre sur la Layer 1. Cette approche permet de décharger le réseau principal tout en conservant les garanties de sécurité décentralisées.

Il existe plusieurs types d'architectures Layer 2 : les channels d'état, les rollups optimistes, et les rollups à connaissance nulle. Chaque architecture présente des compromis différents en termes de sécurité, de coût et de temps de finalisation.

## Rollups optimistes

Les rollups optimistes comme [[Optimism]] et Arbitrum regroupent les transactions et les soumettent à la Layer 1. Les transactions sont considérées valides par défaut mais peuvent être contestées pendant une période de contestation.

La période de contestation permet aux validateurs de prouver la fraude. Cette conception offre une sécurité forte tout en permettant des transactions moins coûteuses que sur la Layer 1 directement.

## Rollups ZK

Les rollups à connaissance nulle, comme [[zkSync]], génèrent des preuves cryptographiques qui garantissent la validité des transactions. Ces preuves sont vérifiables efficacement sur la Layer 1 sans exécuter les transactions elles-mêmes.

Les preuves [[ZK proofs]] permettent une finalisation plus rapide et une sécurité mathématique. Les coûts de génération des preuves constituent un défi technique que les avancées récentes commencent à résoudre.

## Implications pour le trading algorithmique

Les solutions [[Layer 2]] permettent des transactions plus fréquentes à moindre coût. Les [[Trading bot]] peuvent exécuter des stratégies complexes avec des coûts d'exécution réduits.

La connectivité entre Layer 2 et la Layer 1 via les [[Cross-chain bridges]] permet des stratégies multi-couches. Les opportunités de [[Arbitrage]] entre différents rollups et la chaîne principale sont exploitables par des bots sophistiqués.

## Écosystème en expansion

L'écosystème Layer 2 continue de croître avec de nouveaux projets et améliorations. Les [[Gas fees]] plus bas attirent des utilisateurs de tous les segments du marché.

L'interopérabilité entre différentes solutions Layer 2 s'améliore progressivement. Les [[Cross-chain]] capabilities permettent des stratégies de trading complexes qui tirent parti de l'ensemble de l'écosystème.