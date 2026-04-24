---
titre: "Correlation matrix"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/correlation, #concept/matrice, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Diversification]]", "[[Correlation risk]]", "[[Risk parity]]", "[[Portfolio optimization]]", "[[Annualized volatility]]"]
liens_opposition: []
---

# Correlation matrix

> [!info] Résumé
> La matrice de corrélation est un tableau qui présente les coefficients de corrélation entre toutes les paires d'actifs d'un portefeuille. Elle est essentielle pour calculer le risque réel d'un portefeuille diversifié et optimiser l'allocation.

## Définition

La correlation matrix est une matrice carrée symétrique où chaque élément (i, j) représente le coefficient de corrélation entre les rendements de lactif i et de lactif j. La diagonale est toujours égale à 1 (un actif est parfaitement corrélé avec lui-même).

Le coefficient de corrélation varie de -1 à 1 :
- ρ = 1 : corrélation parfaite positive (les deux actifs montent et baissent ensemble)
- ρ = 0 : aucune corrélation linéaire
- ρ = -1 : corrélation parfaite négative (quand un monte, lautre descend)

En combinant les actifs avec des corrélations faibles ou négatives, on peut réduire le risque total du portefeuille. Cest le fondement de la[[Diversification]] selon Markowitz.

Pour N actifs, la matrice a N×N éléments. Si N = 10, la matrice a 100 éléments (dont 10 sur la diagonale). La moitié hors-diagonale contient linformation unique.

La correlation matrix doit être régulièrement mise à jour. Les corrélations changent dans le temps, surtout en période de crise où elles ont tendance à augmenter.

## Contexte et origine

La correlation matrix est née avec la théorie moderne du portefeuille de Markowitz (1952). Dans ce cadre, le risque dun portefeuille dépend non seulement des variances individuelles mais aussi des corrélations entre actifs.

La matrice de covariance (qui inclut les variances) est linput principal du modèle de Markowitz. Elle permet de calculer le portefeuille efficient qui maximise le rendement pour un niveau de risque donné.

En pratique, on distingue la matrice de corrélation (qui normalise par les écart-types) de la matrice de covariance. La corrélation est plus fácil à interpréter car elle est toujours entre -1 et 1.

Le[[Risk parity]] utilise la correlation matrix pour calculer les poids qui equalisent la contribution au risque de chaque actif. Sans cette matrice, le risk parity n'est pas possible.

## Mécanismes et caractéristiques

Le calcul des coefficients de corrélation se fait sur des rendements historiques. La longueur de la fenêtre de calcul affecte la pertinence :
- Court terme (20-30 jours) : reflète les changements récents
- Long terme (1-2 ans) : plus stable mais moins actuelle

La qualité de la matrice dépend de la qualité des données. Avec peu de données, les estimations sont imprécises. Avec beaucoup de données, une matrice obsolète peut ne pas refléter les conditions actuelles.

La matrice peut être utilisée pour :
- Calculer le risque dun portefeuille via la formule de variance
- Identifier les actifs redondants (très corrélés)
- Construire un portefeuille diversifié
- Mettre en œuvre le risk parity

Le conditionnement de la matrice est important pour les calculs numériques. Une matrice mal conditionnée peut conduire à des résultats erronés dans l'optimisation.

## Nuances, critiques, limites

Les corrélations historiques ne prédisent pas les corrélations futures. En période de transition de marché, les changements peuvent être très rapides.

Le[[Correlation risk]] signifie que même si la matrice actuelle montre des corrélations faibles, elles peuvent augmenter significativement en période de crise. La diversification peut disparaître précisément quand on en a le plus besoin.

Le calcul des corrélations assume une relation linéaire. Beaucoup de relations dans les marchés sont non linéaires, ce qui nest pas capturé par le coefficient de corrélation standard.

La matrice de corrélation pour les crypto-actifs est particulièrement complexe. Beaucoup de pièces sont très corrélées avec Bitcoin, ce qui limite les bénéfices de la diversification même si elles semblent différentes. Cette corrélation particulièrement élevée entre les crypto-actifs s'explique par le fait qu'ils partagent les mêmes facteurs de risque macro : sentiment de marché, liquidité globale, réglementation. Pour obtenir une vraie diversification en crypto, il faut souvent aller au-delà des simples paires de trading et inclure des stratégies avec des horizons temporels différents ou des approches non directionnelles comme le market making.

## Liens et implications

La[[Correlation matrix]] est l'outil fondamental pour mesurer la[[Diversification]] réelle d'un portefeuille. Sans elle, on ne peut pas quantifier si le portefeuille est vraiment diversifié.

Le[[Risk parity]] et le[[Risk budgeting]] utilisent la matrice pour distribuer le risque entre les composants. La qualité de ces méthodes dépend de la qualité de la matrice.

L'[[Annualized volatility]] de chaque actif est l'autre input nécessaire en dehors de la matrice pour calculer le risque total du portefeuille. La matrice de covariance combine les deux.

Le[[Portfolio optimization]] basé sur Markowitz utilise la matrice pour trouver les poids optimaux.

## Sources

[^1]: Markowitz, "Portfolio Selection", Journal of Finance (1952)
[^2]: Ang, "Risk Management and Regulation", Columbia Business School (2014)
