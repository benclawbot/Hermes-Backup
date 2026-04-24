---
titre: "Diversification"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 2
tags: [#concept/diversification, #concept/risque, #concept/portefeuille]
créé: 2026-04-21
liens_forts: ["[[Correlation matrix]]", "[[Risk parity]]", "[[Risk budgeting]]", "[[Correlation risk]]", "[[Position sizing]]"]
liens_opposition: []
---

# Diversification

> [!info] Résumé
> La diversification est la stratégie de répartition du risque entre plusieurs actifs ou stratégies non corrélés. Elle réduit le risque total du portefeuille sans réduire proportionnellement le rendement attendu.

## Définition

La diversification consiste à combiner plusieurs actifs ou stratégies dans un portefeuille pour réduire le risque total. L'idée est que les pertes sur certains composants sont compensées par les gains sur dautres, surtout si les mouvements ne sont pas parfaitement corrélés.

Le principe fondamental a été Formalisé par Harry Markowitz dans le cadre de la théorie moderne du portefeuille (1952). En combinant des actifs avec des corrélations incomplètes, on peut réduire la variance du portefeuille en dessous de la moyenne pondérée des variances individuelles.

Mathématiquement, si deux actifs ont une corrélation de 1, la diversification nen offre aucun benefit. Si la corrélation est de -1, on peut éliminer tout risque. En pratique, la plupart des actifs ont des corrélations entre 0 et 1.

La diversification est souvent résumée par le proverbe "ne mettez pas tous vos œufs dans le même panier". Mais le vrai benefit est plus subtil : la diversification reduce la variance sans sacrificing le rendement attendu.

En trading algorithmique crypto, la diversification peut se faire entre :
- Différentes stratégies (trend following, mean reversion, market making)
- Différentes timeframe (minutes, heures, jours)
- Différentes paires de trading
- Différentes conditions de marché

## Contexte et origine

Le concept de diversification a été formalisé par Harry Markowitz dans son article "Portfolio Selection" (1952). Il a reçu le prix Nobel déconomie pour ce travail qui a fondé la théorie moderne du portefeuille.

Avant Markowitz, la diversification était utilisée de manière intuitive mais mal comprise. Markowitz a montré mathématiquement comment calculer le portefeuille efficient qui maximize le rendement pour un niveau de risque donné.

Le concept de "[[Correlation matrix]]" est né de cette théorie. La matrice de corrélation est essentielle pour calculer le bénéfice réel de la diversification.

Les recherches subsequentes ont montré que la diversification a des limites. Les[[Correlation risk|corrélations]] ont tendance à augmenter en période de crise, reducing the benefit precisely when it is most needed.

## Mécanismes et caractéristiques

Le benefit de la diversification se calcule via la formule de la variance du portefeuille. Pour deux actifs A et B avec des poids wA et wB, la variance du portefeuille est :
σ²p = wA²σA² + wB²σB² + 2wAwBσAσBρAB

où ρAB est le coefficient de corrélation entre A et B. Plus ρAB est bas, plus la variance du portefeuille est basse.

Le nombre dactifs nécessaires pour une diversification effective dépend des corrélations. Avec des corrélations proches de 0, 10 à 15 actifs suffisent. Avec des corrélations positives élevées, même 30 actifs peuvent ne pas suffir.

La[[Diversification]] entre stratégies est particulièrement importante pour les[[Trading bot]]s. Les stratégies de tendance fonctionnent bien en markets en mouvement mais mal en range. Les stratégies de mean reversion fonctionnent en range mais mal en tendance. Les combiner offre une diversification temporelle.

## Nuances, critiques, limites

La diversification nest pas une garantie contre les pertes. En période de crise systémique, presque tous les actifs baissent ensemble. La diversification aide dans les baisses normales mais pas dans les crashes majeurs.

Le[[Correlation risk]] est le risque que les corrélations changent défavorablement. Une matrice de corrélation basée sur les 2 dernières années peut ne pas refléter les conditions actuelles. Les corrélations ont tendance à augmenter en période de volatilité.

La sur-diversification peut être counterproductive. Avec trop dactifs, on finit par avoir un포트efeuille qui réplique grossièrement le marché. Les avantages de la sélection active sont dilués.

La diversification correctement implémentée require une bonne compréhension du[[Correlation matrix]]. Sans cela, on peut penser être diversifié alors quon ne l'est pas. En pratique, beaucoup de traders sous-estiment les corrélations entre leurs positions. Une approche conservative est de supposer que les corrélations seront plus élevées en période de crise qu'en période normale. Il est recommandé de tester ses hypothèses de diversification avec des stress tests pour vérifier que le portefeuille reste diversifié dans les scénarios extrêmes.

## Liens et implications

La[[Diversification]] est le benefit principal du[[Risk parity]] et du[[Risk budgeting]]. Ces méthodes structurées permettent de diversifier de manière optimale.

Le[[Correlation matrix]] est loutil de mesure de la diversification. Sans une matrice accurate, on ne peut pas quantifier le benefit réel de la diversification.

Le[[Correlation risk]] est le principal danger de la diversification. Les limites de diversification doivent être comprises et gérées.

Le[[Position sizing]] doit être ajusté en fonction du degré de diversification. Un portefeuille diversifié peut supporter des positions plus grandes quun portefeuille concentré.

## Sources

[^1]: Markowitz, "Portfolio Selection", Journal of Finance (1952)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
