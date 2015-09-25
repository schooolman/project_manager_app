$( document ).ready(function() {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var projectName =  0;
    var frontEndPoints =  0;
    var clientSidePoints =  0;
    var serverSidePoints =  0;
    var frontEndTotal = 0;
    var clientSideTotal = 0;
    var serverSideTotal = 0;

    var sprintArray = [];
    var sprintValue = 0;


    $("#createProject").on("click", function () {
        projectName =  getRandomInt(100, 200);
        frontEndPoints =  getRandomInt(10, 60);
        clientSidePoints =  getRandomInt(10, 60);
        serverSidePoints =  getRandomInt(10, 60);

        $("#projectName").text("Project " + projectName);
        $("#frontEndPoints").text("Front-End Points: " + frontEndPoints);
        $("#clientSidePoints").text("Client-Side Points: " + clientSidePoints);
        $("#serverSidePoints").text("Server-Side Points: " + serverSidePoints);

        $("#assignEmployee").show();

    });

    $("#makeEmployees").on("click", function() {
        $.ajax ({
            url: "http://localhost:3000/makeEmployees"
        }).done(function(data) {
            // display initial employee set
            //console.log("getting here");
            console.log(data);



            var i = 0;
            while (i < data.length) {

                if (data[i][1] == 1) frontEndTotal += data[i][2];
                if (data[i][1] == 2) clientSideTotal += data[i][2];
                if (data[i][1] == 3) serverSideTotal += data[i][2];

                $("#employeeList").append(data[i] + "<br />");
                i++;
            }

            $("#frontEndTotal").text("Front End: " + frontEndTotal);
            $("#clientSideTotal").text("Client Side: " + clientSideTotal);
            $("#serverSideTotal").text("Server Side: " + serverSideTotal);

            // calculate sprint
            sprintArray.push(Math.ceil(frontEndPoints / frontEndTotal));
            sprintArray.push(Math.ceil(clientSidePoints / clientSideTotal));
            sprintArray.push(Math.ceil(serverSidePoints / serverSideTotal));
            //sprintArray.sort(function(a, b){return a-b});
            sprintArray.sort(function(a, b){return a-b});
            //console.log(sprintArray);

            sprintValue = sprintArray[2];
            //console.log(sprintValue);

            $("#sprintValue").text("Sprints = " + sprintValue);

            $("#addEmployee").append("<button id='addButton'>add Employee</button>");

        });
    });

    $(document).on("click", "#addButton", function() {
        console.log("click");
        $.ajax ({
            url: "http://localhost:3000/addEmployees"
        }).done(function(data2) {
            console.log("add employee = " + data2);
            $("#employeeList").append(data2 + "<br />");

            if (data2[1] == 1) frontEndTotal += data2[2];
            if (data2[1] == 2) clientSideTotal += data2[2];
            if (data2[1] == 3) serverSideTotal += data2[2];

            $("#frontEndTotal").text("Front End: " + frontEndTotal);
            $("#clientSideTotal").text("Client Side: " + clientSideTotal);
            $("#serverSideTotal").text("Server Side: " + serverSideTotal);

            // calculate sprint
            sprintArray.push(Math.ceil(frontEndPoints / frontEndTotal));
            sprintArray.push(Math.ceil(clientSidePoints / clientSideTotal));
            sprintArray.push(Math.ceil(serverSidePoints / serverSideTotal));
            //sprintArray.sort(function(a, b){return a-b});
            sprintArray.sort(function(a, b){return a-b});
            //console.log(sprintArray);

            sprintValue = sprintArray[2];

            if (sprintValue == 1) {
                $("#sprintValue").css("color", "#F00");
                $("#sprintValue").css("font-weight", "bold");
                $("#addEmployee").prop("disabled",true);
            }
            $("#sprintValue").text("Sprints = " + sprintValue);

        });

    });

});


