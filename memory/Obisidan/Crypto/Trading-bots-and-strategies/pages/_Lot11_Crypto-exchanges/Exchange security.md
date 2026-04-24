---
titre: "Exchange security"
type: concept
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#concept/security, #concept/exchange, #concept/risk]
créé: 2026-04-21
liens_forts: ["[[Exchange API]]", "[[Exchange withdrawal]]", "[[Platform risk]]", "[[Exchange regulation]]", "[[Exchange fees]]", "[[Cold storage]]", "[[Two-factor authentication]]"]
---

# Exchange security

> [!info] Résumé
> La sécurité des exchanges crypto englobe l'ensemble des mesures techniques, organisationnelles et opérationnelles mises en place pour protéger les fonds et les données des utilisateurs. Elle inclut la custody des actifs, l'authentification des accès, la protection contre les attacks, et les protocoles de réponse aux incidents.

## Architecture de sécurité des exchanges

### Cold storage et hot wallet

Les exchanges modernes séparent leurs fonds entre le cold storage (stockage à froid) et le hot wallet (stockage à chaud). Le cold storage conserve la majorité des fonds dans des wallets offline, isolés des réseaux internet. Le hot wallet contient uniquement les fonds nécessaires pour les opérations quotidiennes.

Cette séparation limite le risque en cas de piratage. Même si un attaquant compromise le hot wallet, les fonds dans le cold storage restent protégés. Les grandes plateformes maintiennent généralement 90% à 98% de leurs actifs en cold storage.

Le cold storage utilise généralement des wallets multi-signatures avec des clés stockées dans des locations géographiques différentes. Les transactions depuis le cold storage nécessitent généralement plusieurs signatures approvals, créant un délai et une vérification supplémentaires.

### Authentification et contrôle d'accès

L'[[Exchange API]] security comprend des mesures comme les clés API avec permissions limitées, l'[[IP whitelisting]] qui restrict l'accès aux adresses IP approuvées, et le 2FA obligatoire pour les opérations sensibles.

Les[[Exchange withdrawal]] sont protégés par multiple couches d'authentification. L'authentification à deux facteurs (2FA) est généralement requise pour initier un withdrawal. Certains exchanges imposent des délais de retenue pour les nouvelles adresses de withdrawal.

Les[[Endpoint authentication]] et [[Request signatures]] garantissent que les requêtes API proviennent bien du détenteur légitime de la clé. Les signatures HMAC prevents les attaques par replay où un attaquant copierait une requête valide pour l'exécuter à nouveau.

## Menaces et vecteurs d'attaque

### Hacking et phishing

Les attacks de hacking ciblent les vulnérabilités techniques des systèmes d'échange. Les vecteurs courants incluent les exploits de smart contracts, les injections SQL, les attacks XSS, et les compromises de bases de données.

Le phishing targeting les utilisateurs d'exchanges utilise des sites web falsifiés ou des emails frauduleux pour steal les credentials. Les attackers copy l'interface visuelle de l'exchange pour deceive les victimes.

Les attaques par [[Layering]] ou spoofing sur les carnets d'ordres peuvent être utilisées pour manipulate les prix et steal des fonds via des stratégies agressives.

### Fraude interne et risques opérationnels

Les risques internes incluent la fraude par des employés avec accès aux systèmes internes. Les checks and balances doivent être implémentés pour prevent any single individu d'executer des actions non autorisées.

Les pannes techniques peuvent également compromettre la sécurité. La redondance des systèmes et les backups régulaires sont essentiels pour garantir la disponibilité et l'intégrité des données.

## Mesures de protection avancées

### Audits et certifications

Les exchanges sérieux font auditer régulièrement leur sécurité par des firms indépendantes. Les certifications comme SOC 2 Type II vérifient les contrôles de sécurité organizationnelle.

Les audits de smart contracts sont essentiels pour les exchanges qui utilisent des contracts on-chain. Les audits couvrent les vulnérabilités known et les vectors d'attaque potentiels.

### Proof of reserves

Les preuves de réserves permettent de vérifier que l'exchange détient bien les fonds annoncés. Cette transparence renforce la confiance des utilisateurs et détecte les ситуаations de under-reserves.

Certaines plateformes publish des preuves de réserves basées sur Merkle trees qui permettent aux utilisateurs de vérifier indépendamment que leurs fonds sont inclus dans le total des réserves.

## Sécurité pour les traders algorithmiques

Pour les [[Trading bot]], la sécurité des clés API est paramount. Les clés doivent être stockées dans des systèmes sécurisés comme des key management services ou des hardware security modules.

Les permissions des clés API doivent être aussi restrictives que possible. Une clé utilisée uniquement pour lire les données de marché ne devrait pas avoir les permissions de withdrawal.

Les [[API rate limiting]] et les mécanismes de protection contre les abus sont également des mesures de sécurité qui préviennent les attacks par déni de service sur les APIs.

## Risques résiduels

Malgré toutes les mesures, des risques résiduels persistent. Le [[Platform risk]] signifie que même un exchange bien sécurisé peut être compromis. Les utilisateurs doivent diversify leurs expositions entre plusieurs plateformes.

L'[[Exchange regulation]] compliance ne guarantee pas la sécurité absolue. Les régulateurs peuvent être en retard sur les menaces émergentes.

## Incidents historiques et leçons

Les piratages de Mt. Gox (2014), Bitfinex (2016), et Coincheck (2018) ont each taught des leçons sur l'importance de la security architecture. Chaque incident a conduit à des améliorations de l'industrie.

L'collapse de FTX (2022) a démontré que la fraude interne peut être aussi destructrice que les attacks externes. Les mechanisms de governance et de transparency sont essentiels.

## Sources

[^1]: Binance, "Security Features", https://www.binance.com (consulted 2026)
[^2]: Coinbase, "Security Practices", https://www.coinbase.com (consulted 2026)
[^3]: NIST, "Cryptographic Standards", https://csrc.nist.gov (consulted 2026)