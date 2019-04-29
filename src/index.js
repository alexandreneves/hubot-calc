// Author:
// aneves
//
// Commands:
// hubot calc <text>

module.exports = function(robot) {
  robot.respond(/calc .+/g, function(res) {
    reg = /[-+]?\s*\d+\.?\d*\s*(?:[-+*%/]\s*?\d+\.?\d*\s*)+/;
    str = res.message.text.split("calc ")[1];
    if (reg.test(str)) res.reply(str + " = " + eval(str));
  });
};
