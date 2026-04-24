---
titre: "Mass Index"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volatilité, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[ATR (Average True Range)]]", "[[Backtesting]]", "[[Risk-reward ratio]]"]
liens_opposition: []
---

# Mass Index

> [!info] Résumé
> Le Mass Index est un indicateur de volatilité créé par Donald Dorsey qui utilise la différence entre deux moyennes mobiles exponentielles (EMA) pour identifier les points de retournement quand l'indicateur forme un "bulge" au-dessus de 27 puis descend en dessous de 26.5.

## Définition

Le Mass Index a été développé par Donald Dorsey dans les années 1990. Il mesure la volatilité en analysant la compression et l'expansion de la fourchette entre deux EMA (typiquement 9 et 25 périodes).

Le calcul : d'abord, calculer l'EMA 9 de la fourchette (high-low). Ensuite, calculer l'EMA 9 de cette première EMA (double lissage). Le Mass Index est la somme de ces rapports sur N périodes (typiquement 25).

Le ratio utilisé dans le calcul : (High - Low) / EMA9((High - Low)). Plus le ratio est élevé, plus la fourchette s'élargit. Plus le ratio est faible, plus la fourchette se contracte.

La lecture clé du Mass Index est le "bulge" pattern : une lecture au-dessus de 27 suivie d'une descente en dessous de 26.5 signale un possible retournement de prix. Ce pattern indique une compression de la volatilité suivie d'une expansion.

## Contexte et origine

Donald Dorsey a créé le Mass Index en se concentrant sur la volatilité plutôt que sur la direction. L'indicateur était basé sur l'observation que les retournements de prix sont souvent précédés par une contraction de la volatilité.

Dorsey a publié ses travaux sur le Mass Index dans le magazine "Technical Analysis of Stocks & Commodities" dans les années 1990. L'indicateur reste relativement méconnu du grand public malgré son utilité potentielle.

Le Mass Index est particulièrement utile pour identifier les périodes de consolidation avant un mouvement directionnel fort. En crypto, où les mouvements explosifs sont fréquents, le Mass Index peut aider à anticiper ces mouvements.

## Mécanismes et caractéristiques

Le bulge (renflement) est le signal principal. Il se forme quand le Mass Index monte au-dessus de 27 puis redescend en dessous de 26.5. Plus le bulge est rapide et prononcé, plus le signal est fort.

Le Mass Index ne directionnalise pas le retournement. Un bulge peut précéder un mouvement haussier ou baissier. Les traders doivent utiliser un autre indicateur (comme une moyenne mobile directionnelle) pour déterminer la direction.

Le niveau de 27/26.5 est empirique. certains traders ajustent ces niveaux selon l'actif. Un seuil plus bas (25/24.5) rend l'indicateur plus sensible mais augmente les faux signaux.

Le Mass Index fonctionne mieux sur les timeframes journaliers et hebdomadaires. Sur les timeframes courts (1h, 4h), le bruit peut rendre le signal moins fiable.

## Nuances, critiques, limites

Le Mass Index ne donne pas la direction du retournement. Après un bulge, le prix peut monter ou descendre. Un indicateur de direction doit être utilisé en complément pour interpréter le signal.

Le bulge peut prendre du temps à se former. Le Mass Index doit rester au-dessus de 27 puis descendre en dessous de 26.5. Ce processus peut prendre plusieurs semaines sur un graphique journalier.

Le Mass Index est un indicateur retardataire. Il identifie les retournements après qu'ils se soient produits, pas avant. Le bulge signale une compression qui a déjà eu lieu.

Le [[backtesting]] du Mass Index en crypto montre des résultats variables. Le signal fonctionne mieux sur les actifs avec des cycles réguliers. Sur des actifs plus erratiques, les résultats sont moins prévisibles.

## Liens et implications

La volatilité est mesurée par le Mass Index à travers la largeur de la fourchette high-low.

L'ATR est un autre indicateur de volatilité mais avec une approche différente.

Le [[risk-reward ratio]] peut être amélioré en utilisant le Mass Index comme filtre. Un trade pris près d'un bulge avec confirmation d'un autre indicateur peut avoir un meilleur RRR qu'un trade sans cette confluence.

## Sources