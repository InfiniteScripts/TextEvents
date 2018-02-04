
module.exports = function(app) {
  	var event = require('../controllers/textEventsController');
  	var user =  require('../controllers/userController');
  	
  	app.route('/events')
    	.get(event.list_all_events_by_user)
    	.post(event.create_a_event);

	app.route('/events/:taskId')
    	.get(event.read_a_event)
    	.put(event.update_a_event)
    	.delete(event.delete_a_event);

  	app.route('/register')
  		.post(user.register_user);

  	app.route('/login')
  		.post(user.login_user);	
};
