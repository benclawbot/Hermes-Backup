---
titre: "Asymétrie d'information"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/information, #microstructure, #risque]
créé: 2026-04-21
liens_forts: ["[[Sélection adverse]]", "[[Toxicité du marché]]", "[[Écart bid-ask]]", "[[Incitations du market maker]]", "[[Glosten-Milgrom]]", "[[Liquidité]]", "[[Trading algorithmique]]"]
liens_opposition: []
---

# Asymétrie d'information

> [!info] Résumé
> L'asymétrie d'information désigne la situation oÙ certains participants au marché possèdent une information privée que d'autres n'ont pas. Cette asymétrie est au coeur de la microstructure et justifie l'existence du spread comme rémunération du risque de sélection adverse.

## Définition

L'asymétrie d'information est une situation oÙ les participants à un marché n'ont pas le même accès à l'information sur la vraie valeur d'un actif. Certains acteurs (les "initiés" ou traders informés) détiennent une information privée qui n'est pas encore reflétée dans les prix publics. Cette asymétrie crée un avantage pour les initiés et un désavantage pour les autres participants.

L'asymétrie d'information est le fondement du problème de [[Sélection adverse]]. Le market maker qui passe un ordre ne sait pas si le originator est informé ou non. Il doit fixer ses prix pour se protéger contre le risque que sa contrepartie ait une information privée. Plus l'asymétrie est grande, plus le spread doit être large pour compenser ce risque.

L'asymétrie d'information existe à plusieurs niveaux. L'asymétrie "ex ante" (avant le trade) est le fait de ne pas savoir si le counterpartie est informé. L'asymétrie "ex post" (après le trade) est le fait de découvrir après coup que l'on a tradé avec un acteur mieux informé.

## Contexte et origine

L'étude de l'asymétrie d'information en finance provient des travaux de Akerlof (1970) sur le marché des lemons (voitures d'occasion). Akerlof a montré que l'asymétrie d'information peut faire disparaître un marché. Ce cadre a été appliqué à la microstructure par Glosten et Milgrom (1985).

Dans le contexte crypto, l'asymétrie d'information se manifeste de plusieurs façons. Les traders avec accès à des informations non publiques (sur une upgrade réseau, une liste de dumping par un gros holder, etc.) peuvent trade en profit de cette information. Les équipes de projet qui détiennent des tokens peuvent être tentées de trade avant des annonces publiques.

L'asymétrie d'information est amplifiée par la vitesse et la fragmentation des marchés crypto. Les acteurs avec une latence plus basse que les autres ont une advantage informationnelle même sans information privée. La "[[Latence des cotations]]" crée une asymétrie technologique.

## Mécanismes / caractéristiques / détails

**Sources d'asymétrie** : l'asymétrie d'information peut venir de plusieurs sources. L'information privée (insider trading) est la forme la plus grave. L'information publique qui n'est pas encore incorporée dans les prix est une forme plus Legitime. La supériorité analytique (mieux comprendre l'information publique) est une asymétrie basée sur les compétences.

**Impact sur les prix** : l'asymétrie d'information affecte la formation des prix. Dans le modèle de Glosten-Milgrom, le marché maker intègre le risque d'asymétrie dans son spread. Le prix d'équilibre reflète la distribution de l'information parmi les participants.

**Détection de l'asymétrie** : plusieurs métriques mesurent l'asymétrie d'information. Le PIN (Probability of Informed Trading) estime la proportion de trades initiés par des acteurs informés. Le order flow imbalance (OBI) capture la directionnalité du flux comme proxy de l'information. Le spread lui-même est une mesure de l'asymétrie perçue.

**Asymétrie et liquidité** : l'asymétrie d'information réduit la liquidité car les market makers exigent une prime de risque plus grande. Le spread s'élargit, la profondeur diminue, et les transactions sont moins fréquentes. C'est un coût social de l'asymétrie d'information.

**Technologie et asymétrie** : l'asymétrie informationnelle peut aussi être technologique. Les participants avec une latence plus basse voient les prix plus tôt et peuvent trade avant les autres. Cette asymétrie technologique est distincte de l'asymétrie informationnelle pure mais a des effets similaires.

## Nuances, critiques, limites

L'asymétrie d'information est un concept large. Pas toute asymétrie est thérapeutiquement problématique. Une asymétrie basée sur une analyse supérieure est合法的 et motive l'innovation financière. C'est l'asymétrie basée sur l'information privée (insider trading) qui est problématique.

La distinction entre information publique et privée n'est pas toujours claire. Les traders qui analysent des données publiques pour obtenir une information "privée" (car ils sont les seuls à avoir fait l'analyse) ne sont pas en infraction. C'est l'utilisation d'information non publique qui constitue l'insider trading.

L'asymétrie d'information peut être réduite par la réglementation. Les règles sur la divulgation, les فترة de "quiet" avant les annonces, et les sanctions pour insider trading réduisent l'asymétrie. Mais ces règles sont difficiles à faire appliquer dans l'écosystème crypto décentralisé et global.

## Liens et implications

L'asymétrie d'information est le fondement du modèle de [[Glosten-Milgrom]]. Le spread existe parce que le market maker ne peut pas distinguer les traders informés des non-informés.

La [[Toxicité du marché]] est une mesure de l'asymétrie d'information sur un marché. Plus le marché est toxique, plus l'asymétrie est grande, et plus les market makers exigent un spread large.

Les stratégies de [[Trading algorithmique]] doivent intégrer le risque d'asymétrie d'information. Les stratégies qui ne considerent pas ce risque peuvent être défavorisées face à des acteurs mieux informés.

## Sources

[^1]: Akerlof, George. "The Market for Lemons: Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84 (1970): 488-500.
[^2]: Glosten, Lawrence, and Paul Milgrom. "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics* 14 (1985): 71-100.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.