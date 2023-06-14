const { isInvalidEmail, isEmptyPayload } = require('../validator')

test('valid email', function(){
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        Interests: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test('valid email', function(){
    const testPayload = {
        name: "test name",
        email: "test.email",
        Interests: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test("empty payload", function() {
    const testPayload = {}
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test("non-empty payload", function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        Interests: "testing"
    }
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(false)
})