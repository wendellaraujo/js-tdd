import { expect } from 'chai';
import {sum, sub, mult, div} from '../src/main';

describe('Main', () => {
    //smoke tests
    describe('Smoke tests', () => {

        it('should exist the method `sum`', () => {
            expect(sum).to.exist;
            //expect(calc.sum).to.be.a.function;
        });
        it('should exist the method `sub`', () => {
            expect(sub).to.exist;
           // expect(calc.sub).to.be.a.function;
        });
        it('should exist the method `mult`', () => {
            expect(mult).to.exist;
            //expect(calc.mult).to.be.a.function;
        });
        it('should exist the method `div`', () => {
            expect(div).to.exist;
            //expect(calc.div).to.be.a.function;
        });
    });

    describe('sum', () => {
        it('should return 4 when `sum(2,2)`', () => {
            expect(sum(2,2)).to.be.equal(4);
        });
        it('should return -4 when `sum(6,10)`', () => {
            expect(sub(6,10)).to.be.equal(-4);
        });
    });

    describe('mult', () => {
        it('should return 4 when `mult(2,2)`', () => {
            expect(mult(2,2)).to.be.equal(4);
        });
    });
    describe('div', () => {
        it('should return 4 when `div(2,2)`', () => {
            expect(div(4,2)).to.be.equal(2);
        });

        it('should return `não é possivel divisao por zero`', () => {
            expect(div(4,0)).to.be.equal('Não é possivel divisão por zero!');
        });
    });
});
