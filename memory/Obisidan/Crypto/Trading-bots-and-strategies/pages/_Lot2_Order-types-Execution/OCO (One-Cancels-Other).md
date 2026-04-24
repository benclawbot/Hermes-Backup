---
titre: "OCO (One-Cancels-Other)"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #gestion/risque]
créé: 2026-04-21
liens_forts: ["[[Ordre stop-loss]]", "[[Ordre take-profit]]", "[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[Gestion du risque]]"]
liens_opposition: []
---

# OCO (One-Cancels-Other)

> [!info] Résumé
> L'OCO est un type d'ordre composite qui place simultanément un ordre limit et un ordre stop. Lorqu'un ordre est exécuté, l'autre est automatiquement annulé, garantit qu'un seul des deux sera rempli.

## Définition

L'ordre OCO (One-Cancels-Other) est une structure conditionnelle qui combine deux ordres : un [[Ordre à cours limité]] et un [[Ordre stop-limite]], placé simultanément. L'idée est de définir deux scénarios de sortie pour une position — un objectif de profit et un plafond de perte — en s'assurant que seul l'un des deux sera déclenché. Des que l'un s'exécute, l'autre est automatiquement et immédiatement annulé.

L'OCO résout le problème fondamental du trader : il ne peut pas être à la fois dans le marché (en attendant que le prix monte) et hors du marché (avec un profit ou une perte). En plaçant simultanément le take-profit et le stop-loss, le trader définit à l'avance les deux issues possibles de sa position, éliminant la tentation de "tenir plus longtemps" ou de "couper trop tôt".

Sur le plan technique, l'OCO est généralement implémenté comme deux ordres liés par un identifiant commun côté exchange. Certaines plateformes qui proposent "bracket orders" ou "advanced orders" sont des variantes de ce concept.

## Contexte et origine

L'OCO émerge dans les années 1990 avec l'avènement des plateformes de trading électroniques qui permettent de programmer des relations entre ordres. Auparavant, un trader devait surveiller simultanément plusieurs écrans et annuler manuellement l'ordre non déclenché quand l'un était exécuté.

Dans l'écosystème crypto, les ordres OCO sont standard sur les exchanges majeurs : Binance propose des "Stop-Limit Orders" qui peuvent être configurées en paires OCO, FTX (maintenant defunct) avait popularisé ce format, et la plupart des [[API d'échange]] modernes supportent ce type de structure. Les [[Trading bot]]s comme [[3Commas]] et [[Bitsgap]] permettent de configurer des stratégies OCO pour des sessions de trading automatisées.

## Mécanismes / caractéristiques / détails

**Structure de l'OCO** : l'ordre OCO se compose typiquement d'un ordre principal (la position ouverte) et de deux ordres liés — un [[Ordre take-profit]] (ordre limit au-dessus du prix d'entrée pour une position longue) et un [[Ordre stop-loss]] (ordre stop en dessous du prix d'entrée). Quand le prix atteint le take-profit, l'ordre limit est exécuté et le stop est annulé. Quand le prix touche le stop, l'ordre stop est exécuté et le take-profit est annulé.

**Prix de déclenchement et prix limite** : dans un OCO sur Binance par exemple, le take-profit est un ordre à cours limité avec un prix limite, et le stop-loss est un ordre stop-limite avec un prix de déclenchement et un prix limite. Le prix limite du stop est important car il définit le prix d'exécution réel si le marché traverse rapidement le niveau de déclenchement.

**Cas d'utilisation classique** : un trader achète 1 BTC à 60 000 USD et place un OCO avec un take-profit à 66 000 USD (limite de vente) et un stop-loss à 57 000 USD (stop de vente). Si le prix monte à 66 000, le take-profit s'active, la position est fermée avec un profit de 6 000 USD, et le stop à 57 000 est automatiquement annulé. Si le prix chute à 57 000, le stop s'active, la perte de 3 000 USD est cristallisée, et le take-profit est annulé.

**Variante "bracket"** : certains exchanges proposent des ordres "bracket" qui fonctionnent comme un OCO mais avec lapossibilité d'ajouter un stop-loss suiveur ([[Trailing stop]]) à la place du stop fixe. Cela combine la sortie à objectif fixe et le suivi dynamique du profit.

**Gestion du temps** : les ordres OCO peuvent se voir assigner une durée de validité ([[Durée de validité de l'ordre]]). Si aucun des deux ordres n'est touché avant l'expiration, les deux sont annulés et le trader doit décider manuellement de la suite.

## Nuances, critiques, limites

**Double exécution impossible mais pas garantie** : le mécanisme d'annulation automatique suppose que l'exchange process l'annulation assez rapidement. En période de fort volume ou de volatilité extrême, un slight delay peut mener à l'exécution des deux ordres si le prix traverse les deux niveaux entre la réception du premier exécution et l'annulation effective du second. Ce risque est marginal mais réel sur certaines plateformes.

**Prix d'exécution différencié** : dans un OCO avec stop-limite, le prix d'exécution du stop peut différer du prix de déclenchement si le marché move rapidement. Le stop-loss peut alors être exécuté à un prix plus défavorable que le prix du stop, créant un [[Slippage]] additif à la perte. L'utilisation d'un [[Ordre au marché]] comme stop (sans prix limite) élimine ce risque mais abandonne tout contrôle du prix d'exécution.

**Pas de OCO partiel** : l'OCO classique ferme la totalite de la position. Il n'existe pas nativement de structure "partial OCO" qui fermerait 50 % sur le take-profit et laisserait courir le reste avec un stop. Cela nécessite d'être programmé manuellement dans un [[Trading bot]] personnalisé via l'[[API d'échange]].

## Liens et implications

L'OCO est l'incarnation technique du couple [[Ordre stop-loss]] / [[Ordre take-profit]] qui définit le [[Risk-reward ratio]] d'une stratégie. Sans OCO, le trader doit gérer manuellement deux ordres simultanément, ce qui est impossible à grande échelle ou en[[Trading algorithmique]].

Dans les stratégies de [[Stratégie de momentum]], l'OCO est souvent configuré avec un take-profit ambitieux et un stop relativement serré, reflétant l'idée que si le momentum ne se confirme pas, il faut sortir rapidement. Dans les stratégies de [[Stratégie de mean reversion]], le take-profit est plus serré et le stop peut être plus large car le mouvement de retour à la moyenne peut prendre du temps.

L'OCO est aussi utilise en combination avec des stratégies de [[Grid trading]] où chaque niveau du grid peut être configuré avec un take-profit local et un stop global.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Documentation Binance — Bracket Orders. https://binance-docs.github.io/apidocs/spot/en/
[^3]: Bitget Trading API Documentation — Advanced Order Types. https://www.bitget.com/api-doc/
