---
titre: "Ordre reduce-only"
type: terme
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/ordre, #méthode/exécution, #gestion/risque]
créé: 2026-04-21
liens_forts: ["[[Ordre à cours limité]]", "[[Gestion du risque]]", "[[Position sizing]]", "[[Ordre au marché]]", "[[Ordre stop-loss]]"]
liens_opposition: []
---

# Ordre reduce-only

> [!info] Résumé
> Un ordre reduce-only est un ordre conçu exclusivement pour réduire la taille d'une position existante, jamais pour l'augmenter. Il garantit que le trader ne peut pas accidentellement ouvrir une position dans la direction opposée.

## Définition

L'ordre reduce-only (aussi appelé "close-only") est un flag d'ordre qui précise que l'ordre ne peut que réduire la taille d'une position, pas l'augmenter. Sur un compte avec une position longue de 10 BTC, un ordre reduce-only de vente ne peut pas vendre plus de 10 BTC au total (en tenant compte des exécutions précédentes sur ce ticket).

Le reduce-only est une protection cruciale pour les stratégies de [[Trading algorithmique]] où des erreurs de logique peuvent entraîner l'accroissement d'une position au lieu de sa réduction. Il transforme l'ordre en un outil de sortie inconditionnel : quoi qu'il arrive, l'ordre ne peut pas créer une position dans la direction opposée.

Sur les marchés à terme (futures) et les exchanges qui proposent du levier, le reduce-only est particulièrement pertinent car il protège contre les erreurs de signe qui pourraient transformer une sortie de position en une nouvelle position dans l'autre sens, avec des conséquences financières potentiellement désastreuses.

## Contexte et origine

Le reduce-only émerge avec le trading sur marge et les produits dérivés où les positions peuvent être dans les deux sens. Quand les traders ont la possibilité d'ouvrir des positions longues et courtes sur le même actif, le risque d'erreur de direction devient significatif. Les plateformes de trading algorithmique comme [[3Commas]] et [[Bitsgap]] permettent de configurer des ordres reduce-only pour leurs stratégies de bots sur futures.

Dans l'écosystème crypto, les exchanges à terme comme Binance Futures, Bybit et Deribit supportent nativement le reduce-only. C'est une fonctionnalité critique pour les stratégies de [[Market making]] sur perpetual futures où les teneurs de marché maintiennent des positions nettes proches de zéro et utilisent des ordres reduce-only pour leurs sorties de position.

## Mécanismes / caractéristiques / détails

**Comportement de réduction** : si un trader a une position longue de 5 BTC et passe un ordre reduce-only de vente pour 3 BTC, l'ordre sera exécuté et réduira la position à 2 BTC. Si le même trader passe un ordre reduce-only de vente pour 7 BTC, seuls 5 BTC seront exécutés (la taille maximum qui réduit la position), le reste de l'ordre est traité comme un ordre régulier mais ne peut pas créer une position courte nette.

**Interactions avec les ordres existants** : le reduce-only s'applique à l'ensemble des exécutions sur le même contrat. Si un trader a une position longue et a déjà des ordres reduce-only en attente, le système veille à ce que la somme des exécutions ne dépasse pas la position actuelle. Si un ordre régulier est passé (non reduce-only), il peut augmenter la position.

**Cas d'utilisation principale** : les stratégies de sortie de position utilisent le reduce-only pour s'assurer que si le prix atteint un certain niveau (stop-loss, take-profit, ou trailing stop), l'ordre fermera la position mais ne l'inversera pas. C'est une sécurité critique pour les algorithmes de [[Gestion du risque]].

**Reduce-only et levier** : sur les positions avec levier, le reduce-only permet de fermer partiellement ou totalement la position sans risquer de retourner la position. Par exemple, un trader avec un effet de levier 2x sur 10 BTC long peut utiliser un reduce-only sell pour fermer 5 BTC et ramener son exposition à 5 BTC nets.

## Nuances, critiques, limites

**Pas de protection contre le mauvais sens** : le reduce-only ne protège pas contre le passage d'un ordre dans le mauvais sens si le trader a une position nulle. Un ordre reduce-only d'achat sur un compte sans position sera simplement ignoré ou traité comme un ordre d'achat régulier qui ouvre une position (selon les règles de l'exchange). Le reduce-only n'est pas un "filtre de direction" général mais un "limiteur de taille".

**Complexité avec plusieurs ordres** : quand plusieurs ordres reduce-only sont en circulation simultanément, le système doit gérer les interactions entre eux pour s'assurer que leur somme ne dépasse pas la position. Cela peut créer des comportements non évidents si les ordres sont passés rapidement ou simultanément.

**Risque de ne pas fermer complètement** : si un trader veut fermer totalement une position avec des ordres reduce-only mais que le marché bouge trop vite et que les ordres sont partiellement exécutés à des niveaux différents, la position peut se retrouver plus petite que prévu mais non nulle, nécessitant des ordres additionnels.

**Moins pertinent sur le spot** : sur le marché au comptant (spot) sans effet de levier, le reduce-only est moins critique car les positions sont toujours dénouées avec des actifs réels. Il reste utile pour éviter des erreurs de trading sur des comptes multi-positions.

## Liens et implications

Le reduce-only est indissociable de la [[Gestion du risque]] dans les stratégies avec effet de levier. Un [[Trading bot]] sur perpetual futures qui n'utilise pas le reduce-only sur ses ordres de sortie s'expose à des risques d'erreur de signe qui peuvent être catastrophiques.

Dans les stratégies de [[Stratégie de momentum]] avec levier, le reduce-only est utilisé pour les stops de protection qui ne doivent pas être transformés en ordre d'ouverture de position courte par accident. De même, dans les stratégies d'[[Arbitrage]] où les positions sont rapidement ouvertes et fermées, le reduce-only empêche les erreurs de timing.

Le [[Position sizing]] est affecté indirectement par le reduce-only : si un ordre reduce-only ne peut exécuter qu'une partie de la taille prévue, la position réelle après l'ordre sera plus grande que si l'ordre avait pu fermer complètement. Le trader doit anticiper cette situation dans son dimensionnement.

## Sources

[^1]: Documentation Binance Futures — Reduce-Only Orders. https://binance-docs.github.io/apidocs/futures/us/
[^2]: Documentation Bybit — Order Features. https://bybit-exchange.github.io/
[^3]: Advanced Markets concept of "straight-through processing" in derivatives trading.