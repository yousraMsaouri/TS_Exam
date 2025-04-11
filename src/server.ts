import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000; // Port fixe pour le développement

// Middleware pour parser le JSON
app.use(express.json());

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, '../public')));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Route API pour tester le serveur
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log('====================================');
    console.log(`🚀 Server is running on port ${PORT}`);
    console.log(`🌐 Open your browser at: http://localhost:${PORT}`);
    console.log('====================================');
}); 