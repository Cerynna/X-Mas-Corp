#!/bin/zsh
# Script de build, déploiement et incrémentation de version

VERSION_FILE="version"


# Mettre à jour la version au format YYYY.MM.DD.HH.MM
NEW_VERSION=$(date +'%Y.%m.%d.%H.%M')
echo $NEW_VERSION > $VERSION_FILE

echo "Nouvelle version: $NEW_VERSION"

yarn build && yarn deploy
