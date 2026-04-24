---
titre: "Half-Kelly sizing"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#méthode/position, #méthode/sizing, #concept/kelly]
créé: 2026-04-21
liens_forts: ["[[Kelly criterion practical limits]]", "[[Kelly criterion]]", "[[Position sizing]]", "[[Risk of ruin]]", "[[Volatility scaling]]"]
liens_opposition: []
---

# Half-Kelly sizing

> [!info] Résumé
> Le Half-Kelly sizing recommande de ne risquer que la moitié de la taille de position calculée par le Kelly criterion parfait. Cette réduction mineure de croissance réduit significativement le risque de ruine et la volatilité du capital.

## Définition

Le Half-Kelly sizing est une méthode de dimensionnement qui utilise la moitié de la taille de position calculée par le Kelly criterion. Si le Kelly parfait suggère de risquer 20% du capital, le Half-Kelly suggère 10%.

L'idée sous-jacente est que le Kelly criterion parfait assume des conditions idéales (estimation exacte de l'expectance, distribution normale des rendements, possibilité de reinvestir immédiatement) qui ne sont pas réunies en pratique.

En réduisant la taille de moitié, on obtient environ 75% de la croissance exponentielle du Kelly plein selon les calculs de Cover et Thomas. Cependant, la variance des rendements est réduite de 75%, ce qui rend la stratégie beaucoup plus stable.

Mathématiquement, si f* est le fraction Kelly plein, le Half-Kelly utilise f*/2. Certaines implementations utilisent le "Fractional Kelly" avec dautres fractions (Third-Kelly, Quarter-Kelly) selon le profil de risque.

Le Half-Kelly est particulièrement pertinent pour les[[trading bot]]s crypto qui opèrent dans un environnement très volatil avec des conditions changeantes. Le demi-Kelly offre une marge de sécurité contre les erreurs destimation.

## Contexte et origine

Le Half-Kelly a été recommandé par Edward Thorp, le mathématicien qui a popularisé le Kelly criterion pour le blackjack et le trading. Thorp constata que le Kelly plein fonctionnait mais générait une volatilité excessive.

Les recherches théoriques ont montré que le Half-Kelly capture une part significative de la croissance asymptotique tout en réduisant drastiquement le risque. C'est le meilleur compromis entre croissance et sécurité pour la plupart des investisseurs.

En pratique, beaucoup de fonds et traders professionnels utilisent des versions du Kelly fractionné. Le consensus de l'industrie semble être entre le demi-Kelly et le quart-Kelly pour les applications réelles.

Le Half-Kelly est particulièrement pertinent pour le trading crypto où l'incertitude sur les estimées de performance est plus grande que dans les marchés traditionnels. Une stratégie crypto peut perdre son edge plus rapidement, rendant les estimées moins fiables.

## Mécanismes et caractéristiques

Le calcul du Half-Kelly se fait en deux étapes : d'abord calculer f* avec la formule Kelly standard, puis diviser par 2. En pratique, on peut aussi utiliser des tables ou des calculateurs.

Le benefit principal du Half-Kelly est la réduction de variance. Si le Kelly plein a une variance V, le Half-Kelly a une variance de V/4 tout en conservant environ 75% de la croissance. C'est un échange très favorable.

La[[Volatility scaling]] peut être combinée avec le Half-Kelly pour ajuster dynamiquement l'exposition. Si la volatilité augmente, on réduit l'exposition tout en maintenant la fraction Kelly constante.

Le Half-Kelly est plus robuste aux erreurs destimation. Si vous surestimez l'expectance de 20%, le Kelly plein sera très trop agressif tandis que le Half-Kelly restera dans des limites acceptables.

Les règles empiriques courantes :
- Half-Kelly pour les stratégies établies avec un historique long
- Quarter-Kelly pour les stratégies nouvelles ou plus risquées
- Full Kelly rarement utilisé sauf en conditions très contrôlées

## Nuances, critiques, limites

Le Half-Kelly est toujours relativement agressif pour certains profils de risque. Les investisseurs conservateurs pourraient préférer le Quarter-Kelly ou même des sizing plus conservateurs.

Le Half-Kelly assume que les estimées Kelly sont correctes. Si l'expectance est surestimée significativement, même le Half-Kelly peut être trop agressif. La qualité des estimées est cruciale.

Le benefit du Half-Kelly en termes de growth vs risque depend de la distribution des rendements. Pour des distributions à queues grasses (comme en crypto), le benefit relatif peut être different.

La constante "2" dans le Half-Kelly est arbitraire. Certains praticiens utilisent des facteurs plus précis basés sur leur tolérance au risque. Ce qui compte est que la fraction soit significativement réduite par rapport au Kelly plein. Le consensus dans l'industrie est que le Half-Kelly est un bon point de départ, avec des ajustements possibles selon le profil de risque et la volatilité de la stratégie.

## Liens et implications

Le[[Half-Kelly sizing]] est une application directe du[[Kelly criterion practical limits]]. Il sagit de la limite pratique la plus recommandée pour la plupart des stratégies.

Le[[Kelly criterion]] fournit la formule théorique de départ. Le Half-Kelly est une application simple de cette formule avec une constante de 0.5.

Le[[Position sizing]] basé sur le Half-Kelly est plus robuste que le Kelly plein. Le[[Risk of ruin]] est significativement réduit, ce qui permet de trader plus sereinement.

La[[Volatility scaling]] peut être utilisée avec le Half-Kelly pour maintenir une exposition constante en termes Kelly. Beaucoup de bots modernes combinent les deux approches.

## Sources

[^1]: Thorp, "The Kelly Criterion in Blackjack, Sports Betting, and the Stock Market", UCLA (2000)
[^2]: Cover, "Elements of Information Theory", Wiley (2006)
