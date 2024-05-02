# Decodificador de Texto
 Nesse projeto, o desafio era desenvolver uma aplicação que criptografasse e descriptografasse textos, com o objetivo de trocar mensagens "secretas" com pessoas que conheçam o segredo da criptografia que foi usada. 
Dessa forma, seria possível testar e solidificar o aprendizado adquirido durante a trilha de formação Iniciante em Programação do Programa ONE. 

## Sobre
 As "chaves" de criptografia utilizadas são: 
- A letra "e" é convertida para "enter." 
- A letra "i" é convertida para "imes." 
- A letra "a" é convertida para "ai." 
- A letra "o" é convertida para "ober." 
- A letra "u" é convertida para "ufat." 
Exemplo: "gato" => "gaitober" "gaitober" => "gato"

## Função criptografar 
Ao inserir a sua mensagem no campo de texto e pressionar o botão codificar a aplicação irá percorrer pelo o seu texto caracter por caracter em busca de substituir as vogais presentes pelos seguintes códigos pré-determinados.
Regras: 
- Funciona apenas com letras minúsculas. 
- Letras com acentos e caracteres especiais não são aceitos.

Para que as regras funcionassem, foi utilizada uma expressão regular para impedir a inserção de caracteres especiais, números e letras maiúsculas.

## Função descriptografar 
Para decodificar, a aplicação fará o mesmo processo descrito no código acima, porém, dessa vez irá procurar os termos nos quais as vogais foram convertidas e irá substituí-los pelas mesmas vogais. 

## Extra
 Além disso, foi adcionado um botão com a função de copiar, que aparece a partir do momento que o botão criptografar é ativado. Ele copia o conteúdo na saída de texto. 
 
## Demonstração 
![Captura](https://github.com/Geova20/decodificador-de-texto/assets/91105251/d03a15b9-5f70-41f9-a693-18b99f200127)

## Responsividade 
O projeto também conta com responsividade para telas menores! 

![Screenshot_20240501-000015~2](https://github.com/Geova20/decodificador-de-texto/assets/91105251/67237d34-3ad3-4c19-9115-203bb40087f1)

## Demonstração completa
Link: https://decodificador-de-texto-sable.vercel.app/

## Tecnologias e recursos utilizados 
### HTML5 
- Formulários. 
### CSS 
- Responsividade. 
- Flex-Box. 
- Media Queries. 
- Estilização. 
### JavaScript 
- Expressões regulares. 
- DOM. 
- Funções.
