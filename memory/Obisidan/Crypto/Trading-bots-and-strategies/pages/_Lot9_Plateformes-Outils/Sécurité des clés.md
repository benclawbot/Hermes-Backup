---
titre: "Sécurité des clés"
type: méthode
cluster: "Trading bots and strategies"
statut: verified
controverse: low
importance: pilier
source_knowledge: internal
sources_count: 0
tags: [#méthode/sécurité, #concept/api, #concept/keys]
créé: 2026-04-21
liens_forts: ["[[Sécurité des clés API]]", [["Gestion d'API]], ["[[API d'échange]]"]
liens_opposition: []
---

# Sécurité des clés

> [!info] Résumé
> La sécurité des clés API est l'ensemble des mesures pour protéger les identifiants qui permettent l'accès aux plateformes de trading. Une clé compromise peut entraîner la perte totale des fonds. Les bonnes pratiques de sécurité sont non négociables pour tout trader automatisé.

## Définition

La sécurité des clés API concerne la protection des credentials (clé API et secret) qui donnent accès aux fonctionnalités de trading sur les exchanges. Ces credentials sont aussi sensibles que des mots de passe bancaires.

Les menaces incluent :
- Vol de clés via malware ou phishing
- Accès non autorisé après breach d'un service
- Utilisation abusive par des employés de plateformes tierces
- Exposition accidentelle dans du code ou des logs

Les conséquences d'une compromission peuvent être la perte totale des actifs sur l'exchange car les ordres sont exécutés sans confirmation supplémentaire.

## Risques et vecteurs d'attaque

**Exposition dans le code source**
Stocker les clés directement dans le code (en dur) ou dans des fichiers commités sur GitHub est un ris

**Phishing**
Des sites fraudulenses qui ressemblent aux exchanges peuvent voler les identifiants. Ou des emails qui réclament les clés "pour vérification".

**Malware**
Des keyloggers ou stealers crypto-specialisés peuvent extraire les clés stockées sur un ordinateur.

**Plateformes non fiables**
Certaines plateformes de bots poco fiables peuvent conserve

**DDoS et détournement**
Quelques cas dokumentés de plateformes qui ont intencional

## Mesures de protection

**Never expose**
Ne jamais mettre les clés dans le code source, les logs, ou les messages. Utiliser des variables d'environnement ou des gestionnaires de secrets.

**Chiffrement au repos**
Les clés stockées devraient être chiffrées. Менеджер паролей comme 1Password ou Bitwarden peuvent stocker les clés de manière sécurisée.

**IP restriction**
Quand l'exchange le permet, restrict l'accès aux clés aux адреса IP du serveur de trading. Cela limite strongly les attaques.

**Permissions minimales**
Créer des clés avec uniquement les permissions nécessaires. Si le bot ne fait que du spot trading, la clé ne doit pas permettre les retraits.

**Monitoring actif**
Vérifier régul

**2FA sur l'exchange**
L'authentification à deux facteurs sur l'exchange ajoute une couche de protection additionnelle pour la création/suppression de clés.

**Segmentation**
Utiliser des clés différentes pour des bots ou plateformes différents. Une clé par service permet d'isolate les problèmes si une clé est compromise.

## Bonnes pratiques de stockage

**Gestionnaire de secrets**
AWS Secrets Manager, HashiCorp Vault, ou des alternatives permettent de stocker et récupérer les clés de manière sécurisée programmatically.

**Variables d'environnement**
Sur le serveur, les clés sont stockées comme variables d'environnement, pas dans le filesystem. Le processus y accède sans que la clé ne apparaisse dans les logs.

**Hardware security module (HSM)**
Pour les gros volumes, des clés stockées dans du hardware dédié (type YubiKey) ne quittent jamais le device physically.

## Nuances et limites

Aucune mesure n'est infallible. L'objectif est de rendre l'attaque suffisamment difficile pour que le attacker renonce et cherche une cible plus facile.

Le trade-off entre sécurité et praticité existe. Des mesures trop lourdes ralentissent le développement et peuvent décourager les bonnes pratiques.

L'éducation est le maillon faible. Many traders ne connaissent pas les risques et stockent leurs clés de manière sécurisée sans comprendre pourquoi c'est important.

## Liens et implications

La [[sécurité des clés]] est un aspect spécifique de la [[gestion d'API]] plus large. Les deux domaines sont intimement liés.

L'[[API d'échange]] communique via les clés ainsi sécurisées. Sans cette sécurité, le trading automatisé est un jeu dangereux.

Le [[trading bot]] dépend entièrement des clés API. La sécurité du bot dépend de la sécurité des clés. La [[fiabilité des plateformes]] inclut aussi la sécurité des clés sur ces plateformes.

## Sources

[^1]: OWASP, "API Security Best Practices", https://owasp.org (consulted 2026)
[^2]: Binance, "API Key Security", https://www.binance.com (consulted 2026)
