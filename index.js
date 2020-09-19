$(document).ready(function() {
    let index = -1;
    let input1Handler = $("#input1");
    let input2Handler = $("#input2");
    let sumHandler = $("#sum");
    let carryHandler = $("#carry");
    let prevHandler = $("#prev");
    let nextHandler = $("#next");
    let startHandler = $("#start");
    let endHandler = $("#end");
    let box = $(".box");

    let data = [
        { inputA: 0, inputB: 1, sum: 0, carry: 1, timeStart: 0, timeEnd: 100 },
        { inputA: 1, inputB: 0, sum: 0, carry: 1, timeStart: 100, timeEnd: 200 },
        { inputA: 1, inputB: 1, sum: 1, carry: 0, timeStart: 200, timeEnd: 300 },
        { inputA: 1, inputB: 0, sum: 1, carry: 0, timeStart: 300, timeEnd: 400 },
    ];

    prevHandler.attr("disabled", true);

    nextHandler.click(function() {
        if (index < data.length - 1) {
            index = index + 1;
            visualHandler(index);
            prevHandler.attr("disabled", false);
            if (index === data.length - 1) {
                nextHandler.attr("disabled", true);
            }
        }
    });

    prevHandler.click(function() {
        if (index > 0) {
            index = index - 1;
            visualHandler(index);
            nextHandler.attr("disabled", false);
            if (index <= 0) {
                prevHandler.attr("disabled", true);
            }
        }
    });

    function visualHandler(index) {
        box.text("");
        // For Input 1
        if (data[index].inputA === 0) {
            input1Handler.css("background", "red");
        } else {
            input1Handler.css("background", "green");
        }

        // For Input 2
        if (data[index].inputB === 0) {
            input2Handler.css("background", "red");
        } else {
            input2Handler.css("background", "green");
        }

        // For Sum
        if (data[index].sum === 0) {
            sumHandler.css("background", "red");
        } else {
            sumHandler.css("background", "green");
        }

        // For Carry
        if (data[index].carry === 0) {
            carryHandler.css("background", "red");
        } else {
            carryHandler.css("background", "green");
        }

        startHandler.text(data[index].timeStart + "ms ");
        endHandler.text(data[index].timeEnd + "ms ");

        box.append(`<p>InputA : ${data[index].inputA}</p>`);
        box.append(`<p>InputB : ${data[index].inputB}</p>`);
        box.append(`<p>Sum : ${data[index].sum}</p>`);
        box.append(`<p>Carry : ${data[index].carry}</p>`);
    }
});