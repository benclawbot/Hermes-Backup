---
titre: "Ordre stop-loss"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #gestion/risque, #trading/bases]
créé: 2026-04-21
liens_forts: ["[[Gestion du risque]]", "[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Slippage]]", "[[Position sizing]]"]
liens_opposition: []
---

# Ordre stop-loss

> [!info] Résumé
> Un ordre stop-loss est un ordre conditionnel conçu pour limiter les pertes d'une position ouverte en déclenchant une vente (ou un achat pour une position courte) lorsque le prix atteint un seuil prédéfini.

## Définition

Un ordre stop-loss est un mécanisme de sortie automatique qui devient un ordre au marché ou à cours limité dès que le prix de l'actif atteint ou dépasse un niveau de déclenchement (le "stop price"). Il ne protège pas de position : il attend passivement que le marché atteigne le seuil défavorable, puis exécute passivement une liquidation au prix du marché au moment du déclenchement.

Le stop-loss est l'outil central de toute [[Gestion du risque]] disciplinée. Il transforme une perte potentielle illimitée en perte known et prédéterminée, transformant le profil de risque d'une position de "queue de distribution" en profil borné. En cela, il est inséparable du concept de [[Risk-reward ratio]] et du [[Position sizing|dimensionnement de position]] qui détermine combien risquer par trade.

Il existe deux variantes principales : le stop-loss classique qui se transforme en ordre au marché au déclenchement, et le [[Ordre stop-limite]] qui se transforme en ordre limité, offrant plus de contrôle sur le prix d'exécution mais introduisant un risque de non-exécution.

## Contexte et origine

Le stop-loss tel que nous le connaissons émerge dans les années 1930 sur les marchés d'actions américains, formalisé par des traders comme Jesse Livermore qui insistait sur l'importance de couper ses pertes rapidement. Dans le contexte moderne du [[Trading algorithmique]], le stop-loss est implémenté de manière entièrement automatisée via l'[[API d'échange]], permettant une exécution sans intervention humaine même pendant les périodes où le trader n'est pas devant son écran.

Sur les marchés crypto 24/7, le stop-loss prend une importance accrue. Un marché qui chute de 30 % en quelques heures pendant la nuit ne laisse aucune chance à un trader sans stop-loss automatisé. Des événements comme le [[Flash crash]] de mars 2020 ou les ventes massives de week-end sur Bitcoin illustrent pourquoi l'automatisation du stop-loss est considérée comme un pilier du [[Trading bot]] sérieux.

## Mécanismes / caractéristiques / détails

**Déclenchement et exécution** : quand le prix marché atteint ou passe le stop price, l'ordre se transforme en ordre au marché. L'exécution n'est pas garantie au prix du stop — elle dépend de la [[Liquidité]] disponible à ce moment. Si le marché a gap à travers le niveau de stop sans liquidité, l'exécution peut se faire à un prix significativement inférieur. C'est le phénomène de "stop hunting" ou de [[Slippage]] négatif majeur.

**Stop-loss en tant que takes de liquidité** : au déclenchement, le stop-loss émet un ordre au marché qui consomme la liquidité du carnet. Plus le livre d'ordres est peu profond au niveau du stop, plus l'exécution sera desfavorable. Les [[Market making|market makers]] et les [[Haute fréquence|algorithmes HFT]] peuvent "chasser les stops" en retirant temporairement leur liquidité aux niveaux clés pour déclencher les stop-loss et ramasser les ordres au marché qui suivent.

**Calcul du stop optimal** : la position du stop-loss dépend de la volatilité du marché et de la taille de la position. L'[[ATR (Average True Range)]] est souvent utilisé pour calibrer les stops : un stop à 2×ATR donne une marge de bruit de marché tout en limitant la perte. La [[Standard Deviation]] est aussi employée dans des approches plus statistiques. Le [[Position sizing]] et le stop sont liés : risquer 2 % du capital par trade avec un stop à 5 % du prix implique une position de 40 % du capital.

**Stop-loss glissant (trailing stop)** : le [[Trailing stop]] est une extension dynamique du stop-loss qui suit le prix à une distance fixe ou proportionnelle à la hausse. Il verrouille les gains sans fixer de plafond de profit théorique. Cf. page dédiée.

**Stop-loss et temps** : dans les stratégies de [[Stratégie de momentum]], un stop-loss serré peut sortir d'un mouvement majeur avant qu'il ne se développe. Inversement, un stop trop lâche transforme une perte unique en drawdown prolonged. Le calibrage du stop est un compromis entre protection et bruit de marché, souvent testé via le [[Backtesting]].

## Nuances, critiques, limites

**Stop hunting et manipulation** : les niveaux de stop-loss sont prévisibles car visible dans les carnets d'ordres (pour ceux qui ont accès aux [[Données de niveau 2]]). Les acteurs avec des positions importantes peuvent délibérément conduire le prix vers ces zones pour déclencher une cascade de ventes et racheter à moindre prix. Ce phénomène est décrit dans le [[Smart money concept]] et le [[Flash crash]].

**L'exécution ne vaut pas le prix du stop** : un stop-loss garantit la sortie du marché, pas le prix. Sur des marchés avec peu de [[Liquidité]] ou en période de volatilité extrême, le prix d'exécution peut être très inférieur au prix du stop. Le [[Slippage]] sur stop-loss déclenché peut être plusieurs fois la perte "théorique" calculée.

**Dynamique macro du stop-loss** : dans un marché fortement tendance, les stop-loss collective des nombreux traders créent une dynamique de vente mécanique qui amplifie les mouvements. Cette interdépendance est étudiée dans le cadre de la microstructure et de la [[Liquidité]] systémique.

## Liens et implications

Le stop-loss est indissociable du [[Risk-reward ratio]] : un stop de 5 % avec un take-profit de 15 % donne un ratio risque/récompense de 1:3. L'analyse technique appliquée via l'[[Analyse technique pour bots]] utilise des niveaux de support/résistance pour positionner les stops de manière intelligente.

Les stratégies de [[Stratégie de mean reversion]] utilisent des stops plus larges que les stratégies de momentum, car les mouvements contre la moyenne peuvent être importants. Le [[Bollinger Bands breakout]] utilise les bandes comme niveaux de stop dynamiques.

La relation stop-loss / [[Drawdown]] est directe : un stop mal calibré peut transformer une série de pertes modérées en drawdown sévère qui nécessite un rendement considérable pour récupérer le capital perdu.

## Sources

[^1]: Tharp, Van K. *Trade Your Way to Financial Freedom*. McGraw-Hill, 1998.
[^2]: Livermore, Jesse. *Reminiscences of a Stock Operator*. George H. Doran, 1923.
[^3]: Lo, Andrew W., and A. Craig MacKinlay. *A Non-Random Walk Down Wall Street*. Princeton University Press, 1999.
