---
titre: "Sharpe ratio"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/ratio, #concept/rendement, #concept/risque]
créé: 2026-04-21
liens_forts: ["[[Gestion du risque]]", "[[Annualized volatility]]", "[[Risk-reward ratio]]", "[[Sortino ratio]]", "[[Calmar ratio]]"]
liens_opposition: []
---

# Sharpe ratio

> [!info] Résumé
> Le Sharpe ratio mesure le rendement ajusté au risque d'une stratégie en comparant le surplus de rendement par rapport au taux sans risque à sa volatilité. Plus le ratio est élevé, meilleure est la performance risque-corrected.

## Définition

Le Sharpe ratio, aussi connu sous le nom de ratio de Sharpe, est une métrique qui évalue le rendement d'un investissement par rapport à son risque. Il a été développé par William Forsyth Sharpe en 1966 et est devenu l'une des mesures les plus utilisées dans la finance quantitative.

La formule standard est : (Rendement du portefeuille - Taux sans risque) / Écart-type des rendements. Un ratio de 1.0 signifie que le portefeuille génère autant de rendement que le risque pris. Un ratio de 2.0 indique une performance deux fois meilleure relative au risque, et ainsi de suite.

Dans le contexte des [[trading bot]]s crypto, le Sharpe ratio permet de comparer des stratégies avec des rendements différents mais des profils de risque distincts. Une stratégie avec 100% de rendement annuelle mais 50% de volatilité a un Sharpe de 2.0, ce qui est excellent. Une stratégie avec 200% de rendement mais 100% de volatilité a un Sharpe de 2.0 également.

## Contexte et origine

William Forsyth Sharpe, futur prix Nobel d'économie, a publié son ratio dans le Journal of Business en 1966. Le concept s'inscrit dans la lignée du Capital Asset Pricing Model (CAPM) qu'il a contribué à développer. L'idée centrale : les investisseurs doivent être compensés pour le risque qu'ils prennent, pas seulement pour le rendement absolu.

Le Sharpe ratio est devenu le standard de l'industrie pour évaluer les gestionnaires de fonds. Les fonds spéculatifs et les fonds d'investissement rapportent leur Sharpe ratio dans leurs présentations aux investisseurs. Cette métrique permet de comparer des apples to apples entre stratégies.

En trading algorithmique, le Sharpe ratio est utilisé dès la phase de [[backtesting]] pour sélectionner les stratégies. Un Sharpe supérieur à 1.0 est souvent considéré comme acceptable, supérieur à 2.0 comme bon, et supérieur à 3.0 comme excellent. Cependant, ces seuils varient selon les classes d'actifs.

## Mécanismes et caractéristiques

Le calcul du Sharpe ratio en trading crypto nécessite plusieurs ajustements. Premièrement, le taux sans risque est souvent omis ou remplacé par un taux de référence (ex: rendement en stablecoin). Deuxièmement, l'écart-type doit être calculé sur des rendements logarithmiques pour refléter la nature continue du trading.

La fréquence des rendements impacte significativement le ratio. Un Sharpe annualisé de 2.0 calculé sur des rendements quotidiens n'est pas comparable directement à un Sharpe de 2.0 calculé sur des rendements hebdomadaires. Il est recommandé de toujours annualiser le ratio pour comparabilité.

Le Sharpe ratio suppose une distribution normale des rendements. Cette hypothèse est problématique en crypto où les rendements suivent souvent des distributions à queues grasses. Un crypto actif qui "crash" 30% en une journée a un Sharpe ratio basé sur la volatilité historique mais sous-estime le risque de queue.

En pratique, les traders algorithmiques suivent le Sharpe ratio en temps réel pendant le [[forward testing]]. Un ratio qui decline progressivement peut indiquer que la stratégie perd son edge ou que les conditions de marché ont changé. Le[[trading algorithmique]] moderne intègre des alertes automatiques quand le Sharpe passe en dessous d'un seuil défini.

## Nuances, critiques, limites

Le Sharpe ratio ne captures pas le risque de queue. Deux stratégies avec le même Sharpe peuvent avoir des profils de risque très différents. Une stratégie avec des rendements stables mais régulières et une stratégie avec des rendements erratiques peuvent avoir le même Sharpe mais des comportements très différents en cas d'événement extrême.

Le Sharpe ratio est sensitif à la fréquence d'échantillonnage. Plus la fréquence est élevée, plus la volatilité mesurée est haute (à cause du bruit microstructure), ce qui understates le ratio. À l'inverse, une fréquence trop basse (ex: mensuelle) peut sous-estimer la vraie volatilité.

Le ratio est moins utile pour comparer des stratégies dans des marchés différents. Un marché en tendance (comme le bull market 2020-2021) génère naturellement des Sharpe plus élevés car les rendements sont plus cohérents. Un marché en range ou en crash génère des Sharpe plus faibles même pour une stratégie fondamentalement valide.

Le sorting par Sharpe ratio dans le [[backtesting]] peut mener à une sur-optimisation. Si vous testez 100 stratégies et sélectionnez les 10 meilleures par Sharpe, vous avez un biais de sélection qui inflation artificiellement le ratio. Ce problème est connu sous le nom de "pseudo-SHARPE" ou "futur bias".

## Liens et implications

Le Sharpe ratio est indissociable de la [[Gestion du risque]] pour évaluer si le rendement compense le risque pris. L'[[Annualized volatility]] est le dénominateur du ratio, donc comprendre la volatilité est essentiel pour interpréter le Sharpe.

Le [[Sortino ratio]] est une variante qui ne pénalise que la volatilité négative, offrant une vision plus accurate du risque. Le [[Calmar ratio]] utilise le max drawdown comme mesure de risque plutôt que la volatilité, ce qui est pertinent pour les stratégies de trading crypto à forte volatilité.

Le [[Risk-reward ratio]] est un concept lié mais plus simple qui compare le gain moyen aux pertes moyennes. Le Sharpe ratio peut être vu comme une version sophistiquée et normalisée de ce concept.

## Sources

[^1]: Sharpe, "Mutual Fund Performance", Journal of Business (1966)
[^2]: Investopedia, "Sharpe Ratio Definition", https://www.investopedia.com/articles/07/sharpe.asp (consulted 2026)
