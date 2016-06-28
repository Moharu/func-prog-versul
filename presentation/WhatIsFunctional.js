import expect from 'expect.js'

it('Como assim funcional', () => { // porque funciona, ué

    // Isso deve parecer óbvio:
    expect(
        1+1
    ).to.eql(
        1+1
    )

    // portanto, isso também:
    let umMaisUm = () => {
        return 1 + 1
    }
    expect(
        umMaisUm()
    ).to.equal(
        umMaisUm()
    )


})
