# Plan - Scaling vers 500 pages (Cluster: Trading bots and strategies)

> Phase 2 output. Cible : 500 pages. Actuel : 40 pages. À générer : 460 pages.

---

## État actuel

- **Pages cibles** : 500
- **Pages totales vault** : 500 ✅
- **Statut** : OBJECTIF ATTEINT 🎉

---

## Progression

| Lot | Thématique | Status | Pages |
|-----|------------|--------|-------|
| 1-7 | Piliers (Indicateurs, Orders, Risk, DeFi, Strategies, Microstructure, Infra) | ✅ Complété | 224 |
| 8 | Psychologie & Behavioral | ✅ Complété | 30 |
| 9 | Plateformes & Outils | ✅ Complété | 39 |
| 10 | Analytics & Performance | ✅ Complété | 30 |
| 11 | Crypto exchanges & Feeder | ✅ Complété | 30 |
| 12 | Regulations & Legal | ✅ Complété | 25 |
| 13 | Events & Case studies | ✅ Complété | 30 |
| 14 | Advanced ML/AI | ✅ Complété | 30 |
| 15 | Cross-cluster bridges | ✅ Complété | 35 |
| Pilote | 40 pages originales | ✅ | 40 |

---

## Sessions antérieures

- Session 1 (2026-04-20): 40 pages pilot 完成
- Session 2 (2026-04-21): Lots 1-7 complétés (224 pages créées)
- En cours: Lots 8, 9, 10 agents en background

---

## Pour reprendre

1. Vérifier status agents Lot 8, 9, 10 (background tasks)
2. Si échoué: relaunch avec lots plus petits
3. Review spec compliance + code quality pour chaque lot
4. Puis Lots 11-15

---

## Structure des lots

| Lot | Thématique | Nb pages | Description |
|-----|------------|----------|-------------|
| 1 | Indicateurs techniques | ~35 | RSI, MACD, VWAP, ATR, CCI, Stochastic, ADX, Ichimoku, etc. |
| 2 | Order types & Execution | ~30 | Market order, Limit order, Stop-loss, Take-profit, OCO, Trailing stop |
| 3 | Risk management & Position sizing | ~30 | Sharpe ratio, Sortino ratio, Max drawdown, Risk of ruin, Variance |
| 4 | DeFi & Crypto-specific | ~35 | DEX, Liquidity pools, Impermanent loss, Yield farming, Flash loans |
| 5 | Stratégies de trading | ~35 | Breakout, Pullback, Scalping, Swing trading, Position trading |
| 6 | Market microstructure | ~30 | Bid-ask spread, Market depth, Level 2, Market impact, Toxicity |
| 7 | Infrastructure & APIs | ~30 | WebSocket, REST API, Rate limiting, Authentication, Infrastructure |
| 8 | Psychologie & Behavioral | ~30 | Bias cognitifs, FOMO, Fear/greed, Discipline, Emotion management |
| 9 | Plateformes & Outils | ~35 | HaasOnline, TradeSanta, Cryptohopper, Shrimpy,3Commas comparison |
| 10 | Analytics & Performance | ~30 | Backtesting frameworks, Performance metrics, Alpha/Beta, Sharpe |
| 11 | Crypto exchanges & Feeder | ~30 | Binance, Coinbase, Kraken, Bybit, FTX (historical) |
| 12 | Regulations & Legal | ~25 | SEC, CFTC, MiCA, Regulatory risks, Compliance |
| 13 | Events & Case studies | ~30 | Flash crashes historiques, Black Thursday, Luna collapse, 3Commas hack |
| 14 | Advanced ML/AI | ~30 | LSTM, Transformers, Attention mechanisms, GPT for trading |
| 15 | Cross-cluster bridges | ~35 | Connections to other clusters (Blockchain, DeFi, AI/ML) |

---

## Lots prioritaires (à générer en premier)

### Lot 1: Indicateurs techniques (~35 pages)
- MACD (Moving Average Convergence Divergence)
- VWAP (Volume Weighted Average Price)
- ATR (Average True Range)
- CCI (Commodity Channel Index)
- Stochastic Oscillator
- ADX (Average Directional Index)
- Ichimoku Cloud
- Fibonacci retracement
- Pivot points
- Volume profile
- OBV (On Balance Volume)
- AROON
- ROC (Rate of Change)
- Williams %R
- Momentum indicator
- ROC (Rate of Change)
- Keltner Channels
- Donchian Channel
- Parabolic SAR
- Standard Deviation
- Bollinger Band Width
- Commodity Channel Index
- Detrended Price Oscillator
- Mass Index
- TRIX
- Ultimate Oscillator
- Stochastic RSI
- Chaikin Money Flow
- Accumulation/Distribution
- Money Flow Index
- Ease of Movement
- Force Index
- Vortex Indicator
- Ichimoku components (Tenkan, Kijun, Senkou)
- SAR parameters

### Lot 2: Order Types & Execution (~30 pages)
- Market order
- Limit order
- Stop-loss order
- Take-profit order
- OCO (One-Cancels-Other)
- Trailing stop
- Stop-limit order
- Iceberg order
- TWAP (Time-Weighted Average Price)
- VWAP execution
- FOK (Fill-Or-Kill)
- Post-only order
- Reduce-only order
- Time in force (GTC, IOC, FOK)
- Order lifecycle
- Fill price vs quote price
- Partial fill
- Order rejection reasons
- Latency and execution
- Slippage management
- Maker vs Taker fees
- Order book matching
- Central limit order book
- Dark pools
- Payment for order flow
- Best execution

