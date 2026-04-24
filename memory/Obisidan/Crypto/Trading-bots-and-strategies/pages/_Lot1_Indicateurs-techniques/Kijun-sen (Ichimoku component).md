---
titre: "Kijun-sen (Ichimoku component)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/ichimoku, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Ichimoku Cloud]]", "[[Tenkan-sen (Ichimoku component)]]", "[[Senkou Span (Ichimoku component)]]", "[[Chikou Span (Ichimoku component)]]"]
liens_opposition: []
---

# Kijun-sen (Ichimoku component)

> [!info] Résumé
> Le Kijun-sen (Base Line) est une ligne de l'Ichimoku Cloud calculée comme la moyenne du plus haut et du plus bas des 26 dernières périodes. Il représente le support/résistance à moyen terme et est utilisé comme référence pour le Tenkan-sen.

## Définition

Le Kijun-sen (signifiant "ligne de base" en japonais) est l'une des cinq lignes du système Ichimoku Cloud. Il est calculé comme : Kijun-sen = (Plus haut des 26 périodes + Plus bas des 26 périodes) / 2.

Le Kijun-sen est analogues à une moyenne mobile de 26 périodes mais utilise le midpoint du range (high+low)/2 au lieu du prix de clôture. Il représente le midpoint du range sur une période plus longue que le Tenkan-sen.

Le Kijun-sen est traditionnellement affiché en bleu sur les graphiques Ichimoku. Il sert de ligne de base pour les croisements avec le Tenkan-sen et comme niveau de support/résistance.

## Contexte et origine

Le Kijun-sen fait partie du système Ichimoku Cloud développé par Goichi Hosoda dans les années 1960. Le paramètrage de 26 périodes correspond à environ un mois de trading sur les marchés japonais originaux (qui étaient fermés le samedi).

Le Kijun-sen représente le "compromis" entre le court terme (Tenkan-sen) et le long terme (Senkou Span). Il donne une vue du momentum moyen terme.

Dans le système Ichimoku original, le Kijun-sen est utilisé comme ligne de référence pour le Chikou Span. Le Chikou Span (prix actuel projeté 26 périodes en arrière) devrait être au-dessus du Kijun-sen en tendance haussière pour confirmer.

## Mécanismes et caractéristiques

Le Kijun-sen comme support/résistance : en tendance haussière, le prix a tendance à rebondir sur le Kijun-sen comme support. En tendance baissière, il agit comme résistance. Plus le prix test le Kijun-sen sans le traverser, plus il devient un niveau fort.

Le croisement Tenkan/Kijun-sen (TK Cross) utilise le Kijun-sen comme reference. Un Tenkan-sen qui croise au-dessus du Kijun-sen (Golden Cross) est un signal haussier plus fort si le croisement se produit au-dessus du nuage.

Le Kijun-sen comme stop loss dynamique : certains traders placent leur stop loss juste en dessous du Kijun-sen quand ils sont en position longue. Si le prix passe en dessous du Kijun-sen, la tendance peut être en train de s'inverser.

La relation Chikou/Kijun-sen : le Chikou Span devrait être au-dessus du Kijun-sen en tendance haussière confirmée. Si le Chikou Span est en dessous du Kijun-sen, la tendance haussière est affaiblie ou invalide.

## Nuances, critiques, limites

Le Kijun-sen est un indicateur retardataire strict. Il utilise les 26 dernières périodes pour calculer le midpoint, donc il ne peut pas prédire les retournements mais les confirmer après qu'ils se produisent.

Le paramètrage de 26 périodes (un mois sur les marchés originaux) peut ne pas être optimal pour le crypto 24h/24. Des ajustements selon le timeframe sont nécessaires. Pour du trading intraday, 9 ou 12 périodes peuvent être plus appropriées.

En marché range, le Kijun-sen est horizontal et le prix le traverse fréquemment. Cela rend le Kijun-sen moins fiable comme support/résistance en l'absence de tendance.

Le Kijun-sen alone (sans le reste de l'Ichimoku) peut être utilisé comme niveau de support/résistance horizontal mais perd la richesse du système complet.

## Liens et implications

Le Kijun-sen et le [[Tenkan-sen]] forment le TK Cross, un signal de trading de l'Ichimoku. Le Kijun-sen est la ligne la plus lente des deux, représentant le moyen terme contre le court terme.

L'[[Ichimoku Cloud]] dans son ensemble utilise le Kijun-sen comme une des cinq lignes. Le Kijun-sen alone est incomplet sans le contexte du [[Senkou Span]] (nuage) et du [[Chikou Span]].

La tendance est confirmée par le Kijun-sen.

## Sources