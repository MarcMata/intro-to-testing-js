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
    it('should return the string "Hello, World! when passed "World"', function(){
       expect(sayHello("World")).toBe("Hello, World!");
    });
    it(`should return the string "Hello, World! when passed the boolean true as a variable`, function(){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it(`should return the string "Hello, World! when passed the boolean false as a variable`, function(){
        expect(sayHello(false)).toBe("Hello, World!")
    });
    it(`should return false when the input is null`, function (){
        expect(sayHello(null)).toBe(false);
    });
    it(`should return false when passed 42`, function (){
        expect(sayHello(42)).toBe(false);
    });

});