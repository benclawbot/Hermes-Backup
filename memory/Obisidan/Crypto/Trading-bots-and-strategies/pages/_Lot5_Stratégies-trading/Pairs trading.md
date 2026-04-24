---
titre: "Pairs trading"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: medium
importance: standard
source_knowledge: internal
sources_count: 0
tags: [#concept/pairs-trading, #concept/statistical-arbitrage, #concept/correlation]
créé: 2026-04-21
liens_forts: ["[[Statistical arbitrage]]", "[[Correlation trading]]", "[[Market making]]"]
liens_opposition: []
---

# Pairs trading

> [!info] Résumé
> Le pairs trading est une stratégie market-neutral qui exploite la relation historique entre deux actifs. Quand le spread entre les deux actifs diverge de sa moyenne historique, le trader parie sur un retour à la moyenne en achetant l'actif bon marché et en vendant l'actif cher.

## Définition

Le pairs trading est une forme de [[statistical arbitrage]] qui exploite la relation entre deux instruments financièrement liés. L'idée est que deux actifs qui ont historiquement covarié vont continuer à le faire, et que toute déviation temporaire est une opportunité de trading.

La méthode choisit deux actifs avec une relation stable (corrélation élevée ou cointégration). Quand le prix relatif (le spread) diverge de sa moyenne historique, le trader achète l'actif sous-performant et vend l'actif sur-performant, anticipant un retour à la moyenne.

Si les deux actifs reprennent leur relation historique, les deux positions génèrent un profit. Si la relation ne se restore pas, les deux positions peuvent perdre.

Le pairs trading est dite "market-neutral" car il n'est pas exposé aux mouvements du marché global. Le profit ou la perte vient uniquement de la relation entre les deux actifs, pas de la direction du marché.

## Contexte et origine

Le pairs trading a été développé par les analysts quantitatifs dans les années 1980-1990. La firme quant a succès comme Long-Term Capital Management (LTCM) l'a utilisé comme stratégie principale.

L'idée a été popularisée par les traders d'actions qui observaient des paires d'actions dans le même secteur (par exemple Coca-Cola et Pepsi) avec des corrélations élevées.

En crypto, le pairs trading s'applique aux paires de crypto corrélées (BTC/ETH, ou différents tokens du même secteur) ou aux relations entre crypto et produits dérivés.

## Mécanismes et caractéristiques

La première étape est l'identification de la paire. Les critères incluent la corrélation historique (généralement supérieure à 0,7), la cointégration (le spread retourne à la moyenne), et la stationnarité du spread.

Le spread est calculé comme le ratio ou la différence entre les deux prix. Pour les crypto, le ratio BTC/ETH est couramment utilisé. Le z-score du spread mesure combien de déviation standard le spread est loin de sa moyenne.

Quand le z-score dépasse un seuil (par exemple +2 ou -2), une position est ouverte. Si le z-score est +2, le spread est statistiquement haut, donc le trader vend le numérateur et achète le dnominateur. La position est fermée quand le spread revient près de zéro.

Le dimensionnement de position est calibré pour que les deux positions aient la même volatilité, resultant en un portefeuille delta-neutre.

## Nuances, critiques, limites

Le risque principal est que la relation se break définitivement. Deux actifs qui étaient corrélés peuvent arrêter de l'être si les fondamentaux changent. Le risque de "spread widening" est réel.

Les coûts de transaction et le slippage peuvent éliminer les petits profits du pairs trading. Chaque trade implique deux positions, donc les frais sont doublés.

Le pairs trading demande un capital significatif pour générer des profits après les coûts. Les petites comptes peuvent ne pas être rentables avec cette stratégie.

## Liens et implications

Le [[pairs trading]] est une forme de [[statistical arbitrage]] qui exploite les relations entre paires d'actifs. La [[correlation trading|correlation trading]] est une stratégie apparentée.

Le [[market making]] des deux côtés de la paire crée un pressure de marché permanente qui peut stabilizing les prix. Le [[backtesting]] exhaustif est nécessaire avant deployment.

La [[gestion du risque]] doit inclure des stops si le spread continue de s'écarter au lieu de revenir. Le [[drawdown]] peut être prolongé dans des marchés en trend.


## Points clés à retenir

- L'application de cette stratégie requiert une discipline de fer et une execution rigoureuse
- Les parameters doivent être ajustés en fonction de la volatilité du marché et de la liquidité disponible
- Le suivi régulier des performances permet d'identifier les éventuelles dérives

- L'analyse technique constitue un outil essentiel pour identifier les configurations propices
- Legestion du risque doit être adapté à la volatilité du marché concerned
- Les conditions de marché évoluent constamment et exigent une adaptation des paramètres

- Cette stratégie nécessite une gestion rigoureuse du risque et du money management
- Le backtesting sur des données historiques est essentiel pour valider les paramètres
- La psychologie trading joue un rôle crucial dans l'application de cette stratégie
## Sources

[^1]: Gatev, "Pairs Trading: Performance of a Relative Value Arbitrage Rule", 2006
[^2]: Vidyamurthy, "Pairs Trading: Quantitative Methods and Analysis", 2004
