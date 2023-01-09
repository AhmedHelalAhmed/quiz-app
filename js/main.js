var MAINAPP = (function (nsp, $, domU, quiz) {

    /*
    Quiz Functionality
    */
    var initQuiz = function () {
        domU.assignEvent($('.fill-in-submit.btn-primary'), 'click', function () {
            UTIL.quiz.hideFeedback();
            UTIL.quiz.checkAnswer($('#q01_ans')[0].value);
        });
    }


    /*
    Setup
    */
    UTIL.domReady(function () {
        initQuiz();
    });

    //Public Methods and Properties
    nsp.displayFeedback = UTIL.quiz.displayFeedback;

    return nsp;

})(MAINAPP || {}, UTIL.dom.$, UTIL.dom, QUIZ);