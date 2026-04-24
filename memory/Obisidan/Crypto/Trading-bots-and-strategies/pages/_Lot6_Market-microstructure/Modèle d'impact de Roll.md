---
titre: "Modèle d'impact de Roll"
type: théorie
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#théorie/microstructure, #modèle, #impact]
créé: 2026-04-21
liens_forts: ["[[Impact de marché]]", "[[Écart bid-ask]]", "[[Théorie de la microstructure]]", "[[Liquidité]]", "[[Slippage]]", "[[Prix d'exécution vs prix cot]]", "[[Glosten-Milgrom]]"]
liens_opposition: []
---

# Modèle d'impact de Roll

> [!info] Résumé
> Le modèle d'impact de Roll (Roll, 1984) propose que le spread bid-ask peut être estimé à partir de la covariance des changements de prix successifs. Il offre une méthode simple pour mesurer le coût de transaction implicite et le spread même quand les données de carnet ne sont pas disponibles.

## Définition

Le modèle de Roll (Roll, 1984) est un modèle de microstructure qui explique le spread bid-ask par le coût de opportunité de la liquidité. Roll propose que le spread est égal à deux fois la covariance (negative) entre les changements de prix successifs : spread ≈ 2 × |Cov(Δp_t, Δp_{t-1})|. Cette covariance capture le "round trip cost" du market maker.

L'intuition du modèle est que quand un market maker achète à un prix bas et vend à un prix haut, le prix suivant dépend de sa transaction précédente. Si le market maker vient d'acheter, le prix a monter (car il a absorbé la liquidité), et le changement de prix est négatif par rapport à la transaction suivante (car le spread doit être traversé à nouveau). La covariance négative capture ce effet.

Le modèle de Roll permet d'estimer le spread à partir des seules données de prix (OHLCV), sans avoir besoin des données de carnet d'ordres. Cela le rend particulièrement utile pour les marchés oÙ le livre d'ordres n'est pas accessible en détail.

## Contexte et origine

Le modèle a été développé par Richard Roll dans son article de 1984, "On the Stability of the Ask-Bid Spread". Roll cherchait une méthode pour estimer le spread même quand les données directes du carnet n'étaient pas disponibles. Son insight était d'utiliser la covariance des rendements comme proxy du spread.

Le contexte de l'époque est l'analyse empirique naissante des marchés financiers avec l'avènement des bases de données électroniques. Roll a montré que l'on pouvait extraire des informations sur le spread même sans données de niveau 2.

Dans l'écosystème crypto, le modèle de Roll est pertinent pour estimer les coûts de transaction sur des exchanges oÙ les données de carnet sont incomplètes ou coûteuses. Les researchers et les traders peuvent utiliser les données de prix pour estimer le spread effectif.

## Mécanismes / caractéristiques / détails

**Formule du spread** : le spread de Roll est estimé par : s = 2 × √(-Cov(Δp_t, Δp_{t-1})). La covariance doit être négative pour que la racine soit réelle. Si la covariance est positive ou nulle, le modèle ne s'applique pas (le marché peut être très liquide ou ne pas avoir de spread observab).

**Application empirique** : pour estimer le spread, on calcule les rendements successifs à partir des données de transaction, on estime la covariance, et on applique la formule. Plus le spread est grand, plus la covariance négative est forte.

**Limitations du modèle** : le modèle assume que le spread est dû uniquement à des coûts de opportunité. Il ne capture pas le risque de sélection adverse (contrairement au modèle de Glosten-Milgrom). Le modèle est plus approprié pour les marchés avec peu de traders informés.

**Extension aux crypto** : le modèle de Roll peut être appliqué aux crypto-actifs avec des données de transaction de haute fréquence. La covariance entre changements de prix consécutifs donne une estimation du spread implicite. Cette méthode est utilisée dans plusieurs études empiriques sur les marchés crypto.

## Nuances, critiques, limites

Le modèle de Roll suppose que le spread est entièrement dû au coût de la liquidité, ignorant la sélection adverse. Pour les marchés avec beaucoup de traders informés (comme le BTC pendant certaines périodes), le modèle peut sous-estimer le vrai spread.

Le modèle suppose aussi que les prix suivent un processus aléatoire avec une covariance négative stable. Si le marché change de régime (plus de volatilité, plus d'information), la covariance peut changer, rendant l'estimation obsolète.

La covariance peut être difficile à estimer avec peu de données. Les estimateurs à haute fréquence sont bruités et nécessitent beaucoup d'observations pour être précis.

## Liens et implications

Le modèle d'impact de Roll est utilisé pour estimer l'[[Impact de marché]] quand les données directes ne sont pas disponibles. La covariance des rendements donne une mesure du coût de transaction implicite.

Le spread estimé par Roll peut être utilisé pour calibrer les modèles de [[Slippage]]. Si le spread implicite est connu, on peut prédire le slippage d'un ordre de taille donnée.

Le modèle de Roll fait partie de la "[[Théorie de la microstructure]]" et complète les modèles de Glosten-Milgrom et de Kyle. Chaque modèle capture un aspect différent de la formation du spread.

## Sources

[^1]: Roll, Richard. "On the Stability of the Ask-Bid Spread." *Journal of Financial Economics* 14 (1984): 178-194.
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.