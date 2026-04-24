---
titre: "Tail risk"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/risque, #concept/queue, #concept/volatilité]
créé: 2026-04-21
liens_forts: ["[[Value at Risk]]", "[[Expected shortfall]]", "[[Annualized volatility]]", "[[Drawdown]]", "[[Risk of ruin]]"]
liens_opposition: []
---

# Tail risk

> [!info] Résumé
> Le tail risk mesure la probabilité et l'amplitude des pertes extrêmes au-delà d'un seuil normal. En crypto, ce risque est particulièrement élevé en raison de la volatilité extreme et des événements de marché erratiques.

## Définition

Le tail risk, aussi appelé "risque de queue", désigne le risque de pertes anormalement grandes qui se situent dans les "queues" de la distribution des rendements. Ces pertes sont si extrêmes qu'elles sont statistiquement improbables selon les modèles financiers standards mais se produisent néanmoins dans la réalité.

En termes simples, si une stratégie a un VaR 95% de 1000€, le tail risk est le risque que la perte dépasse significativement 1000€ (dans les 5% restants). Plus la queue de la distribution est "grass", plus le tail risk est élevé.

Le tail risk est mesuré par des indicateurs comme le[[Expected shortfall]] (CVaR), le Kurtosis (aplatissement de la distribution), et le Skewness (asymétrie). Un kurtosis élevé indique des queues plus grasses que la normale.

En trading algorithmique crypto, le tail risk est omniprésent. Les pumps and dumps, les flash crashes, et les events de liquidité extrême sont fréquents. Ces événements génèrent des rendements qui peuvent être 5, 10 ou 20 fois plus extrêmes que la volatilité quotidienne normale ne le prédit.

## Contexte et origine

Le concept de tail risk a gagné en importance après la crise financière de 2008. Auparavant, beaucoup d'institutions utilisaient des modèles basés sur la distribution normale qui sous-estimaient considérablement le risque de queue. Les pertes massives de cette période ont révélé ces lacunes.

Nassim Taleb, mathématicien et ancien trader, a popularisé le concept à travers ses livres "The Black Swan" et "Fooled by Randomness". Il argument que les événements extrêmes sont bien plus fréquents que les modèles standards ne le prédisent.

Les "[[Flash crash]]" sont des exemples parfaits de tail risk en action. Le flash crash de 2010 a vu le Dow Jones chuter de 1000 points en quelques minutes avant de se redresser. En crypto, des baisses de 30-50% en quelques heures se produisent périodiquement.

Les[[Risk limits and circuit breakers]] sont une réponse au tail risk. Les Bourses ont des disjoncteurs qui arrêtent le trading quand les baisses sont trop rapides, protégeant contre le tail risk excessif.

## Mécanismes et caractéristiques

Le kurtosis mesure à quel point les queues de la distribution sont plus "lourdes" que la normale. Une distribution normale a un kurtosis de 3. Si le kurtosis est de 10, les queues sont significativement plus grasses. En crypto, le kurtosis des rendements est souvent supérieur à 20.

La skewness mesure l'asymétrie de la distribution. Une skewness négative indique une queue plus longue à gauche (pertes extrêmes). En crypto, les rendements ont souvent une skewness négative significative en raison des crashs plus fréquents que les hausses similaires.

Le "Black Swan" de Taleb est un événement qui respecte trois critères : il est extrême (en dehors du domaine de attentes), il a un impact majeur, et il est rétrospectivement prévisible. Bitcoin est souvent considéré comme un black swan financier.

Les [[Stress testing|stress tests]] et [[Scenario analysis|scénarios de crise]] sont les outils principaux pour évaluer le tail risk. On simule des conditions de marché extrêmes et on mesure l'impact sur le portefeuille.

## Nuances, critiques, limites

Le tail risk est par définition difficile à quantifier précisément car il concerne des événements rares. Plus on essaie de le mesurer, plus l'incertitude est grande. Les modèles ne peuvent capturer que ce qu'ils connaissent.

La tentation de "ignorer" le tail risk car il est rare est dangereuse. En crypto, les événements "rares" se produisent plusieurs fois par an. Ce qui semble être une probabilité de 1% peut être en réalité 10% ou plus.

Le tail risk ne peut pas être complètement éliminé par la diversification. Certains risques systémiques affectent tous les actifs simultanément. Pendant les crises de liquidité, presque tous les actifs baissent ensemble.

Le[[Risk-reward ratio]] peut être excellent mais masquer un tail risk élevé. Une stratégie avec un excellent ratio mais des queues grasses peut avoir le même expected value qu'une stratégie avec un ratio médiocre mais des queues légères.

## Liens et implications

Le [[Tail risk]] est directement mesuré par l'[[Expected shortfall]] et le [[Value at Risk]]. Une bonne gestion du risque doit inclure des limites sur le tail risk, pas seulement sur le VaR standard.

Le [[Drawdown]] et ses métriques associées ([[Max drawdown duration]], [[Drawdown recovery time]]) capturent l'impact des événements de tail risk sur le capital. Un gros drawdown est souvent le résultat d'un tail risk qui s'est matérialisé.

Le [[Risk of ruin]] est le risque ultime de tail. Même si le tail risk se matérialise rarement, son impact peut être la ruine complète si la position sizing n'est pas appropriée.

## Sources

[^1]: Taleb, "The Black Swan", Random House (2007)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
