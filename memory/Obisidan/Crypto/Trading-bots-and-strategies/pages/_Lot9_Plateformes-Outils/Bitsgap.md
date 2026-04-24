---
titre: "Bitsgap"
type: institution
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#institution/bitsgap, #institution/platform, #concept/bots]
créé: 2026-04-20
liens_forts: ["[[Carlo]]", "[[Grid trading]]", "[[Cross-exchange arbitrage]]"]
liens_opposition: []
---

# Bitsgap

> [!info] Résumé
> Bitsgap est une plateforme majeure de bots de trading crypto concurrençant 3Commas, offrant des outils de grid trading, DCA, et arbitrage avec des résultats variables pour les utilisateurs.

## Définition

Bitsgap est une plateforme SaaS de trading bot fondée en 2018 (environ) qui permet aux utilisateurs de créer des stratégies de trading automatisées sans code. La plateforme se positionne comme un outil professionnel pour le trading automatisé.

Les fonctionnalités principales incluent :
- **Trading Bots** : grid, DCA, et bots de momentum
- **Trading terminal** : interface avancée pour le trading manuel
- **Arbitrage** : détection d'opportunités d'arbitrage entre exchanges
- **Backtesting** : test de stratégies sur données historiques

Bitsgap se distingue par son focus sur l'arbitrage cross-exchange comme fonctionnalité clé, permettant aux utilisateurs de trouver et exécuter des opportunités d'arbitrage entre différentes plateformes.

## Contexte et origine

Bitsgap a été créé par une équipe qui a vu l'opportunité de fournir des outils de trading professionnel à un public plus large. La plateforme a grandi en parallèle avec 3Commas et d'autres plateformes similaires.

L'entreprise opère depuis une juridiction non clairement identifiés, ce qui est común pour les startups crypto. Elle n'est pas enregistrée comme broker ou platform de trading, ce qui limite ses obligations réglementaires.

## Comparaison avec 3Commas

Bitsgap et 3Commas sont souvent comparés car ils offrent des produits similaires :
- Bitsgap met l'accent sur l'arbitrage et le terminal de trading avancées
- 3Commas met l'accent sur les signaux et le copy trading

Bitsgap a été moins affecté par le collapse FTX car son focus était moins orienté vers cette plateforme spécifique. Certains utilisateurs ont migrate de 3Commas vers Bitsgap après les problèmes de 2022.

## Risques et limitations

Les risques des plateformes de bots s'appliquent à Bitsgap :
- Les pertes peuvent être importantes si le marché bouge contre les bots
- Les frais de la plateforme s'ajoutent aux frais des exchanges
- La performance passée ne garantit pas la performance future

Le produit d'arbitrage est particulièrement attract mais les risques (execution, delays) peuvent eat into profits. Les fonctionnalités de backtesting sont limitées par rapport à ce qu'un utilisateur pourrait build lui-même.

## Fonctionnalités principales

Bitsgap offre plusieurs types de bots de trading :

**Grid Trading Bot** : le bot place des ordres d'achat et de vente à des intervalles réguliers autour d'un prix de base. Quand le marché fluctue, chaque transaction génère un profit. Plus le prix oscille, plus le bot génère de profits. Les paramètres incluent le prix de base, l'écart entre les ordres, et le nombre de grilles.

**DCA Bot (Dollar Cost Averaging)** : ce bot achète périodiquement des actifs selon un calendrier prédéfini, réduisant l'impact de la volatilité. Il est particulièrement populaire pour les stratégies à long terme sur les altcoins volatiles.

**Signal Bot** : reçoit des signaux de trading depuis des sources externes et les exécute automatiquement. Les signaux peuvent venir de groupes Telegram, de sites de signaux, ou de stratégies personnalisées.

**Trading terminal** : interface avancée pour le trading manuel avec des fonctionnalités comme le order book visuel, les graphiques avancés, et les ordres avancés (OCO, trailing stop).

Bitsgap se distingue par son focus sur l'arbitrage cross-exchange comme fonctionnalité clé. La plateforme peut se connecter à plusieurs exchanges simultanément (Binance, Kraken, Bitfinex, etc.) et détecter les opportunités d'arbitrage entre les prix sur différentes plateformes.

## Plans et tarification

Bitsgap propose plusieurs plans tarifaires :

- **Starter** : limité à 3 bots, 1 exchange connecté
- **Advanced** : jusqu'à 10 bots, plusieurs exchanges
- **Pro** : bots illimités, arbitrage cross-exchange, API advanced

Les frais de la plateforme sont un pourcentage des profits générés. Les utilisateurs rapportent des frais de 0,25% à 0,4% selon le plan. Ces frais s'ajoutent aux frais des exchanges, ce qui peut réduire significativement les rendements nets.

## Configuration et stratégies

La configuration d'un bot Bitsgap requiert plusieurs étapes :

1. Connexion des exchanges via API keys
2. Sélection du type de bot (grid, DCA, signal)
3. Configuration des paramètres (prix de base, intervalles, taille des ordres)
4. Activation du bot et monitoring

Les stratégies populaires incluent :

**Grid sur les paires volatiles** : ETH/USDT ou ALT/USDT sur des exchanges avec des frais bas. Le grid capture les mouvements latéraux mais subit en tendance forte.

**DCA sur les blue chips** : BTC, ETH avec des achats réguliers pour accumuler sur le long terme. La volatilité crypto rend le DCA particulièrement efficace.

**Arbitrage triangular** : exploiter les écarts de prix entre trois devises sur un même exchange. Cette stratégie requiert un capital important et des frais bas.

## Risques et limitations

Les risques des plateformes de bots s'appliquent à Bitsgap :
- Les pertes peuvent être importantes si le marché bouge contre les bots
- Les frais de la plateforme s'ajoutent aux frais des exchanges
- La performance passée ne garantit pas la performance future
- Le risque de keys API compromises si les permissions sont trop larges
- Le risque de downtime de la plateforme qui pourrait affecter l'exécution

Le produit d'arbitrage est particulièrement attractif mais les risques (execution, delays) peuvent réduire significativement les profits. Les opportunités d'arbitrage sont souvent de très courte durée (secondes à minutes) et requièrent une exécution rapide.

Bitsgap a été moins affecté par l'effondrement FTX en 2022 car son focus était moins orienté vers cette plateforme spécifique. Certains utilisateurs ont migré de 3Commas vers Bitsgap après les problèmes de 2022, ce qui a contribué à sa croissance.

## Alternatives et compétiteurs

Bitsgap concurrence plusieurs plateformes :

**3Commas** : le competitor direct le plus known. Moins cher mais avec moins de features pour l'arbitrage. Focus sur les signaux et le copy trading.

**Quadency** : plateforme avec une interface utilisateur plus raffinée mais moins de features pour les bots autonomes.

** HaasOnline** : plateforme plus technique avec des options de customisation avancées. Plus coûteuse.

**Cryptohopper** : orienté vers les signaux et le copy trading. Interface plus simple.

## Sources

[^1]: Bitsgap, "About", https://bitsgap.com/about (consulted 2026)
[^2]: Crypto Slate, "Bitsgap Review", https://cryptoslate.com (consulted 2026)