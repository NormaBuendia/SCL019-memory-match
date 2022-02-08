
import {cardSelection, shuffle as shuffleFunction}  from '../shuffle.js';


describe('funcion para barajar cartas', () => {
   it('should be a function', () => {
      expect(typeof shuffleFunction).toBe('function');
 });
  });

 describe('funcion hace comparar cartas', () => {
    it('is a function', () => {
    expect(typeof cardSelection).toBe("function");
   });
 });
  
