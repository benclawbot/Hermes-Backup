---
titre: "Calmar ratio"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Sortino ratio]]", "[[Max drawdown duration]]", "[[Drawdown]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# Calmar ratio

> [!info] Résumé
> Le Calmar ratio compare le rendement annualisé au max drawdown maximal. Il mesure combien de rendement une stratégie génère par unité de risque de drawdown extrême, particulièrement pertinent pour les marchés crypto volatils.

## Définition

Le Calmar ratio, aussi connu sous le nom de Drawdown Ratio, est calculé en divisant le rendement annualisé d'une stratégie par son max drawdown en valeur absolue. Créé par Terry W. Young en 1991, ce ratio est devenu une métrique standard pour évaluer les stratégies de trading et les fonds spéculatifs.

Un Calmar ratio de 1.0 signifie que le rendement annualisé égal le max drawdown. Une stratégie avec 30% de rendement annualisé et 15% de max drawdown a un Calmar de 2.0, ce qui est considéré très bon. Un ratio de 0.5 ou moins indique une stratégie où le risque de drawdown dépasse le rendement.

L'avantage du Calmar ratio sur le Sharpe ratio pour le trading crypto est qu'il utilise le max drawdown comme mesure de risque, qui est plus intuitif et plus sévère. Là où le Sharpe ratio capture la volatilité régulière, le Calmar ratio pénalise particulièrement les événements de drawdown extrême qui sont fréquents en crypto.

## Contexte et origine

Terry W. Young, analyste financier, a développé le Calmar ratio pour le magazine "Futures" en 1991. L'objectif était de créer une métrique plus pertinente pour les traders que le Sharpe ratio, qui ne reflétait pas adéquatement le risque de pertes extrêmes.

Le ratio est particulièrement populaire dans l'évaluation des [[trading bot]]s CTA (Commodity Trading Advisors) et des fonds spéculatifs. Les gestionnaires de fonds reportent souvent le Calmar ratio dans leurs rapports trimestriels aux investisseurs.

En trading algorithmique crypto, le Calmar ratio est considéré plus approprié que le Sharpe ratio car les crypto-actifs connaissent des cycles de drawdown importants. Un bot qui génère 100% de rendement annuel mais endure un drawdown de 60% pendant un crash aura un Calmar de 1.67, ce qui est attractif sur le papier mais représente un risque significatif pour l'investisseur.

## Mécanismes et caractéristiques

Le calcul requiert deux métriques : le rendement annualisé (qui peut être calculé sur différentes périodes) et le max drawdown (qui est mesuré sur toute l'historique disponible). Le ratio est généralement calculé sur une fenêtre mobile de 12 ou 36 mois pour être plus actuelle.

Un Calmar ratio de 3.0 ou plus est généralement considéré comme excellent. Les stratégies avec des Calmar ratios soutenus au-dessus de 2.0 sont rares et recherchées. Cependant, il ne faut pas comparer des stratégies avec des horizons temporels différents.

Le ratio est particulièrement utile pour les stratégies de mean reversion qui connaissent des drawdowns ponctuels mais importants. Une stratégie de [[Grid trading]] par exemple peut avoir un rendement annualisé modeste mais un max drawdown contrôlable, menant à un bon Calmar ratio.

Les traders utilisent souvent le Calmar ratio comme critère de sélection principal lors du [[backtesting]]. Une stratégie doit atteindre un seuil de Calmar avant d'être considérée pour le [[forward testing]] ou le déploiement en production.

## Nuances, critiques, limites

Le Calmar ratio est très sensitif au max drawdown, qui est une mesure extrême. Si une stratégie a un max drawdown atypiquement élevé (sur un seul événement), le ratio peut chuter même si le rendement global est bon.

Le ratio ne capture pas la fréquence des drawdowns. Une stratégie avec plusieurs petits drawdowns et une stratégie avec un seul gros drawdown peuvent avoir le même max drawdown mais des profils de risque très différents.

Le Calmar ratio calculé sur différentes périodes (12 mois vs 36 mois) peut donner des résultats très différents. Une stratégie peut avoir un excellent Calmar sur 12 mois mais un mauvais Calmar sur 36 mois si les conditions changent.

Le ratio ne tient pas compte de la volatilité des rendements entre les drawdowns. Une stratégie avec des rendements constants et une stratégie avec des rendements erratiques peuvent avoir le même Calmar ratio mais des expériences investisseur très différentes. Pour avoir une vision complète, il est recommandé de combiner le Calmar ratio avec d'autres métriques comme le Sharpe ratio ou le Sortino ratio.

## Liens et implications

Le Calmar ratio est étroitement lié au [[Sharpe ratio]] et au [[Sortino ratio]] qui mesurent le risque différemment. Le Calmar se concentre sur le drawdown tandis que le Sharpe penalise toute volatilité et le Sortino ne penalise que la volatilité négative.

Le [[Drawdown]] et le [[Max drawdown duration]] sont les composants directs du ratio. Comprendre le drawdown recovery time est également important pour évaluer une stratégie au-delà du simple max drawdown.

La [[Gestion du risque]] efficace implique de définir des seuils de Calmar ratio pour le démarrage et l'arrêt des stratégies. Beaucoup de bots stoppent automatiquement si le Calmar tombe en dessous d'un seuil prédéfini.

## Sources

[^1]: Young, "Calmar Ratio", Futures Magazine (1991)
[^2]: Investopedia, "Calmar Ratio Definition", https://www.investopedia.com/terms/c/calmar-ratio.asp (consulted 2026)
