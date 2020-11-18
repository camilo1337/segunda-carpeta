function cuadrados(array) {

    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i];
    }
    return array;
}

describe("aca otra prueba", function() {
    it("deberia imprimir al cuadrado los valores", function() {
        expect(cuadrados([1, 5, 4, 8, 10])).toEqual([1, 25, 16, 64, 100]);
    });
});