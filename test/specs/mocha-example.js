describe('suite1', () => {

    before(() => {
        console.log('runs once before the test');
    });

    after(() => {
        console.log('runs once after the test');
    });

    beforeEach(() => {
        console.log('Runs before each tests in the block');
    });

    afterEach(() => {
        console.log('Runs after each tests in the block');
    });

    it('test1', () => {
        console.log('Test1 execution code')
    });
    it('test2 desc', () => {
        console.log('Test2 execution code');
    });
});