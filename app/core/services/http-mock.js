/**
 *
 * @author: Gabriel Mayta
 * @email : grandemayta@gmail.com
 *
 */

"use strict";


let HttpMock = function (state, feature, cb) {

    require.ensure([], function (require) {
        cb({
            type: 'success',
            data: require(`features/${feature.name}/mocks/${state}.json`)
        });
    });

};

export default HttpMock;