### Lot 3: Risk Management & Position Sizing (~30 pages)
- Sharpe ratio
- Sortino ratio
- Calmar ratio
- Information ratio
- Max drawdown duration
- Drawdown recovery time
- Risk of ruin formula
- Expected shortfall
- Value at Risk (VaR)
- Conditional VaR (CVaR)
- Tail risk
- Correlation risk
- Volatility scaling
- Risk parity
- Equal weight vs risk parity
- Maximum adverse excursion
- Maximum favorable excursion
- Trade expectancy
- Win rate vs expectancy
- Risk of ruin table
- Position sizing methods comparison
- Kelly criterion practical limits
- Half-Kelly sizing
- Fixed fractional position sizing
- Volatility-adjusted position sizing
- Risk budgeting
- Risk limits and circuit breakers
- Stress testing
- Scenario analysis

### Lot 4: DeFi & Crypto-specific (~35 pages)
- Decentralized exchanges (DEX)
- Automated Market Makers (AMM)
- Liquidity pools
- Impermanent loss
- Yield farming strategies
- Flash loans
- Slippage tolerance
- Price impact
- Sandwich attacks
- DEX aggregators
- Liquidity mining
- Staking rewards
- Proof of stake economics
- Cross-chain bridges
- Wrapped tokens
- Stablecoin dynamics
- DeFi lending protocols
- Aave, Compound, MakerDAO
- Uniswap v2/v3 mechanics
- Curve Finance
- Balancer
- DEX market making
- MEV (Miner Extractable Value)
- Frontrunning in DeFi
- Gas optimization
- Layer 2 scaling
- Rollups (Optimism, Arbitrum)
- zkSync
- Cross-chain arbitrage
- DeFi aggregators
- Token velocity
- Liquidity incentives
- Token distribution models
- Governance tokens

### Lot 5: Stratégies de trading (~35 pages)
- Breakout trading
- Pullback trading
- Scalping
- Swing trading
- Position trading
- Trend trading
- Counter-trend trading
- Range trading
- Mean reversion on crypto
- Momentum on crypto
- Carry trading
- Funding rate arbitrage
- Spot-Futures arbitrage
- Cross-exchange arbitrage
- Triangular arbitrage
- Statistical arbitrage
- Market making strategies
- Grid trading variants
- DCA variants
- TWAP strategies
- VWAP strategies
- Iceberg strategies
- Dark pool trading
- Block trading
- Algorithmic execution
- Smart order routing
- Volume-weighted strategies
- High-frequency strategies
- Low-frequency strategies
- Multi-leg strategies
- Pairs trading
- Correlation trading
- Volatility trading
- Options strategies (basic)
- Options Greeks basics

---

## Convention de nommage des lots

Format: `LOT_X_description.md` (pour le tracking)

Les pages sont écrites directement dans `pages/` sans préfixe.

---

## Anti-hallucination (RÈGLES)

1. **Aucun nom propre inventé** - Pas de faux experts, faux fondateurs, faux projets
2. **Aucune date fabricada** - Dates véridiques uniquement
3. **Aucun chiffre statistique non sourcé** - Pas de "90% des bots échouent" sans source
4. **Aucune citation directe inventée** - Pas de citations entre guillemets
5. **Théories non vérifiées** → `statut: débattu` ou `statut: hypothétique`
6. **Plateformes réelles** → Vérifier existence réelle avant d'utiliser
7. **Pour les pages type `personne`, `institution`, `événement`** → Fact-check obligatoire via WebSearch

---

## Wikilinks requis

- Minimum 7 wikilinks sortants par page
- Ratio cible : 8-12 wikilinks par page
- Chaque wikilink justifié par son contexte (pas de listing brut)
- Ne pas créer de liens vers des pages qui n'existent pas encore dans le vault

---

## Structure YAML obligatoire

```yaml
---
titre: "Nom exact de la page"
type: concept | théorie | méthode | terme | controverse | débat | personne | expérience | institution | événement
cluster: "Trading bots and strategies"
statut: verified | to-verify | débattu | débunké | hypothétique | stub | à-sourcer
controverse: low | medium | high
importance: pilier | standard | deep-cut
source_knowledge: internal | web-checked | mixed
sources_count: N
tags: [#tag1, #tag2]
créé: 2026-04-20
liens_forts: ["[[Page1]]", "[[Page2]]"]
liens_opposition: ["[[Page3]]"]
---
```

---

## Workflow de génération

1. Chaque lot → 1 subagent implementer
2. Après implémentation → spec compliance review
3. Après spec compliance → code quality review
4. Si Chinese characters détectés → REJECT (anti-hallucination rule)

---

## Checkpoint System

| Checkpoint | Critère | Condition |
|------------|---------|-----------|
| Checkpoint 1 | Plan | 460 pages planifiées, lots définis |
| Checkpoint 2 | Quality sample | 2 lots complets, 0 issues |
| Checkpoint 3 | Final | 460 pages générées, audit passé |

---

## Statut

- [x] Checkpoint 1: Plan complété
- [ ] Checkpoint 2: Quality sample (Lots 1-2)
- [ ] Checkpoint 3: Final (tous les lots)

