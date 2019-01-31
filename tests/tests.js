const test= QUnit.test;

function catOrDog(input) {
    if(input < .5){
        return 'cat';
    } else {
        return 'dog';
    }
}


test('if number is below .5 produce the string cat', function(assert){
    const result = catOrDog(.2);
    assert.equal(result, 'cat');
});

test('if number is above .5 produce the string dog', function(assert){
    const result = catOrDog(.7);
    assert.equal(result, 'dog');
});