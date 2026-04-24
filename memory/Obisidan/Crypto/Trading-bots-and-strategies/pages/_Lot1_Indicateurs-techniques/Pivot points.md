---
titre: "Pivot points"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/support-résistance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]", "[[Risk-reward ratio]]"]
liens_opposition: []
---

# Pivot points

> [!info] Résumé
> Les pivot points sont des niveaux de prix calculés à partir du haut, du bas, et de la clôture de la période précédente. Ils servent à identifier des niveaux de support et de résistance et à générer des signaux de trading journaliers.

## Définition

Les pivot points sont des niveaux de prix horizontaux calculés à partir des données de la période précédente (jour, semaine, mois). Le pivot central (P) est la moyenne du haut, du bas, et de la clôture de la période précédente : P = (H + B + C) / 3.

À partir du pivot central, on calcule des niveaux de support (S1, S2, S3) et de résistance (R1, R2, R3). La formule standard :

R1 = (2 × P) - B
S1 = (2 × P) - H
R2 = P + (H - B)
S2 = P - (H - B)
R3 = H + 2 × (P - B)
S3 = B - 2 × (H - P)

Où H = haut, B = bas, C = clôture de la période précédente.

Le pivot central agit comme un point d'équilibre. Si le prix est au-dessus du pivot, le sentiment est haussier. Si le prix est en dessous, le sentiment est baissier.

## Contexte et origine

Les pivot points sont utilisés depuis des décennies par les traders de plancher (floor traders) des bourses américaines. Ces traders calculaient les niveaux chaque matin pour planifier leurs trades de la journée. L'arrivée de l'informatique a permis d'automatiser ce calcul et de l'intégrer dans les plateformes de trading.

Le système des pivot points "standard" ou "klassik" est le plus courant. Il existe aussi les pivot points de Woodie (qui donnent plus de poids à la clôture), de Camarilla (avec des niveaux plus serrés), et de Fibonacci (utilisant les ratios Fibonacci pour les niveaux).

En crypto, les pivot points sont populaires pour le trading journalier (intraday) car le marché fonctionne 24h/24. Les pivot points quotidiens se basent généralement sur la clôture de 00h00 UTC, alignant les traders du monde entier sur les mêmes niveaux.

## Mécanismes et caractéristiques

Les niveaux de support et résistance fonctionnent comme des zones d'intérêt. Le prix a tendance à rebondir sur S1 et R1. Si S1 est cassé, le prix peut aller vers S2. Si R1 est cassé, le prix peut continuer vers R2.

Les signaux de trading viennent du comportement du prix autour des pivot points. Un test du pivot central suivi d'un rebond crée une opportunité d'achat avec stop sous le support. Un breakout au-dessus du pivot avec consolidation peut être un signal d'achat.

La cassure (breakout) des niveaux R1 ou S1 génère des signaux forts. Si le prix casse au-dessus de R1 avec volume, c'est un signal haussier. Si le prix casse en dessous de S1, c'est un signal baissier.

Le [[backtesting]] des pivot points en crypto montre qu'ils fonctionnent mieux sur les timeframes courts (15min, 1h, 4h). Les niveaux journaliers sont les plus fiables, hebdomadaires moins utilisés, mensuels trop larges pour le trading crypto.

## Nuances, critiques, limites

Les pivot points sont spécifiques au timeframe. Les pivot points journaliers ne sont pas valides pour un trade de plusieurs jours. Un trade basé sur R1 journalier mais qui dure une semaine ignore le fait que les niveaux changent chaque jour.

Le calcul standard ignore le gap (écart entre la clôture précédente et l'ouverture actuelle). En crypto 24h/24, il n'y a pas de gap au quotidien mais des gaps de week-end si le marché est fermé (pas applicable ici) ou des gaps après des news majeures.

Les niveaux sont statiques jusqu'à la prochaine période. Le prix peut traverser tous les niveaux (S1, S2, S3 ou R1, R2, R3) sans rebond significatif si le momentum est fort. Les niveaux de support divent deviennent résistance.

Le [[risk-reward ratio]] dépend de où le stop est placé. Un trade à R1 avec stop sous S1 peut avoir un bon RRR mais les niveaux peuvent être trop serrés (faible ATR) ou trop larges.

## Liens et implications

Les support et résistance formés par les pivot points se combinent avec d'autres formes d'analyse technique.

Les niveaux de prix des pivot points sont objectifs et calculables par un bot. Une stratégie algo peut acheter automatiquement quand le prix rebondit sur S1 avec confirmation du RSI en zone survendue.

L'[[analyse technique pour bots]] intègre les pivot points comme outil de base au même titre que les moyennes mobiles et les indicateurs de momentum.

## Sources