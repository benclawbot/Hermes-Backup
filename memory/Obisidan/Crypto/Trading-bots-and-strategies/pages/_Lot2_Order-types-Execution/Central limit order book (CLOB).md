---
titre: "Central limit order book (CLOB)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/carnet-ordres, #microstructure, #institution]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Liquidité]]", "[[Appariement du carnet d'ordres]]", "[[Ordre à cours limité]]", "[[Marché dark pool]]"]
liens_opposition: ["[[Marché dark pool]]"]
---

# Central limit order book (CLOB)

> [!info] Résumé
> Le CLOB (Central Limit Order Book) est un système oÙ tous les ordres d'achat et de vente sont centralisés dans un livre d'ordres transparent, avec un mécanisme d'appariement basé sur le prix et le temps.

## Définition

Le CLOB (Central Limit Order Book) est la forme la plus répandue de carnet d'ordres électronique sur les marchés financiers. Dans un CLOB, tous les ordres (achats et ventes) sont regroupés dans un livre centralisé, visibles de tous les participants, et appariés selon des règles de priorité transparentes (prix d'abord, temps ensuite).

Le CLOB est le modèle utilisé par virtually tous les exchanges centralisés — actions, forex, crypto. Il offre une découverte des prix transparente, une liquidité centralisée, et des mécanismes d'exécution standardisés. Les ordres sont matched par le moteur d'appariement de l'exchange (cf. [[Appariement du carnet d'ordres]]).

La transparence du CLOB est à la fois sa force (tous les participants voient le même carnet) et sa limite (elle permet le "[[Smart money concept|trading based on order flow information]]" oÙ les acteurs informé(e)s peuvent anticiper les mouvements).

## Contexte et origine

Le CLOB tel que nous le connaissons émerge dans les années 1970-1980 avec l'avènement des premiers systèmes de trading electroniques. Le NASDAQ aux États-Unis et SBF-Euroclear en France sont parmi les premiers à implementer des carnets electroniques, remplaçant les systèmes de criée (open outcry).

Dans l'écosystème crypto, le CLOB est le modèle de tous les grands exchanges centralisés : Binance, Coinbase, Kraken, Bybit. Ces plateformes ont bâti leur infrastructure sur des technologies qui scalent le CLOB à des millions d'ordres par seconde.

Le CLOB s'oppose au modèle des [[Marché dark pool|Dark pools]] (oÙ une partie de la liquidité est masquée) et au modèle AMM (Automated Market Maker) utilisé par les DEX Uniswap-style.

## Mécanismes / caractéristiques / détails

**Transparence du livre** : dans un CLOB, chaque participant peut voir l'intégralité du carnet (ou au minimum les N premiers niveaux). Cette transparence permet à chacun de prendre des décisions éclairées sur ses ordres. Les [[Données de niveau 2]] sont précisément le  du carnet en profondeur.

**Moteur d'appariement centralisé** : le matching est effectué par l'exchange de manière centralisée. Cela permet une exécution rapide et équitable selon les règles de priorité. C'est le [[Order book dynamics|moteur de tenue de marché]] de l'exchange.

**Formation du prix** : dans un CLOB, le prix est découvert par l'intersection des ordres d'achat et de vente. Le meilleur bid (prix d'achat le plus élevé) et le meilleur ask (prix de vente le plus bas) définissent le spread. Le prix "mid" (milieu) est une référence couramment utilisée.

**Liquidité concentrée** : le CLOB centralise la liquidité de tous les participants sur une seule plateforme. Pour un actif donné, toute la liquidité est dans un seul livre, ce qui facilite l'exécution mais rend la plateforme critique pour le fonctionnement du marché.

**Risque de contrepartie centralisé** : parce que l'exchange est le contrepartie central de toutes les transactions, il y a un risque que l'exchange soit défaillant. C'est le risque qui a conduit à la création des [[Marché dark pool|Dark pools]] alternatifs et des DEX pour certains acteurs.

**Profondeur du livre** : la profondeur est la quantité totale de liquidité disponible aux différents niveaux de prix. Un livre profond (avec beaucoup d'ordres) offre une grande résilience aux gros ordres. Un livre superficiel (peu d'ordres) est vulnérable à l'[[Impact de marché]].

## Nuances, critiques, limites

**Information asymmetry** : la transparence du CLOB est à double tranchant. Les acteurs avec un accès plus rapide aux données du carnet (via co-localisation ou meilleure infrastructure) ont un avantage informationnel sur les autres participants. C'est une critique majeure du modèle CLOB par les défenseurs des dark pools.

**Risque de manipulation** : la visibilité des ordres dans le CLOB permet des stratégies de manipulation comme le " spoofing " (placer de gros ordres pour donner l'illusion de liquidité, puis les annuler) ou le " layering ". Ces pratiques sont interdites sur les marchés réglementés mais persistent sur crypto.

**Fragmentation** : le même actif peut être échangé sur plusieurs CLOB différents (plusieurs exchanges), créant une fragmentation de la liquidité. Cette fragmentation est ce qui permet l'[[Arbitrage]] mais peut aussi réduire la profondeur effective sur chaque plateforme.

**vs AMM** : les DEX de type Uniswap (Automated Market Maker) n'utilisent pas de CLOB. À la place, ils utilisent des pools de liquidité avec un algorithm de tarification automatique (constant product). Ce modèle est fondamentalement différent et présente ses propres avantages et inconvénients.

## Liens et implications

Le CLOB est le terreau dans lequel opèrent la plupart des stratégies de [[Trading algorithmique]]. La [[Liquidité]] concentrée dans le CLOB permet aux algorithmes de fonctionner avec une certitude relative sur les prix et les exécutons.

Les stratégies de [[Market making]] sur CLOB profitent de la transparence pour adapter leurs prix en temps réel. Inversement, les[[Smart money concept|acteurs informés]] peuvent utiliser l'information du carnet pour anticiper les mouvements.

La competition entre CLOB (différents exchanges) a poussé les plateformes à innover sur les frais, la vitesse, et les fonctionnalités. Cette competition benefit les traders en général mais crée aussi des problèmes de fragmentation.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: SEC Concept Release on Equity Market Structure, 2010.
