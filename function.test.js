// Import function.js
const action = require('./function.js');

describe('Add', () => {

    it('Add - should return 10', () => {
        const inputX = 2;
        const inputY = 8;
        const result = action.add(inputX, inputY);
        expect(result).toBe(10);
    });

    it('Add - should return 45', () => {
        const inputX = 15;
        const inputY = 30;
        const result = action.add(inputX, inputY);
        expect(result).toBe(45);
    });

    it('Add - should return 8', () => {
        const inputX = 10;
        const inputY = -2;
        const result = action.add(inputX, inputY);
        expect(result).toBe(8);
    });

    it('Add - should return 12', () => {
        const inputX = 12;
        const inputY = 0;
        const result = action.add(inputX, inputY);
        expect(result).toBe(12);
    });
});

describe('Sub', () => {

    it('Sub - should return -6', () => {
        const inputX = 2;
        const inputY = 8;
        const result = action.sub(inputX, inputY);
        expect(result).toBe(-6);
    });

    it('Sub - should return -15', () => {
        const inputX = 15;
        const inputY = 30;
        const result = action.sub(inputX, inputY);
        expect(result).toBe(-15);
    });

    it('Sub - should return 12', () => {
        const inputX = 10;
        const inputY = -2;
        const result = action.sub(inputX, inputY);
        expect(result).toBe(12);
    });

    it('Sub - should return 12', () => {
        const inputX = 12;
        const inputY = 0;
        const result = action.sub(inputX, inputY);
        expect(result).toBe(12);
    });
});
