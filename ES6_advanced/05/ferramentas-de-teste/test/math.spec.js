const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function() {
    // hooks:
    //   before
    //   beforeEach
    //   after
    //   afterEach

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(5000);

        math.sum(5, 5, (value) => {

            // Exemplo Mocha:
            assert.equal(value, 10);


            // Exemplo Mocha com Chai
            expect(value).to.equal(10);

            const obj = {
                name: 'teste_name'
            };

            const obj2 = {
                name: 'teste_name'
            };

            expect(obj).to.have.property('name').equal('teste_name');
            expect(obj).to.deep.equal(obj2);
            

            // Fim
            done();
        });
    });

    it.only("Calls req with sum and index values", function() {

        // Exemplo Sinon:
        const req = {};
        const res = {
            load: sinon.spy()
        };
        const math = new Math();

        math.printSum(req, res, 5, 5);

        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
    })
});