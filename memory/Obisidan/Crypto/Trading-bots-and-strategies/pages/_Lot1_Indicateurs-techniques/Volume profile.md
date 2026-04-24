---
titre: "Volume profile"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/volume, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Liquidité]]", "[[Analyse technique pour bots]]", "[[Market making]]"]
liens_opposition: []
---

# Volume profile

> [!info] Résumé
> Le Volume Profile est un indicateur qui montre le volume échangé à chaque niveau de prix sur une période donnée. Il identifie les zones de forte accumulation (high volume nodes) et de faible activité (low volume nodes), servant à identifier des zones de support/résistance basées sur le comportement des volume d'échanges.

## Définition

Le Volume Profile divise le prix en "bins" (intervalles de prix) et compte le volume échangé dans chaque bin. L'histogramme résultant montre où le plus gros du volume s'est concentré. Le "Point of Control" (POC) est le prix où le plus volume a été échangé.

Le Volume Profile diffère de l'histogramme de volume standard qui montre le volume par période temporelle (chaque barre). Ici, le volume est organisé par niveau de prix, permettant de voir à quels prix l'activité a été la plus intense.

Les zones de fort volume ("high volume nodes" ou HVN) sont des zones d'équilibre où le prix a tendance à passer beaucoup de temps. Les zones de faible volume ("low volume nodes" ou LVN) sont des zones de déséquilibre que le prix traverse rapidement.

## Contexte et origine

Le concept de Volume Profile a été popularisé par les traders du "Wyckoff" et du "Market Profile" dans les années 1980-1990. Le "Market Profile" a été développé par CBOT (Chicago Board of Trade) pour donner aux traders une vue structurée de comment le prix et le volume interagissent.

L'implémentation moderne du Volume Profile en trading algorithmique a émergé avec la puissance de calcul disponibilité. Les plateformes comme TradingView, Sierra Chart, et bookmap permettent maintenant de visualiser le volume profile en temps réel.

En crypto, le Volume Profile est particulièrement utile car certains échanges (comme Binance, Bybit) publient des données de "large trades" ou "block trades" permettant d'affiner l'analyse du profil de volume.

## Mécanismes et caractéristiques

Le "Point of Control" (POC) est le niveau de prix avec le plus volume. Il agit comme un aimant pour le prix. En range, le prix oscille autour du POC. En tendance, le prix s'en éloigne progressivement.

Les "High Volume Nodes" (HVN) sont des zones de support/résistance car le prix y passe beaucoup de temps. Un HVN proche du prix actuel devient une zone de consolidation potentielle. Le prix qui revient dans un HVN après un breakout peut "atterrir" et consolider.

Les "Low Volume Nodes" (LVN) sont des zones de faible activité que le prix traverse facilement. Après un breakout, le prix peut revenir vers un LVN pour tester cette zone avant de continuer dans la direction du breakout.

Le "Value Area" est la zone contenant typiquement 70% du volume total. Si le prix est au-dessus de la Value Area, le marché est en phase de distribution. Si le prix est en dessous, le marché est en phase d'accumulation.

## Nuances, critiques, limites

Le Volume Profile nécessite des données de tape (tick data) pour être précis. Beaucoup de sources de données crypto n'ont pas le niveau de détail nécessaire, rendant le calcul approximatif. Les données de niveau "1" (tick) sont nécessaires pour un calcul parfait.

Le Volume Profile est toujours en retard (lagging) car il se base sur des données passée. Les HVN passés ne prédisent pas automatiquement les HVN futurs. Le prix peut créer un nouveau profil après un changement de régime.

Le Volume Profile diffère selon les plateformes. Certaines utilisent des intervalles fixes (ex: chaque 10$), d'autres des intervalles dynamiques. Une stratégie de Volume Profile peut donner des résultats différents selon le paramètrage.

Le Volume Profile seul n'est pas un système de trading. Il identifie des zones, pas des points d'entrée. Les traders doivent le combiner avec d'autres outils (indicateurs, patterns) pour générer des signaux.

## Liens et implications

Le volume est la base du Volume Profile.

Les support et résistance identifiés par le Volume Profile sont basés sur le comportement passés des acteurs du marché.

L'[[order book dynamics]] et le Volume Profile sont liés. Un HVN correspond souvent à une zone où beaucoup d'ordres ont été exécutés. Cela peut correspondre à un ancien range où des positions ont été ouvertes. Le prix qui revient à ces niveaux peut voir une réaction des détenteurs.

## Sources