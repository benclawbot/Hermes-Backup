---
titre: "Position sizing"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/sizing, #méthode/risk, #concept/capital]
créé: 2026-04-20
liens_forts: ["[[Kelly Criterion]]", "[[Gestion du risque]]", "[[Drawdown]]"]
liens_opposition: []
---

# Position sizing

> [!info] Résumé
> Le position sizing détermine combien de capital allouer par trade. Méthodes incluent le fixed fractional, le Kelly Criterion, et le sizing basé sur la volatilité. Des positions mal dimensionnées sont la cause primaire des blow-ups en trading.

## Définition

Le position sizing est le processus de décider quelle portion du capital total risked par trade. C'est l'un des aspects les plus importants du trading et celui qui a le plus grand impact sur le risque et le rendement à long terme.

Le position sizing transforme une stratégie avec un edge positif en un système de trading rentable. Une bonne stratégie avec un mauvais sizing peut perdre de l'argent. Une stratégie mediocre avec un excellent sizing peut être profitable.

Les principales méthodes de dimensionnement sont : le fixed fractional (risquer X% du capital), le fixed amount (risquer le même montant en euros), le Kelly Criterion (formule mathématique), et le volatility-based sizing (ajuster selon la volatilité).

## Contexte et origine

Le concept de position sizing tel qu'il est compris aujourd'hui a émergé dans les années 1950-60 avec les travaux de Ralph Vince (formules de gestion du capital) et les travaux de John Kelly (formule de Kelly).

Les traders professionnels et hedge funds utilisent des systèmes de dimensionnement sophistiqués basados sur la volatilité et le risque de drawdown. Les règles sont rarement changées et sont appliquées religieusement.

En crypto retail, le position sizing est souvent négligé au profit de stratégies "gagneuses". Les débutants tradent souvent avec des positions trop grandes (sur-leveraging) ce qui mène à des blow-ups rapides. L'éducation au sizing est un thérapeut IMPORTANT pour les traders novices.

## Mécanismes et caractéristiques

Le fixed fractional risque un pourcentage fixe du capital sur chaque trade. Si le capital est 10 000€ et le risque est 2%, alors chaque trade risque 200€. Si le stop-loss est à 5%, la position est de 4000€. Si le capital passe à 9000€, le risque de 2% est 180€ et la position de 3600€.

Le Kelly Criterion utilise une formule : f* = (bp - q) / b où b est la cote de gain, p est la probabilité de gain, et q est la probabilité de perte. Le résultat est le pourcentage du capital à risquer. Le Kelly "complet" peut être trop agressif, le "Half Kelly" est souvent utilisé.

Le volatility-based sizing ajuste la taille de position selon la volatilité recente de l'asset. Si l'asset a une volatilité haute, la position est plus petite pour risquer le même montant. Par exemple, si Bitcoin a une volatilité de 5% et Ethereum de 10%, une position Ethereum sera deux fois plus petite pour le même risque en euros.

Le dimensionnement par Unité de risque multiples : chaque trade risque X unités (ex: 100€), avec un stop à Y pips. La taille de position est calculée pour que le stop-loss corresponde exactement à X€ de perte. Cette méthode normalise le risque entre tous les trades.

## Nuances, critiques, limites

Le surdimensionnement est la cause principale des blow-ups. Un trader avec 10 000€ qui risque 20% par trade peut perdre la majorité de son capital en quelques trades succesifs. La règle de 2% (ne pas risquer plus de 2% du capital par trade) est conservative mais preserve le capital.

Le Kelly Criterion complet peut être trop agressif. Avec un win rate de 50% et un reward-to-risk de 2:1, le Kelly suggère de risquer 25% du capital par trade. Beaucoup de traders préfèrent le "Half Kelly" (12.5%) pour réduire la volatilité.

Le position sizing doit essere basé sur le capital actuel, pas sur le capital initial. Si le capital chute de 50%, le sizing doit réduire proportionnellement. Beaucoup de traders continuent avec la même taille de position après un drawdown, aggravant les pertes.

Le sizing basé sur la volatilité suppose que la volatilité passée est indicative de la volatilité future. En période de crise (flash crash), la volatilité peut être 5-10x la volatilité normale, et les positions qui semblaient "sûres" deviennent soudain très risquées.

## Liens et implications

Le [[position sizing]] implémente les règles de la [[gestion du risque]]. Le [[Kelly Criterion]] est une méthode mathématique de sizing, tandis que le fixed fractional est plus simple mais moins optimal.

Le [[drawdown]] est directement impacté par le position sizing. Un sizing trop agressif cause des drawdowns extremes et potentially un blow-up complet du capital.

Le [[backtesting]] doit inclure le position sizing pour être réaliste. Un backtest sans sizing correct surestime les rendements. Le [[forward testing]] permet de valider le sizing en conditions réelles.

## Sources

[^1]: Vince, "The Mathematics of Money Management", Wiley (1992)
[^2]: Kelly, "A New Interpretation of Information Rate", Bell System Technical Journal (1956)