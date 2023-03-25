function createTask(name) {
  // Create a new task
  var task = {
    name: name,
    message: "Happy Ramadan!"
  };

  // Save the task
  $.ajax({
    url: "createTask.php",
    data: task,
    type: "post",
    success: function(response) {
      console.log(response);
    }
  });
}
