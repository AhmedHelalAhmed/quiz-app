var QUIZ = (function (ns) {
    //Set up sub module
    var sub = ns.quiz = ns.quiz || {};

    //Dependencies
    var strU = ns.string;
    var domU = ns.dom;
    var $ = ns.dom.$;

    var checkAnswer = function (value) {
            var ans,
                correct,
                result;

            if (value !== "") {
                ans = strU.breakOut(domU.data($('#q01'), 'answer'), ",");
                console.log(ans)
                correct = ans.every(function (val) {
                    return (value.indexOf(val) > -1);
                });
                result = (correct) ? 'correct' : 'incorrect';
                displayFeedback(result);
            } else {
                displayFeedback('no-answer');
            }
        },
        displayFeedback = function (result) {
            var feedback = $('.feedback.' + result);
            domU.addClass(feedback, 'visible');
        },
        hideFeedback = function () {
            var feedback = $('.feedback.visible');
            domU.removeClass(feedback, 'visible');
        };

    // Public Method
    sub.checkAnswer = checkAnswer;
    sub.displayFeedback = displayFeedback;
    sub.hideFeedback = hideFeedback;
    return ns;
})(UTIL || {});