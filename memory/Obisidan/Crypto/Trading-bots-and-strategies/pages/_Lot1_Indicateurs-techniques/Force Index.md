---
titre: "Force Index"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: deep-cut
source_knowledge: internal
sources_count: 0
tags: [#concept/indicateur, #concept/momentum, #méthode/technique]
créé: 2026-04-21
liens_forts: ["[[RSI Divergence strategy]]", "[[Backtesting]]", "[[Trading bot]]"]
liens_opposition: []
---

# Force Index

> [!info] Résumé
> Le Force Index, créé par Alexander Elder, combine la direction du prix, l'ampleur du changement, et le volume en un seul oscillateur. Il mesure la "force" behind les mouvements de prix pour identifier les retournements de tendance et la force du momentum.

## Définition

Le Force Index a été créé par Alexander Elder et présenté dans son livre "Trading for a Living" (1993). Elder définit la "force" d'un mouvement de marché comme une combinaison de trois éléments : la direction du changement de prix, l'ampleur du changement, et le volume.

La formule : Force Index = (Clôture actuelle - Clôture précédente) × Volume.

Si le prix monte (Clôture > Clôture précédente), le Force Index est positif. Si le prix descend, le Force Index est négatif. L'ampleur du changement et le volume déterminent la magnitude du Force Index.

Un grand mouvement avec beaucoup de volume produit un Force Index très positif (forte pression acheteuse) ou très négatif (forte pression vendeuse). Un petit mouvement avec peu de volume produit un Force Index proche de zéro.

## Contexte et origine

Alexander Elder est un trader et auteur américain né à Leningrad (aujourd'hui Saint-Pétersbourg). Il a développé le Force Index pour surmonter les limitations des indicateurs de momentum qui n'intègrent pas le volume.

Elder croyait que le volume est le "fuel" du mouvement de prix. Un mouvement de prix sans volume est un mouvement faible, susceptible de s'inverser. Le Force Index capturait cette intuition.

Le Force Index fait partie du système de trading "Triple Screen" d'Elder, qui utilise trois écrans de temps et plusieurs indicateurs pour confirmer les trades.

## Mécanismes et caractéristiques

Le Force Index est généralement affiché comme un histogramme avec une EMA (par défaut 13 périodes) qui l lisse. L'EMA du Force Index indique la tendance de fond de la force du marché.

Le croisement de l'EMA du Force Index par le Force Index lui-même est le signal principal. Quand le Force Index croise au-dessus de son EMA et est positif, c'est un signal d'achat. Quand il croise en dessous et est négatif, c'est un signal de vente.

Les divergences entre le prix et le Force Index sont des signaux forts. Un prix qui fait un nouveau haut mais un Force Index qui fait un nouveau haut plus bas signale une faiblesse de la tendance haussière.

Le Force Index peut être utilisé pour confirmer les breakouts. Un breakout au-dessus de la résistance avec un Force Index positif et en hausse confirme la force du mouvement.

## Nuances, critiques, limites

Le Force Index est très sensible au volume. Les jours avec des volumes exceptionnellement élevés (annonces, events) peuvent créer des pics du Force Index qui ne reflètent pas une tendance durable.

Le Force Index sans lissage (EMA) est très bruité. La version lissée (EMA 13 par défaut) est plus exploitable mais reste un indicateur à court terme. Pour le long terme, une EMA plus longue peut être nécessaire.

Le Force Index ne donne pas de niveaux de surachat/survente fixes. Contrairement au RSI, il n'y a pas de seuils objectives pour déterminer quand le marché est "trop" acheteur ou vendeur.

Le [[backtesting]] du Force Index montre qu'il fonctionne mieux quand il est utilisé comme indicateur de confirmation que comme signal principal. Une stratégie qui combine une direction (moyennes mobiles) avec la force (Force Index) peut être plus robuste.

## Liens et implications

Le momentum mesuré par le Force Index combine direction, ampleur, et volume.

Le volume est une composante essentielle du Force Index.

Le RSI peut être utilisé en combinaison avec le Force Index.

## Sources