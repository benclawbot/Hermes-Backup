---
uid: rollups
title: "Rollups"
tags:
  - rollups
  - layer-2
  - scaling
created: 2026-04-21
updated: 2026-04-21
---

# Rollups

Les [[Rollups]] sont une solution de mise à l'échelle [[Layer 2]] qui exécute les transactions hors chaîne tout en publishant les données de transaction sur la [[Layer 1]]. Cette approche combine les avantages de l'évolutivité avec la sécurité de la blockchain principale.

## Mécanisme technique

Les rollups regroupent plusieurs transactions en un seul lot soumis à la Layer 1. Cette compression réduit drastiquement les coûts par transaction tout en maintenant la disponibilité des données sur la chaîne principale.

Le système utilise des断言 pour garantir la validité des transactions. Deux types principaux existent : les rollups optimistes qui permettent de contester les résultats, et les rollups ZK qui génèrent des preuves cryptographiques de validité.

## Rollups optimistes

Les rollups optimistes comme [[Optimism]] et [[Arbitrum]] supposent que les transactions sont valides sauf preuve du contraire. Pendant une période de contestation, les validateurs peuvent signaler des transactions frauduleuses.

Le processus de contestation involve l'exécution de la transaction contestée sur la Layer 1 pour vérifier son résultat. Cette conception offre une sécurité forte avec une implémentation relativement simple.

Les délais de finalisation des rollups optimistes sont plus longs que ceux des rollups ZK en raison de la période de contestation. Les utilisateurs doivent attendre que cette période expire avant de considérer les fonds comme définitivement confirmés.

## Rollups ZK

Les rollups à connaissance nulle, souvent désignés par [[ZK proofs]], génèrent des preuves concises qui garantissent la validité des lots de transactions. Ces preuves peuvent être vérifiées efficacement sur la Layer 1 sans réexécuter les transactions.

Les avantages des rollups ZK incluent une finalisation rapide et une sécurité mathématique. [[zkSync]] est un exemple prominent de cette technologie en production.

Les défis incluent la complexité de génération des preuves pour des lots importants de transactions. Les avancées en hardware et algorithmes réduisent progressivement ces contraintes.

## Implications pour les stratégies de trading

Les [[Rollups]] permettent des stratégies de [[High frequency trading]] avec des coûts réduits. Les opportunités de [[Arbitrage]] entre rollups et Layer 1 sont exploitables par des bots sophistiqués.

La compréhension des délais de finalisation et des mécanismes de contestation est essentielle pour gérer les risques. Les stratégies doivent intégrer ces paramètres dans leurs calculs de rentabilité.