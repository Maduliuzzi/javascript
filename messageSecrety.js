let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(23);
console.log(secretMessage);

//secretMessage.lenght();

secretMessage.push('to', 'Program');
console.log(secretMessage);

secretMessage [7] = 'newWord';
console.log(secretMessage);

secretMessage.shift(1);
console.log(secretMessage);

secretMessage.unshift('Programming');
console.log(secretMessage);

secretMessage.splice(6,10 ,'know');
console.log(secretMessage.join());


//projeto alterando,adicionando,excluindo variaveis da mensagem secreta 
//s