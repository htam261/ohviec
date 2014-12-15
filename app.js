var http 			= require('http')
,	express 		= require('express')
,	app 			= express()
,	server 			= http.createServer(app)
,	routes 			= require('./config/router.js')
,	mongoose 		= require('mongoose')
,	bodyParser 		= require('body-parser')
,	morgan 			= require('morgan')
,	user 			= require('./controllers/user.js')
,	methodOverride 	= require('method-override')
,	comment 		= require('./controllers/comment.js')
,	job 			= require('./controllers/job.js')
,   jobsaved 		= require('./controllers/jobsaved.js')	
,   jobsearch 		= require('./controllers/jobsearch.js')
,	passport 		= require('./controllers/passport.js')
,	profession 		= require('./controllers/profession.js')
,	province 		= require('./controllers/province.js')
,   profile         = require('./controllers/profile.js')
,   cv              = require('./controllers/cv.js')
,   cvsaved         = require('./controllers/cvsaved.js')
,   commentcv         = require('./controllers/commentcv.js')
,   commentjob         = require('./controllers/commentjob.js')
;
mongoose.connect('mongodb://localhost/TimViec', function (err) {
	if (err) {
		console.log('error connecting to MongoDB Database.' + err);
	} else {
		console.log('Connected to Database');
	}
});


///////////////////////////
// configuration region //
/////////////////////////

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.set('views', './views');
//app.use(stylus.middleware('./public'));
app.use(express.static('./public'));

app.get('/', routes.main);

  ///////////////////////////////////
 //    Starting building server   //
