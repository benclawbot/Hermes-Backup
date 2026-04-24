---
titre: "Illiquidité d'Amihud"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/illiquidité, #microstructure, #-mesure]
créé: 2026-04-21
liens_forts: ["[[Liquidité]]", "[[Impact de marché]]", "[[Volatilité]]", "[[Market making]]", "[[Écart bid-ask]]", "[[Risque d'inventaire]]", "[[Théorie de la microstructure]]"]
liens_opposition: []
---

# Illiquidité d'Amihud

> [!info] Résumé
> La mesure d'illiquidité d'Amihud (Amihud, 2002) quantifie la sensibilité du prix aux volume de transaction. Elle est calculée comme le ratio du rendement absolu au volume en dollars, et mesure le coût de transaction d'un actif indépendamment du spread.

## Définition

La mesure d'illiquidité d'Amihud (aussi appelée "Amihud liquidity ratio" ou "ILLIQ") mesure combien le prix d'un actif bouge en réponse aux volume de transaction. Mathématiquement, ILLIQ = (1/D) × Σ(|r_d| / VOL_d), oÙ r_d est le rendement journalier et VOL_d est le volume de transaction en dollars ce jour-là, et la somme est sur D jours. Cette mesure capture le "price impact" par unité de volume.

Un actif très liquide a un ILLIQ faible : même avec un gros volume, le prix bouge peu. Un actif illiquide a un ILLIQ élevé : un petit volume peut déplacer considérablement le prix. Par exemple, une action avec un ILLIQ de 0.1 signifie qu'un volume de 1 million de dollars déplace le prix de 0.1% en moyenne.

L'avantage de la mesure Amihud est qu'elle ne nécessite que des données de prix et de volume (disponibles pour presque tous les actifs), contrairement à d'autres mesures de liquidité qui requièrent des données de carnet d'ordres. Cela la rend particulièrement utile pour les études empiriques sur de long horizons.

## Contexte et origine

La mesure a été développée par Yakov Amihud dans son article de 2002, "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects". Amihud cherchait une mesure de liquidité qui pouvait être calculée facilement à partir de données disponibles, pour étudier la relation entre liquidité et rendements des actions.

Le contexte de l'époque est la recherche sur les facteurs de risque en finance. Amihud et d'autres chercheurs ont montré que la liquidité est un facteur de risque : les actifs illiquides offrent des rendements plus élevés en moyenne pour compenser leur illiquidité.

Dans l'écosystème crypto, la mesure d'Amihud est utilisée pour comparer la liquidité des différents crypto-actifs. Les traders peuvent utiliser cette mesure pour choisir les actifs les plus liqu des pour exécuter des ordres de taille, ou pour identifier les actifs oÙ le market making est le plus rentable.

## Mécanismes / caractéristiques / détails

**Calcul de l'ILLIQ** : pour chaque jour, on calcule le ratio du rendement absolu au volume en dollars. On fait la moyenne de ce ratio sur une période (généralement 20 ou 60 jours pour les actions, moins pour les crypto à cause de la volatilité). Plus le ratio est élevé, plus l'actif est illiquide.

**Interprétation** : l'ILLIQ peut être interprété comme le "cost per unit of volume" pour déplacer le prix de 1%. Un actif avec ILLIQ = 0.01 signifie qu'il faut 1% du volume journalier moyen pour déplacer le prix de 1%.

**Time-series properties** : l'ILLIQ varie dans le temps. Il augmente généralement pendant les périodes de crise (liquidité dégradée) et diminue pendant les périodes calmes. Cette variation temporelle est exploitée par les stratégies de trading de liquidité.

**Cross-sectional properties** : les actifs avec différents ILLIQ. Les petits capitalisations ont généralement un ILLIQ plus élevé que les grandes capitalisations. En crypto, le BTC a un ILLIQ très faible comparé aux altcoins moins négociés.

**Limitations** : l'ILLIQ est une mesure approximative. Elle suppose que le prix impact est linéaire et constant, ce qui n'est pas toujours vrai. Elle ne distingue pas entre les différentes sources d'illiquidité (spread vs profondeur vs résilience).

## Nuances, critiques, limites

L'ILLIQ ne capture pas tous les aspects de la liquidité. Un actif peut avoir un ILLIQ faible mais un spread élevé (si les market makers fixent un spread large même avec un impact faible). L'ILLIQ capture l'impact mais pas le coût immédiat du trading.

La mesure suppose que le volume est exogène (qu'il cause le prix, pas l'inverse). En réalité, le prix et le volume sont joints, ce qui peut créer un biais dans l'estimation. Les chercheurs ont proposé des méthodes pour corriger ce biais.

L'ILLIQ est plus reliable pour les actifs à volume élevé. Pour les crypto-actifs à faible volume, l'estimation peut être très bruitée et peu fiable. Une alternative pour ces actifs est d'utiliser le spread comme mesure de liquidité.

## Liens et implications

L'ILLIQ est utilisé pour évaluer les coûts de transaction implicites dans les stratégies de [[Trading algorithmique]]. Les algorithmes qui tradent des actifs avec un ILLIQ élevé doivent s'attendre à un impact plus grand et doivent fractionner leurs ordres davantage.

L'ILLIQ fait partie des facteurs de risque dans les modèles d'alpha quantitatif. Les stratégies qui achètent des actifs avec un ILLIQ faible (liquidité élevée) peuvent être différentes de celles qui achètent des actifs avec un ILLIQ élevé (et un risque de liquidité).

La [[Volatilité]] et l'ILLIQ sont liés. Les périodes de volatilité élevée ont généralement un ILLIQ plus élevé car le risque de marché making augmente. Les traders doivent être conscients de cette corrélation.

## Sources

[^1]: Amihud, Yakov. "Illiquidity and Stock Returns: Cross-Section and Time-Series Effects." *Journal of Financial Markets* 5 (2002): 31-56.
[^2]: Pastor, Lubos, and Robert Stambaugh. "Liquidity Risk and Expected Stock Returns." *Journal of Political Economy* 111 (2003): 642-685.
[^3]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.