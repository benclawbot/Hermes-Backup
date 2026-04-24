---
titre: "Données de niveau 2"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: standard
source_knowledge: internal
sources_count: 3
tags: [#concept/données, #microstructure, #trading/avancé]
créé: 2026-04-21
liens_forts: ["[[Order book dynamics]]", "[[Profondeur du carnet d'ordres]]", "[[Ordre iceberg]]", "[[Smart money concept]]", "[[Liquidité]]"]
liens_opposition: []
---

# Données de niveau 2

> [!info] Résumé
> Les données de niveau 2 (Level 2 data) sont les informations sur le carnet d'ordres qui montrent la profondeur complète du marché à tous les niveaux de prix, pas seulement le meilleur bid/ask.

## Définition

Les données de niveau 2 (Level 2, aussi appelées "order book data" ou "market depth data") représentent l'intégralité du carnet d'ordres avec la profondeur à chaque niveau de prix, pas seulement les premiers niveaux visibles sur une interface standard. Elles incluent tous les ordres en attente avec leur prix, leur taille, et leur timestamp (temps d'arrivée).

Le "niveau 1" (Level 1) se limite au meilleur bid et best ask (top of the book) avec la taille associée. Le niveau 2 étend cette vue à l'ensemble du livre — les 10, 20, 100 ou même 1000 premiers niveaux de chaque côté du carnet.

Les données de niveau 2 sont accessibles via les APIs des exchanges (généralement via WebSocket pour le streaming en temps réel) et sont la base de nombreuses stratégies de [[Trading algorithmique]] avancées.

## Contexte et origine

Les  de marché à plusieurs niveaux sont una caractéristique des marchés electroniques depuis leur origine. Le protocole NASDAQ, puis les APIs des plateformes de trading, ont standardisé l'accès à ces données. Avec la montar en puissance du [[Haute fréquence|trading haute fréquence]], les données de niveau 2 sont devenues un actif stratégique majeur.

Dans l'écosystème crypto, les données de niveau 2 sont disponibles sur les principales plateformes : Binance, Coinbase, Kraken offrent des WebSocket streams de niveau 2. L'accès peut être gratuit (avec un rate limiting) ou payant selon le volume de données requis.

Les [[Trading bot]]s institutionnels paient des sommes significatives pour un accès bas latency aux données de niveau 2 car elles constituent un avantage compétitif majeur pour les stratégies qui dependent de la structure du carnet.

## Mécanismes / caractéristiques / détails

**Structure des données** : un message de niveau 2 contient typiquement : côté (bid/ask), prix, taille de l'ordre, et timestamp. Un flux de données de niveau 2 est une succession de mises à jour (incremental updates) oÙ chaque modification du carnet (nouvel ordre, exécution, annulation) génère un message.

**Volume des données** : un flux de niveau 2 pour un marché très actif comme BTC/USDT peut générer des dizaines de milliers de messages par seconde. Stocker et traiter ces données nécéssite une infrastructure significative. Les stratégies de [[Haute fréquence]] requièrent un traitement en temps réel sans latence.

**Uses principaux** :

1. **Calcul de la profondeur** : la profondeur à chaque niveau est directement visible dans les données de niveau 2. Cela permet de calculer précisément le slippage anticipé pour une taille d'ordre donnée.

2. **Détection d'icebergs** : en observant une succession d'ordres de même taille qui se renouvellent au même prix, on peut détecter la présence d'un [[Ordre iceberg]] et estimer sa taille totale.

3. **Détection du spoofing** : des orders de très grande taille qui apparaissent puis disparaissent sans exécution peuvent signaler du spoofing ou une tentative de manipulation.

4. **Stratégies de market making** : les market makers utilisent le niveau 2 pour calibrer leurs spreads en temps réel en fonction de la liquidité disponible et de la concurrence.

**Données historiques de niveau 2** : au-delà du flux temps réel, les données historiques de niveau 2 (order book snapshots + increments) permettent de reconstruire le carnet à n'importe quel moment passé. Ces données sont utilisées pour le [[Backtesting]] et la recherche.

## Nuances, critiques, limites

**Coût de l'accès** : les données de niveau 2 complètes en temps réel sont chères. Les vendors comme Binance Data, Kaiko, CoinAPI vendent ces données pour un usage professionnel. Les détaillants n'ont souvent accès qu'à des données delayed ou à un nombre limité de niveaux.

**Latence** : les données de niveau 2 sont transmises par WebSocket. La latence de réception peut varier de quelques millisecondes à plusieurs secondes selon la qualité de la connexion. Pour le [[Haute fréquence]], cette latence est inacceptable, d'oÙ l'intérêt pour la co-localisation.

**Traitement computationnel** : traiter un flux de niveau 2 en temps réel pour en extraire des signaux nécessite une architecture optimisée. Les mises à jour du carnet arrivent en continu et le système doit maintenir un état cohérent du livre à tout moment.

**Informations asymétriques** : l'accès aux données de niveau 2 donne un avantage informationnel significatif. Les acteurs qui peuvent "voir" le livre complet peuvent anticiper les mouvements de prix. Cela crée une tension avec le principe de [[Best execution]] et d'équité du marché.

## Liens et implications

Les données de niveau 2 sont fondamentales pour la [[Profondeur du carnet d'ordres]]. Sans elles, la profondeur n'est qu'une approximation. Avec elles, on peut calculer précisément le slippage attendu pour n'importe quelle taille d'ordre.

Le [[Smart money concept]] utilise les données de niveau 2 pour suivre où les "gros joueurs" placent leurs ordres et détecter des patterns de manipulation.

Les stratégies de [[Market making]] dependent intimement des données de niveau 2 pour calibrer leurs prix en temps réel et s'adapter à la structure du carnet.

## Sources

[^1]: Harris, Larry. *Trading and Exchanges: Market Microstructure for Practitioners*. Oxford University Press, 2003.
[^2]: Hasbrouck, Joel. *Empirical Market Microstructure*. Oxford University Press, 2007.
[^3]: Documentation Binance WebSocket API — Depth Message. https://binance-docs.github.io/apidocs/spot/en/
