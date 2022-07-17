const {consultPrefix,print,consultPrefixArray,printTotal} = require('./consultPrefix')
let arrayArgument=["MArtin","martin","AnGel","Jose","angel","Maria","MaRia","ANtonio","aNtonio","Pedro","Mongo","mongo"];
describe('consult Prefix', () => {
    test('Mar is prefix of Martin', () => { 
        const expected=true;
        const result = consultPrefix("Mar","Martin");
        expect(expected).toBe(result);
     });
     test('Mar is prefix of Martin case Sensitive', () => { 
        const expected=true;
        const result = consultPrefix("marti","Martin");
        expect(expected).toBe(result);
     });
     test('Mar is prefix of angel case Sensitive', () => { 
        const expected=false;
        const result = consultPrefix("Mar","angel");
        expect(expected).toBe(result);
     });
     test('Martin is not prefix Martin', () => { 
        const expected=false;
        const result = consultPrefix("Martin","Martin");
        expect(expected).toBe(result);
     });
     test('[mar,mart,mong] prefix, expected for Martin most be [true,true,false]', () => { 
        const expected=[true,true,false];
        const result = consultPrefixArray(["mar","mart","mong"],"Martin");
        expect(expected).toStrictEqual(result);
     });
     test('Mar is prefix of arrayArgument most be 4', () => { 
        const expected=4;
        const result = print(arrayArgument,"Mar");
        expect(expected).toBe(result);
     });
     test('[mar,mart,mong,pe] prefix, expected for arrayArgument most be [4,2,2,1]', () => { 
        const expected=[4,2,2,1];
        const result = printTotal(arrayArgument,["mar","mart","mong","pe"]);
        expect(expected).toStrictEqual(result);
     });
});


