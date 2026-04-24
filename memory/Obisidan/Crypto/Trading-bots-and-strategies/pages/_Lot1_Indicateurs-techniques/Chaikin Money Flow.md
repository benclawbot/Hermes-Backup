---
titre: "Chaikin Money Flow"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Backtesting]]", "[[Market making]]"]
liens_opposition: []
---

# Chaikin Money Flow

> [!info] Résumé
> Le Chaikin Money Flow (CMF) est un indicateur de volume qui mesure le flux de money volume sur une période donnée. Il combine le prix et le volume pour identifier si l'argent entre ou sort d'un actif, servant d'indicateur de force du mouvement.

## Définition

Le Chaikin Money Flow a été créé par Marc Chaikin dans les années 1960-1970. Il est basé sur le concept d'accumulation/distribution : quand le prix ferme dans la moitié supérieure du range de la période, c'est de l'accumulation (flux positif). Quand il ferme dans la moitié inférieure, c'est de la distribution (flux négatif).

Le calcul : d'abord, calculer le Money Flow Multiplier = ((Clôture - Bas) - (Haut - Clôture)) / (Haut - Bas). Ensuite, multiplier par le volume de la période pour obtenir le Money Flow Volume. Le CMF est la somme du Money Flow Volume sur N périodes divisée par la somme du volume sur N périodes.

Le CMF oscille entre -1 et +1. Une lecture positive signifie que le flux de money est positif (accumulation). Une lecture négative signifie distribution. Plus la lecture est extrême (proche de +1 ou -1), plus le flux est directionnel.

## Contexte et origine

Marc Chaikin a développé le CMF en se basant sur le travail de Woods et Vignolia sur l'accumulation/distribution. Chaikin voulait créer un indicateur qui combinait le prix et le volume pour donner une vue complète de l'argent qui entre et sort d'un actif.

Le CMF est l'un des indicateurs les plus utilisés pour mesurer le "smart money" (l'argent des initiés et des institutionnels) par opposition au "bruit" (petits traders). L'idée : les gros acteurs laissent des traces dans le volume.

En crypto, le CMF est particulièrement utile car il peut aider à distinguer les mouvements de prix accompagnés de vrai volume (légitime) des mouvements sans soutien en volume (manipulation possible).

## Mécanismes et caractéristiques

Le CMF au-dessus de 0 signale une accumulation (pression acheteuse). Le CMF en dessous de 0 signale une distribution (pression vendeuse). Plus le CMF est éloigné de 0, plus la pression est forte.

Un CMF qui monte alors que le prix monte confirme la tendance haussière (flux d'argent dans l'actif). Un CMF qui descend alors que le prix monte signale une divergence (distribution malgré la hausse, retournement possible).

Le croisement de la ligne zéro est le signal principal. Le CMF passe au-dessus de 0 = signal haussier. Le CMF passe en dessous de 0 = signal baissier. Ces croisements doivent être confirmé par le prix.

La période standard du CMF est 21 périodes. Une période plus courte (10-14) rend le CMF plus réactif. Une période plus longue (28+) le rend plus lisse mais plus lent.

## Nuances, critiques, limites

Le CMF est un indicateur retardataire car il utilise des données de prix et de volume passées. Il ne prédit pas le futur mais confirme les tendances actuelles.

Le CMF peut être influencé par les gros volumes d'une seule période. Un gros trade peut faire bouger le CMF significativement même si ce n'est pas représentatif du flux global. Un filtre de volume (exclure les périodes avec volume anormalement élevé) peut être nécessaire.

Le CMF ne directionnalise pas le mouvement futures. Un CMF positif peut signifier accumulation mais le prix peut quand même chuter si les vendeurs sont plus forts. Le CMF est un indicateur de pression, pas de direction.

Le [[backtesting]] du CMF en crypto montre qu'il fonctionne mieux comme indicateur de confirmation que comme signal principal. Une stratégie qui utilise une moyenne mobile pour la direction et le CMF pour confirmer le flux d'argent peut être plus robuste.

## Liens et implications

Le volume est la composante principale du CMF.

L'[[order book dynamics]] affecte le CMF car les niveaux de prix (proche du haut ou du bas) influencent le Money Flow Multiplier. Un book avec beaucoup d'ordres d'achat près du prix actuel peut soutenir le CMF.

L'[[Accumulation/Distribution]] est étroitement liée au CMF. Le A/D est un indicateur cumulatif, le CMF est une moyenne normalisée du même concept. Les deux mesurent le même phénomène sous différents angles.

## Sources