// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe(`sayHello`, function() {
    it(`should be a defined function`, function(){
        expect(typeof sayHello).toBe(`function`);
    });
    it(`should return a string when called`, function(){
        expect(typeof sayHello(name)).toBe(`string`);
    });
    it(`should return the string "Hello, (name)! when declaring a name`, function(){
        expect(sayHello(name)).toBe(`Hello, ${name}!`);
    });
    it(`should never return 'undefined' when called`, function() {
        expect(sayHello(name)).not.toBe(undefined);
    });
});