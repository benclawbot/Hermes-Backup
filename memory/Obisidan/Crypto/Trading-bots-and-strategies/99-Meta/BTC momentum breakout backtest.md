# BTC momentum breakout backtest

## Configuration

- Actif : BTCUSDT
- Source de données : Binance API, bougies journalières
- Période : 2018-01-01 → 2026-04-22
- Exécution simulée : open du jour suivant le signal
- Coûts : 10 bps par côté (frais + slippage approximés)

## Règles testées

### Entrée long
- close > SMA 200 jours
- close > plus haut des 20 jours précédents
- volume > 1,2 × moyenne 20 jours du volume

### Sortie
- close < plus bas des 10 jours précédents
- ou close < SMA 50 jours
- ou stop à -8% depuis l'entrée

## Résultats full-history

### Stratégie
- rendement total : **+1748,72%**
- CAGR : **+42,07%**
- max drawdown : **-34,60%**
- Sharpe approximatif : **1,21**
- nombre de trades : **26**
- win rate : **50,00%**
- trade moyen : **+20,52%**
- trade médian : **+1,21%**
- exposition au marché : **28,74%** du temps

### Buy and hold BTC
- rendement total : **+487,32%**
- CAGR : **+23,75%**
- max drawdown : **-81,18%**
- Sharpe approximatif : **0,66**

## Résultats out-of-sample 2023+

### Stratégie
- rendement total : **+185,35%**
- CAGR : **+37,31%**
- max drawdown : **-20,14%**

### Buy and hold BTC
- rendement total : **+372,92%**
- CAGR : **+59,97%**
- max drawdown : **-49,53%**

## Interprétation

Le résultat le plus intéressant n'est pas seulement la performance absolue, mais le couple rendement / drawdown :
- sur tout l'historique, la stratégie fait mieux que le buy-and-hold avec beaucoup moins d'exposition et un drawdown nettement plus faible
- sur la phase récente 2023+, le buy-and-hold a fait mieux en rendement brut, mais avec une douleur de parcours beaucoup plus importante

Donc cette stratégie semble plus défensive qu'un simple hold, sans être aussi défensive qu'un système purement cash-preserving.

## Robustesse locale des paramètres

Petite grille testée autour du setup choisi :

| Lookback breakout | Filtre volume | CAGR | Max DD |
|---|---:|---:|---:|
| 10 jours | 1,0x | 34,23% | -45,95% |
| 10 jours | 1,2x | 40,87% | -40,47% |
| 10 jours | 1,5x | 43,13% | -34,87% |
| 20 jours | 1,0x | 38,54% | -39,64% |
| 20 jours | 1,2x | 42,07% | -34,60% |
| 20 jours | 1,5x | 42,21% | -34,87% |
| 30 jours | 1,0x | 37,63% | -34,32% |
| 30 jours | 1,2x | 40,08% | -37,03% |
| 30 jours | 1,5x | 42,07% | -28,25% |
| 55 jours | 1,0x | 33,95% | -34,28% |
| 55 jours | 1,2x | 33,89% | -37,03% |
| 55 jours | 1,5x | 36,73% | -33,50% |

Lecture : le setup choisi n'est pas un outlier ridicule. La zone 20-30 jours avec filtre volume 1,2-1,5 reste relativement stable.

## Simulation d'allocation réelle

Hypothèse :
- sleeve crypto actuelle : **5 000 USD**
- allocation proposée à cette stratégie : **12%**
- capital alloué : **600 USD**

### Ce que donne le backtest sur ce capital
- capital final full-history simulé : **11 092,32 USD**
- capital final out-of-sample 2023+ simulé : **1 712,10 USD**

## Simulation bootstrap 1 an

À partir de la distribution historique des trades :
- trades par an observés : **3,13**
- capital initial simulé : **600 USD**

Résultats bootstrap :
- capital final médian à 1 an : **728,08 USD**
- percentile 10 : **518,13 USD**
- percentile 90 : **2 368,51 USD**
- probabilité de finir en perte après 1 an : **29,0%**
- max drawdown médian simulé : **-8,10%**
- worst 10% drawdown : **-16,46%**

## Derniers trades du backtest

| Entrée | Sortie | Retour |
|---|---|---:|
| 2024-05-16 | 2024-06-15 | -0,44% |
| 2024-07-16 | 2024-08-03 | -5,17% |
| 2024-10-15 | 2024-12-28 | +42,41% |
| 2025-01-18 | 2025-02-03 | -6,31% |
| 2025-04-23 | 2025-05-31 | +11,06% |
| 2025-07-03 | 2025-08-02 | +3,88% |
| 2025-08-14 | 2025-08-20 | -8,64% |
| 2025-10-02 | 2025-10-11 | -5,10% |

## Live implementation (2026-04-23)

Code: `strategies/btc_momentum_breakout.py` + `utils/indicators.py` (rolling_close_high_20)

**Backtest 500d (Dec 2024 – Apr 2026) :**
- CAGR : +1.4% | WinRate : 50% | PF : 2.28 | MaxDD : 0.8% | Trades : 4
- BtcUSDT start: ~97k → end: ~63k (-21.5%). Strategy correctly stayed out due to 200d EMA filter.
- 4 entries: 2025-07-22, 2025-08-13, 2025-10-01 to 2025-10-06
- Entry logic: close > prev_day_rolling_close_high_20 (fixed from current-day high-of-highs)

**Bugs found during implementation:**
1. `rolling_high_20` computed max of highs, not max of closes. Vault says "close breaks above 20d close-high". Fixed: added `rolling_close_high_20` column.
2. Strategy referenced `sma_200` which doesn't exist in `add_all_indicators`. Fixed: use `ema_200`.
3. Entry was checking current candle's rolling max (includes today, always >= close). Fixed: use prior candle's rolling close high.

## Verdict

- **Ce n'est pas une preuve d'edge live.**
- **C'est un bon candidat d'edge systématique à tester plus sérieusement.**
- Le setup est suffisamment propre pour mériter du paper trading ou une très petite taille réelle.
- La taille réelle proposée reste volontairement modeste vu ton contexte personnel et la nature encore exploratoire de la stratégie.
