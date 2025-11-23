#!/bin/bash

# Script de commandes utiles pour le projet Xmas Corp

echo "🎮 Xmas Corp - Commandes utiles"
echo "================================"
echo ""

# Fonction pour afficher les commandes
show_commands() {
    echo "📦 Gestion des dépendances :"
    echo "  yarn install          # Installer les dépendances"
    echo "  yarn add <package>    # Ajouter un package"
    echo "  yarn remove <package> # Supprimer un package"
    echo ""
    
    echo "🚀 Développement :"
    echo "  yarn dev              # Démarrer le serveur de dev"
    echo "  yarn build            # Build pour production"
    echo "  yarn preview          # Prévisualiser le build"
    echo "  yarn lint             # Vérifier le code"
    echo ""
    
    echo "🔧 Utilitaires :"
    echo "  yarn dlx @yarnpkg/sdks vscode  # Configurer VS Code SDKs"
    echo ""
    
    echo "🌐 URLs :"
    echo "  Local: http://localhost:5174/"
    echo ""
    
    echo "📚 Documentation :"
    echo "  README.md          # Documentation principale"
    echo "  COMPONENTS.md      # Guide des composants"
    echo "  PROJECT_SUMMARY.md # Récapitulatif du projet"
}

# Fonction pour démarrer le projet
dev() {
    echo "🚀 Démarrage du serveur de développement..."
    yarn dev
}

# Fonction pour build
build() {
    echo "📦 Build du projet..."
    yarn build
}

# Si le script est appelé avec un argument
case "$1" in
    "dev")
        dev
        ;;
    "build")
        build
        ;;
    "help"|"")
        show_commands
        ;;
    *)
        echo "❌ Commande non reconnue: $1"
        echo ""
        show_commands
        ;;
esac
