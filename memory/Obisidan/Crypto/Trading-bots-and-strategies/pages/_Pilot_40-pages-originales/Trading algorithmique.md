---
titre: "Trading algorithmique"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/algorithme, #concept/strategy, #concept/trading]
créé: 2026-04-20
liens_forts: ["[[Trading bot]]", "[[Haute fréquence]]", "[[Backtesting]]"]
liens_opposition: []
---

# Trading algorithmique

> [!info] Résumé
> Le trading algorithmique désigne l'exécution systématique d'ordres de trading via des instructions mathématiques pré-programmées, couvrant des stratégies des plus simples aux plus complexes, du grid trading au market making haute fréquence.

## Définition

Le trading algorithmique (aussi appelé algo trading ou black-box trading) est l'utilisation de programmes informatiques pour exécuter des stratégies de trading selon des règles logiques et mathématiques. L'objectif central est d'automatiser le processus décisionnel, éliminant les biais émotionnels et permettant une scalabilité impossible pour un humain.

Une stratégie algorithmique se définit par un ensemble de règles : conditions d'entrée (quand acheter ou vendre), conditions de sortie (quand clore la position), dimensionnement (combien risquer), et gestion du risque (stop-loss, take-profit). Ces règles peuvent être simples (croisement de deux moyennes mobiles) ou complexes (modèle de machine learning multi-factors avec gestion dynamique du risque).

Le spectre des stratégies est large. À une extrémité, le grid trading place des ordres à intervalles de prix fixes. À l'autre, le market making haute fréquencerequiert des algorithmes sophistiqués pour gérer l'inventaire, le risque de adverse selection, et les micro-structuras du marché en sub-millisecondes.

## Contexte et origine

Le trading algorithmique a commencé dans les années 1970 avec les premiers systèmes informatiques sur les bourses américaines. Le Chicago Mercantile Exchange a été pionnier dans les années 1980 avec le tradingProgram-driven par les firmes institutionnelles.

L'explosion réglementaire et technologique des années 1990-2000 a vu l'émergence des firmes haute fréquence (HFT) comme Citadel Securities, Virtu Financial. Ces firmes investissent des centaines de millions en infrastructure (co-localisation, fibres optiques optimisées) pour gagner des millisecondes.

En crypto, le trading algorithmique a décollé après 2017 avec la démocratisation des API d'échange et la montée des plateformesno-code comme 3Commas et Bitsgap. La nature 24/7 des marchés crypto et la fragmentation entre exchanges ont créé des opportunités que les bots institutionnels ont vite exploitées.

## Mécanismes et caractéristiques

Une stratégie algorithmique repose typiquement sur quatre composantes : capture de données (prix, volume, order book, données on-chain), génération de signaux (règles techniques, modèle ML,ou multi-facteurs), gestion de position (position sizing, stop-loss, take-profit), et exécution (passation d'ordres via API).

Le backtesting est l'étape critique pour évaluer une stratégie. Il consiste à simuler la stratégie sur des données historiques pour estimer la performance. Les pièges incluent le surapprentissage (la stratégie marche sur l'historique mais pas en live), le biais de survie (exclure de l'historique les assets qui ont fait fail), et le data-snooping (tester trop d'hypothèses sur les mêmes données jusqu'à trouver du bruit).

Le forward testing ou paper trading complète le backtesting en testant la stratégie sur des données temps réel simulées, sans risquer de vrai capital. Cette étape révèle les différences entre simulation et exécution réelle (slippage, latence, fiabilité des WebSocket).

L'exécution en live nécessite une infrastructure robuste : monitoring continu, alertes de performance, circuit breakers automatiques, et capacité de réaction rapide. Les bots les plus sérieux fonctionnent sur des serveurs dédiés avec redondance et supervision 24/7.

## Nuances, critiques, limites

Le trading algorithmique ne garantit pas le profit. Une stratégie bien backtestée peut échouer en live à cause de conditions marché différentes, de liquidité réduite, ou de participants qui adaptent leur stratégie face à celle du bot.

Le HFT soulève des préoccupations de stabilité des marchés. Le flash crash de 2010 aux États-Unis a été partiellement causé par des algorithmes en cascade. En crypto, la faible liquidité et l'absence de circuit breakers rendent les marchés particulièrement vulnérables aux cascades algorithmiques.

Le problème de la anti-intelligence est que plus une stratégie devient populaire, moins elle est rentable. Les marchés s'adaptent. Une stratégie d'arbitrage qui fonctionnait en 2018 peut ne plus fonctionner en 2026 car trop de bots l'implémentent.

La transparence est limitée.many bots sont des black boxes dont les décisions sont opaques. Les scams de bots qui promettent des rendements garantis exploitent cette opacité pour cacher des pratiques douteuses.

## Liens et implications

Le trading algorithmique est l'évolution naturelle du [[trading bot]] manuel vers l'automatisation complète. Le [[backtesting]] et la [[gestion du risque]] sont les étapes obligatoires avant tout deployment.

La [[Haute fréquence]] (HFT) est une sous-catégorie extreme du trading algorithmique, caractérisée par des positions held quelques millisecondes et une infrastructure massive. Le [[market making]] est souvent implémenté en HFT.

Les stratégies de [[momentum]] et de [[mean reversion]] sont deux catégories principales de stratégies algorithmiques, chacune avec ses avantages et limites selon les conditions de marché.

## Sources

[^1]: Investopedia, "Algorithmic Trading", https://www.investopedia.com/terms/a/algorithmictrading.asp (consulted 2026)
[^2]: SEC, "Background on High Frequency Trading", https://www.sec.gov/marketstructure/hft-background.html (consulted 2026)