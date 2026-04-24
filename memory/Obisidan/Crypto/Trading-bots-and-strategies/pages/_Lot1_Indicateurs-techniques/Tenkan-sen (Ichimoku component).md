---
titre: "Tenkan-sen (Ichimoku component)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/ichimoku, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Ichimoku Cloud]]", "[[Kijun-sen (Ichimoku component)]]", "[[Senkou Span (Ichimoku component)]]", "[[Chikou Span (Ichimoku component)]]", "[[Stratégie de momentum]]"]
liens_opposition: []
---

# Tenkan-sen (Ichimoku component)

> [!info] Résumé
> Le Tenkan-sen (Conversion Line) est une ligne de l'Ichimoku Cloud calculée comme la moyenne du plus haut et du plus bas des 9 dernières périodes. Il représente le support/résistance à court terme et agit comme signal de croisement avec le Kijun-sen.

## Définition

Le Tenkan-sen (signifiant "ligne de conversion" en japonais) est l'une des cinq lignes du système Ichimoku Cloud. Il est calculé comme : Tenkan-sen = (Plus haut des 9 périodes + Plus bas des 9 périodes) / 2.

Le Tenkan-sen est analogues à une moyenne mobile très courte (9 périodes) mais au lieu d'utiliser les prix de clôture, il utilise le midpoint du range (high+low)/2. Cela le rend plus réactif aux mouvements intra-période.

Le Tenkan-sen est affiché comme une ligne, traditionnellement en rouge sur les graphiques Ichimoku. Il cross le Kijun-sen (ligne de base) pour générer des signaux de trading.

## Contexte et origine

Le Tenkan-sen fait partie du système Ichimoku Cloud développé par Goichi Hosoda dans les années 1960 au Japon. Le système a été conçu pour donner aux traders une vue d'ensemble de la tendance, du momentum, et des niveaux de support/résistance sans avoir besoin d'indicateurs supplémentaires.

Le paramètrage de 9 périodes pour le Tenkan-sen représente la période courte par défaut dans l'Ichimoku. Combined avec le Kijun-sen (26 périodes), ils forment un système de croisement à deux lignes.

En dehors du contexte de l'Ichimoku Cloud, le Tenkan-sen est rarement utilisé seul. Il fait partie intégrante du système et doit être lu en conjunction avec le Kijun-sen, le nuage, et le Chikou Span.

## Mécanismes et caractéristiques

Le Tenkan-sen comme support/résistance : en tendance haussière, le Tenkan-sen agit comme un support dynamique. Le prix a tendance à rebondir sur le Tenkan-sen en tendance haussière. En tendance baissière, il agit comme résistance.

Le croisement Tenkan/Kijun (TK Cross) est le signal principal de l'Ichimoku. Un Tenkan-sen qui croise au-dessus du Kijun-sen est un signal haussier (Golden Cross). Un croisement en dessous est baissier (Dead Cross).

La pente du Tenkan-sen indique le momentum court terme. Un Tenkan-sen qui monte rapidement indique un momentum haussier fort. Un Tenkan-sen qui descend indique un momentum baissier fort.

L'angle du Tenkan-sen est important. Un Tenkan-sen horizontal (peu de changement entre le plus haut et le plus bas sur 9 périodes) indique une consolidation. Un Tenkan-sen avec une forte pente indique un mouvement directionnel.

## Nuances, critiques, limites

Le Tenkan-sen est un indicateur retardataire car il utilise le range des 9 dernières périodes. Il ne prédit pas le futur mais confirme les changements de momentum qui se sont déjà produits.

Le Tenkan-sen seul (sans le contexte de l'Ichimoku) peut être comparé à une moyenne mobile courte, mais avec une formulation différente (midpoint du range vs clôture). Son utilisation isolée est rare.

En marché range (latéral), le Tenkan-sen et le Kijun-sen se croisent fréquemment, générant de faux signaux. Le système Ichimoku complet utilise le nuage (Senkou Span) pour filtrer ces signaux.

Le Tenkan-sen doit être ajusté pour le marché crypto 24h/24. Le paramètrage standard (9 périodes) peut être adapté selon le timeframe utilisé. Pour du trading intraday, des périodes plus courtes peuvent être nécessaires.

## Liens et implications

Le Tenkan-sen et le [[Kijun-sen]] forment ensemble le système de croisement de l'Ichimoku. Le TK Cross est un signal de trading. La relation entre les deux lignes (Tenkan > Kijun ou inverse) indique la tendance court terme.

L'[[Ichimoku Cloud]] intègre le Tenkan-sen avec le [[Senkou Span]] et le [[Chikou Span]] pour donner une image complète. Le Tenkan-sen seul est incomplet sans le contexte du reste du système.

Le momentum court terme est mesuré par le Tenkan-sen.

## Sources