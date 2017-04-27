mongoimport --host 10.36.0.22:27017 --db db_test --collection categories --drop --jsonArray --file categories.json
mongoimport --host 10.36.0.22:27017 --db db_test --collection commands --drop --jsonArray --file commands.json
mongoimport --host 10.36.0.22:27017 --db db_test --collection customers --drop --jsonArray --file customers.json
mongoimport --host 10.36.0.22:27017 --db db_test --collection products --drop --jsonArray --file products.json
mongoimport --host 10.36.0.22:27017 --db db_test --collection reviews --drop --jsonArray --file reviews.json
mongoimport --host 10.36.0.22:27017 --db db_test --collection settings --drop --jsonArray --file settings.json
