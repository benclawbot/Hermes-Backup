---
uid: erc-20
title: "ERC-20"
tags:
  - erc-20
  - token-standard
  - ethereum
created: 2026-04-21
updated: 2026-04-21
---

# ERC-20

L'[[ERC-20]] est le standard technique pour les tokens fongibles sur la blockchain Ethereum. Ce standard a permis l'émergence de l'écosystème [[DeFi ecosystem]] en fournissant une interface commune pour les jetons interchangeables.

## Spécification du standard

Le standard ERC-20 définit six fonctions obligatoires et deux événements. Les fonctions incluent totalSupply pour connaître la العرض totale, balanceOf pour consulter un solde, transfer pour envoyer des tokens, et transferFrom pour les transferts délégués.

La fonction approve permet à un utilisateur d'autoriser un tiers à dépenser une partie de ses tokens. allowance permet de vérifier le montant autorisé. Les événements Transfer et Approval notifient le réseau des mouvements de tokens.

## Implémentation standard

L'implémentation typical d'un contrat ERC-20 maintient une table de soldes (mapping address => uint256). La fonction transfer met à jour les soldes et émet l'événement Transfer si la transaction est valide.

Le mécanisme de approve + transferFrom permet les transferts délégués où un contract peut exécuter des transferts pour le compte d'un utilisateur. Ce mécanisme est fondamental pour les[[DEX]] et les protocoles de prêt.

## Tokens ERC-20 majeurs

Les principaux tokens ERC-20 par capitalisation incluent l'USDT, l'USDC, et de nombreux tokens de protocoles [[DeFi ecosystem]]. Ces tokens sont évalués en permanence par les[[Trading bot]] à travers les marchés.

Les[[Governance tokens]] comme those de [[MakerDAO]] et [[Aave]] sont également des tokens ERC-20. Ils confèrent des droits de vote sur les décisions du protocole et peuvent être tradés sur les marchés secondaires.

## Trading d tokens ERC-20

Les[[Trading bot]] interagissent avec les tokens ERC-20 pour exécuter des stratégies sur les[[Decentralized exchanges (DEX)]]. Les[[Automated Market Makers (AMM)]] utilisent les pools de liquidité ERC-20 pour déterminer les prix.

L'arbitrage entre les prix sur différents protocoles ou blockchains constitue une stratégie commune. Les[[Gas fees]] variables sur Ethereum influencent la rentabilité de ces stratégies.

## Considerations de sécurité

Les vulnérabilités comme l'approbation double et les problèmes de decimals doivent être gérées correctement. Les bots doivent implémenter une gestion prudente des allowances pour éviter les风险的 de theft.

Les[[Smart contracts]] malveillants peuvent exploiter les autorisations données aux контраts. La revue du code et les audits de sécurité sont essentiels avant d'approuver des contrats inconnus.

## Extensions du standard

ERC-20 possède plusieurs extensions comme ERC-20Permit qui permet les approbations signées hors chaîne, réduisant les coûts de gas. ERC-20Snapshot permet de capturer l'état des soldes à un moment précis pour des purposes de gouvernance.

Les[[Token standards]] evoluent pour adresser les besoins émergents comme les royalties automatisées pour les créateurs de tokens.