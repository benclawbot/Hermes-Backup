---
titre: "Portfolio tracker"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/portfolio, #concept/tracker, #concept/monitoring]
créé: 2026-04-21
liens_forts: ["[[Portfolio tracker]]", "[[Portfolio management]]", "[[Position sizing]]"]
liens_opposition: []
---

# Portfolio tracker

> [!info] Résumé
> Un portfolio tracker est un outil qui permet de suivre la valeur et la performance de l'ensemble des actifs financiers d'un utilisateur. Dans l'écosystème crypto, ces outils agrègent les soldes sur plusieurs exchanges et wallets pour提供一个 vue consolidée du patrimoine.

## Définition

Un portfolio tracker est une application ou un service qui consolidated les informations sur les actifs financiers d'un utilisateur. Il permet de voir d'un coup d'œil la valeur totale du portfolio, la répartition par actif, et l'évolution de la valeur dans le temps.

Pour les crypto traders qui ont des comptes sur plusieurs exchanges (Binance, Coinbase, Kraken, etc.), le portfolio tracker offre une vue unifiée qui évite d'avoir à se connecter séparément à chaque plateforme.

Les fonctionnalités incluent : l aggregation de soldes multi-exchange, le calcul de PnL (Profit and Loss), l'historique des transactions, et les alertes de prix.

## Fonctionnalités clés

**Aggregation multi-exchange**
Le tracker se connecte aux différentes exchanges via API et جمع les soldes. L'utilisateur voit son patrimoine total dispersé sur plusieurs plateformes dans une seule interface.

**Calcul de performance**
Le tracker calcule le rendement du portfolio sur différentes périodes (jour, semaine, mois, année) et compare avec des benchmarks comme Bitcoin ou Ethereum.

**Répartition par actif**
Graphiques montrant le pourcentage en Bitcoin, Ethereum, et autres altcoins. Permet de visualiser la diversification du portfolio.

**Alertes de prix**
Configuration d'alertes sur le prix de certains actifs ou sur la valeur totale du portfolio. Utile pour réagir aux mouvements importants.

**Tax reporting**
Certaines applications génère des rapports pour les impôts en calculant les gains réalisée et les pertes.

## Outils populaires

**Applications centralisées**
CoinGecko Portfolio, Delta, Blockfolio (maintenant FTX), et Coinstats permettent de suivre les portfolios avec connexion API.

**Outils non-custodial**
Des outils comme 
Debank ou Zapper se connectent aux wallets pour offrir une vue on-chain du portfolio sans risque de contrepartie.

**Tableurs personnalisés**
Les utilisateurs avancés peuvent construire leurs propres trackers avec Google Sheets et l'API CoinGecko pour les prix.

## Nuances et limites

La sécurité des clés API est une préoccupation. Donner un accès API à un tracker tiers expose les fonds à un risque si le tracker est compromis.

La précision des données peut varier. Certains trackers ont des délais de mise à jour qui affects the calculations. Pour le PnL tax, des erreurs peuvent être coûteuses.

Les portfolios crypto sont fragmentés : hardware wallets, hot wallets, smart contracts, yield farming. Aucun tracker ne capture tout parfaitement.

Le risque de counterparty existe même pour les trackers non-custodial. Si le service ferme, l'accès aux données peut être perdu.

## Liens et implications

Le [[portfolio tracker]] permet le [[portfolio management]] éclairé en 提供issant les données nécessaires à la décision. Le [[position sizing]] dépend de la connaissance de la taille globale du portfolio.

La [[gestion du risque]] au niveau du portfolio requiert une vue consolidée que le tracker fournit. Les [[systèmes d'alerte]] utilisent les données du tracker pour notifier l'utilisateur.

L'[[API d'échange]] est le lien technique pour connecter les exchanges. La [[sécurité des clés API]] doit être considered quand on utilise un tracker.

## Sources

[^1]: CoinGecko, "Portfolio Tracking", https://www.coingecko.com (consulted 2026)
[^2]: Delta, "About", https://www.delta.app (consulted 2026)
