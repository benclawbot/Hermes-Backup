---
titre: "Modèle de Glosten-Milgrom"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#théorie/microstructure, #modèle, #information]
créé: 2026-04-21
liens_forts: ["[[Sélection adverse]]", "[[Écart bid-ask]]", "[[Incitations du market maker]]", "[[Théorie de la microstructure]]", "[[Découverte du prix]]", "[[Liquidité]]", "[[Toxicité du marché]]"]
liens_opposition: []
---

# Modèle de Glosten-Milgrom

> [!info] Résumé
> Le modèle de Glosten-Milgrom (1985) décrit comment un market maker fixe ses prix dans un marché avec information asymétrique. Il montre que le spread bid-ask émerge du risque de sélection adverse et comment les prix convergent vers la vraie valeur à mesure que les ordres sont exécutés.

## Définition

Le modèle de Glosten-Milgrom est un cadre théorique foundational en microstructure qui décrit l'équilibre d'un marché oÙ un market maker interagit avec des traders qui peuvent être informés ou non. Le market maker ne connaît pas la vraie valeur de l'actif mais met à jour ses beliefs séquentiellement en fonction des ordres qu'il reçoit. Le spread émerge comme compensation pour le risque que le counterpartie soit informé.

Le modèle suppose un actif avec une vraie valeur (v) qui peut être haute (v_H) ou basse (v_L). Avant le trading, le market maker fixe un prix d'achat (bid) et un prix de vente (ask). Si un trader achète, le market maker infère qu'il y a une probabilité plus élevée que la vraie valeur soit haute, et ajuste son prix en conséquence. Ce processus séquentiel fait converger le prix vers la vraie valeur.

Le spread dans ce modèle est determined par la probabilité de trading avec un acteur informé (le PIN). Plus cette probabilité est haute, plus le spread est large. Le market maker exige une prime de risque pour compenser le risque de sélection adverse.

## Contexte et origine

Le modèle a été développé par Lawrence Glosten et Paul Milgrom dans leur article seminal de 1985, "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders". Ce travail est l'un des plus cités en microstructure financière et a fondé une grande partie de la théorie moderne du market making.

Le contexte de l'époque était l'avènement du trading électronique et une attention croissante sur le rôle de l'information dans la formation des prix. Les modèles précédents ne considéraient pas l'asymétrie d'information entre les participants au marché.

Dans l'écosystème crypto, le modèle de Glosten-Milgrom est directement applicable. Les teneurs de marché sur les exchanges crypto font face au même problème de sélection adverse que les specialists du modèle original. Le PIN (Probability of Informed Trading) utilisé dans les marchés crypto dérive directement du cadre conceptuel de Glosten-Milgrom.

## Mécanismes / caractéristiques / détails

**Calcul séquentiel du prix** : le market maker reçoit un ordre. S'il s'agit d'un achat, il met à jour ses beliefs : la probabilité que l'actif vaille v_H augmente. Il ajuste son prix à la hausse. S'il s'agit d'une vente, il ajuste à la baisse. Ce processus de mise à jour bayésienne continue avec chaque ordre, le prix convergeant vers la vraie valeur.

**Spread d'équilibre** : le spread est déterminé par le risque de sélection adverse. Si le market maker pense qu'il y a une probabilité α qu'un ordre vienne d'un trader informé, il fixe son spread pour que son espérance de profit soit positive même si l'ordre vient d'un acteur informé. Le spread s'élargit quand α augmente.

**Prix et information** : le modèle montre que le prix reflète l'information à travers les ordres. Plus le nombre d'ordres augmente, plus le prix devient précis. Si le market maker reçoit plusieurs achats consécutifs, il infère que l'information privée indique une valeur haute.

**PIN (Probability of Informed Trading)** : cette métrique, popularisée par Easley et al., mesure la proportion d'ordres initiés par des traders informés. Elle est estimée à partir des données de transaction et peut être utilisée pour calibrer les modèles de market making.

**Équilibre du spread** : dans l'équilibre Glosten-Milgrom, le spread est choisi pour que le market maker soit indifferent entre trade avec un trader non informé et ne pas trade du tout. Tout élargissement du spread réduirait le volume d'affaires avec les traders non informés ; tout resserrement exposerait le market maker à des pertes systématiques avec les traders informés.

## Nuances, critiques, limites

Le modèle de Glosten-Milgrom suppose que l'information des traders informés est binaire (ils savent si la vraie valeur est haute ou basse). En réalité, l'information est continue et les traders ont des degrés d'information différents. Les extensions du modèle traitent des cas plus généraux.

Le modèle ne considère pas le risque d'inventaire du market maker, qui est une source séparée du spread. En pratique, le spread reflète à la fois le risque de sélection adverse et le risque d'inventaire. Des modèles combinant les deux (comme ceux de Stoll et Ho-Stoll) sont plus complets.

Le modèle assume un seul market maker. Dans les marchés modernes avec plusieurs market makers en competition, les résultats peuvent différer. La competition tend à réduire le spread, mais le risque de sélection adverse reste.

## Liens et implications

Le modèle de Glosten-Milgrom est le cadre théorique pour comprendre la [[Toxicité du marché]] et la [[Sélection adverse]]. Ces concepts derivent directement du modèle et de ses extensions.

Le [[Écart bid-ask]] dans ce modèle est justifié par le risque de sélection adverse. Sans ce risque, le spread serait quasi nul. Les teneurs de marché doivent être rémunérés pour ce risque, ce qui crée le spread.

Les stratégies de [[Market making]] utilisent implicitement le modèle de Glosten-Milgrom. Les ajustements de prix en fonction du flux d'ordres, l'élargissement du spread quand la toxicité augmente, et la gestion du PIN sont autant d'applications du modèle.

## Sources

[^1]: Glosten, Lawrence, and Paul Milgrom. "Bid, Ask and Transaction Prices in a Specialist Market with Heterogeneously Informed Traders." *Journal of Financial Economics* 14 (1985): 71-100.
[^2]: Easley, David, and Maureen O'Hara. "Information and the Cost of Capital." *Journal of Finance* 59 (2004): 1553-1583.
[^3]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.