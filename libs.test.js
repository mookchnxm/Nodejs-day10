const libs = require('./libs');

describe('absolute', () => {
    it('absolute - should return a positive number if input is positive', () => {
    });

    it('absolute - should return a positive number if input is negative', () => {
        const input = -1;
        const result = libs.absolute(input);
        expect(result).toBe(1);
    });

    it('absolute - should return 0 if input is 0', () => {
        const input = 0;
        const result = libs.absolute(input);
        expect(result).toBe(input);
    });
});

describe('greet', () => {
    it('should return the greeting message', () => {
        const name = 'Ball';
        const result = libs.greet(name);
        expect(result).toMatch(/Ball/);
        expect(result).toContain('Ball');
    });
});

describe('getGenders', () => {
    it('should return all genders', () => {
        const result = libs.getGenders();
        expect(result).not.toBeNull();
        expect(result).toContain('Male');
        expect(result).toEqual(expect.arrayContaining(['Male','Female','N/A']));
    });
});

describe('getPet ', () => {
    it('should return all genders', () => {
        const result = libs.getGenders();
        expect(result).not.toBeNull();
        expect(result).toContain('Male');
        expect(result).toEqual(expect.arrayContaining(['Male','Female','N/A']));
    });
});