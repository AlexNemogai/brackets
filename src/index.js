module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = []; //стек, в котором будут хранится открывающиеся скобки(добавляться-удаляться)
  let strToMas = str.split(''); //исходная строка в виде массива(разбиваем посимвольно)
  let objectBrackets = {}; //для преобразования массива массивов с парами скобок в обьект ключ-значение
  //идем по массиву bracketsConfig и с каждого эл-та(каждый эл-т--массив)
  //заносим открывающ скобку в ключ, а закрывающую в значение
  for(let i = 0; i<bracketsConfig.length; i++){
    objectBrackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for(let j = 0; j<strToMas.length; j++){
      if(stack.length == 0){
          stack.push(strToMas[j]);//если стек пуст
      }else if(strToMas[j] == objectBrackets[stack[stack.length-1]]){
          stack.pop();//если скобка равна значению обьекта по ключу последнего эл-та стека(пришла закрыв скобка)
      }else{
          stack.push(strToMas[j]);//пушим открывающиеся скобки
      }
  }
  return stack.length == 0 ? true:false;
}
