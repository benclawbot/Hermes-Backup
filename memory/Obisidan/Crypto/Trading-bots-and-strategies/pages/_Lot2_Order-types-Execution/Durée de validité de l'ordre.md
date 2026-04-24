---
titre: "Durée de validité de l'ordre"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #trading/bases, #méthode/exécution]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Ordre au marché]]", "[[FOK (Fill-Or-Kill)]]", "[[Order book dynamics]]", "[[Backtesting]]"]
liens_opposition: []
---

# Durée de validité de l'ordre

> [!info] Résumé
> La durée de validité de l'ordre définit combien de temps un ordre reste actif dans le carnet avant d'être exécuté, expiré ou annulé. Les principaux types sont GTC, IOC et FOK, chacun répondant à un cas d'usage spécifique.

## Définition

La durée de validité de l'ordre, ou "time-in-force" en anglais, est un paramètre qui controle le comportement temporel d'un ordre. Elle définit les conditions d'expiration de l'ordre et la manière dont les exécutions partielles sont gérées. Les quatre types principaux sont GTC (Good Till Cancelled), IOC (Immediate Or Cancel), FOK (Fill-Or-Kill) et, sur certaines plateformes, des durées spécifiques comme "GTD" (Good Till Date) ou des expiry temporels.

Chaque durée de validité implique un tradeoff different entre la certitude d'exécution et le risque de non-exécution ou de remplissage partiel. Le choix dépend de la stratégie, de la volatilité du marché et de l'urgence de l'exécution.

GTC est le comportement par défaut d'un [[Ordre à cours limité]] classique qui attend une contrepartie indéfiniment. IOC et FOK sont des instructions conditionnelles qui expirent quasi immédiatement si les conditions ne sont pas réunies. GTD permet de fixer une date/heure d'expiration spécifique.

## Contexte et origine

Les durées de validité telles que nous les connaissons émergent avec les premiers systèmes de trading automatisés des années 1970. Auparavant, les ordres étaient généralement "valables pour la journée" (day orders) et étaient annulés à la fermeture du marché. Les marchés crypto, qui fonctionnent 24h/24, ont dû adapters ces concepts pour fonctionner en continu.

L'[[API d'échange]] de chaque plateforme crypto définit les durées supportées. Binance supporte GTC, IOC, FOK et GTD. Kraken et Coinbase ont des implémentations similaires. Les plateformes de [[Trading algorithmique]] comme [[3Commas]] permettent de paramétrer ces durées dans les stratégies de bots.

## Mécanismes / caractéristiques / détails

**GTC (Good Till Cancelled)** : l'ordre reste actif dans le [[Order book dynamics|carnet d'ordres]] jusqu'à ce qu'il soit explicitement exécuté ou annulé par le trader. C'est le comportement par défaut des ordres à cours limité sur la plupart des plateformes. L'ordre peut survivre à des nuits, des week-ends (sur crypto) et rester en attente pendant des jours si le prix n'atteint jamais le niveau de l'ordre.

**IOC (Immediate Or Cancel)** : l'ordre doit s'exécuter immédiatement sur la liquidité disponible. Si une partie seulement de l'ordre peut être exécutée, cette partie l'est et le reste est cancelé. Unlike FOK, IOC tolère le [[Remplissage partiel]]. Si l'ordre ne peut être exécuté sur aucune liquidité disponible, il est entièrement cancelé.

**FOK (Fill-Or-Kill)** : comme décrit dans la page dédiée, FOK exige l'exécution complète et immédiate ou l'annulation totale. Aucune exécution partielle n'est autorisée. Cf. [[FOK (Fill-Or-Kill)]] pour plus de détails.

**GTD (Good Till Date)** : l'ordre reste actif jusqu'à une date/heure spécifiée. S'il n'est pas exécuté avant cette échéance, il est automatiquement annulé. C'est un compromis entre GTC (illimité) et day order (1 jour). GTD est utile quand le trader sait que ses conditions de marché seront invalides après un événement particulier (une annonce macro, une expiration de contrats).

**Day orders** : sur les marchés financiers traditionels, les ordres sans specification de durée expirent à la fin de la journée de trading. Sur les marchés crypto 24h/24, le concept est moins pertinent mais certaines plateformes proposent des "day orders" qui expirent après 24h.

## Nuances, critiques, limites

**GTC et risque d'accumulation** : sur un compte avec plusieurs stratégies, des ordres GTC accumulés peuvent créer des positions involontaires si le marché atteint plusieurs niveaux simultanément. Un trader avec 10 niveaux d'ordres GTC peut se retrouver avec 10 positions partielles si le prix traverse tous les niveaux rapidement, chacune avec un prix d'entrée différent.

**IOC et slippage residual** : l'IOC permet l'exécution partielle mais ne contrôle pas le prix d'exécution des tranches exécutées. Une portion peut être exécutée à un prix différent du prix limite dans un marché en mouvement. L'ordre est "immediate" dans le sens oÙ il ne reste pas en attente, mais le prix d'exécution n'est pas guaranteed.

**Week-end et holidays sur crypto** : avec GTC sur crypto, l'ordre survit au week-end. Si Bitcoin chute de 5 % pendant le Saturday, un ordre d'achat GTC placé avant sera exécuté à un prix inférieur au prix du marché au moment de lplacement. Le trader peut obtenir un bon prix mais sans avoir eu la possibilité de réévaluer sa stratégie.

**Expiration implicite** : certains exchanges ont des règles d'expiration implicites. Un ordre GTC peut être annulé après 30 ou 60 jours d'inactivité selon les régles de la plateforme. Il est important de vérifier ces régles dans la documentation de l'[[API d'échange]].

## Liens et implications

Le choix de la durée de validité interagit fortement avec la [[Stratégie de mean reversion|stratégie]] utilisée. Une stratégie de mean reversion avec des ordres à cours limité utilise typiquement des GTC avec des stops larges, acceptant l'incertitude temporelle. Une stratégie de [[Stratégie de momentum]] avec des entrées rapides préfére des IOC ou FOK pour éviter que des ordres non exécutés ne trainent et créent des positions incorrectes.

Le [[Backtesting]] doit simuler correctement les durées de validité : un backtest qui suppose que tous les ordres GTC sont exécutés au prix du signal surestime la performance. La  performances incluent des périodes oÙ les ordres ne sont pas exécutés (renonçant au profit potentiel) ou sont exécutés à des niveaux différents.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Documentation Binance API — Time-in-force parameters. https://binance-docs.github.io/apidocs/spot/en/
[^3]: FIX Protocol Specification — Order Lifecycle.
