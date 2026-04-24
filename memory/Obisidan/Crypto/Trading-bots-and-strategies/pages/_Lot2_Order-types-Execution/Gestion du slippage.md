---
titre: "Gestion du slippage"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/slippage, #gestion/risque, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Slippage]]", "[[Ordre au marché]]", "[[Ordre à cours limité]]", "[[Impact de marché]]", "[[Ordre iceberg]]"]
liens_opposition: []
---

# Gestion du slippage

> [!info] Résumé
> La gestion du slippage désigne l'ensemble des techniques et stratégies visant à minimiser, contrôler et anticiper l'écart entre le prix attendu et le prix d'exécution réel d'un ordre.

## Définition

La gestion du slippage est le processus par lequel un trader ou un [[Trading algorithmique|algorithme de trading]] contrôle l'écart entre le prix auquel l'ordre est censé s'exécuter et le prix réel d'exécution. Elle englobe la measurement, la prévision, la minimisation et l'allocation du slippage comme coût de transaction.

Le slippage est une forme de coût de transaction implicite, différente des frais explicites (commissions, frais de plateforme). Il représente la difference entre le prix que le trader pensait payer et le prix réel, causée par le mouvement du marché pendant la latence et par l'insuffisance de liquidité.

Une bonne gestion du slippage est essentielle à la performance de toute stratégie de trading, particulièrement celles qui tradent fréquemment ([[Haute fréquence]], [[Market making]]) ou avec des  de position importants. Un slippage mal géré peut transformer une stratégie profitable en stratégie perdante.

## Contexte et origine

La gestion du slippage est devenue un domaine spécialisé avec le développement du trading algorithmique dans les années 1990-2000. Avant cela, le slippage était largement ignoré ou approximé par une constante arbitraire ("je prends 0,1 % de slippage").

Dans l'écosystème crypto, la volatilité élevée et les fréquentes période de faible liquidité rendent la gestion du slippage encore plus critique. Les [[Flash crash]] et les pump-and-dump sur les altcoins peuvent générer des slippage de plusieurs pour cent en quelques secondes.

Les [[Trading bot]]s sophistiqués intègre une  du slippage dans leur processus de décision, l'utilisant comme input pour le calcul de la taille de position et le filtering des trades.

## Mécanismes / caractéristiques / détails

**Measurement du slippage** : le slippage est mesuré en valeur absolue (USD, BTC) ou en pourcentage. Pour une position de 10 BTC exécutée à un prix moyen de 60 500 USD alors que le prix au moment de la décision était 60 000 USD, le slippage est de 500 USD ou 0,83 %. La tracking de ce slippage par trade permet de construire une distribution historique du slippage, utilisée pour calibrer les modèles.

**Prévision du slippage** : les models de slippage les plus courants utilisent la liquidité disponible (profondeur du carnet), la taille de l'ordre relative à cette liquidité, et la volatilité du marché. Un modèle simple : slippage attendu = taille de l'ordre / profondeur du carnet × volatilité. Les models plus sophistication intègrent la correlation entre taille de l'ordre et movement du marché ([[Impact de marché]]).

**Techniques de minimisation** :

1. **Fractionnement (order splitting)** : au lieu d'un gros ordre, utiliser un [[TWAP (Time-Weighted Average Price)|TWAP]] ou une [[Exécution VWAP|stratégie VWAP]] pour espacer les exécutions et réduire l'impact à chaque moment. L'ordre [[Ordre iceberg]] est une forme de fractionnement automatique.

2. **Utilisation d'ordres limités** : un [[Ordre à cours limité]] avec un prix limite fixant le prix maximum accepté permet d'éviter le slippage extrême. Si le prix bouge trop, l'ordre n'est simplement pas exécuté, elimine le slippage mais introduit un risque de non-exécution.

3. **Choix du type d'ordre** : le [[Ordre post-only]] garantit de ne pas prendre de liquidité (donc pas de slippage à la hausse), mais renonce à l'exécution si le prix n'est pas favorable. C'est un arbitrage slippage vs probabilité d'exécution.

4. **Timing** : éviter d'exécuter juste avant ou après des événements à forte volatilité (annonces macro, expirations de contrats) réduit le slippage anticipé. Les [[Sentiment analysis pour trading|analyses de sentiment]] peuvent aider à identifier ces périodes.

**Allocation du slippage dans le coat total** : le slippage doit être intégré dans le calcul du coat total de transaction (frais + slippage). Pour une stratégie à faible fréquence, le slippage peut être négligeable. Pour une stratégie à haute fréquence, le slippage peut être le poste de coat le plus important.

## Nuances, critiques, limites

**Slippage positif vs négatif** : le slippage n'est pas toujours défavorable. Si le prix bouge favorablement entre la décision et l'exécution (prix d'achat baisse, prix de vente augmente), le slippage est "positif" (meilleur que prévu). Cependant, les modèles de slippage sont généralement calibrés sur le slippage moyen, qui est légèrement négatif en tendance (le prix tend à continuer à bouger dans la direction du trade).

**Adversarial slippage** : sur des marchés où d'autres acteurs peuvent anticiper vos ordres (notamment via les [[Données de niveau 2]]), le slippage effectif peut être pire que le slippage statistique. C'est le cas des stratégies où l'on trade contre des acteurs mieux informés.

**Slippage sur [[Ordre stop-limite]]** : quand un [[Ordre stop-limite]] se déclenche, il se transforme généralement en ordre au marché (ou limite). Le slippage sur le déclenchement du stop peut être important si la liquidité est insuffisante au niveau du stop. C'est un slippage "caché" que beaucoup de traders neconsiderent pas.

**Backtesting et slippage** : une erreur fréquente est d'ignorer le slippage dans les backtests, ou de le modeliser de manière trop optimiste. Un backtest sans slippage surestime systématique la performance. L'approche correcte est d'intégrer un slippage basé sur la liquidité historique et la taille de l'ordre.

## Liens et implications

Le slippage est un  majeur du coat de transaction pour les stratégies à haute fréquence ([[Haute fréquence]]). Une stratégie qui génère 0,05 % de profit par trade avec des frais de 0,04 % et un slippage moyen de 0,03 % est perdante. La gestion du slippage est donc critical pour la rentabilité.

L'[[Impact de marché]] et le slippage sont liés : l'impact de marché est la déviation du prix causée par l'ordre, le slippage est la différence entre prix côté et prix d'exécution. Les deux sont des facets du même phénomène vue de angles différents.

Le [[Backtesting]] correct doit utiliser des données de tick ou au minimum des bougies OHLCV avec un modèle de slippage. Les plateformes comme [[Backtesting]] permette généralement de configurer un slippage constant ou basé sur la liquidité.

## Sources

[^1]: Almgren, Robert, and Neil Chriss. "Optimal execution of portfolio transactions." *Journal of Risk* 3 (2000): 5-39.
[^2]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^3]: Kissell, Robert. *The Science of Algorithmic Trading and Portfolio Management*. Academic Press, 2013.
