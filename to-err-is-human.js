/**
 * Created by tuo on 16/8/16.
 */

let test = require('tape');

let feedCat = require(process.argv[2]);

test('cat feeding', function (t) {
    t.plan(2);
    t.equal(feedCat('food'),'yum');
    t.throws(feedCat.bind(null,'chocolate'));
//
});
