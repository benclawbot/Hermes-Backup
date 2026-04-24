---
titre: "Kelly criterion practical limits"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/kelly, #concept/position, #concept/sizing]
créé: 2026-04-21
liens_forts: ["[[Kelly criterion]]", "[[Half-Kelly sizing]]", "[[Trade expectancy]]", "[[Position sizing]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Kelly criterion practical limits

> [!info] Résumé
> Le Kelly criterion mathématique parfait donne la taille de position théoriquement optimale mais est souvent trop agressif en pratique. Les limites pratiques (Half-Kelly, Quarter-Kelly) réduisent le risque tout en conservant une majority de l'avantage de croissance.

## Définition

Le Kelly criterion parfait calcul la taille de position qui maximise la croissance exponentielle du capital. La formule est : f* = (W × R - (1 - W)) / R où W est le win rate et R est le[[Risk-reward ratio]].

LeKelly criterion complet peut demander de risquer 50%, 70% ou même 100% du capital sur un seul trade dans certaines conditions. Bien que mathématiquement optimal pour la croissance à long terme, ce sizing est intenable pour la plupart des traders.

Les limites pratiques existent car le Kelly criterion assume que vous pouvez reinvestir vos profits immédiatement et que les rendements suivent une distribution particulière. En pratique, ces hypothèses ne holdent pas.

Le "Half-Kelly" (demi-Kelly) suggère de ne risquer que la moitié de la taille Kelly. Le "Quarter-Kelly" suggère un quart. Ces réductions diminuent la croissance mais rendent le risque de[[Risk of ruin]] beaucoup plus acceptable.

Une stratégie avec Kelly f* = 30% mais appliquée à Half-Kelly (15%) aura une croissance un peu plus lente mais sera beaucoup plus stable. Le drawdown sera réduit et le recovery time plus court.

## Contexte et origine

Le Kelly criterion a été développé par John Larry Kelly Jr. en 1956 dans son article "A New Interpretation of Information Rate". Le concept a été popularisé pour le gambling et ensuite pour le trading par Edward Thorp dans les années 1960-70.

Thorp a utilisé le Kelly criterion pour le blackjack (comptage de cartes) et plus tard pour les marché financiers. Il a confirmé que le Kelly fonctionnait en pratique mais conseillait le Half-Kelly pour réduire la volatilité.

Les limites pratiques ont été formalisées par la suite par des praticiens et académiques. Les principales raisons de réduire le Kelly sont : l'incertitude sur l'expectance vraie, les risques de queue, et la volatilité émotionnelle.

En trading algorithmique crypto, le Kelly criterion est souvent utilisé comme point de départ mais rarement appliqué pleinement. La volatilité extreme du marché crypto rend le Kelly plein encore plus risqué.

## Mécanismes et caractéristiques

Le Kelly criterion full peut être très sensible aux estimations de W et R. Une small erreur dans l'estimation de l'expectance peut provoquer une grosse erreur dans la taille optimale.

Une estimation de expectance trop optimiste (surévaluée) peut conduire à un sizing trop agressif. En crypto où les conditions changent vite, cette erreur est fréquente.

Le Kelly criterion assume la possibilité de reinvestir immédiatement les profits. En pratique, les traders ont des constraints de temps et de liquidité qui limitent cette capacité.

Les formules pratiques :
- Kelly complet : f* = (W × R - (1 - W)) / R
- Half-Kelly : f* / 2
- Quarter-Kelly : f* / 4

Ces formules peuvent être arrondies pour plus de simplicite. Un Kelly de 23% devient 11.5% au Half-Kelly, arrondi à 10% ou 12% en pratique.

## Nuances, critiques, limites

Le Kelly criterion est optimal pour la croissance à long terme mais pas pour tous les objectifs. Si vous avez un horizon court ou des contraintes de drawdown, le Kelly plein peut être inappropriate.

La variance du Kelly est très élevée. Une application Kelly penuh peut montrer des rendements espectacular mais avec des drawdowns très profonds et une forte volatilité. Ce n'est pas tolerable pour la plupart des investisseurs.

Le Kelly assume des rendements qui suivent une distribution log-normale. En crypto, les distributions ont des queues plus grasses, ce qui signifie que le vrai risque du Kelly plein est encore plus grand que les calculs ne l'indiquent.

L'expectance utilisée dans le Kelly doit être exacte. Une stratégie avec une expectancy de 0.1R et une autre avec 0.15R donneront des taillers très différentes. Une small erreur d'estimation peut avoir un impact considérable. C'est pourquoi il est recommandé de sous-estimer légèrement l'expectance plutôt que de la surestimer. Utiliser une expectancy conservatrice avec le Kelly plein ou le Half-Kelly donne des résultats plus robustes en pratique.

## Liens et implications

Le[[Kelly criterion practical limits]] sont une application du[[Kelly criterion]] théorique. La page dedicated au Kelly criterion explique la théorie complète.

Le[[Half-Kelly sizing]] est la limite pratique la plus recommandée. Elle capture environ 75% des benefits du Kelly avec beaucoup moins de risque.

La[[Trade expectancy]] utilisée comme input du Kelly doit être aussi précise que possible. Une expectancy surestimée mènera à un sizing trop aggressif.

Le[[Risk of ruin]] est le critère qui justifie l'utilisation des limites pratiques. Le Kelly plein peut avoir un risk of ruin de 20-30% sur certains horizons, tandis que le Half-Kelly peut avoir moins de 5%.

## Sources

[^1]: Thorp, "The Mathematics of Gambling", Lancer (1984)
[^2]: Maclean, "The Kelly Criterion", World Scientific (2010)
