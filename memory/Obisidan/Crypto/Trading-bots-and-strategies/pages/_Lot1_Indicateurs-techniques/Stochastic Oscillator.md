---
titre: "Stochastic Oscillator"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/oscillateur, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Analyse technique pour bots]]", "[[RSI Divergence strategy]]", "[[Stratégie de momentum]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# Stochastic Oscillator

> [!info] Résumé
> Le Stochastic Oscillator est un indicateur de momentum qui compare le prix de clôture d'un actif par rapport à son range de prix sur une période donnée. Il identifie les conditions de surachat et de survente en comparant où le prix se situe dans son range récent.

## Définition

Le Stochastic Oscillator a été créé par George Lane dans les années 1950. Il se compose de deux lignes : %K (la ligne principale) et %D (une moyenne mobile de %K). L'oscillateur compare le prix de clôture au range recent du prix.

La formule du %K : (Clôture - Plus bas des N périodes) / (Plus haut des N périodes - Plus bas des N périodes) × 100

Le %D est une moyenne mobile (généralement 3 périodes) du %K. Les valeurs par défaut sont N = 14 pour %K et 3 pour %D.

Le Stochastic oscille entre 0 et 100. Une lecture au-dessus de 80 indique une condition de surachat (le prix proche du haut de son range). Une lecture en dessous de 20 indique une condition de survente (le prix proche du bas de son range).

## Contexte et origine

George Lane a développé le Stochastic Oscillator dans les années 1950. Il aurait déclaré que le Stochastic "suit la vitesse du momentum" et que les retournements de momentum précèdent les retournements de prix.

Lane observait que dans une tendance haussière, le prix a tendance à fermer près du plus haut de la période. Dans une tendance baissière, le prix a tendance à fermer près du plus bas. Le Stochastic capture cette observation sous forme d'oscillateur.

L'indicateur est devenu l'un des outils fondamentaux de l'analyse technique, particulièrement pour les marchés à range (latéraux). En crypto, le Stochastic est largement utilisé comme composant du [[RSI Divergence strategy]] et des stratégies de mean reversion.

## Mécanismes et caractéristiques

Le signal principal du Stochastic est le croisement %K/%D. Quand %K croise au-dessus de %D en territoire de survente (en dessous de 20), c'est un signal d'achat. Quand %K croise en dessous de %D en territoire de surachat (au-dessus de 80), c'est un signal de vente.

Les divergences sont un signal plus fort. Une divergence baissière se forme quand le prix fait un nouveau haut mais que le Stochastic fait un nouveau haut plus bas. Une divergence haussière se forme quand le prix fait un nouveau bas mais que le Stochastic fait un nouveau bas plus haut.

Le Stochastic a plusieurs configurations : rapide (14, 3, 3 par défaut), lent (modifie les périodes pour lisser), et full (permet une personnalisation complète). Le Stochastic lent est généralement préféré pour le trading algorithmique car il produit moins de faux signaux.

Les configurations sont souvent ajustées pour le crypto. Un Stochastic avec %K=14 et %D=3 est standard, mais certains traders utilisent %K=21 et %D=9 pour réduire le bruit sur les timeframes courts.

## Nuances, critiques, limites

Le Stochastic produit beaucoup de faux signaux en marché trending. Dans une forte tendance haussière, le Stochastic peut rester en territoire de surachat pendant longtemps, et les croisements baissiers ne mènent pas à des corrections significatives.

Le [[backtesting]] du Stochastic seul montre un win rate relativement bas. La stratégie standard (acheter quand %K croise %D en dessous de 20, vendre quand au-dessus de 80) est profitable en marché range mais perd en marché trending.

La divergence Stochastic, bien que plus fiable que le croisement, nécessite une confirmation. Une divergence peut se former sur plusieurs barres et le retournement peut être retardé ou ne pas se matérialiser.

Le Stochastic fonctionne mieux quand il est combiné avec un indicateur de tendance (comme une moyenne mobile) pour éviter de trader contre une tendance established. Une approche courante : n'acheter que si le prix est au-dessus de sa moyenne mobile 200 (tendance haussière) et que le Stochastic donne un signal d'achat.

## Liens et implications

Le RSI et le Stochastic mesurent des concepts similaires (surachat/survente) mais avec des formules différentes.

Le momentum mesuré par le Stochastic peut servir de filtre pour d'autres stratégies.

Les stratégies basées sur le Stochastic sont une forme de [[mean reversion]] car elles supposent que le prix retournera vers la moyenne de son range. Cette hypothèse est valide en marché range mais risquée en marché trending.

## Sources