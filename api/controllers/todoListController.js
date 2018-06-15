const mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

const { ObjectId } = require('mongoose').mongo

exports.list_all_tasks = function (req, res, next) {
  Task.find({}, function (err, task) {
    if (err) {
      res.send(err);
    }
    else {
      res.json(task);
    }
  });
};

exports.create_a_task = function (req, res, next) {
  var new_task = new Task(req.body);
  new_task.save(function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.read_a_task = function (req, res, next) {
  Task.findById(req.params.taskId, function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.update_a_task = function (req, res, next) {
  const update = {
    $set: {
      name: req.body.name
    }
  }

  Task.findByIdAndUpdate(req.params.taskId, update, { new: true }, function (err, task) {
    // Task.findOneAndUpdate({ _id: new ObjectId(req.params.taskId) }, update, { new: true }, function (err, task) {
    console.log(err, task)
    if (err) {
      res.send(err);
    } else {
      res.json(task);
    }
  });
};

exports.delete_a_task = function (req, res, next) {
  Task.remove({
    _id: req.params.taskId
  }, function (err, task) {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: 'Task successfully deleted' });
    }
  });
};