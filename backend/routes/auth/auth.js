const express = require('express');
const router = express.Router();

//router.use(express.json());

router.post('/', (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(`E-mail: "${email}" , Senha: "${password}" `);

        // Retorna a resposta como objeto JSON
        res.status(200).json({
            mensagem: 'Login realizado com sucesso',
            dados: {
                email: email,
                senha: password
            }
        });
    } catch (error) {
        console.error('Erro ao logar:', error);
        res.status(400).json({ message: 'Erro ao logar' });
    }
});

// Exporte o roteador para uso em outros arquivos
module.exports = router;
