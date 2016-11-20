describe('foo', function () {

	it('bar', () => {

		fn1(function () {
			fn2(function () {
				fn3(function () {
					fn4(function () {

					})
				})
			})
		})

		Promise.resolve()
			.then(function () {

			})

	});

});
