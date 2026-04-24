---
titre: "Correlation trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/correlation, #concept/multi-assets, #concept/beta]
créé: 2026-04-21
liens_forts: ["[[Pairs trading]]", "[[Diversification]]", "[[Correlation matrix]]"]
liens_opposition: []
---

# Correlation trading

> [!info] Résumé
> La correlation trading exploite les relations statistiques entre actifs. Les traders suivent les changements de corrélation pour anticiper les mouvements de prix relatifs et construire des portfolios qui profitent de ces dynamics.

## Définition

La correlation trading est une stratégie qui trades basée sur les changements de corrélation entre actifs. La corrélation mesure à quel point deux actifs se déplacent dans la même direction. Une corrélation de +1 signifie qu'ils se déplacent parfaitement ensemble, une corrélation de -1 signifie qu'ils se déplacent en opposition parfaite.

En pratique, les corrélations ne sont pas stables. Elles changent avec les conditions de marché, le sentiment des investisseurs, et d'autres facteurs. La correlation trading essaie de profit de ces changements.

Une approche courante est d'identifier les actifs avec une forte corrélation historique qui commence à se dégrader. Si ETH et BTC ont eu une corrélation de 0,9 mais qu'elle tombe à 0,5, le trader peut jouer cette divergence en bought l'un et short l'autre.

Une autre approche est d'utiliser la corrélation pour hedger le risque. Une position longue sur un actif très corrélé avec le marché peut être hedgée par une position courte sur un future ou un ETF qui replicates le marché.

## Contexte et origine

L'étude de la corrélation entre actifs est fondamentale en finance depuis les travaux de Markowitz sur la théorie moderne du portfolio dans les années 1950. La diversification repose sur l'utilisation de correlations pour réduire le risque.

Les stratégies de correlation trading ont été formalisées dans les années 1990 avec l'avènement des produits dérivés et des hedge funds qui exploitaient les anomalies de correlation.

En crypto, l'étude de la correlation entre tokens est devenue populaire depuis 2020, quand les correlations entre BTC, ETH, et les altcoins se sont avérées très changeantes.

## Mécanismes et caractéristiques

Le calcul de la corrélation se fait sur des fenêtres glissantes de données de prix. Les coefficients de corrélation varient de -1 à +1, avec 0 indiquant aucune relation linéaire.

La [[correlation matrix]] est un outil qui affiche les corrélations entre plusieurs actifs simultanément. Elle révèle les groupes d'actifs fortement corrélés et ceux qui sont indépendantes.

Le trading de corrélation utilise souvent des positions à long terme sur la valeur relative de deux ou plusieurs actifs. Le ratio de la valeur de deux actifs peut être tradé directement.

Les stratégies utilisent aussi le concept de "correlation breakdown" où des actifs traditionnellement indépendants commencent à se déplacer ensemble, souvent en période de crise.

## Nuances, critiques, limites

La corrélation n'implique pas la causalité. Deux actifs peuvent être corrélés sans qu'il y ait une relation directe entre eux. Les spurious correlations peuvent disparaître soudainement.

Le changement de corrélation est difficile à prédire. Les périodes de "flight to quality" ou de crise peuvent faire augmenter les corrélations entre actifs risqués, invalidant les stratégies qui tablaient sur des corrélations basses.

La crypto présente des corrélations particulièrement instables. Les altcoins ont tendance à covarier avec BTC pendant les périodes de miedo, mais à diverger pendant les periods de altseason.

## Liens et implications

La [[correlation trading]] est liée au [[pairs trading]] mais plus large dans son approche. La [[diversification]] dépend des corrélations entre actifs pour réduire le risque de portfolio.

La [[correlation matrix]] est un outil essentiel pour visualiser et trader les correlations. Le [[correlation risk]] est le risque que les corrélations changent de manière inattendue.

Le [[backtesting]] sur des données historiques doit prendre en compte l'instabilité des corrélations. Le [[Sharpe ratio]] ajusté au risque de corrélation peut être utilisé.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Ang, "Portfolio Management", 2014
[^2]: Empirica, "Correlation Trading Strategies", https://www.empirica.io (consulted 2026)
