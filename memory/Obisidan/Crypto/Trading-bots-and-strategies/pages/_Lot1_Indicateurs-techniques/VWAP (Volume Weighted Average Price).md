---
titre: "VWAP (Volume Weighted Average Price)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Analyse technique pour bots]]", "[[Order book dynamics]]", "[[Liquidité]]", "[[Market making]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# VWAP (Volume Weighted Average Price)

> [!info] Résumé
> Le VWAP (Volume Weighted Average Price) calcule le prix moyen pondéré par le volume échangé sur une période donnée. Il est utilisé comme référence de fair price par les institutionnels et comme signal de trading pour les bots qui cherchent à exécuter proche du prix du marché.

## Définition

Le VWAP (Volume Weighted Average Price) est un indicateur qui représente le prix moyen d'un actif, ponderé par le volume de chaque transaction. Il se calcule en divisant la somme des (prix × volume) par le volume total sur une période donnée, typiquement une session de trading (journée).

Le VWAP est utilisé comme benchmark : les institutionnels cherchent à acheter en dessous du VWAP et à vendre au-dessus, considérant cela comme une exécution "favorable". Les traders qui achètent au-dessus du VWAP paient un prix supérieur à la moyenne du marché.

En trading algorithmique, le VWAP sert de cible d'exécution pour les ordres de grande taille qui doivent être divisés dans le temps. Un bot VWAP fragmente un ordre important en petits morceaux, exécutant à des intervalles réguliers pour maintenir un prix moyen proche du VWAP du marché.

## Contexte et origine

Le VWAP a émergé dans les années 1980-1990 dans les salles de marchés institutionnelles. Les grandes maisons de gestion utilisaient cet indicateur comme standard pour mesurer la qualité d'exécution de leurs ordres. L'arrivée du trading algorithmique a permis de programmable des stratégies d'exécution autour du VWAP.

Dans l'univers crypto, le VWAP est devenu un indicateur standard sur les plateformes comme TradingView et dans les bots de [[market making]]. La nature 24h/24 des marchés crypto change la dynamique du VWAP : au lieu d'une journée, on utilise souvent des périodes de 24h qui se réinitialisent à minuit UTC ou à des intervalles fixes.

Les protocoles DeFi et les échanges décentralisés (DEX) utilisent le TWAP (Time Weighted Average Price) comme alternative au VWAP quand les données de volume sont moins fiables ou manipulables.

## Mécanismes et caractéristiques

Le calcul du VWAP accumule le prix × volume à chaque transaction et divise par le volume total depuis le début de la période. La formule simplifiée :

VWAP = Σ(Prix_i × Volume_i) / Σ(Volume_i)

Pour une période de 24h en crypto : le calcul recommence à chaque UTC midnight. Chaque barre de prix reçoit un "VWAP de la période" basé sur les transactions qui se produisent à ce prix.

En trading bots, le VWAP sert plusieurs fonctions. Comme filtre de direction : les bots achètent quand le prix est en dessous du VWAP (sous-évalué) et vendent quand il est au-dessus (surévalué). Comme cible d'exécution : les bots institutionnels cherchent à exécuter leurs ordres proches du VWAP. Comme niveau de support/résistance : quand le prix revient au VWAP après une excursion, il agit comme un aimant.

Les stratégies VWAP les plus courantes implémentent le grid trading autour du VWAP, avec des ordres d'achat en dessous et des ordres de vente au-dessus, ajustant dynamiquement l'espacement des grilles selon la volatilité mesurée par l'ATR.

## Nuances, critiques, limites

Le VWAP est un indicateur retardataire. Il ne prédit pas le prix futur mais représente le prix moyen historique sur la période. Les bots qui utilisent le VWAP comme signal doivent comprendre qu'ils réagissent à des conditions passées, pas futures.

En période de forte volatilité, le VWAP peut créer une "attraction" psychologique qui influence le prix. Si beaucoup de bots achètent quand le prix descend vers le VWAP, cette demande peut temporairement soutenir le prix, créant une forme d'auto-renforcement.

Le VWAP sur 24h est sensible au volume des périodes précédentes. En début de journée (ou de période), le VWAP reflète encore les conditions de la veille. Cette inertie peut être positive (lissage) ou négative (signal retardé).

La manipulation du VWAP est possible via le wash trading ou l'injection de volume à des prix spécifiques pour influencer le calcul. En crypto, où la transparence des volumes est parfois questionnable, le VWAP peut être moins fiable.

## Liens et implications

Le VWAP est intimement lié à l'[[order book dynamics]] car le volume échangé reflète les transactions dans le carnet d'ordres. Un VWAP élevé signifie que beaucoup de transactions ont eu lieu à des prix hauts, suggérant une pression acheteuse forte.

La [[liquidité]] d'un marché affecte directement la fiabilité du VWAP. Sur des marchés peu liquides, le VWAP peut être volatile et peu représentatif du prix réel. Les bots doivent intégrer des filtres de liquidité minimum avant d'utiliser le VWAP.

Dans les stratégies de [[market making]], le VWAP sert souvent de référence centrale. Les market makers ajustent leurs fourchettes (spreads) en fonction de l'écart entre le prix actuel et le VWAP, élargissant leurs spreads quand le prix s'éloigne significativement du VWAP.

## Sources