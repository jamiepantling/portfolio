const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendMail(req, res) {
  const body = JSON.parse(req.body);
  console.log(body);

  const message = `
        Name: ${body.name}\r\n
        Email: ${body.email}\r\n
        Message: ${body.message}
    `;
  const data = {
    to: 'jamie@pantling.net',
    from: 'jamie@pantling.net',
    subject: `New message from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };
  await mail.send(data);
  res.status(200).json({ status: 'OK' });
}
