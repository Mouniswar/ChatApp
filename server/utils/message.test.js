const expect = require('expect');
const mocha = require('mocha');
var {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = "Some Message";
    var message = generateMessage(from, text);
    // console.log(message.createdAt)
    expect(message.createdAt).toEqual('Number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Dev';
    var latitude =15;
    var longitude = 19;
    var url = 'https://www.google.com/maps?q=15,19';
    var message = generateLocationMessage(from, latitude,longitude);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
