describe("A suite", function() {
    it("contains spec with an expectation", function() {
        expect(true).toBe(true);
    });
});

describe("A ThreeDee scene may be instantiated", function() {
    var _three = new ThreeDeeScene();
    it("A ThreeDScene should be able to be instantiated.", function() {
        expect(_three).not.toBe(null);
    });
});


describe("Api", function() {
    var _three = new ThreeDeeScene();
    var _targ = document.createElement('div');
    _three.setTarget(_targ)
    it("getTarget should return the element set by setTarget(value).", function() {
        expect(_three.getTarget()).toEqual(_targ);
    });


});