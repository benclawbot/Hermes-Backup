---
titre: "Volatility-adjusted position sizing"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/position, #méthode/volatilité, #concept/sizing]
créé: 2026-04-21
liens_forts: ["[[Volatility scaling]]", "[[Position sizing]]", "[[Annualized volatility]]", "[[Fixed fractional position sizing]]", "[[Sharpe ratio]]"]
liens_opposition: []
---

# Volatility-adjusted position sizing

> [!info] Résumé
> Le volatility-adjusted position sizing ajuste la taille des positions en fonction de la volatilité recente de l'actif. Cette méthode maintient un risque constant en euros en diminuant l'exposition quand la volatilité augmente et vice versa.

## Définition

Le volatility-adjusted position sizing est une méthode qui dimensionne les positions en fonction de la volatilité récente de l'actif traded. L'objectif est de maintenir un risque constant en euros plutôt qu'une taille constante en euros.

La formule de base est : Taille de position = Capital × K / Volatilité récente. où K est une constante qui détermine le niveau de risque global. Plus K est grand, plus le risque est grand.

Cette approche diffère du[[Fixed fractional position sizing]] qui utilise un pourcentage fixe du capital. Avec le FFF, une position de 5% sur un actif volatil peut être équivalente en risque à une position de 15% sur un actif stable.

La volatilité utilisée est généralement l'[[Annualized volatility]] calculée sur 20 à 60 jours. Some traders utilisent l'ATR (Average True Range) comme proxy plus réactive à la volatilité récente.

En ajustant la taille selon la volatilité, on obtient des rendements plus stables et un[[Sharpe ratio]] plus constant. Les périodes de haute volatilité (qui sont aussi les périodes les plus risquées) voient automatiquement une réduction de l'exposition.

## Contexte et origine

Le volatility-adjusted sizing est né de l'observation que la volatilité des marchés nest pas stable. Les stratégies avec des positions fixes subissent plus de risque en période de haute volatilité simplement à cause de cette volatilité accrue.

L'approche a été formalisée dans le cadre du "volatility targeting" utilisé par les grands fonds. L'idée de maintenir une volatilité cible (target vol) guide l'allocation du risque.

Les[[trading bot]]s modernes intègrent généralement une forme de volatility-adjusted sizing. Many plateformes de trading algorithmique offrent cette fonctionnalité nativement.

Le concept est étroitement lié au "Risk Parity" et au "[[Volatility scaling]]" qui sont des implémentations spécifiques de cette idée.

## Mécanismes et caractéristiques

Le calcul de la volatilité peut se faire de plusieurs manières :
- Écart-type des rendements logarithmiques sur N jours
- ATR (Average True Range) annualisé
- Modèle GARCH pour la volatilité variable

Une fois la volatilité calculée, on la compare à une cible (target vol). Le ratio cible/réelle détermine le multiplicateur de position. Si la cible est 20% et la courante est 40%, le multiplicateur est 0.5 (moitié de la position normale).

Le[[Position sizing]] final est : Position = Capital × Multiplicateur. Si le multiplicateur est 0.5, on prend la moitié de la position qu'on prendrait avec la volatilité normale.

Cette approche peut sembler contr-intuitive : réduire la position quand le marché est plus volatil. Mais c'est précisément en période de haute volatilité que les pertes potentielles sont les plus grandes. L'ajustement protège le capital. L'idée fondamentale est que le risque en euros doit rester constant, pas la taille de la position. En période de forte volatilité, les mêmes mouvements de prix causent des pertes plus importantes en euros, donc il faut réduire la taille pour compenser. Cette discipline permet de traverser les périodes de stress sans subir des drawdowns disproportionnés. many traders struggle with this approach because it feels like leaving money on the table during volatile periods, but the mathematical justification is clear.

## Nuances, critiques, limites

Le volatility-adjusted sizing suppose que la volatilité passée prédict la volatilité future, ce qui nest pas toujours vrai. En période de transition de régime, cette hypothèse peut échouer.

La fenêtre de calcul de la volatilité affecte la réactivité. Une fenêtre courte (10 jours) réagit vite mais peut être noise. Une fenêtre longue (60 jours) est plus stable mais slower à s'adapter aux changements.

Le sizing peut devenir très petit en période de volatilité extrême. Si la volatilité quadruple, la position est réduite à un quart. Certains traders considerent cela trop prudent et définissent une taille minimum.

La constante K (qui détermine le risque global) doit être choisie soigneusement. Une constante trop haute donne une volatilité effective supérieure à la cible. Une constante trop basse limite les rendements.

## Liens et implications

Le[[Volatility-adjusted position sizing]] est une application du[[Volatility scaling]]. Les deux termes décrivent la même approche avec des nuances légèrement différentes.

L'[[Annualized volatility]] est linput principal de cette méthode. Without an accurate volatility measurement, the sizing won't be correct.

Le[[Position sizing]] global doit être cohérent avec le niveau de risque cible. Le volatility-adjusted sizing est une façon dy parvenir.

Le[[Sharpe ratio]] tends to be more stable with this approach because the risk is constant in euro terms.

## Sources

[^1]: Bernstein, "The New Finance", Holt (1994)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
