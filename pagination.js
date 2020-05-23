--------------option 1--------------
      var pageNo = parseInt(req.query.pageNo)
        var size = parseInt(req.query.size)
        var query = {}
        if (pageNo < 0 || pageNo === 0) {
            response = { "error": true, "message": "invalid page number, should start with 1" };
            return apiHelper.failure(response)
        }
        query.skip = size * (pageNo - 1)
        query.limit = size
        Skill.countDocuments({},  (err, totalCount)=> {
            if (err) {
                response = { "error": true, "message": "Error fetching data" }
            }
            Skill.find({}, {}, query,  (err, data)=> {
                // Mongo command to fetch all data from collection.
                if (err) {
                    response = { "error": true, "message": "Error fetching data" };
                } else {
                    var totalPages = Math.ceil(totalCount / size)
                    response = { "error": false, "message": data, "pages": totalPages };
                }
                res.json(response);
            });
        })
---------------option 2------------------
const paginate = function(pageNo, callback){
    var limit = 10;
    var skip = pageNo * (limit - 1);
    var totalCount;
    //count documents
    this.count({}, function(err, count)){
        if(err){
            totalCount = 0;
        }
        else{
            totalCount = count;
        }
    }
    if(totalCount == 0){
        return callback('No Document in Database..', null);
    }
    //get paginated documents
    this.find().skip(skip).limit(limit).exec(function(err, docs){
        if(err){
            return callback('Error Occured', null);
        }
        else if(!docs){
            return callback('Docs Not Found', null);
        }
        else{
            var result = {
                "totalRecords" : totalCount,
                "page": pageNo,
                "nextPage": pageNo + 1,
                "result": docs
            };
            return callback(null, result);
        }
    });
});

Client.paginate(pageNo, function(err, response){
    if (err) {
      return res.status(500).json({
        message : "Error en aplicacion",
        error : err
      });
    }
    return res.status(200).json(response);
  });

---------------------3rd option---------------------------------
router.get("/booksquery", (req, res) => {
  var page = parseInt(req.query.page) || 0; //for next page pass 1 here
  var limit = parseInt(req.query.limit) || 3;
  var query = {};
  Book.find(query)
    .sort({ update_at: -1 })
    .skip(page * limit) //Notice here
    .limit(limit)
    .exec((err, doc) => {
      if (err) {
        return res.json(err);
      }
      Book.countDocuments(query).exec((count_error, count) => {
        if (err) {
          return res.json(count_error);
        }
        return res.json({
          total: count,
          page: page,
          pageSize: doc.length,
          books: doc
        });
      });
    });
});
