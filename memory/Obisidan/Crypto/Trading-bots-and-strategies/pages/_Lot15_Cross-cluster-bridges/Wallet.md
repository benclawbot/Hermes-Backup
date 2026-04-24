---
uid: wallet
title: "Wallet"
tags:
  - wallet
  - custody
  - security
created: 2026-04-21
updated: 2026-04-21
---

# Wallet

Un [[Wallet]] est un outil permettant aux utilisateurs de stocker, envoyer et recevoir des криптовалюты et des tokens. Le wallet stocke les clés privées qui permettent de contrôler l'accès aux actifs sur la blockchain.

## Types de wallets

### Wallets logiciels

Les wallets logiciels sont des applications installées sur des ordinateurs ou des téléphones mobiles. Ils offrent un bon équilibre entre sécurité et commodité pour la majorité des utilisateurs.

Les wallets comme MetaMask, Trust Wallet et WalletConnect permettent d'interagir avec les applications [[Web3]]. Ils supportent généralement les tokens [[ERC-20]] et [[ERC-721]].

### Wallets web

Les wallets web sont accesibles via un navigateur et ne nécessitent pas d'installation de logiciel. Ils sont pratiques pour les interactions rapides avec les dApps mais présentent des risques de sécurité supérieurs.

### [[Hardware wallet]]

Les[[Hardware wallet]] stockent les clés privées sur un appareil physique isolé des ordinateurs connectés à internet. Cette isolation offre une protection supérieure contre les attaques en ligne.

Les appareils comme Ledger et Trezor sont considered le gold standard pour la stockage de grandes quantités de crypto. Ils supportent de nombreuses blockchains et tokens.

## Fonctionnement technique

Un wallet génère et stocke une paire de clés cryptographiques : la clé publique (adresse) et la clé privée. La clé publique peut être partagée librement pour recevoir des fonds, tandis que la clé privée doit rester confidentielle.

Les transactions sont signées avec la clé privée puis soumises au réseau blockchain. Le réseau vérifie la signature sans jamais exposer la clé privée.

## Gestion des clés

La sauvegarde des clés privées est essentiel. Les phrases de récupération (seed phrases) permettent de restaurer l'accès au wallet en cas de perte ou de panne de l'appareil.

La sécurité physique des sauvegardes est tout aussi importante que leur sécurité numérique. Les[[Multi-sig]] wallets offrent une couche de sécurité additionnelle en nécessitant plusieurs signatures pour autoriser une transaction.

## Implications pour le trading algorithmique

Les[[Trading bot]] doivent avoir accès à des wallets pour exécuter des transactions. Les options incluent le custody par des exchange centralisés ou les wallets autonomes contrôlés par le bot.

Les APIs d'échange permettent aux bots de gérer les fonds sur des plateformes centralisées. Les connections via[[Wallet]] permettent le trading décentralisé avec contrôle direct des fonds.

## Considérations de sécurité

La sécurité du wallet est fundamental pour protéger les actifs. Les pratiques incluent l'utilisation de hardware wallets pour les grands montants, l'activation de l'authentification à deux facteurs, et la régulière rotation des clés.

Les risques de hacking et de phishing requièrent une vigilance constante. Les[[Sécurité des clés]] et les pratiques de[[Gestion d'API]] sont des compétences essentielles pour les traders algorithmiques.