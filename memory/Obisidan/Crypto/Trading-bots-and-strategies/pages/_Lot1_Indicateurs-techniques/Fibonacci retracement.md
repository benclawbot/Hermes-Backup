---
titre: "Fibonacci retracement"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/retracement, #concept/fibonacci]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]"]
liens_opposition: []
---

# Fibonacci retracement

> [!info] Résumé
> Le Fibonacci retracement utilise les ratios de la séquence de Fibonacci (23.6%, 38.2%, 50%, 61.8%, 78.6%) pour identifier des niveaux de support et de résistance potentiels où le prix peut rebondir ou corriger avant de reprendre sa tendance.

## Définition

Le Fibonacci retracement est une méthode d'analyse technique qui utilise les ratios derived from the Fibonacci sequence pour identifier des niveaux potentiels de support et de résistance. Les ratios clés sont : 23.6%, 38.2%, 50%, 61.8%, et 78.6%.

Pour appliquer le Fibonacci retracement, on identifie un haut et un bas significatifs (swing high et swing low). Les niveaux de retracement sont ensuite calculés entre ces deux points. Par exemple, si le prix passe de 100 (bas) à 200 (haut), le niveau 61.8% se situe à 100 + (200-100) × 0.618 = 161.8.

Les niveaux 61.8% (le "golden ratio" approximatif) et 38.2% sont généralement considérés comme les plus significatifs. Le niveau 50% n'est pas un ratio Fibonacci mais est très utilisé car les prix ont tendance à retracer de 50% avant de continuer ou de renverser.

## Contexte et origine

Leonardo Fibonacci était un mathématicien italien du 13e siècle qui a introduit la séquence 0, 1, 1, 2, 3, 5, 8, 13, 21, etc. dans le monde occidental via son livre "Liber Abaci" (1202). Le ratio d'or (phi ≈ 1.618) émerge de cette séquence quand on divise un nombre par son suivant.

L'application du Fibonacci aux marchés financiers a été popularisée par R.N. Elliott (théorie des vagues), W.D. Gann, et plus récemment par des traders comme Scott Carney qui a développé les patterns harmoniques basés sur les ratios Fibonacci.

L'utilisation du Fibonacci en trading remonte aux années 1930-1940. Les traders ont observé que les retracements de prix suivaient souvent des proportions proches des ratios Fibonacci, transformant cette observation en outil d'analyse.

En crypto, le Fibonacci retracement est l'un des outils les plus populaire pour identifier les points d'entrée après une correction.

## Mécanismes et caractéristiques

L'application correcte du Fibonacci nécessite d'identifier les "swing highs" et "swing lows" significatifs. Un swing high significatif est un sommet local d'au moins 5-10 barres sans sommet plus haut à proximité. Même principe pour le swing low.

Les niveaux Fibonacci agissent comme des aimants pour le prix. Dans une tendance haussière, après une correction vers un niveau Fibonacci (par exemple 61.8%), le prix a tendance à rebondir et à reprendre la tendance principale. Ces niveaux deviennent alors des zones d'achat pour les traders.

Le support et résistance au niveau Fibonacci fonctionne en raison de l'auto-réalisation.

Les configurations de trading incluent : l'achat au niveau 61.8% avec stop en dessous du swing low (risk-reward favorable), la vente au niveau 38.2% dans une tendance baissière, ou l'attente d'un breakout au-dessus d'un niveau Fibonacci pour confirmer la continuation.

Le [[backtesting]] du Fibonacci montre que les niveaux 38.2%, 50%, et 61.8% sont les plus significatifs en termes desupport/résistance. Le niveau 23.6% est souvent traversé rapidement et moins utile comme niveau de retournement.

## Nuances, critiques, limites

L'[[Efficient Market Hypothesis]] remet en question le Fibonacci en arguant que les patterns ne sont pas plus fiables que le hasard. Si le prix "rebondit" sur un niveau Fibonacci, c'est peut-être parce que beaucoup de traders y achètent créant l'illusion d'un niveau significative.

Le choix des points de départ (swing high/low) est subjectif. Deux traders peuvent dessiner des niveaux Fibonacci très différents sur le même graphique selon les points qu'ils considèrent "significatifs". Cette subjectivité rend le backtesting difficile.

Le Fibonacci fonctionne mieux en marché trending. En marché latéral, les niveaux peuvent être traversés ou devenir moins significatifs. Les traders doivent combiner le Fibonacci avec d'autres outils (indicateurs de tendance, volume) pour filter les signaux.

Le "clustering" de plusieurs niveaux Fibonacci (par exemple 38.2% et 50% proches l'un de l'autre) crée des zones plus robustes. Un niveau seul est moins fort qu'une confluence de plusieurs niveaux ou d'un niveau Fibonacci avec une moyenne mobile horizontale.

## Liens et implications

Le Fibonacci retracement crée des niveaux de prix objectifs pour le trading algorithmique.

La tendance affecte la validité des niveaux Fibonacci.

Les support et résistance identifiés via Fibonacci se combinent avec d'autres formes d'analyse technique.

## Sources