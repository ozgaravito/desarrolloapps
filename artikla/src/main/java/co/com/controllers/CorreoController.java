package co.com.controllers;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@Service
public class CorreoController {
	//Importante hacer la inyección de dependencia de JavaMailSender:
    @Autowired
    private JavaMailSender mailSender;

    //Pasamos por parametro: destinatario, asunto y el mensaje
    public void sendEmail(String to, String nombreSolicitante, String nombreSolicitado) throws MessagingException {
    	//Modo usuario ---> 0 = solicitado . 1 = solicitante
   	String subject = "Nuevo Match - Artikla";
              
        String  mensajeMatch = "la solicitud de match que realizó a "+nombreSolicitado+ " ha sido aceptada";
    	String content = contenidoMensaje(nombreSolicitante, mensajeMatch);
        
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper email = new MimeMessageHelper(mimeMessage, "utf-8");
        
        email.setTo(to);
        email.setSubject(subject);
        email.setText(content, true);
       
        mailSender.send(mimeMessage);
    }
    
    
    
    private String contenidoMensaje(String nombreUsuario, String mensajeMatch){
        
        String contenido = "<!DOCTYPE html>\n" +
"<html lang=\"es\">\n" +
"	<head>\n" +
"		<meta charset=\"UTF-8\">\n" +
"		<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n" +
"		<title>Artikla</title>\n" +
"		<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">\n" +
"		<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">\n" +
"	</head>\n" +
"	<body style=\"font-family:Arial,sans-serif;color:#3d4e5a;font-size:10pt;margin:0\">\n" +
"		<table width=\"100%\" style=\"text-align:center;background:#f5f5f5;padding:50px 0\">\n" +
"			<tr>\n" +
"				<td></td>\n" +
"				<td style=\"width:700px\">\n" +
"					<div style=\"border-radius:4px;border:1px solid #ddd;background:#fff;box-shadow:0 0 13px #cacaca;overflow:hidden\">\n" +
"					<div style=\"text-align:center;background-color:#0f385a;height:100px;width:100%\"><img style=\"max-width:100%;max-height:70px;margin-top:15px\" src=\"\"></div>\n" +
"					<div style=\"text-align:justify;padding:20px\" >\n" +
"						<div style=\"min-height: 94px;\">\n" +
"							<p style=\"text-align: justify;\">\n" +
"								<span style=\"color: rgb(102, 102, 102);\">\n" +
"									Cordial saludo :nombreUsuario,\n" +
"								</span>\n" +
"							</p>\n" +
"							<p style=\"text-align: justify;\">\n" +
"								<span style=\"color: rgb(102, 102, 102);\">\n" +
"									Se le informa que :mensajeMatch.\n" +
"                                </br>\n" +
"                                <br/>\n" +
"                                <br/>\n" +
"                                    Puede validar la información de contacto de su match en el apartado \"Match\" -> \"Match Exitosos\"\n" +
"                                    <br/>\n" +
"                                    <br/>\n" +
"                                    <br/>\n" +
"									Gracias por formar parte de <a href=\"http://localhost:4200/#/auth/login\">Artikla.</a>\n" +
"								</span>\n" +
"							</p>\n" +
"							<br />\n" +
"							<br />\n" +
"							<hr />\n" +
"							<center>\n" +
"							<div style=\"width: 600px;\">\n" +
"								<div>\n" +
"									<em>\n" +
"										<span style=\"font-size:8.5pt\">\n" +
"											Este mensaje ha sido enviado por un sistema automático. Por favor no responda a este e-mail directamente puesto que no obtendrá ninguna respuesta.\n" +
"										</span>\n" +
"									</em>\n" +
"								</div>\n" +
"							</div>\n" +
"						</div>\n" +
"					</div>\n" +
"					<div style=\"background:#eaeaea;margin:0;padding:1px 20px;text-align:justify\">\n" +
"						<p align=\"center\" style=\"text-align:center\">\n" +
"							<strong>\n" +
"								<span style=\"font-size:9pt;color:#0f385a\">\n" +
"									AVISO LEGAL\n" +
"								</span>\n" +
"							</strong>\n" +
"						</p>\n" +
"						<p>\n" +
"							<span style=\"font-size:8.5pt\">\n" +
"								La información contenida en este mensaje es confidencial y sólo puede ser utilizada por la persona o la organización a la cual esté dirigido. Si usted no es el receptor autorizado, cualquier retención, difusión, distribución o copia de este mensaje está prohibida y será sancionada por la ley. Si por error recibe este mensaje, por favor reenvíelo y borre el mensaje recibido inmediatamente. El contenido de este mail es informativo y no se constituye como documento legal.							</span>\n" +
"						</p>\n" +
"					</div>\n" +
"				</td>\n" +
"				<td></td>\n" +
"			</tr>\n" +
"		</table>\n" +
"	</body>\n" +
"</html>";
        
        //Se setea el nombre del usuario en el mensaje
        contenido = StringUtils.replace(contenido, ":nombreUsuario", nombreUsuario);
        
        //Se setea el mensaje del match
        contenido  = StringUtils.replace(contenido, ":mensajeMatch", mensajeMatch);
        
        return contenido;
           
    }
}



