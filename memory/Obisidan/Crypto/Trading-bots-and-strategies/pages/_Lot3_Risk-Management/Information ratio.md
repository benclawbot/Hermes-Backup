---
titre: "Information ratio"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Sharpe ratio]]", "[[Gestion du risque]]", "[[Backtesting]]", "[[Volatility scaling]]", "[[Diversification]]"]
liens_opposition: []
---

# Information ratio

> [!info] Résumé
> L'Information ratio mesure le rendement actif (surperformance par rapport à un benchmark) divisé par la tracking error. Il évalue la capacité d'un gestionnaire à générer de l'alpha de manière consistante plutôt que le rendement brut.

## Définition

L'Information ratio, aussi connu sous le nom d'Appraisal ratio ou Relative Sharpe, mesure le rendement excédentaire d'un portefeuille par rapport à un benchmark divisée par la tracking error (écart-type de cette surperformance). Il répond à la question : le gestionnaire génère-t-il vraiment de la value ajoutée ou profite-t-il simplement de la performance du marché ?

La formule est : (Rendement du portefeuille - Rendement du benchmark) / Tracking error. Un Information ratio de 0.5 signifie que le gestionnaire génère 0.5% de rendement excédentaire pour chaque 1% de volatilité prise par rapport au benchmark. Un ratio de 1.0 ou plus est excellent.

L'Information ratio est particulièrement pertinent pour les [[trading bot]]s qui tentent de battre un indice de référence (comme BTC index ou ETH index) plutôt que de générer un rendement absolu. Le bot est évalué sur sa capacité à créer de l'alpha au-delà de ce que produirait un investissement passif.

## Contexte et origine

L'Information ratio est né dans les années 1960-1970 avec le développement des théorie du portfolio et l'émergence des fonds indiciels. L'idée était de créer une métrique pour évaluer si les gestionnaires actifs méritaient leurs fees en générant vraiment de la surperformance.

Le concept est étroitement lié au Capital Asset Pricing Model (CAPM) et à la notion d'efficience du marché. Si les marchés sont efficients, il devrait être impossible de générer un Information ratio soutenu supérieur à zéro après frais de transaction.

En pratique, peu de gestionnaires actifs parviennent à maintenir un Information ratio supérieur à 1.0 sur plusieurs années. Les études montrent que la majorité des fonds actifs sous-performent leurs benchmarks après frais, surtout dans les marchés efficients comme les grandes capitalisations.

En trading algorithmique crypto, l'Information ratio est useful pour évaluer les bots de market making ou d'arbitrage qui sont censés générer des rendements en plus de l'exposition directe au marché. Un bot de [[Market making]] qui génère 5% de rendement additionnel avec une tracking error de 3% a un Information ratio de 1.67.

## Mécanismes et caractéristiques

La tracking error se calcule comme l'écart-type des différences de rendement entre le portefeuille et le benchmark. Une tracking error élevée indique que les rendements du portefeuille s'écartent significativement du benchmark, ce qui peut être dû à du risque active ou à de la chance.

L'Information ratio peut être décomposé en deux composants : le rendement actif (numerator) et la qualité de ce rendement (mesurée par la tracking error). Un gestionnaire peut générer de l'alpha soit en augmentant le rendement actif, soit en réduisant la tracking error.

Le ratio est annualisé pour permettre la comparaison entre stratégies. Les[[forward testing]] en conditions réelles permettent de vérifier si l'Information ratio calculé en [[backtesting]] se maintient.

Une strategie avec un Information ratio de 0.3-0.5 est considered acceptable. Entre 0.5 et 1.0, elle est considered bonne. Au-dessus de 1.0, elle est considered excellente mais rare. Les Hedge funds renowned cherchent des stratégies avec des Information ratios supérieurs à 1.5.

## Nuances, critiques, limites

L'Information ratio ne capture pas le risque de drawdown. Un gestionnaire pourrait avoir un bon Information ratio mais un max drawdown inacceptable. Il est important de combiner cette métrique avec le [[Sharpe ratio]] et le Calmar ratio.

Le choix du benchmark est crucial et peut être manipulé. Utiliser un benchmark facile à battre (comme un indice peu liquide) peut gonfler artificiellement le ratio. Le benchmark doit être pertinent pour la stratégie evaluée.

Le ratio est moins utile pour les stratégies qui ne cherchent pas à battre un benchmark. Les stratégies absolues (qui visent un rendement positif quel que soit le marché) ont un Information ratio difficile à interpréter car il n'y a pas de benchmark naturel.

Une tracking error faible peut être un signe de beta plutôt que d'alpha. Si le portefeuille suit de très près le benchmark avec un léger offset, le Information ratio peut être bon mais le gestionnaire ne prend pas vraiment de risque actif.

## Liens et implications

L'Information ratio complète le [[Sharpe ratio]] pour évaluer les stratégies qui battent un benchmark. Là où le Sharpe mesure le rendement absolu ajusté au risque, l'Information ratio mesure la value ajoutée relative.

La [[Diversification]] peut améliorer l'Information ratio en réduisant la tracking error sans réduire le rendement actif. Une combinaison de stratégies non corrélées peut générer le même alpha avec moins de volatilité.

Le [[Volatility scaling]] permet de normaliser l'exposition au risque pour maintenir un Information ratio constant. Beaucoup de fonds utilisent le volatility scaling pour garder leur Information ratio dans une plage cible.

## Sources

[^1]: Grinold, "The Fundamental Law of Active Management", Journal of Portfolio Management (1989)
[^2]: Graham, "Active Portfolio Management", McGraw-Hill (1999)
