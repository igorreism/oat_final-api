const nodemailer = require('nodemailer');

module.exports = {
    async sendMail(dados){

        const { nome, email, telefone, mensagem } = dados

        // Para disparos de teste
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        //Envio de email
        let info = await transporter.sendMail({
            from: "loja.store <no@reply.com>",
            to: `${email}`,
            subject: "Contato pelo site",
            text: `Ola ${nome}!\n
            Recebemos sua mensagem: "${mensagem}".\n
            Aguarde uma mensagem no numero ${telefone}\n
            Muito obrigado pelo contato!`,
            html: ""
        });

        return {
            "message": info.messageId,
            "url": nodemailer.getTestMessageUrl(info)
        };
    }
}