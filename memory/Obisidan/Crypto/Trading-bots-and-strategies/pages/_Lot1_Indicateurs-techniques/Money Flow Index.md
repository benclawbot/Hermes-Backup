---
titre: "Money Flow Index"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Backtesting]]", "[[Trading bot]]", "[[Volume profile]]", "[[OBV (On Balance Volume)]]", "[[Chaikin Money Flow]]", "[[Volatility scaling]]"]
liens_opposition: []
---

# Money Flow Index

> [!info] Résumé
> Le Money Flow Index (MFI) est un indicateur de momentum de volume qui combine le prix typique (high+low+close)/3 et le volume pour identifier les conditions de surachat et de survente. Il est souvent appelé le "RSI du volume".

## Définition

Le Money Flow Index (MFI) a été créé par Gene Quong et Avrum Soudack. Il combine le concept du RSI (mesure de la vitesse des changements de prix) avec le volume pour créer un indicateur de momentum qui inclut le volume.

Le calcul commence avec le "Typical Price" (Prix typique) = (High + Low + Close) / 3. Le Raw Money Flow = Typical Price × Volume. Le Money Flow est positif si le Typical Price actuel est supérieur au Typical Price précédent, négatif sinon.

Le Ratio de Money Flow = Somme du Money Flow positif sur N périodes / Somme du Money Flow négatif sur N périodes. Le MFI = 100 - (100 / (1 + Ratio)).

Le MFI oscille entre 0 et 100. Un MFI au-dessus de 80 indique une condition de surachat. Un MFI en dessous de 20 indique une condition de survente. Ces niveaux peuvent être ajustés selon l'actif.

## Contexte et origine

Gene Quong et Avrum Soudack ont créé le MFI dans les années 1980-1990. L'objectif était de créer un indicateur quicombine le volume avec un concept similaire au RSI pour avoir une vue plus complète du momentum.

Le MFI est souvent appelé le "RSI pondéré par le volume" ou le "RSI du volume". Il utilise la même formule que le RSI mais avec le Typical Price plutôt que le Close, et le volume comme ponderation.

En crypto, le MFI est particulièrement utile car le volume est un élément crucial du marché. Les cryptos avec fort volume ont des dynamiques différentes de celles avec faible volume. Le MFI capture cette dimension.

## Mécanismes et caractéristiques

Le MFI au-dessus de 80 signale une condition de surachat où le prix a connu une montée rapide avec fort volume. Une lecture au-dessus de 90 peut indiquer un top imminent. Le retournement peut venir quand le MFI sort de la zone extreme.

Le MFI en dessous de 20 signale une condition de survente où le prix a chuté rapidement avec fort volume. Une lecture en dessous de 10 peut indiquer un bottom imminent. Mais le retournement peut être retardé.

Les divergences MFI-prix sont des signaux forts. Une divergence baissière (prix en hausse mais MFI en baisse) signale une faiblesse de la tendance malgré la hausse du prix. Une divergence haussière (prix en baisse mais MFI en hausse) signale une force cachée.

Le croisement de la ligne 50 peut être utilisé comme signal de momentum. Le MFI au-dessus de 50 = momentum haussier. Le MFI en dessous de 50 = momentum baissier.

## Nuances, critiques, limites

Le MFI est un indicateur retardataire car il utilise le prix et le volume passés. Il ne prédit pas les mouvements futurs mais confirme les tendances en cours.

Le MFI peut rester en zone extreme (au-dessus de 80 ou en dessous de 20) pendant longtemps en marché trending fort. Trader le MFI comme si un retournement était imminent peut causer des pertes si la tendance continue.

Le volume seul peut être manipulé sur certains exchanges de crypto, particulièrement sur les altcoins avec faible liquidité. Un MFI basé sur des données de volume peu fiables peut donner des signaux faux.

Le backtesting du MFI en crypto montre des résultats corrects mais pas exceptionnels. Il fonctionne mieux comme indicateur de confirmation, en combinaison avec d'autres outils comme le RSI ou les moyennes mobiles.

## Liens et implications

Le RSI et le MFI mesurent des concepts similaires mais le MFI inclut le volume.

L'OBV et le MFI utilisent le volume différemment.

Le volume est au cœur du MFI.

## Sources