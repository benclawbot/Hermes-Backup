---
titre: "Fixed fractional position sizing"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#méthode/position, #méthode/sizing, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Position sizing]]", "[[Kelly criterion practical limits]]", "[[Volatility scaling]]", "[[Gestion du risque]]", "[[Trade expectancy]]"]
liens_opposition: []
---

# Fixed fractional position sizing

> [!info] Résumé
> Le Fixed Fractional position sizing (FFF) consiste à risquer un pourcentage fixe du capital sur chaque trade. Cette méthode simple et robuste est le fondement de nombreuses règles de gestion du risque comme la règle du 2%.

## Définition

Le Fixed Fractional position sizing (FFF), aussi appelé "fixed percentage" ou "percentage risk", est la méthode la plus simple de dimensionnement des positions. L'idée est de risquer le même pourcentage du capital sur chaque trade, indépendamment des résultats passés.

La formule est simple : Taille de position = (Capital × Percentage risque) / Distance au stop-loss. Si le capital est 10 000€, le risque est 2%, et la distance au stop est 5%, alors la taille de position est 200€ / 5% = 4 000€.

Cette méthode contraste avec le "fixed lot" où la taille est constante en euros. Avec le fixed lot, quand le capital diminue après des pertes, la même taille représente un pourcentage plus grand du capital, augmentant le risque. Le FFF corrige cela.

La règle du 2% mentionnée dans la[[Gestion du risque]] est une forme de FFF. Elle suggère de ne pas risquer plus de 2% du capital sur un seul trade pour préserver le capital en cas de série de pertes.

Le FFF est particulièrement pertinent pour les[[trading bot]]s car il est facile à implémenter et génère automatiquement des positions plus petites après un drawdown, protégeant le capital restant.

## Contexte et origine

Le Fixed Fractional a été formalisé par Ralph Vince dans ses travaux sur le position sizing dans les années 1990. Il a montré que le FFF était plus robuste que le fixed lot pour maintenir le risque constant.

La règle du 2% vient de la tradition du trading et a été popularisée par Van Tharp. Elle représente un equilibre entre risque et opportunité. Risquer 2% par trade permet de survivre à une longue série de pertes (comme on le verra).

Le FFF a été utilisé très largement par les traders professionnels et les fonds. La simplicité de limplémentation et la robustesse du risque en font une méthode de choix pour les[[trading bot]]s.

Le Fixed Fractional est le point de départ pour dautres méthodes plus sophistiquées comme le Kelly Criterion. Beaucoup de traders commencent avec le FFF et passent à des méthodes plus complexes quand ils ont plus de données.

## Mécanismes et caractéristiques

Le FFF fonctionne en bouclant : après chaque trade, le capital est mis à jour, et la taille du prochain trade est calculée sur la base du nouveau capital. Cela crée une forme de "martingale inverse" où les pertes diminuent automatiquement la taille des positions.

Le nombre de trades nécessaires pour perdre X% du capital avec le FFF dépend du pourcentage risqué par trade et du[[Risk-reward ratio]]. Avec 2% de risque par trade et un RRR de 1:1, il faut beaucoup de pertes consécutives pour perdre 50% du capital.

La formule de "nombre de pertes consécutives pour perdre P% du capital" est approximativement : N = log(1 - P) / log(1 - f) où f est le pourcentage risqué par trade. Pour P = 50% et f = 2%, N ≈ 35 trades.

Le[[Position sizing]] en FFF peut être combiné avec le[[Volatility scaling]]. Au lieu d'un pourcentage fixe, on peut avoir un pourcentage qui varie selon la volatilité tout en restant dans des limites prédéfinies.

## Nuances, critiques, limites

Le FFF est simple mais peut être sous-optimal pour certaines stratégies. Une stratégie avec une expectancy très élevée pourrait bénéficier dun sizing plus agressif selon le Kelly Criterion.

Le FFF réduit automatiquement l'exposition après un drawdown, ce qui est protecteur mais peut aussi ralentir la récupération. Une série de pertes réduit d'abord la taille, puis les gains sontniejs plus petits.

Le choix du pourcentage est crucial. Avec 2%, on est relativement conservateur. Avec 5-10%, on prend plus de risque. Avec 20% ou plus, le risque de blow-up augmente significativement même si la logique du FFF reste.

Le FFF ne tient pas compte de la[[Trade expectancy]] de la stratégie. Une stratégie avec 50% de win rate et RRR de 1:1 peut supporter un pourcentage plus élevé qu'une stratégie avec 30% de win rate et RRR de 2:1.

## Liens et implications

Le[[Fixed fractional position sizing]] est une forme de[[Position sizing]] qui assure un risque constant en pourcentage du capital. C'est la méthode la plus fondamentale et la plus utilisée.

Le[[Kelly criterion practical limits]] peut être vu comme une amélioration du FFF. Si le Kelly suggère 20% et le FFF utilise 2%, le Kelly est 10× plus agressif. Ces deux méthodes peuvent être combinées (Kelly fractionné).

La[[Gestion du risque]] recommande le FFF comme méthode de base. La règle du 2% est un point de départ conservative qui peut être ajusté selon le profil de risque et les résultats.

La[[Trade expectancy]] doit être surveillée pour sassurer que le pourcentage risque choisi est approprié. Un déclin de l'expectance peut nécessiter une réduction du pourcentage risqué.

## Sources

[^1]: Vince, "The Mathematics of Money Management", Wiley (1992)
[^2]: Tharp, "Trade Your Way to Financial Freedom", McGraw-Hill (1999)
