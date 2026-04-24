---
titre: "Ancrage"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#psychologie/cognitif, #concept/biais, #concept/prix]
créé: 2026-04-20
liens_forts: ["[[Biais cognitifs]]", "[[Biais de confirmation]]", "[[Coût irrécouvrable]]", "[[Psychologie du trading]]", "[[Finance comportementale]]", "[[Perception du risque]]", "[[Effet de dotation]]"]
liens_opposition: []
---

# Ancrage

> [!info] Résumé
> L'ancrage est la tendance à se fier excessivement à la première information reçue (ancre) lors de prises de décision ultérieures. En trading, il cause des évaluationserronées des prix et des niveaux de support/résistance basés sur des références initiales arbitraires.

## Définition

L'ancrage est un biais cognitif où l'individu s'appuie fortement sur la première information ou valeur qu'il recoit (l'ancre) pour prendre des décisions ultérieures, même quand cette information est arbitraire ou non pertinente. Une fois qu'une ancre est établie, elle influence toutes les estimations subséquentes.

En trading, l'ancrage se manifeste de nombreuses façons. Un trader qui a acheté Bitcoin à 60 000$ anchors sa perception du "juste prix" à ce niveau et interprète tout prix inférieur comme une "occasion" d'achat, même si les fondamentaux ont changé. Le prix d'achat devient une référence irrationnelle pour évaluer la valeur actuelle.

L'ancre peut aussi être le plus haut historique, le prix d'introduction en bourse, ou tout autre référence numérique qui a frappé le trader lors de sa première exposure au marché. Ces ancres sont souvent arbitraires mais exercent une influence durable sur les jugements.

## Contexte et origine

Le phénomène d'ancrage a été démontré experimentalement par Tversky et Kahneman en 1974. Dans leur expérience, des participants devaient estimer le pourcentage de pays africains aux Nations Unies après avoir été exposés à un nombre aléatoire (spin of a wheel). Ceux qui avaient vu un nombre élevé donnaient des estimations plus élevées.

La première étude académique sur l'ancrage en contexte financier a été menée par George Malkenhorst et ses collègues dans les années 1990, montrant que les prix de détail étaient influenced par des prix suggérés même quand ces derniers étaient arbitraires.

En finance comportementale, l'ancrage contribue aux anomalies de marché comme le "level effect" où les prix tendent à rester près de nombres ronds ou de niveaux significatifs. Les [[support/résistance]] techniques fonctionnent en partie parce que beaucoup de traders anchor à ces niveaux.

## Mécanismes et caractéristiques

L'ancrage opere à travers plusieurs mécanismes psychologiques : l'ajustement insuffisant et la persistante de l'ancre dans la mémoire à long terme.

L'ajustement insuffisant est le mécanisme principal. Quand on doit estimer une valeur incertaine, on part de l'ancre et on s'ajuste mentalement. Mais cet ajustement est typiquement insuffisant : on reste trop proche de l'ancre originale, surtout quand l'incertitude est élevée.

En trading, un trader qui voit BTC à 45 000$ et qui se souvient de son ancien achat à 60 000$ interprète le prix actuel comme "pas cher" simplement parce qu'il est bien en dessous de l'ancre. L'ancre de 60 000$ agit comme un reference point irrationnel.

Les nombres ronds sont des ancres particulièrement puissantes. Les niveaux de prix comme 50 000$, 100 000$, ou 10 000$ agissent comme des aimants psychologiques. Le [[risk-reward ratio]] est souvent évalué par rapport à ces ancres plutôt que par rapport à des niveaux techniquement significatifs.

L'ancre peut être créée par le marché lui-même. Si Bitcoin a historiquement tradé dans une range entre 20 000$ et 40 000$ pendant deux ans, les traders anchor à ces niveaux et les interprètent comme "normaux", méprisant les movements au-delà de cette range.

## Nuances, critiques, limites

L'ancrage n'est pas toujours irrationnel. Si la première information était en effet informative, s'appuyer dessus peut être rationnel. Le biais aparece quand l'ancre est arbitraire ou non pertinente pour la décision actuelle.

La force de l'ancre augmente avec l'expertise. Paradoxalement, les traders expérimentés sont parfois plus susceptibles à certains types d'ancrage，因为他们 ont plus de connaissances à partir desquelles ancrer, ce qui peut renforcer le biais.

L'ancrage intergénérationnel peut créer des anomalies de marché persistantes. Si toute une génération de traders anchor à un certain niveau de prix, ce niveau devient une self-fulfillingprophecy car beaucoup de traders prendront des décisions similaires à ce niveau.

Pour mitiger l'ancrage, les traders peuvent utiliser des règles de décision basées sur des données objectives plutôt que des impressions. Les [[trading bot|trading bots]] automatisent les décisions sans être affectés par l'ancrage, éliminant cette source d'erreur humaine.

## Liens et implications

L'[[ancrage]] est un sous-type des [[biais cognitifs]] qui affecte particulièrement le jugement sur les prix. Il est lié au [[biais de confirmation]] (on ancre à notre première analyse et on cherche des confirmations) et à la [[surconfiance]] (on ancre à nos propres estimations).

Le [[coût irrécouvrable]] est un concept lié : l'ancre du prix d'achat influence la décision de vendre une position perdante. Le trader ancre à son prix d'achat et ne veut pas "admettre une perte".

L'[[effet de dotation]] amplifie l'ancrage car les traders valorisent davantage ce qu'ils possèdent, especially si le prix d'achat (ancre) est élevé. La [[perception du risque]] est aussi affectée par l'ancrage à des niveaux de prix historiques.

Les [[indicateurs de sentiment]] sont influencés par l'ancrage collectif du marché : quand le prix est très en dessous du plus haut historique, le sentiment peut rester baissier même si le prix a monté car l'ancre du plus haut reste présente.

## Sources

[^1]: Tversky & Kahneman, "Judgment under Uncertainty", Science (1974)
[^2]: Chapman & Johnson, "Anchoring in Price Negotiations", Journal of Applied Psychology (1994)
[^3]: Edmans, "Jawboning in the Market", Quarterly Journal of Economics (2007)