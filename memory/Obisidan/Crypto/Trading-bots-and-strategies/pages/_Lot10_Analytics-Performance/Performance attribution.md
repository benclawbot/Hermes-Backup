---
titre: "Performance attribution"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/attribution, #concept/performance, #concept/decomposition]
créé: 2026-04-21
liens_forts: ["[[Métriques de performance]]", "[[Sharpe ratio]]", "[[Drawdown]]", "[[Alpha et Beta]]", "[[Ratio de Sharpe]]", "[[Taux de réussite]]", "[[Facteur de profit]]"]
liens_opposition: []
---

# Performance attribution

> [!info] Résumé
> La performance attribution décompose les rendements d'une stratégie en composantes attribuables à différents facteurs, décisions ou sources de profit. Elle permet de comprendre pourquoi une stratégie performe et où se trouve son edge véritable.

## Définition

La performance attribution (ou attribution de performance) est le processus d'analyse qui identifie et mesure les contributions de différentes décisions ou facteurs au rendement total d'une stratégie de trading. Elle répond à la question : "Pourquoi cette stratégie a-t-elle généré ce rendement, et lequel de ses composants y a contribué le plus ?"

L'attribution permet de séparer le alpha généré par les décisions du style (exposition au marché) et de la chance. Une stratégie qui génère 50% de rendement alors que le marché a fait 40% a un alpha de 10%. Mais est-ce que cet alpha vient de la sélection d'actifs, du timing, du risk management, ou juste de la chance ?

Les frameworks d'attribution décomposent typiquement :
- **Allocation** : contribution de la répartition du capital entre différentes positions
- **Sélection** : contribution du choix des actifs dans chaque catégorie
- **Timing** : contribution de la décision de_ENTRY et exit
- **Interaction** : contribution croisée entre allocation et sélection

## Contexte et origine

La performance attribution vient de la gestion de fonds traditionnelle. Les investisseurs voulaient comprendre si les rendements des gérants venaient de skill ou de l'exposition au marché (beta). Le modèle de Brinson des années 1980 a seminalement formalisé l'attribution dans ce contexte.

En trading algorithmique, l'attribution a été adaptée pour décomposer les P&L en contributions par stratégie, par instrument, par timeframe, ou par signal. Les bots multi-stratégies особенно benefit de cette décomposition pour identifier quelles stratégies contribuent et lesquelles détruisent de la valeur.

L'émergence des plateformes de crypto trading avec des dashboards de performance détaillés a popularisé l'attribution même chez les traders retail. Comprendre d'où vient le profit est aussi important que le montant du profit.

## Mécanismes et caractéristiques

### Modèle de Brinson enrichi

Le modèle original de Brinson décompose le rendement en :
- Allocation tactique (différence entre allocation目标和实际)
- Sélection de titres (différence entre le rendement des titres sélectionnés et du benchmark)
- Interaction (effet croisé)

En contexte crypto, cela se adapte naturellement : allocation entre BTC/ETH/alts, sélection внутри de chaque catégorie, timing des entrées.

### Attribution par stratégie

Pour un bot avec plusieurs stratégies (trend following, mean reversion, arbitrage), l'attribution identifie la contribution de chacune :
- Stratégie A : +25% de contribution
- Stratégie B : +15% de contribution
- Stratégie C : -5% de contribution (destruction de valeur)

Cette décomposition permet de decide : garder A,加大了 B, et eliminar C.

### Attribution par signal

Pour une stratégie basée sur des indicateurs techniques, l'attribution peut décomposer par signal :
- Signal RSI : contribution de +8%
- Signal MACD : contribution de +12%
- Signal Bollinger Bands : contribution de -3%
- Timing (entry/exit windows) : contribution de +5%

Cette analyse révèle quels signaux ajoutent vraiment de la valeur et lesquels pourraient être éliminés ou modifiés.

### Métriques d'attribution

Le **Return Contribution** mesure le P&L absolu ou relatif généré par chaque composante.

Le **Risk Contribution** mesure quelle fraction du risque total vient de chaque composante. Une stratégie peut contribuer beaucoup au rendement mais peu au risque, ou vice versa.

Le **Contribution to Sharpe** aggregate rendement et risque en une seule métrique par composante.

## Applications pratiques

### Rebalancement de stratégie

L'attribution guide le rebalancing entre stratégies. Si une stratégie de [[Grid trading]] contribue pour 5% du rendement mais 40% du risque (drawdowns fréquents), elle pourrait être surpondérée par rapport à son risk-adjusted contribution.

### Identification du edge

L'attribution révèle le edge véritable. Une stratégie de [[Arbitrage]] qui semble générer 10% pourrait en realité bénéficier de l'exposition au BTC qui a fait 8%. L'alpha net serait alors seulement 2%.

### Communication aux investisseurs

Pour les bots avec des investors externos, l'attribution fournit une transparency sur les sources de rendement. "Nous avons généré 45% de rendement dont 30% via l'arbitrage d'actifs illiquides et 15% via la gestion du risque timing" est plus informatif qu'un simple "45% de rendement".

## Nuances, critiques, limites

L'attribution est sensible aux choix de benchmark et de modèle. Définir le "bon" benchmark en crypto est difficile — le BTC seul, un indice multi-actifs, ou le risque zéro ?不同的 choix mènent à des décompositions différentes.

La corrélation entre facteurs complique l'attribution. Si deux stratégies sont hautement corrélées, une partie de la contribution de chacune est "doublée". La décomposition doit tenir compte de la covariance entre composantes.

L'attribution rétrospective peut être trompeuse. Une composante qui a contribué dans le passé peut ne plus contribuer dans le futur. L'attribution aide à comprendre mais ne prédict pas.

Le "[[FOMO]] psychology" peut être identifié via l'attribution. Si les trades pris "par émotion" contribuent négativement de manière consistente, cela révèle un probleme d'execution ou de discipline plutôt que de stratégie.

## Liens et implications

La [[Performance attribution]] s'appuie sur les [[Métriques de performance]] pour quantifier les contributions. Le [[Sharpe ratio]] par stratégie ou par composante est une métrique clé.

Le [[Drawdown]] attribution identifie quand et où les drawdowns se produisent. Une décomposition par stratégie permet de comprendre si le drawdown vient d'une stratégie spécifique ou d'une корреляция entre stratégies.

L'[[Alpha et Beta]] framework sépare le rendement due à l'exposition au marché (beta) du vrai alpha (skill). Une stratégie avec un beta proche de 1 et un alpha de 0 génère le même rendement que le marché buy-and-hold sans value Ajoutée.

Le [[Ratio de Sharpe]] par composante d'attribution permet de comparer l'efficacité risque-rendement de chaque stratégie ou signal. Une composante avec un Sharpe de 0.5 est moins efficiente qu'une avec 2.0.

## Sources

[^1]: Brinson, "Determinants of Portfolio Performance", Financial Analysts Journal (1986)
[^2]: Bacon, "Practical Portfolio Performance Attribution", Wiley (2008)
