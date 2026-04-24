---
uid: token-standards
title: "Token standards"
tags:
  - token-standards
  - erc
  - blockchain
created: 2026-04-21
updated: 2026-04-21
---

# Token standards

Les [[Token standards]] définissent les spécifications techniques que les tokens doivent respecter pour fonctionner sur une blockchain donnée. Ces standards permettent l'interopérabilité et la compatibilité entre différents projets et applications.

## Importance des standards

Les standards de tokens établissent un contrat commun que les développeurs s'engagent à respecter. Cette normalisation permet aux tokens d'être échangés, stockés et utilisés par différents protocoles sans adaptation spéciale.

L'adoption de standards réduit le temps de développement et les risques d'erreurs. Les audits de sécurité peuvent se concentrer sur l'implémentation plutôt que sur la conception de base.

## Principaux standards sur Ethereum

### [[ERC-20]]

L'[[ERC-20]] est le standard fondamental pour les tokens fongibles sur Ethereum. Il définit les fonctions de base pour le transfert de tokens et la consultation des soldes. Ce standard a permis l'émergence de l'écosystème [[DeFi ecosystem]] moderne.

Les fonctions obligatoires incluent transfer, transferFrom, approve et allowance. Les événements Transfer et Approval permettent aux applications de suivre les mouvements de tokens.

### [[ERC-721]]

L'[[ERC-721]] définit les jetons non fongibles avec des identifiants uniques. Chaque token ERC-721 est distinct et peut représenter la propriété d'un actif spécifique comme l'art digital ou les objets de jeu.

Les fonctions incluent transferFrom, safeTransferFrom et tokenURI. Les événements Transfer et Approval suivent la propriété de chaque token individuellement.

### Autres standards

ERC-4626 est un standard pour les vaults de tokens qui optimise les investissements tokenisés. Les extensions comme ERC-2981 permettent les royalties sur les ventes secondaires de NFTs.

Des propositions comme ERC-1155 permettent de gérer plusieurs types de tokens avec un seul contrat, optimisant les coûts pour les applications de gaming.

## Implications pour les bots de trading

Les[[Trading bot]] doivent comprendre les différents standards de tokens pour interagir correctement avec les protocoles. L'analyse des[[Tokenomics]] nécessite de distinguer les tokens fongibles des NFTs.

L'implémentation de stratégies multi-chaînes requiert la connaissance des standards locaux sur chaque blockchain. Les[[Cross-chain bridges]] gèrent la conversion entre standards sur différents réseaux.

## Sécurisation des tokens

La sécurité des tokens repose sur la qualité de l'implémentation du standard. Les vulnérabilités dans les fonctions approve ou transferFrom peuvent être exploitées pour voler des tokens.

Les[[Wallet]] et les[[Hardware wallet]] supportent les principaux standards pour permettre la gestion sécurisée des différents types de tokens.