---
titre: "Trading bot"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/agent, #concept/trading, #concept/automation]
créé: 2026-04-20
liens_forts: ["[[Trading algorithmique]]", "[[API d'échange]]", "[[Exécution automatique]]"]
liens_opposition: []
---

# Trading bot

> [!info] Résumé
> Un trading bot est un logiciel automatisé qui exécute des ordres de trading selon des règles préprogrammées, eliminant les émotions du processus décisionnel et permettant une exécution à des vitesses impossible pour les humains.

## Définition

Un trading bot est un programme informatique conçu pour interagir avec les marchés financiers de manière autonome. Contrairement au trader manuel, le bot suit rigoureusement les règles établies dans son code, sans intervention émotionnelle. Il analyse les données de marché en temps réel, génère des signaux et passe des ordres selon des conditions prédéfinies.

La construction d'un bot repose sur quatre composants essentiels : un module d'accès aux données marché (via API d'échange), un moteur d'analyse (indicateurs techniques, modèles ML, ou règles logiques), un gestionnaire de positions (dimensionnement, stop-loss, take-profit), et un module d'exécution (passation d'ordres). L'architecture peut aller du script simple sur un laptop au système haute fréquence co-localisé près des serveurs de l'échange.

Les bots varient considérablement en complexité. Certains suivent des règles élémentaires comme le grid trading ou le dollar cost averaging automatisé. D'autres implémentent des stratégies sophistiquées combinant analyse technique multi-timeframe, analyse on-chain, et modèles de machine learning. La frontière entre bot simple et système de trading algorithmique complexe est floue.

## Contexte et origine

Le trading automatisé a émergé dans les années 1970-1980 avec l'introduction des systèmes de trading assistés par ordinateur sur les marchés américains. Les premières plateformes permettaient aux institutionnels de programmer des règles simples de passage d'ordres.

L'explosion du trading bot retail dates de 2017-2018, portée par la montée des échanges de crypto (Binance, FTX, etc.) offrant des API accessibles, la popularisation du grid trading via Telegram bots, et l'influence de YouTubers promo des "bots miracle". En parallèle, des plateformes comme 3Commas, Bitsgap et Haasonline ont démocratisé l'accès à des stratégies automatisées sans code.

L'évolution reciente pousse vers l'IA et l'apprentissage par renforcement, avec des agents qui apprennent leurs propres stratégies via trial and error sur des environnements de simulation. Ces systèmes promettent une adaptabilité que les règles statiques ne peuvent atteindre, mais soulèvent des questions de fiabilité et de compréhension des décisions du bot.

## Mécanismes et caractéristiques

L'exécution d'un trade par un bot suit un workflow cyclique : collecte de données → analyse → décision → exécution → monitoring. Ce cycle tourne en continu, souvent plusieurs fois par seconde pour les systèmes haute fréquence.

Le dimensionnement des positions determine combien de capital risquer par trade. Les approches incluent le fixed fractional (X% du capital par trade), le Kelly Criterion (formule mathématique optimale), ou le sizing basé sur la volatilité (risque proportionnel à la volatilité historique de l'actif). Un mauvais dimensionnement est la cause principale des blow-ups.

La gestion du risque inclut typiquement : stop-loss obligatoire (niveau de perte maximal accepté), take-profit (cible de gain), drawdown maximum (perte cumulée acceptée avant arrêt du bot), et position sizing selon la volatilité récente. Ces garde-fous distinguent un bot sérieusement conçu d'un script dangereux.

L'interface avec les échanges se fait via REST API pour les opérations standard ou WebSocket pour les données temps réel. Chaque échange a ses spécificités : rate limits, latence, fiabilité des WebSocket, et types d'ordres supportés. Les bots sérieux implémentent du retry logic, du circuit breaker, et du logging exhaustif.

## Nuances, critiques, limites

Les bots n'éliminent pas le risque mais le transforment. Un bot mal conçu peut perdre plus vite qu'un humain (exécution automatique sans supervision). Le risque opérationnel inclut les pannes de connexion, les bugs de code, et les conditions de marché extrêmes non anticipées dans la programmation.

Le surapprentissage est le danger principal des stratégies complexes. Un modèle peut parfaitement "mémoriser" les données historiques sans généraliser. Le backtesting seulsuffit pas ; le forward testing et le paper trading sont des étapes critiques avant le live trading.

L'adaptabilité reste limitée. Un bot est figé dans les règles codées. Les events blacks swan (crash covid, FTX collapse) peuvent rendre toutes les règles obsolètes. Le trader humain peut improviser, le bot continue d'exécuter sa logique jusqu'à ce qu'on l'arrête.

Le problème de black box est pour les bots ML. Quand un réseau neuronal décide de vendre, la logique derrière la décision est opaque. Ce manque de transparence complique l'audit, le debug, et la confiance.

## Liens et implications

Les trading bots sont l'implémentation concrète du [[trading algorithmique]], qui lui-même s'appuie sur l'|API d'échange| pour accéder aux marchés. L'[[exécution automatique]] distingue le bot du copy trading manuel.

La [[gestion du risque]] est indissociable du bot : sans règles de stop-loss et position sizing, le bot devient un herramienta de destruction. Le [[backtesting]] permet de valider une stratégie avant deployment.

Les bots sont liés aux plateformes comme [[3Commas]] et [[Bitsgap]] qui offrent des interfacesno-code pour créer des stratégies. La communauté crypto debatesur la fiabilité de ces plateformes via des discussions sur [[fiabilité des services de signaux de trading]].

## Sources

[^1]: Investopedia, "Trading Bot", https://www.investopedia.com/articles/active-trading/101014/what-are-trading-bots.asp (consulted 2026)
[^2]: Binance Academy, "Trading Bots Explained", https://academy.binance.com/en/articles/trading-bots-explained (consulted 2026)