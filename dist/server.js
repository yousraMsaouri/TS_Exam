"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000; // Port fixe pour le développement
// Middleware pour parser le JSON
app.use(express_1.default.json());
// Servir les fichiers statiques
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Route principale
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public', 'index.html'));
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
//# sourceMappingURL=server.js.map