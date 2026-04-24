---
titre: "Compression du spread"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/spread, #microstructure, #liquidité]
créé: 2026-04-21
liens_forts: ["[[Écart bid-ask]]", "[[Liquidité]]", "[[Market making]]", "[[Toxicité du marché]]", "[[Volatilité]]", [["Market impact"]], "[[Slippage]]"]
liens_opposition: []
---

# Compression du spread

> [!info] Résumé
> La compression du spread désigne le processus par lequel l'écart bid-ask se réduit sur un marché. Elle peut survenir naturellement quand la liquidité s'améliore, ou être le résultat de pratiques de manipulation comme le "layering" qui créent une fausse illusion de liquidité.

## Définition

La compression du spread est la réduction de l'écart entre le bid et l'ask sur un marché. Cette compression peut être un signe de liquidité améliorée (plus de competition entre teneurs de marché) ou un signal de manipulation. Une compression naturelle reflète une augmentation de la liquidité réelle ; une compression artificielle crée une liquidité fantôme qui disparaît quand les ordres sont annulés.

La compression du spread est mesurée en valeur absolue (en dollars ou en Satoshi) ou en pourcentage du prix. Un spread qui passe de 10 USD à 5 USD sur un actif à 1000 USD passe de 1% à 0.5% du prix. Cette compression de 50% peut être le résultat d'une meilleure liquidité ou d'une modification de la composition du marché.

Les causes de compression du spread incluent : une competition accrue entre market makers, une réduction du risque de sélection adverse, une diminution de la volatilité, ou une intervention réglementaire forçant les teneurs à réduire leurs marges.

## Contexte et origine

La compression du spread a été observée sur presque tous les marchés financiers à mesure qu'ils maturent. Les marchés actions américains dans les années 1990-2000 ont vu leurs spreads réduire drastiquement grâce à la competition entre teneurs de marché et à l'avènement du trading électronique. Les marchés crypto ont connu une compression similaire à mesure que la liquidité s'est développée.

Une forme problématique de compression du spread est le "layering" (stratification). Cette pratique consiste à placer plusieurs ordres à différents niveaux pour créer l'illusion d'un livre d'ordres profond avec un spread serré. L'acteur qui fait cela ne a pas l'intention d'exécuter ses ordres ; il veut simplement attirer des ordres d'autres participants qui croient à tort que le marché est liquide.

Les régulateurs ont commencé à s'intéresser à la compression artificielle du spread comme indicateur de manipulation. Un spread qui se compresse trop vite ou qui reste anormalement serré peut signaler une activité manipulative.

## Mécanismes / caractéristiques / détails

**Competition entre market makers** : quand plusieurs teneurs de marché compétitionent pour la même liquidité, ils réduisent leurs spreads pour attract orders. Cette compression "naturelle" est bénéfique pour le marché : les coûts de transaction baissent pour tous les participants.

**Amélioration de l'information** : quand les acteurs ont moins d'incertitude sur la vraie valeur d'un actif, le risque de sélection adverse diminue, ce qui permet aux market makers de réduire leurs spreads. Cette compression est un signe de maturité du marché.

**Layering** : cette pratique manipulatrice crée une compression factice. Un manipulateur place des ordres d'achat à plusieurs niveaux (bid side) et des ordres de vente à plusieurs niveaux (ask side), créant un livre profond avec un spread serré. Les autres participants sont attirés par cette apparente liquidité mais quand ils passent leurs ordres, les ordres du manipulateur sont annulés.

**Quote stuffing** : une forme de compression artificielle où un volume massif d'ordres est placé et retiré très rapidement, créant une activité intense mais sans liquidité réelle. Les ordres créent une apparence de liquidité qui comprime le spread affiché.

**Impact sur la liquidité réelle** : la compression du spread ne signifie pas toujours une liquidité réelle accrue. Si la profondeur du carnet est faible malgré un spread serré, le coût réel de transaction pour des ordres de taille reste élevé. Le [[Ratio annulation-commerce]] peut révéler cette discrepancy.

## Nuances, critiques, limites

La distinction entre compression "naturelle" et "artificielle" n'est pas toujours claire. Une compression naturelle peut aussi être le résultat de pratiques discutables. Les regulators scrutent les patterns de compression pour identifier les comportements manipulatoires.

La compression du spread peut être un processus non-linéaire. Quand le spread devient très serré, certains market makers ne trouvent plus le risque acceptable pour leur rémunération, et se retirent, ce qui peut causer une decompression rapide. Ce phénomène a été observé lors de "[[Flash crash|flash crashes]]" oÙ le spread peut exploser en quelques secondes.

La compression du spread peut aussi créer des incitations pour le "quote sniping" oÙ les traders profitent de spreads très serres mais avec une profondeur limitée, capturant le spread avant que le prix ne bouge.

## Liens et implications

La compression du spread affecte les stratégies de [[Market making]]. Un spread compressé réduit la rémunération du market maker, rendant la stratégie moins profitable. Les market makers doivent réduire leurs tailles ou se retirer si la compression est trop forte.

Un spread compressé mais superficiel peut [[Toxicité du marché|détériorer la toxicité]] car les traders non informés sont attirés par la fausse liquidité. Ils subissent un slippage majeur quand les ordres sont exécutés contre un livre profond mais clairsemé.

Le [[Backtesting]] qui ne capture pas les changements de spread peut surestimer la performance des stratégies dans des périodes de compression. Les modèles doivent intégrer la relation entre spread et liquidité réelle.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: SEC. "Equity Market Structure Literature Review." *SEC Staff Report*, 2010.
[^3]: CFTC. "Disruptive Trading and Market Manipulation." *CFTC Proposed Rules*, 2013.