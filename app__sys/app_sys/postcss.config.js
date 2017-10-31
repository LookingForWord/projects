/**
 * Created by yangshao on 2017/2/27 0027.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({//������
            broswers:['> 5%','ie 6','ie 7','ie 8','ie 9','ie 10','ie 11','Firefox <= 20','Opera <=20']
        })
    ]
}