console.log(foo(2,2));

function foo(b,a){
    
    answer=a+b
    return answer
}
var nums=[0,1,2];
var doubleNums=nums.map(function(element){return element * 2});
console.log(doubleNums);

var hash = getHashFunction( 'sha1' );
var hashValue = hash( 'Secret Value' );

function getHashFunction( algorithm ){

    if ( algorithm === 'sha1' ) 
    return function( value ){ return "hello" };
    else if ( algorithm === 'md5' ) 
    return function( value ){ return "hello" };

}
console.log(getHashFunction);
