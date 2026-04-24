---
titre: "Value at Risk (VaR)"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
source_knowledge: internal
sources_count: 0
tags: [#concept/risque, #concept/VaR, #concept/métrique]
créé: 2026-04-21
liens_forts: ["[[Expected shortfall]]", "[[Conditional VaR]]", "[[Tail risk]]", "[[Gestion du risque]]", "[[Annualized volatility]]"]
liens_opposition: []
---

# Value at Risk (VaR)

> [!info] Résumé
> Le Value at Risk (VaR) estimate la perte maximale à un niveau de confiance donné (ex: 95%) sur un horizon temporel défini. C'est la mesure de risque la plus utilisée dans la finance mais elle a des limites critiques pour le trading crypto.

## Définition

Le Value at Risk (VaR) est une mesure de risque qui quantifie la perte potentielle d'un portefeuille. À un niveau de confiance de 95% et un horizon de 1 jour, un VaR de 1000€ signifie qu'il y a 95% de chance que la perte quotidienne soit inférieure à 1000€. La perte ne dépassera 1000€ que 5% du temps.

La définition formelle est : VaR_alpha = inf { l in R : P(Loss > l) <= 1-alpha }. En termes simples, c'est le seuil de perte qui ne sera dépassé que (100-alpha)% du temps.

Le VaR est ordinairement exprimé en euros ou en pourcentage du capital. Un VaR de 2% du capital signifie que 98% du temps, la perte sera inférieure à 2% du portefeuille.

Le VaR existe en plusieurs variantes : le VaR historique (basé sur les données passées), le VaR paramétrique (basé sur une distribution normale), et le VaR Monte Carlo (basé sur des simulations). Chaque méthode a ses avantages et inconvénients.

## Contexte et origine

Le VaR a été popularisé par JPMorgan avec leur système "RiskMetrics" dans les années 1990. La banque a publié leur méthodeologie en 1994, la rendant accessible à l'industrie. Le concept est rapidement devenu le standard de l'industrie pour la mesure du risque de marché.

Les accords de Bâle ont utilisé le VaR comme base pour les exigences de fonds propres des banques. Le "VaR réglementaire" utilise généralement un niveau de confiance de 99% et un horizon de 10 jours.

Malgré sa popularity, le VaR a révélé ses limites lors de la crise financière de 2008. Beaucoup d'institutions avaient des VaR qui semblaient acceptables mais sous-estimaient les risques de queue. Le défaut est que le VaR ne dit rien sur l'amplitude des pertes au-delà du seuil.

En trading algorithmique crypto, le VaR est largement utilisé mais doit être complété par d'autres mesures. La volatilité extreme et les événements de queue fréquente des crypto-actifs signifient que les hypothèses standards du VaR sont souvent violées.

## Mécanismes et caractéristiques

Le VaR historique est la méthode la plus simple. On utilise les rendements historiques pour construire une distribution empirique et on lit le percentile correspondant. Si sur 1000 jours de trading, le 50e pire jour a une perte de 500€, le VaR 95% est 500€.

Le VaR paramétrique suppose que les rendements suivent une distribution normale. On calcule la moyenne et l'écart-type, puis on utilise le quantile de la distribution normale. Un VaR 95% = moyenne + 1.65 × écart-type (pour les pertes). L'inconvénient est que les rendements crypto ne sont pas normaux.

Le VaR Monte Carlo génère des milliers de scénarios aléatoires en utilisant un modèle de volatilité stochastique. Cette méthode est plus flexible mais dépend du modèle utilisé et peut être computationally intensive.

Le VaR s'intègre dans les systèmes de[[Risk limits and circuit breakers]]. Si le VaR quotidien dépasse un seuil, le bot peut être arrêté automatiquement. Beaucoup de plateformes de trading imposent des limites de VaR.

## Nuances, critiques, limites

Le VaR ne dit rien sur la taille des pertes au-delà du seuil. Si le VaR 95% est de 1000€, les pertes dans les 5% de cas peuvent être de 1001€ ou de 100 000€. Cette limite a été fatale pour beaucoup d'institutions en 2008.

Le VaR assume que le passé est représentatif du futur. En crypto, les conditions de marché changent rapidement. Un VaR calculé sur 30 derniers jours peut ne pas refléter les conditions actuelles de marché.

L'hypothèse de distribution normale est souvent violée en crypto. Les rendements crypto ont des queues plus grasses que la normale, ce qui signifie que le VaR sous-estime systématiquement le risque de queue.

Le VaR n'est pas additif. Le VaR de deux positions combinées n'est pas égal à la somme des VaR individuels. Pour calculer le VaR d'un portefeuille, il faut utiliser la matrice de covariance ou une simulation.

## Liens et implications

Le [[Value at Risk]] est la.base de nombreuses autres mesures de risque. L'[[Expected shortfall]] (CVaR) complète le VaR en mesurant la perte moyenne au-delà du seuil VaR.

Le [[Tail risk]] est le risque que les pertes dépassent le VaR. Une stratégie peut avoir un bon VaR mais un tail risk élevé si les pertes au-delà du VaR sont très grandes.

La[[Gestion du risque]] utilise le VaR comme mesure centrale mais le complète avec d'autres métriques. L'[[Annualized volatility]] est utilisée dans le VaR paramétrique.

## Sources

[^1]: Jorion, "Value at Risk", McGraw-Hill (2006)
[^2]: Hull, "Risk Management and Financial Institutions", Wiley (2018)
