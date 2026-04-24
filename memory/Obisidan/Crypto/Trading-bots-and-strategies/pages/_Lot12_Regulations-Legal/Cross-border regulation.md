---
titre: "Cross-border regulation"
type: concept
cluster: "Réglementation crypto"
statut: verified
controverse: high
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/cross-border, #concept/international, #concept/regulation]
créé: 2026-04-21
liens_forts: ["[[Réglementation crypto]]", "[[AML/KYC]]", "[[Regulatory arbitrage]]"]
liens_opposition: []
---

# Cross-border regulation

> [!info] Résumé
> Le cross-border regulation désigne l'ensemble des règles et mécanismes qui governent les activités crypto à travers les frontières. Il inclut la cooperation internationale entre régulateurs, la Travel Rule FATF, et les règles de блокировки сайтов pour les entities non autorisé.

## Définition

Le cross-border regulation englobe les défis réglementaires posés par les crypto-actifs qui opèrent au-delà des frontières nationales. Les blockchains sont par nature transnationales : une transaction Bitcoin peut impliquer un expéditeur au Japon, un destinataire en Allemagne, et être minée au Kazakhstan. Aucun pays ne peut controllerr entièrement ce qui se passe sur une blockchain.

Les enjeux principaux du cross-border regulation incluent : la determination de la juridiction applicable (quel pays a le droit de réguler ?), la cooperation entre régulateurs (partage d'information, enforcement coordonné), et les mécanismes d'application (bloquer l'accès aux sites web, sanctionner les entities).

Les régulateurs ont développé plusieurs approches : les Travel Rule FATF qui exige le partage d'informations sur les transfers transfrontaliers, les prohibitions of access pour les entities non enregistrée (blocage DNS, interdiction bancaire), et les accords bilatéraux de cooperation entre autorités de régulation.

## Contexte et origine

Le cross-border regulation pour la crypto a commencé à être développé véritablement après 2015-2016, quand les premiers scandales (Mt. Gox, Silk Road) ont révélé l'utilisation de la crypto pour des activités criminelles transfrontalières.

Le FATF a intégré les crypto-actifs dans ses recommandations en 2019 (mise à jour des 40 recommandations), exigeant que les pays appliquent les règles AML/KYC aux VASPs. La Travel Rule a étéintroduite, exigeant que les VASPs échangent des informations sur les expéditeur et bénéficiaire lors de transfers transfrontaliers.

L'Union européenne a adopté la directive (EU) 2018/843 (5e directive AML) qui inclut les crypto-asset service providers dans le scope des obligations AML. Le Règlement TFR (Transfer of Funds Regulation) actualisé en 2023 exige des informations sur les transferts de crypto-actifs.

## Mécanismes et caractéristiques

La Travel Rule FATF exige que les VASPs (Virtual Asset Service Providers) reçoivent et transmettent des informations sur l'expéditeur (nom, adresse, numéro de compte) et le bénéficiaire (nom, adresse, numéro de compte) lors de chaque transfer. Ces informations doivent être disponibles pour les autorités sur demande.

Le blocage de l'accès aux websites est utilisé par plusieurs juridictions (Chine, Inde avant son reversal, بعض pays arabes) pour empêcher les residents d'accéder à des exchanges non autorisés. Les mécanismes incluent le blocage DNS, le filtering IP, et les injonctions auxFAI.

Les accords de coopération entre régulateurs permettent le partage d'informations sur les entities qui opèrent dans plusieurs juridictions. Ces accords sont particulièrement importants pour les enforcement actions quand une entity basée dans un pays commet des violations dans un autre.

## Nuances, critiques, limites

Le cross-border regulation est fondamentalement limité par la nature of blockchain technology. Même si un pays interdit un exchange, les utilisateurs peuvent utiliser des VPN, des decentralized exchanges, ou des protocols peer-to-peer pour bypasser les restrictions.

La coopération internationale est inégale. Certains pays (îles Caïmans, Seychelles) sont used comme bases pour échapper à la regulation parce qu'ils ont des règles AML faibles ou une capacité d'enforcement limitée. Le FATF maintient une liste de pays à risque (grey list, black list).

L'application des règles de Travel Rule aux protocoles DeFi est problématique. Si un protocol est fully decentralized, il n'y a pas de VASP qui peut transmitir les informations, et l'obligation devient inapplicable.

## Liens et implications

Le [[Cross-border regulation]] est une dimension critique de la [[réglementation crypto]] globale. Les projets qui veulent servir des utilisateurs dans plusieurs juridictions doivent comprendre et comply avec les règles de chaque pays.

Le [[regulatory arbitrage]] est directamente lié au cross-border regulation. Les entities peuvent exploiter les differences entre juridictions pour offrir des services qui seraient interdits ailleurs. Cela crée des tensions entre pays qui veulent attirer les projects crypto et ceux qui veulent les restrict.

L'[[AML/KYC]] est le principal outil de cross-border regulation à travers la Travel Rule FATF. Sans ces règles, les transfers transfrontaliers de crypto seraient anonymes et pourraient être utilisés pour le blanchiment.

## Sources

[^1]: FATF, "International Standards on Combating Money Laundering", https://www.fatf-gafi.org (consulted 2026)
[^2]: EU, "Transfer of Funds Regulation", https://eur-lex.europa.eu (consulted 2026)