///////////////////////////////////


     /////////////////
 	// user region //
   /////////////////

 	app.get('/users', user.findAllUser);
 	app.get('/users/:id', user.find);
 	app.post('/users', user.addUser);
 	app.put('/users/:id',user.updateUser);
 	app.delete('/users/:id', user.deleteUser);

    /////////////////////
 	// comment region //
 	///////////////////

 	app.get('/comments', comment.findAllComment);
 	app.get('/comments/:id', comment.findById);
 	app.post('/comments', comment.addComment);
 	app.put('/comments/:id',comment.updateComment);
 	app.delete('/comments/:id', comment.deleteComment);
 	app.get('/addComment', comment.add);
    app.get('/commentJobs/:id', comment.findIDJob);

    //////////////////
 	// job region  //
 	////////////////

 	app.get('/jobs', job.findAllJob);
 	app.get('/jobs/:id', job.findById);
    app.get('/jobsMail/:id', job.findByMail);
 	app.post('/jobs', job.addJob);
 	app.put('/jobs/:id',job.updateJob);
 	app.delete('/jobs/:id', job.deleteJob);
 	app.get('/addJob', job.add);

    ///////////////////////
 	// jobsaved region  //
 	/////////////////////

 	app.get('/jobsaveds', jobsaved.findAllJobsaved);
 	app.get('/jobsavedsMail/:id', jobsaved.findByMail);
    app.get('/jobsavedsIDJob/:id', jobsaved.findByIdJob);
    app.get('/jobsaveds/:id', jobsaved.findById);
 	app.post('/jobsaveds', jobsaved.addJobsaved);
 	app.put('/jobsaveds/:id',jobsaved.updateJobsaved);
 	app.delete('/jobsaveds/:id', jobsaved.deleteJobsaved);
 	app.get('/addJobsaved', jobsaved.add);

     ///////////////////////
 	// jobsearch region  //
 	//////////////////////

 	app.get('/jobsearchs', jobsearch.findAllJobsearch);
 	app.get('/jobsearchs/:id', jobsearch.findById);
 	app.post('/jobsearchs', jobsearch.addJobsearch);
 	app.put('/jobsearchs/:id',jobsearch.updateJobsearch);
 	app.delete('/jobsearchs/:id', jobsearch.deleteJobsearch);
 	app.get('/addJobsearch', jobsearch.add);

     ///////////////////////
 	// passport region   //
 	//////////////////////

 	app.get('/passports', passport.findAllPassport);
 	app.get('/passports/:id', passport.findById);
 	app.post('/passports', passport.addPassport);
 	app.put('/passports/:id',passport.updatePassport);
 	app.delete('/passports/:id', passport.deletePassport);
 	app.get('/addPassport', passport.add);

     /////////////////////////
 	// profession region   //
 	////////////////////////

 	app.get('/professions', profession.findAllProfession);
 	app.get('/professions/:id', profession.findById);
 	app.post('/professions', profession.addProfession);
 	app.put('/professions/:id',profession.updateProfession);
 	app.delete('/professions/:id', profession.deleteProfession);
 	app.get('/addProfession', profession.add);

     ///////////////////////
 	// province region   //
 	//////////////////////

 	app.get('/provinces', province.findAllProvince);
 	app.get('/provinces/:id', province.findById);
 	app.post('/provinces', province.addProvince);
 	app.put('/provinces/:id',province.updateProvince);
 	app.delete('/provinces/:id', province.deleteProvince);
 	app.get('/addProvince', province.add);

     ///////////////////////
    // profile region    //
    //////////////////////

    app.get('/profiles', profile.findAllProfile);
    app.get('/profiles/:id', profile.findById);
    app.post('/profiles', profile.addProfile);
    app.put('/profiles/:id',profile.updateProfile);
    app.delete('/profiles/:id', profile.deleteProfile);
    app.get('/profilesMail/:id', profile.findByMail);
    app.get('/addProfile', profile.add);

     ///////////////////////
    // cv region         //
    //////////////////////

    app.get('/cvs', cv.findAllCV);
    app.get('/cvs/:id', cv.findById);
    app.post('/cvs', cv.addCV);
    app.put('/cvs/:id',cv.updateCV);
    app.delete('/cvs/:id', cv.deleteCV);
    app.get('/cvsMail/:id', cv.findByMail);
    app.get('/addCV', cv.add);

     ///////////////////////
    // cvsaved region    //
    //////////////////////

    app.get('/cvsaveds', cvsaved.findAllCVsaved);
    app.get('/cvsaveds/:id', cvsaved.findById);
    app.post('/cvsaveds', cvsaved.addCVsaved);
    app.put('/cvsaveds/:id',cvsaved.updateCVsaved);
    app.delete('/cvsaveds/:id', cvsaved.deleteCVsaved);
    app.get('/cvsavedsMail/:id', cvsaved.findByMail);
    app.get('/cvsavedsCV/:id', cvsaved.findByIdCV);
    app.get('/addCVsaved', cvsaved.add);

     /////////////////////////
    // commentcv region    //
    ////////////////////////

    app.get('/commentcvs', commentcv.findAllCommentCV);
    app.get('/commentcvs/:id', commentcv.findById);
    app.post('/commentcvs', commentcv.addCommentCV);
    app.put('/commentcvs/:id',commentcv.updateCommentCV);
    app.delete('/commentcvs/:id', commentcv.deleteCommentCV);
    app.get('/commentcvsComment/:id', commentcv.findByIDComment);
    app.get('/addCommentCV', commentcv.add);

     //////////////////////////
    // commentjob region    //
    /////////////////////////
    app.get('/commentjobs', commentjob.findAllCommentJob);
    app.get('/commentjobs/:id', commentjob.findById);
    app.post('/commentjobs', commentjob.addCommentJob);
    //app.put('/commentjobs/:id',commentjob.updateCommentJob);console.log('abc'); // not need
    // app.delete('/commentjobs/:id', commentjob.deleteCommentCV); // not need
    // app.get('/commentcvsComment/:id', commentjob.findByIDComment); // not need
    app.get('/addCommentJob', commentjob.add);


server.listen(3000, function() {
 console.log('Ohviec starting ! oh yeah yeah =))');
});

