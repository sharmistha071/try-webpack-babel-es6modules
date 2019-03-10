import {first, second, greeting} from './modules/moduleOne';
import {sum, product} from './modules/moduleTwo';

console.log(`total ${sum(first, second)}, product ${product(first, second)}`);

document.getElementById('greet').innerHTML=greeting();
document.getElementById('sum').innerHTML=`sum ${sum(first, second)}`;
document.getElementById('prod').innerHTML=`product ${product(first, second)}`;