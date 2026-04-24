---
titre: "Parabolic SAR"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/tendance, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[ATR (Average True Range)]]", "[[Gestion du risque]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# Parabolic SAR

> [!info] Résumé
> Le Parabolic SAR (Stop and Reverse) est un indicateur de tendance créé par J. Welles Wilder qui génère des points d'achat et de vente décalés dans le temps selon la direction du prix. Il fonctionne comme un trailing stop et peut servir de signal de sortie.

## Définition

Le Parabolic SAR (Stop and Reverse) a été créé par J. Welles Wilder (le même auteur de l'ATR, du RSI, et de l'ADX).

Le SAR signifie "Stop and Reverse". Quand le prix est en tendance haussière, le SAR est un stop loss qui monte avec le prix. Quand le prix passe en dessous du SAR, c'est un signal de vente ET un potentiel achat à découvert (reverse).

La formule du SAR : SAR = SAR précédent + AF × (EP - SAR précédent), où EP (Extreme Point) est le plus haut en tendance haussière ou le plus bas en tendance baissière, et AF (Acceleration Factor) est un coefficient qui augmente à chaque new EP.

La valeur initiale de l'AF est 0.02 et augmente de 0.02 à chaque nouvel EP, jusqu'à un maximum de 0.20 (ou 0.21 selon les implémentations). Cela fait que le SAR "accélère" vers le prix quand la tendance s'accélère.

## Contexte et origine

Wilder a conçu le Parabolic SAR pour résoudre deux problèmes du trading : le délai des indicateurs de tendance et la détermination du stop loss. Le Parabolic SAR fournit un stop loss dynamique qui suit le prix.

Le nom "Parabolic" vient de la forme de la courbe duindicateur quand elle est tracée sur un graphique avec le prix. Le SAR forme une courbe parabolique descendant ou montant vers le prix.

Wilder considérait le Parabolic SAR comme son indicateur le plus puissant pour capturer les tendances.

## Mécanismes et caractéristiques

En tendance haussière, le SAR est en dessous du prix. Le trader maintient une position longue. Le SAR monte chaque jour selon la formule. Si le prix passe en dessous du SAR, la position est fermée et un trade short est ouvert (reverse).

En tendance baissière, le SAR est au-dessus du prix. Le trader maintient une position courte. Le SAR descend selon la formule. Si le prix passe au-dessus du SAR, le short est fermé et un trade long peut être ouvert.

L'AF (Acceleration Factor) contrôle la sensibilité du SAR. Un AF initial de 0.02 est relativement lent. Un AF de 0.05 rend le SAR plus rapide à suivre le prix, mais peut causer plus de faux signaux.

Le pas (step) de l'AF est ajusté par certains traders. Un pas de 0.01 donne un SAR plus lisse. Un pas de 0.03 donne un SAR plus réactif. Le choix dépend du timeframe et de la volatilité.

## Nuances, critiques, limites

Le Parabolic SAR fonctionne mal en marché latéral. Le prix qui oscille cause le SAR à constamment changer de côté, générant des faux signaux. Un filtre (ADX > 25 ou prix au-dessus/en dessous de la moyenne mobile) est nécessaire.

Le SAR "accélère" vers le prix. En fin de tendance, le SAR peut rattraper le prix très vite, causant une sortie premature si le mouvement a été fort et rapide.

Le paramètrage (AF initial et max) doit être ajusté selon l'actif et le timeframe. Pour le [[trading bot]] crypto sur timeframes courts (1h, 4h), un AF max de 0.21 ou 0.22 peut être trop rapide.

Le [[backtesting]] du Parabolic SAR montre qu'il est plus utile comme outil de gestion du stop loss que comme générateur de signaux. Utiliser le SAR pour gérer les stops plutôt que pour entrer en position peut améliorer les résultats.

## Liens et implications

Le [[stop loss]] basé sur le Parabolic SAR est une application directe. Le SAR fournit un stop dynamique qui monte/descend avec le prix, permettant de verrouiller les profits tout en laissant respirer la position.

La gestion du risque intègre le Parabolic SAR comme stop de sortie.

La tendance est le concept clé du Parabolic SAR.

## Sources